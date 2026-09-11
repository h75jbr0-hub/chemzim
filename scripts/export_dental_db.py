import sqlite3
import json
import os

db_path = r"C:\Users\admin\.gemini\antigravity\brain\6776ae56-d1c4-4149-9279-1f3eb725967a\scratch\dental_bot.db"
output_dir = r"c:\Users\admin\Projects\chemzim\data\dental"
output_file = os.path.join(output_dir, "questions.json")

os.makedirs(output_dir, exist_ok=True)

conn = sqlite3.connect(db_path)
c = conn.cursor()

c.execute("""
    SELECT id, question, options_json, correct_option_id, explanation, category, level 
    FROM questions 
    ORDER BY id ASC
""")

questions = []
for row in c.fetchall():
    q_id, question_text, options_json, correct_idx, explanation, category, level = row
    
    try:
        options = json.loads(options_json)
    except Exception:
        options = []
        
    questions.append({
        "id": q_id,
        "question": question_text,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation or "",
        "category": category or "General Dentistry",
        "level": level or "Level 1"
    })

conn.close()

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Successfully exported {len(questions)} dental questions to {output_file}")
