$PROJECT_ROOT = "C:\Users\admin\Projects\chemzim"

$CIE_IGCSE_UNITS = @(
    @{
        unit = 1;
        topicId = "states-of-matter";
        title = "States of Matter";
        lessons = @("Solids, Liquids and Gases", "Diffusion", "Changes of State", "Kinetic Particle Theory")
    },
    @{
        unit = 2;
        topicId = "atoms-elements";
        title = "Atoms, Elements and Compounds";
        lessons = @("Atomic Structure", "Elements and Compounds", "Ions and Ionic Bonds", "Covalent Bonds", "Metallic Bonding")
    },
    @{
        unit = 3;
        topicId = "stoichiometry";
        title = "Stoichiometry";
        lessons = @("Formulae", "Relative Atomic Mass", "The Mole Concept", "Chemical Equations", "Reacting Masses")
    },
    @{
        unit = 4;
        topicId = "electrochemistry";
        title = "Electrochemistry";
        lessons = @("Electrolysis", "Electrolytic Cells", "Electroplating", "Hydrogen-Oxygen Fuel Cells")
    },
    @{
        unit = 5;
        topicId = "chemical-energetics";
        title = "Chemical Energetics";
        lessons = @("Exothermic and Endothermic Reactions", "Energy Diagrams", "Bond Energies", "Fuel and Hydrogen")
    },
    @{
        unit = 6;
        topicId = "chemical-reactions";
        title = "Chemical Reactions";
        lessons = @("Rate of Reaction", "Collision Theory", "Catalysts", "Reversible Reactions and Equilibrium", "Redox Reactions")
    },
    @{
        unit = 7;
        topicId = "acids-bases-salts";
        title = "Acids, Bases and Salts";
        lessons = @("Acids and Bases", "pH Scale and Indicators", "Neutralisation", "Oxides", "Preparation of Salts")
    },
    @{
        unit = 8;
        topicId = "periodic-table";
        title = "The Periodic Table";
        lessons = @("Arrangement of Elements", "Group I - Alkali Metals", "Group VII - Halogens", "Group VIII/0 - Noble Gases", "Transition Elements")
    },
    @{
        unit = 9;
        topicId = "metals";
        title = "Metals";
        lessons = @("Properties of Metals", "Reactivity Series", "Extraction of Metals", "Uses of Metals", "Alloys")
    },
    @{
        unit = 10;
        topicId = "chemistry-environment";
        title = "Chemistry of the Environment";
        lessons = @("Water Treatment", "Fertilisers", "Air Quality and Climate", "Carbon Cycle")
    },
    @{
        unit = 11;
        topicId = "organic-chemistry";
        title = "Organic Chemistry";
        lessons = @("Alkanes", "Alkenes", "Alcohols", "Carboxylic Acids", "Polymers", "Esters")
    },
    @{
        unit = 12;
        topicId = "experimental-techniques";
        title = "Experimental Techniques and Chemical Analysis";
        lessons = @("Measurement", "Purification and Separation", "Identification of Ions and Gases", "Instrumental Analysis")
    }
)

function Get-Theory-Content($unitNum, $lessonNum, $lessonTitle, $topicTitle) {
    return @"
export const lessonTitle = "${lessonTitle}";
export const lessonNumber = ${lessonNum};

export const theoryMarkdown = \`
## ${lessonTitle}

> **Unit ${unitNum}: ${topicTitle}** - Lesson ${lessonNum}
>
> Cambridge IGCSE Chemistry (0620)

---

*Theory content for "${lessonTitle}" will be added here.*

---

### Key Points
- Point 1
- Point 2
- Point 3

### Summary
This lesson covers the fundamentals of ${lessonTitle} as part of the ${topicTitle} unit in IGCSE Chemistry.
\`;
"@
}

function Get-Quiz-Content($unitNum, $lessonNum, $lessonTitle) {
    return @"
export const lessonQuiz = [
  {
    id: "ci_u${unitNum}_l${lessonNum}_q1",
    question: "Sample question about ${lessonTitle} - replace with real content.",
    options: [
      { text: "Option A", isCorrect: false },
      { text: "Option B (correct)", isCorrect: true },
      { text: "Option C", isCorrect: false },
      { text: "Option D", isCorrect: false }
    ],
    explanation: "Explanation for the correct answer."
  }
];
"@
}

function Get-Level-Content($unitNum, $lessonNum, $level, $lessonTitle, $topicId) {
    $levelLabel = if ($level -eq 1) { "Easy" } elseif ($level -eq 2) { "Medium" } else { "Hard" }
    $dateStr = (Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ")
    return @"
import { Question } from '../../../types';

// ${lessonTitle} - Level ${level} (${levelLabel})
export const level${level}Questions: Question[] = [
  {
    id: "ex_ci_u${unitNum}_l${lessonNum}_lv${level}_1",
    question: "Sample ${levelLabel} question about ${lessonTitle} - replace with real content.",
    options: [
      { text: "Option A" },
      { text: "Option B" },
      { text: "Option C" },
      { text: "Option D" }
    ],
    correctAnswer: 1,
    explanation: "Explanation for the correct answer.",
    level: ${level},
    topic: "${topicId}",
    curriculum: "igcse",
    createdAt: "${dateStr}"
  }
];
"@
}

# Real content for Unit 1 Lesson 1
$EXISTING_THEORY_U1_L1 = @"
export const lessonTitle = "Solids, Liquids and Gases";
export const lessonNumber = 1;

export const theoryMarkdown = \`
## Solids, Liquids and Gases

All matter is made of particles. Matter exists in three main physical states: solid, liquid, and gas.

### 1. Solids
* **Arrangement:** Particles are closely packed in a regular, orderly lattice arrangement.
* **Movement:** Particles can only vibrate about fixed positions; they do not move from place to place.
* **Forces:** Very strong electrostatic forces of attraction hold the particles together.
* **Properties:** Fixed shape and volume, cannot be compressed, high density.

### 2. Liquids
* **Arrangement:** Particles are closely packed but arranged randomly.
* **Movement:** Particles can slide past each other, allowing liquids to flow and take the shape of their container.
* **Forces:** Moderate forces of attraction, weaker than in solids.
* **Properties:** Fixed volume but no fixed shape, cannot be compressed easily, medium-high density.

### 3. Gases
* **Arrangement:** Particles are spaced very far apart in a completely random arrangement.
* **Movement:** Particles move rapidly and randomly in all directions, colliding with each other and the container walls.
* **Forces:** Very weak or negligible forces of attraction between particles.
* **Properties:** No fixed shape or volume, easily compressed, low density.
\`;
"@

$EXISTING_QUIZ_U1_L1 = @"
export const lessonQuiz = [
  {
    id: "ci_u1_l1_q1",
    question: "Which of the following describes the arrangement of particles in a solid?",
    options: [
      { text: "Randomly arranged with large spaces in between", isCorrect: false },
      { text: "Closely packed in a regular lattice arrangement", isCorrect: true },
      { text: "Closely packed but in a random arrangement", isCorrect: false },
      { text: "Far apart and moving rapidly in all directions", isCorrect: false }
    ],
    explanation: "Particles in a solid are closely packed in a fixed, regular lattice structure."
  },
  {
    id: "ci_u1_l1_q2",
    question: "Why can liquids flow and take the shape of their container?",
    options: [
      { text: "Particles are in a fixed position", isCorrect: false },
      { text: "Particles have very weak forces and are far apart", isCorrect: false },
      { text: "Particles are packed closely but can slide past each other", isCorrect: true },
      { text: "Particles only vibrate about fixed positions", isCorrect: false }
    ],
    explanation: "Because liquid particles can move and slide past one another, liquids can flow and change shape."
  }
];
"@

$EXISTING_LV1_U1_L1 = @"
import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ci_u1_l1_lv1_1",
    question: "What state of matter has no fixed shape, no fixed volume, and is easily compressed?",
    options: [
      { text: "Solid" },
      { text: "Liquid" },
      { text: "Gas" }
    ],
    correctAnswer: 2,
    explanation: "Gases have widely spaced particles with virtually no attractive forces, meaning they have no fixed shape or volume and are easily compressed.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    createdAt: "2026-06-16T12:00:00Z"
  },
  {
    id: "ex_ci_u1_l1_lv1_2",
    question: "Which of the following processes represents a physical change from solid directly to gas?",
    options: [
      { text: "Melting" },
      { text: "Sublimation" },
      { text: "Boiling" },
      { text: "Condensation" }
    ],
    correctAnswer: 1,
    explanation: "Sublimation is the transition of a substance directly from the solid to the gas state without passing through the liquid state.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    createdAt: "2026-06-16T12:00:00Z"
  }
];
"@

$EXISTING_LV2_U1_L1 = @"
import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ci_u1_l1_lv2_1",
    question: "A gas jar of brown nitrogen dioxide gas is placed upside down on top of a gas jar of air. Over time, the brown color spreads evenly throughout both jars. What explains this observation?",
    options: [
      { text: "The nitrogen dioxide particles fall due to gravity" },
      { text: "Air particles are lighter and rise up quickly" },
      { text: "Random movement of particles causes diffusion to occur in both directions" },
      { text: "A chemical reaction takes place between air and nitrogen dioxide" }
    ],
    correctAnswer: 2,
    explanation: "Diffusion is the movement of particles from a region of higher concentration to a region of lower concentration due to their random motion.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    createdAt: "2026-06-16T12:00:00Z"
  }
];
"@

$EXISTING_LV3_U1_L1 = @"
import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ci_u1_l1_lv3_1",
    question: "Equal volumes of ammonia gas (NH3, Mr = 17) and hydrogen chloride gas (HCl, Mr = 36.5) are introduced at opposite ends of a long glass tube. A white ring of ammonium chloride forms. Where will the ring form and why?",
    options: [
      { text: "Exactly in the middle because both gases travel at the same speed" },
      { text: "Closer to the hydrogen chloride end because NH3 is lighter and diffuses faster" },
      { text: "Closer to the ammonia end because HCl is heavier and diffuses faster" },
      { text: "At the ammonia end because HCl cannot diffuse through air" }
    ],
    correctAnswer: 1,
    explanation: "Ammonia (Mr = 17) has a lower relative molecular mass than hydrogen chloride (Mr = 36.5). Lighter gas particles move and diffuse faster, so NH3 travels further than HCl in the same time, forming the white ring closer to the HCl end.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    createdAt: "2026-06-16T12:00:00Z"
  }
];
"@

$curriculumCreated = 0
$examsCreated = 0

foreach ($unit in $CIE_IGCSE_UNITS) {
    $unitNum = $unit.unit
    $topicId = $unit.topicId
    $title = $unit.title
    $lessons = $unit.lessons

    for ($i = 0; $i -lt $lessons.Length; $i++) {
        $lessonNum = $i + 1
        $lessonTitle = $lessons[$i]

        # Path paths
        $currDir = Join-Path $PROJECT_ROOT "data\curriculum\cie-igcse\unit-$unitNum\lesson-$lessonNum"
        $examDir = Join-Path $PROJECT_ROOT "data\exams\cie-igcse\unit-$unitNum\lesson-$lessonNum"

        # Create dirs
        $null = New-Item -ItemType Directory -Force -Path $currDir
        $null = New-Item -ItemType Directory -Force -Path $examDir

        # Curriculum files
        if ($unitNum -eq 1 -and $lessonNum -eq 1) {
            Set-Content -Path (Join-Path $currDir "index.ts") -Value $EXISTING_THEORY_U1_L1 -Encoding utf8
            Set-Content -Path (Join-Path $currDir "quiz.ts") -Value $EXISTING_QUIZ_U1_L1 -Encoding utf8
        } else {
            Set-Content -Path (Join-Path $currDir "index.ts") -Value (Get-Theory-Content $unitNum $lessonNum $lessonTitle $title) -Encoding utf8
            Set-Content -Path (Join-Path $currDir "quiz.ts") -Value (Get-Quiz-Content $unitNum $lessonNum $lessonTitle) -Encoding utf8
        }
        $curriculumCreated += 2

        # Exams files
        if ($unitNum -eq 1 -and $lessonNum -eq 1) {
            Set-Content -Path (Join-Path $examDir "level-1.ts") -Value $EXISTING_LV1_U1_L1 -Encoding utf8
            Set-Content -Path (Join-Path $examDir "level-2.ts") -Value $EXISTING_LV2_U1_L1 -Encoding utf8
            Set-Content -Path (Join-Path $examDir "level-3.ts") -Value $EXISTING_LV3_U1_L1 -Encoding utf8
        } else {
            Set-Content -Path (Join-Path $examDir "level-1.ts") -Value (Get-Level-Content $unitNum $lessonNum 1 $lessonTitle $topicId) -Encoding utf8
            Set-Content -Path (Join-Path $examDir "level-2.ts") -Value (Get-Level-Content $unitNum $lessonNum 2 $lessonTitle $topicId) -Encoding utf8
            Set-Content -Path (Join-Path $examDir "level-3.ts") -Value (Get-Level-Content $unitNum $lessonNum 3 $lessonTitle $topicId) -Encoding utf8
        }
        $examsCreated += 3
    }
}

Write-Host "✅ Curriculum files created: $curriculumCreated"
Write-Host "✅ Exam files created: $examsCreated"
Write-Host "✅ Total files: $($curriculumCreated + $examsCreated)"
