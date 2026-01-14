# How to add a project page

(I wrote these instructions for human readers but then realized it also worked as an AI prompt)

### 1. Create a file

Create a file in [pages](pages). Use a short title of two or three words.
For example, if your project is _Generating Astronomy Olympiad Problems_,
you can name your file `astronomy-problems.md` to create a page
at `/astronomy-problems`.

### 2. Add properties

Add the properties in YAML format like in other files (e. g. `pages/astronomy-problems.md`).

- Names and tags: look for names and tags in existing pages to check if your spelling is consistent.
- Picture: the `picture` tag defines the cover picture. If possible, add cover pictures in high resolution (1424px+).
Upload pictures to [pages/public/assets](pages/public/assets).

### 3. Write the project goal

Write around 1-3 paragraphs in Markdown format.

### 4. Write the report

Type `## Report`, then write several paragraphs in Markdown format.

- Pictures: If you add pictures to the text, use `<img>` rather then Markdown-style pictures:
  this will make them look wider on big screens.
- Formulas: Surround LaTeX formulas with $ or $$. 
- HTML: HTML is supported. If you want to add interactive web stuff, you can use [Vue features](https://vitepress.dev/guide/using-vue) — consult @tm-a-t.

### 5. Behold!

If you are a human:

- Commit to the main branch to deploy.
- If you want to preview your changes first, push to a new branch or create a pull request —
  this will create a preview site.
