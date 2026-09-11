import os

registry_path = "data/exams/registry.ts"

units = {
    1: 5,
    2: 5,
    3: 1,
    4: 6,
    5: 4,
    6: 1
}

# Generate imports
imports = []
for unit, num_lessons in units.items():
    for lesson in range(1, num_lessons + 1):
        for lv in range(1, 4):
            imports.append(
                f"import {{ level{lv}Questions as ed_u{unit}_l{lesson}_lv{lv} }} from './edexcel-alevel/unit-{unit}/lesson-{lesson}/level-{lv}';"
            )

imports_str = "\n".join(imports)

# Generate registry structure
registry_blocks = []
for unit, num_lessons in units.items():
    lesson_blocks = []
    for lesson in range(1, num_lessons + 1):
        lesson_blocks.append(f"""            {lesson}: [
                ...ed_u{unit}_l{lesson}_lv1,
                ...ed_u{unit}_l{lesson}_lv2,
                ...ed_u{unit}_l{lesson}_lv3
            ],""")
    lessons_joined = "\n".join(lesson_blocks)
    registry_blocks.append(f"""        {unit}: {{\n{lessons_joined}\n        }},""")

registry_str = "    'edexcel-alevel': {\n" + "\n".join(registry_blocks) + "\n    },"

with open(registry_path, "r", encoding="utf-8") as f:
    content = f.read()

# Insert imports before: export const examsRegistry
target_import_marker = "export const examsRegistry"
if target_import_marker in content:
    content = content.replace(target_import_marker, f"// Edexcel A-Level Imports\n{imports_str}\n\n{target_import_marker}")
else:
    print("Error: export const examsRegistry not found")

# Insert registry under: export const examsRegistry = {
target_registry_marker = "export const examsRegistry: Record<string, Record<number, Record<number, Question[]>>> = {"
if target_registry_marker in content:
    content = content.replace(target_registry_marker, f"{target_registry_marker}\n{registry_str}")
else:
    print("Error: registry marker not found")

with open(registry_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated exams registry!")
