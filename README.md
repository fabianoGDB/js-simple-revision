https://willianjusten.com.br/organizando-seu-css-com-itcss
https://meyerweb.com/eric/tools/css/reset/
https://willianjusten.com.br/falando-sobre-rscss
rscss

# CSS Architecture Guide – ITCSS + RSCSS + CSS Reset

This project follows a robust and scalable CSS architecture combining three key methodologies:

- **ITCSS (Inverted Triangle CSS)** for layered structure
- **RSCSS (Reasonable System for CSS Stylesheet Structure)** for clean, modular naming conventions
- **Eric Meyer’s CSS Reset** to ensure cross-browser consistency

---

## 🗂 Project Structure (ITCSS-Based)

The styles are organized following the ITCSS methodology to increase maintainability and scalability:

/styles
├── settings/ # Global variables (colors, spacing, fonts)
├── tools/ # Mixins and helper functions
├── generic/ # Reset.css, box-sizing and generic base styles
├── elements/ # Default HTML elements (body, h1, p, etc.)
├── objects/ # Layout objects (grid, container, media)
├── components/ # UI Components (button, card, modal)
├── utilities/ # Utility classes (.text-center, .mt-2)
└── main.scss # Main SCSS file that imports all layers

css
Copiar código

---

## 🚀 CSS Reset (Eric Meyer)

A minimal reset CSS is applied in the `generic/` layer to neutralize default browser styles.

```css
/* generic/_reset.scss */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
... {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
📐 Naming Convention (RSCSS)
The stylesheet uses the RSCSS methodology to name and organize components consistently.

Key Rules:
Use - to separate words
Example: .btn-primary, .card-title

Everything is a component or object
Example: .form, .modal, .user-card

Use direct specificity
Avoid deep selectors like .sidebar .menu .item

Use - for variations
Example: .btn -primary, .card -highlighted

Use _ to indicate !important classes
Example: .hide_content_, .text_centered_
(Note: This is not an official RSCSS rule, but an internal convention to warn about important overrides.)

🧪 Example Usage
html
Copiar código
<div class="card -highlighted">
  <h2 class="card__title">Card Title</h2>
  <p class="card__content">Card body text.</p>
</div>

<button class="btn -primary">Submit</button>
scss
Copiar código
.card {
  padding: 1rem;

  &__title {
    font-size: 1.5rem;
  }

  &__content {
    font-size: 1rem;
  }

  &.-highlighted {
    background-color: yellow;
  }
}

.btn {
  &.-primary {
    background-color: blue;
    color: white;
  }
}
```
