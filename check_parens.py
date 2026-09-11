import sys

def check_brackets(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    stack = []
    lines = content.split('\n')
    
    # We want to keep track of line and col
    for line_num, line in enumerate(lines, 1):
        # Let's skip comments and string literals to be safer, or just do a simple character check first
        col = 0
        in_string = False
        string_char = None
        
        while col < len(line):
            char = line[col]
            
            # Simple string skipping
            if in_string:
                if char == string_char and line[col-1] != '\\':
                    in_string = False
                col += 1
                continue
            
            if char in ['"', "'", '`']:
                in_string = True
                string_char = char
                col += 1
                continue
                
            # Skip single-line comments
            if char == '/' and col + 1 < len(line) and line[col+1] == '/':
                break
                
            if char in ['(', '{', '[']:
                stack.append((char, line_num, col + 1))
            elif char in [')', '}', ']']:
                if not stack:
                    print(f"Extra closing bracket '{char}' at line {line_num}, col {col+1}")
                    return
                top_char, top_line, top_col = stack.pop()
                expected = {')': '(', '}': '{', ']': '['}[char]
                if top_char != expected:
                    print(f"Mismatched bracket: expected '{char}' to match '{top_char}' from line {top_line}, col {top_col}, but got '{char}' at line {line_num}, col {col+1}")
                    return
            col += 1
            
    if stack:
        print("Unclosed brackets left:")
        for item in stack:
            print(f"Unclosed '{item[0]}' from line {item[1]}, col {item[2]}")
    else:
        print("All brackets match perfectly!")

if __name__ == '__main__':
    check_brackets('app/admin/page.tsx')
