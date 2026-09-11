$PROJECT_ROOT = "C:\Users\admin\Projects\chemzim"
$files = Get-ChildItem -Path (Join-Path $PROJECT_ROOT "data\curriculum\cie-igcse") -Filter "index.ts" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 1. Replace the starting backslash (regex: '\\') with backtick
    $content = $content -replace 'theoryMarkdown = \\', 'theoryMarkdown = `'
    
    # 2. Replace the ending backslash-semicolon with backtick-semicolon
    $content = $content -replace '\\;', '`;'
    
    Set-Content -Path $file.FullName -Value $content -Encoding utf8
}

Write-Host "✅ Fixed backslash escapes in all index.ts files!"
