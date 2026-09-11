$PROJECT_ROOT = "C:\Users\admin\Projects\chemzim"

$CIE_IGCSE_UNITS = @(
    @{ unit = 1; lessons = 4 },
    @{ unit = 2; lessons = 5 },
    @{ unit = 3; lessons = 5 },
    @{ unit = 4; lessons = 4 },
    @{ unit = 5; lessons = 4 },
    @{ unit = 6; lessons = 5 },
    @{ unit = 7; lessons = 5 },
    @{ unit = 8; lessons = 5 },
    @{ unit = 9; lessons = 5 },
    @{ unit = 10; lessons = 4 },
    @{ unit = 11; lessons = 6 },
    @{ unit = 12; lessons = 4 }
)

# -------------------------------------------------------------
# 1. Generate Curriculum Registry
# -------------------------------------------------------------
$currImports = [System.Text.StringBuilder]::new()
$currRegistryObj = [System.Text.StringBuilder]::new()

$null = $currImports.AppendLine("export interface LessonRegistryItem {")
$null = $currImports.AppendLine("    title: string;")
$null = $currImports.AppendLine("    number: number;")
$null = $currImports.AppendLine("    theory: string;")
$null = $currImports.AppendLine("    quiz: any[];")
$null = $currImports.AppendLine("}")
$null = $currImports.AppendLine()

foreach ($u in $CIE_IGCSE_UNITS) {
    $unitNum = $u.unit
    $lessonsCount = $u.lessons
    
    for ($l = 1; $l -le $lessonsCount; $l++) {
        $null = $currImports.AppendLine("import * as ci_u${unitNum}_l${l}_theory from './cie-igcse/unit-${unitNum}/lesson-${l}/index';")
        $null = $currImports.AppendLine("import * as ci_u${unitNum}_l${l}_quiz from './cie-igcse/unit-${unitNum}/lesson-${l}/quiz';")
    }
}

$null = $currRegistryObj.AppendLine("export const curriculumRegistry: Record<string, Record<number, LessonRegistryItem>> = {")

foreach ($u in $CIE_IGCSE_UNITS) {
    $unitNum = $u.unit
    $lessonsCount = $u.lessons
    
    $null = $currRegistryObj.AppendLine("    'cie-igcse-unit-${unitNum}': {")
    for ($l = 1; $l -le $lessonsCount; $l++) {
        $null = $currRegistryObj.AppendLine("        ${l}: {")
        $null = $currRegistryObj.AppendLine("            title: ci_u${unitNum}_l${l}_theory.lessonTitle,")
        $null = $currRegistryObj.AppendLine("            number: ci_u${unitNum}_l${l}_theory.lessonNumber,")
        $null = $currRegistryObj.AppendLine("            theory: ci_u${unitNum}_l${l}_theory.theoryMarkdown,")
        $null = $currRegistryObj.AppendLine("            quiz: ci_u${unitNum}_l${l}_quiz.lessonQuiz,")
        $null = $currRegistryObj.AppendLine("        },")
    }
    $null = $currRegistryObj.AppendLine("    },")
}
$null = $currRegistryObj.AppendLine("};")

$currFunc = @"
export function getLessonFromRegistry(track: string, unitNumber: number, lessonNumber: number): LessonRegistryItem | null {
    const key = `\${track}-unit-\${unitNumber}`;
    return curriculumRegistry[key]?.[lessonNumber] || null;
}
"@

$currFullContent = $currImports.ToString() + "`n" + $currRegistryObj.ToString() + "`n" + $currFunc
Set-Content -Path (Join-Path $PROJECT_ROOT "data\curriculum\registry.ts") -Value $currFullContent -Encoding utf8

# -------------------------------------------------------------
# 2. Generate Exams Registry
# -------------------------------------------------------------
$examImports = [System.Text.StringBuilder]::new()
$examRegistryObj = [System.Text.StringBuilder]::new()

$null = $examImports.AppendLine("import { Question } from './types';")

foreach ($u in $CIE_IGCSE_UNITS) {
    $unitNum = $u.unit
    $lessonsCount = $u.lessons
    
    for ($l = 1; $l -le $lessonsCount; $l++) {
        $null = $examImports.AppendLine("import { level1Questions as ci_u${unitNum}_l${l}_lv1 } from './cie-igcse/unit-${unitNum}/lesson-${l}/level-1';")
        $null = $examImports.AppendLine("import { level2Questions as ci_u${unitNum}_l${l}_lv2 } from './cie-igcse/unit-${unitNum}/lesson-${l}/level-2';")
        $null = $examImports.AppendLine("import { level3Questions as ci_u${unitNum}_l${l}_lv3 } from './cie-igcse/unit-${unitNum}/lesson-${l}/level-3';")
    }
}

$null = $examRegistryObj.AppendLine("export const examsRegistry: Record<string, Record<number, Record<number, Question[]>>> = {")
$null = $examRegistryObj.AppendLine("    'cie-igcse': {")

foreach ($u in $CIE_IGCSE_UNITS) {
    $unitNum = $u.unit
    $lessonsCount = $u.lessons
    
    $null = $examRegistryObj.AppendLine("        ${unitNum}: {")
    for ($l = 1; $l -le $lessonsCount; $l++) {
        $null = $examRegistryObj.AppendLine("            ${l}: [")
        $null = $examRegistryObj.AppendLine("                ...ci_u${unitNum}_l${l}_lv1,")
        $null = $examRegistryObj.AppendLine("                ...ci_u${unitNum}_l${l}_lv2,")
        $null = $examRegistryObj.AppendLine("                ...ci_u${unitNum}_l${l}_lv3")
        $null = $examRegistryObj.AppendLine("            ],")
    }
    $null = $examRegistryObj.AppendLine("        },")
}
$null = $examRegistryObj.AppendLine("    }")
$null = $examRegistryObj.AppendLine("};")

$examFunc = @"
export function getQuestionsFromRegistry(
    track: string,
    unitNumber: number,
    lessonNumber?: number
): Question[] {
    const trackRegistry = examsRegistry[track];
    if (!trackRegistry) return [];

    const unitRegistry = trackRegistry[unitNumber];
    if (!unitRegistry) return [];

    if (lessonNumber !== undefined) {
        return unitRegistry[lessonNumber] || [];
    }

    // Return all questions for the unit
    return Object.values(unitRegistry).flat();
}
"@

$examFullContent = $examImports.ToString() + "`n" + $examRegistryObj.ToString() + "`n" + $examFunc
Set-Content -Path (Join-Path $PROJECT_ROOT "data\exams\registry.ts") -Value $examFullContent -Encoding utf8

Write-Host "✅ Registries generated successfully!"
