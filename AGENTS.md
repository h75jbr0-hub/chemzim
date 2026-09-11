<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Lesson Page & Design Standards

When creating or modifying lesson pages (`app/dashboard/curriculum/[curriculumId]/[topicId]/page.tsx` or fallback markdown views), you must follow these rules:

1. **Flexbox & Shrinking Prevention:**
   - To prevent interactive/visualizer components (such as `EquationAnimator`) from being compressed to zero height inside nested flex parent containers, **always** specify `flex-shrink-0` on their outermost element.
   
2. **Study Notes (`LessonNotes`):**
   - Every individual lesson part (excluding the `interactive-quiz` slide) must render a student notes section at the bottom of the scrollable container:
     ```tsx
     <LessonNotes lessonId={`${curriculumId}-${topicId}-lesson-${currentLessonNum}`} />
     ```
   
3. **Scrollable Layout Structure:**
   - The active lesson slide content area must use a nested flex structure to allow independent columns scrolling:
     ```html
     Parent (flex-1 flex flex-col overflow-hidden min-h-0) ->
       Scrollable Container (flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6) ->
         Visualizers & Slide Content & LessonNotes
     ```
   - Do not set fixed heights or block scrolling on parent containers; let the `overflow-y-auto` container handle the height and scrolling naturally.

4. **Stoichiometry & Reaction Animations:**
   - Any lesson part discussing chemical equations, stoichiometry, or reactions should declare a dynamic `equationVisualizer` property on its data object inside the lesson registry (rather than hardcoding visualizers in `page.tsx`).
   - Example configuration in `LessonPart`:
     ```ts
     equationVisualizer: {
         reactants: [['ReactantFormula', '#colorHex']],
         products: [['ProductFormula', '#colorHex']],
         description: "A description of the reaction stoichiometry."
     }
     ```

5. **Worked Examples Formatting & Callout Boxes:**
   - Every worked example in the lesson content MUST be wrapped inside a `[!EXAMPLE]` callout box.
   - The question text should be directly under the header:
     ```markdown
     > [!EXAMPLE]
     > #### 📝 Worked Example X: [Title]
     > **Question:** [Question description]
     ```
   - The step-by-step solution MUST be nested inside a `[!TIP]` callout box inside the outer blockquote, starting with a key emoji:
     ```markdown
     > > [!TIP]
     > > **🔑 Step-by-step Solution:**
     > > 
     > > 1. **Step Title:**
     ```
   - Do NOT write or duplicate labels like `TIP` or `WARNING` or `NOTE` before the solution header, as the rendering engine automatically styles them and hides redundant labels when it detects the `step-by-step solution` phrase.
   - **Box Separation & Nesting Prevention:** To prevent a worked example box from being nested inside a preceding `[!BOX]` or explanation card, you MUST close the prior blockquote by inserting a completely blank line (without any leading `>` character) before starting the next `> [!EXAMPLE]` box. Any line containing a `>` character (even a blank one like `> `) will merge the containers together.

6. **Callout Containers & Styling Guidelines (`[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]`, `[!BOX]`):**
   - The rendering engine supports six custom container types mapped to semantic styling classes:
     - `[!NOTE]` / `[!BOX]`: Blue theme (`bg-blue-500/10 border-blue-500/20`) - for core chemistry concepts, elements, and data lists.
     - `[!TIP]`: Emerald/Green theme (`bg-emerald-500/10 border-emerald-500/20`) - for practical tips, species classification, or step-by-step solutions.
     - `[!IMPORTANT]`: Indigo theme (`bg-indigo-500/10 border-indigo-500/20`) - for formulas, mathematical relations, and critical definitions.
     - `[!WARNING]`: Amber/Orange theme (`bg-amber-500/10 border-amber-500/20`) - for common pitfalls, mistakes to avoid, and safety advice.
     - `[!CAUTION]`: Rose/Red theme (`bg-rose-500/10 border-rose-500/20`) - for dangerous reactions, hazards, or critical exam alerts.
   - **Horizontal Overflow Protection:** The rendering engine applies `overflow-x-auto w-full` to custom callout boxes. This ensures that any long equations, step-by-step solutions, or math expressions can be horizontally scrolled on mobile viewports instead of overflowing the screen or breaking the page layout.
   - **No Default Headers:** Unlike standard callouts, these blocks (except `[!EXAMPLE]`) do NOT render default label headers. Therefore, you **MUST** explicitly define an `H3` (`###`) heading with an appropriate thematic emoji on the first line inside the callout block:
     ```markdown
     > [!NOTE]
     > ### ⚛️ Fundamental Chemistry Concepts (Elements)
     ```
     ```markdown
     > [!IMPORTANT]
     > ### 🧮 The Molar Calculation Formulas
     ```
     ```markdown
     > [!BOX]
     > ### 📋 Common Ionic Groups
     ```
   - Ensure the header title uses a descriptive emoji (e.g. `⚛️`, `🧪`, `⚖️`, `📋`, `🧮`, `⚠️`, `🛑`) instead of numbers, to match the unified project styling.

17. **SVG Tokens inside Callouts / Blockquotes:**
    - To render SVG visualizer tokens (such as `${svgToken(nameSvg)}`) properly inside callout boxes without closing the container prematurely, **always** prefix the token line with the blockquote character `> `.
    - Example:
      ```markdown
      > [!NOTE]
      > Some concepts here
      > 
      > ${svgToken(myCoolSvg)}
      ```

7. **List Indentation inside Callouts:**
   - To ensure sub-lists (bullet points) inside ordered lists (`1.`, `2.`, `3.`) render with proper right indentation inside blockquotes/callouts, indent them with exactly **4 spaces** after the `>` character (i.e. `>    *` or `>    -`):
     ```markdown
     > 1. **First Point:**
     >    * Nested bullet point (indented)
     ```

8. **SVG Asset Design Guidelines & Mobile Responsiveness:**
   - All SVG diagrams MUST be designed for mobile-first readability across all device viewports (smartphones, tablets, desktops).
   - **ViewBox & Aspect Ratio Limits:**
     - Use compact, moderate-width viewBoxes (e.g. `650`x`250` to `700`x`320`).
     - NEVER squeeze multiple horizontal techniques, graphs, or cards into a single wide monolithic viewBox (e.g. `1000`x`360`), because when scaled down on mobile viewports (~340px), font sizes shrink to unreadable dots.
   - **Multi-Item & Dashboard Diagrams:**
     - For multi-topic summaries (e.g. Reaction Orders 0, 1, 2 or dual experimental setups), split them into separate standalone SVG tokens placed directly beneath their respective markdown bullet points, or use a vertically stacked card layout (`650`x`460` max).
   - **Font Sizes & Label Spacing:**
     - Set primary text font sizes to `13px` - `15px` (headers `15px`-`18px` bold, subscripts `10px`-`11px`).
     - Ensure generous padding between axis labels (e.g., `Time`, `[A]`, `Rate`) and neighboring arrows/lines to completely prevent overlapping text on small viewports.
   - **Styling Tokens:**
     - Use the project's signature dark background gradient: `linear-gradient(to bottom right, #070f1e, #0b1b35)`, with a stroke border of `#1e293b` and `rounded-lg` styling.


9. **Avoiding Confusing End-of-Line Periods:**
   - To prevent student confusion, do not put a period (`.`) at the end of a line if it terminates with a chemical symbol (e.g. `Na`), a number (e.g. `2.3`), or a unit (e.g. `mol/dm3`), as the period could be mistaken for part of the symbol, number, or unit.

10. **LaTeX Escaping in TypeScript Files:**
    - When writing LaTeX formulas within TypeScript template literals, you **MUST** use **4 backslashes** (`\\\\`) for LaTeX commands (e.g., `\\\\text`, `\\\\implies`, `\\\\_`). Using fewer (e.g., `\\text` or `\_`) will result in parser stripping and incorrect rendering at runtime.
    - Example: Use `$\\text{Na}$` as `$\\\\text{Na}$` in TS source code.

11. **KaTeX Subscripts vs Markdown Emphasis Collision:**
    - **The Issue:** The Markdown parser (`react-markdown`) processes content before KaTeX. It will interpret LaTeX subscripts containing parentheses like `_{3(s)}` or `_{(aq)}` as markdown emphasis symbols (e.g., matching the `_` character to start italic formatting), causing render-breaking HTML injection like `<em>` inside LaTeX syntax. This also occurs in blocks with multiple underscores (such as `\\text{C}_8\\text{H}_{18}`).
    - **The Fixes:** 
      1. Avoid using braces `_{...}` wrapped around parentheses inside math mode. Instead, write the subscript number first and put the state symbol in a separate `\\text{}` block at normal level.
         - *Example (Incorrect):* `$\\text{AlCl}_{3(s)}$`
         - *Example (Correct):* `$\\text{AlCl}_3\\text{(s)}$`
      2. For narrative inline text, replace complex KaTeX structures with unicode subscripts to completely avoid underscore parsing conflicts.
         - *Example (Correct):* `cyclohexane (C₆H₁₂)`
      3. For display equations (blocks with `$$...$$` containing multiple subscripts like `C8H18 > C3H8`), wrap the unicode subscripts inside `$$` tags. This renders the equation on a separate line with a large font size without using any underscores.
         - *Example (Correct):* `$$C₈H₁₈ > C₃H₈$$`

12. **Escaping Backticks and Backslashes in JavaScript/TypeScript Template Literals:**
    - **The Issue:** Using raw backticks (`` ` ``) or unescaped backslashes (`\`) inside multiline template strings (which are also enclosed in backticks) breaks JavaScript/TypeScript syntax. The engine treats internal backticks as string terminators, causing compilation failures like `Expected ',', got 'ident'`. Unescaped backslashes (like `/\`) trigger escape errors such as `Expected unicode escape` if followed by specific characters or newlines.
    - **The Fixes:**
      1. **Avoid backticks inside template literals:** Do not use markdown inline code blocks containing backticks (e.g., `` `code` ``) inside the lesson parts markdown content. Use bold formatting (`**code**`) or simple quotes instead.
      2. **Double-escape literal backslashes:** When displaying a literal backslash in text (such as in a skeletal formula structure like `/\`), double-escape it so the compiler evaluates it as a single backslash (e.g., write `/\\`).

13. **Key Study Points Requirements:**
    - Every individual lesson part (`LessonPart`) registry object must have the `keyPoints` array property defined with relevant key takeaways, summary rules, or common exam pitfalls to provide students with a summary box at the end of each slide.

14. **Markdown Tables inside Blockquotes:**
    - When writing markdown tables inside blockquotes (`>`), do not indent the table rows (e.g., do not write `>    | Column |`). Instead, start the table characters directly after the blockquote prefix (e.g., `> | Column |`), otherwise the markdown parser fails to parse it as a table and compiles it into a single line.

15. **Question Explanation Formatting:**
    - The explanation (`explanation`) field for all questions in the question bank or quizzes must be written in the form of bullet points, with each bullet point placed on a separate line to ensure maximum clarity for students.

16. **Smart Question Tagging & Lesson Filtering:**
    - Every question structure in the question bank (`Question` interface) should include the `lessonNum?: number;` field representing the lesson number it belongs to.
    - Tag all practice/exam questions with their respective `lessonNum` matching the curriculum registry lesson index.
    - The Smart Question Auditor dynamically resolves the lesson titles using `q.lessonNum` and `curriculumRegistry` to enable precise dropdown filtering. Do not hardcode `"Exam Practice Bank"` as the lesson title if a lesson number is available.

18. **Double-Underscore Chemical Formulas in Display Math (`$$...$$`):**
    - **The Issue:** Chemical formulas that contain **two or more separate KaTeX subscripts** (e.g., `\text{N}_2\text{O}_2`, `\text{H}_2\text{O}_2`) introduce **two `_` underscore characters** into the markdown source. Even inside `$$...$$` display math blocks, `react-markdown` may parse these paired underscores as markdown italic markers **before** passing the content to KaTeX, causing the display math block to break and render as raw LaTeX text.
    - **Affected Patterns:** Any formula matching `\text{X}_n\text{Y}_m` where both `_n` and `_m` are present — e.g., `N₂O₂`, `H₂O₂`, `C₂H₂`, `N₂O₄`.
    - **The Fix:** When a chemical formula has two or more separate subscript groups, **replace the entire formula with its Unicode equivalent** instead of using KaTeX. Do NOT attempt to use `\text{N}_2\text{O}_2` inside display math.
      - *Example (Incorrect):* `$$\text{N}_2\text{O}_2 = \frac{k_1}{k_{-1}} [\text{NO}]^2$$`
      - *Example (Correct):* `[N₂O₂] = (k₁ / k₋₁) × [NO]²` (plain text with Unicode subscripts)
    - **Exception:** If the formula appears **inside concentration brackets** `[...]` in the **middle** of a longer equation (not at the start), and the overall equation has no other underscore conflicts, it may render correctly — verify in the browser before keeping it.


# Chat Suppression Rules
1. **Direct Execution:** When the user requests execution of a command or code implementation using words like "execute", "apply", "run", or "write code", you must output ONLY the code or commands inside a markdown code block. Do NOT include explanations, discussions, apologies, or greetings.
2. **Explanations & Discussions:** If the user requests explanations or discussions using words like "explain", "discuss", or "what is the issue", you may write normal, detailed explanations and discussions.

# Core TypeScript Interfaces (Database Schemas)

Ensure any code interacting with Firestore or authentication strictly conforms to the following TypeScript interfaces. If you need to modify these structures, make sure they are aligned with the source files.

## (1) Student & Device Security Schemas
Reference source: [auth-store-admin.ts](file:///c:/Users/admin/Projects/chemzim/lib/auth-store-admin.ts)
```typescript
export interface Device {
    id: string;
    fingerprint: string;
    name: string;
    type: 'mobile' | 'tablet' | 'desktop' | 'unknown';
    browser: string;
    os: string;
    firstSeen: string;
    lastSeen: string;
    status: 'pending' | 'approved' | 'blocked';
    ipAddress?: string;
}

export interface Student {
    id: string;
    username: string;
    passwordHash: string;
    name: string;
    email?: string;
    phone?: string;
    notes?: string;
    grade?: string; // International grade (e.g., Year 10, IB DP1)
    image?: string;
    devices: Device[];
    isActive: boolean;
    isAdmin?: boolean;
    role?: 'admin' | 'moderator' | 'student';
    createdAt: string;
    lastLogin?: string;
    notes_internal?: string;
    xp?: number;
    level?: number;
}
```

## (2) Dynamic Lesson Player & Content Registry
Reference source: [registry.ts](file:///c:/Users/admin/Projects/chemzim/data/curriculum/registry.ts)
```typescript
export interface LessonPart {
    id: string;
    title: string;
    type: 'text' | 'interactive' | 'simulation' | 'quiz';
    content: string;
    keyPoints?: string[];
    equations?: string[];
    simulationId?: string;
    equationVisualizer?: {
        reactants: [string, string][];
        products: [string, string][];
        description?: string;
    };
    gasLawSimulator?: {
        law: 'boyle' | 'charles' | 'gay-lussac';
    };
    avogadroScale?: boolean;
}
```

## (3) Smart Question Bank Schema
Reference source: [types.ts](file:///c:/Users/admin/Projects/chemzim/data/exams/types.ts)
```typescript
export interface QuestionOption {
  text: string;
  isCorrect?: boolean;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: number;
  explanation: string;
  level: DifficultyLevel;
  topic: IGCSETopicTag;
  curriculum: CurriculumLevel;
  paperType?: PaperType;
  source?: string;
  createdAt: string;
  tableHtml?: string;
  lessonNum?: number;
}
```
