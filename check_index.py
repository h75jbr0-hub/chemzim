import re

file_path = "data/curriculum/edexcel-alevel/unit-4/lesson-5/index.ts"
with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Analyzing math and backslashes in lesson 5 index.ts:")
for idx, line in enumerate(lines, 1):
    if "$" in line or "\\" in line:
        # Check if the line has any backslashes (but ignore imports or svg strings if they are formatted differently,
        # though standard lines in theory/parts are of interest)
        if any(cmd in line for cmd in ["text", "implies", "approx", "circ", "ast", "delta", "Delta", "rightarrow", "leftharpoons", "plus", "minus", "cdot", "frac"]):
            print(f"Line {idx}: {line.strip()}")
