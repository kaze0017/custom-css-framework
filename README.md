# custom-css-framework

## Index.html

The index.html presents visual examples of possible classes to used and allows you to copy the classes You need. Try it!!!

## How to Install

To use this framework you can add the ./dist/css/main.css or ./dist/css/main.css.map as your linh for stylesheet

## How to Customize

You Can customize this framework by changing the variables in ./src/sass/\_variables.scss

## Variables

### Colors

- Primary Color: `#007bff`
- Secondary Color: `#6c757d`
- Success Color: `#28a745`
- Danger Color: `#dc3545`
- Warning Color: `#ffc107`

### Sizes (WIDTH)

- Base Width: `100px`

These variables can be used in your Sass code to define and use colors and sizes throughout your stylesheets.

## Utilities

### Wrapper

- wrapper-[breack points: sm: $sm-breakpoint | md: $md-breakpoint | lg: $lg-breakpoint| xl: $xl-breakpoint]

Example : wrapper-xl

### Font Size

- font-size-[size: 1: 1rem | 2: 2rem | 3: 3rem | 4: 4rem]

### Font Weight

- font-weight-[weight: 100| 200 | 300 | 4: 400 | 500 | 600 | 700 | 800 | 900]

### Font Color

- font-color-[color: primary | secondary | success | danger | warning]

### Background Color

- bg-color-[color: primary | secondary | success | danger | warning]

### Margins

spacing-unit:16px

- m-[margin: 1 | 2 | 3 | 4 | 5 | 6]

### Padding

- p-[padding: 1 | 2 | 3 | 4 | 5 | 6]

### Border Width

- border-[border width: 1 | 2 | 3 | 4 | 5 | 6]

### Grid

gaps are based on $spacing-unit (default 16px)

- grid-[number of collumns: 1 | 2 | 3 | 4 | 5 | 6]
  Example: grid-3
- grid-[number of collumns]-[Row gap: '': none | s | m | l]
  Example: grid-3-s
- grid-[number of collumns]-[Row gap: n: none | s | m | l]-[column gap: s | m | l]
  Example: grid-3-n-s

## Elements

### Buttons

- btn : Basic Button
- btn-[color: primary | secondary | success | danger | warning]
- btn-[width: s: 0.5* Base Width | m: Base Width | l: 2* Base Width]
- btn-[color]-[width]

### Lists

- lists-item :Basic list item
- list-item-[color : primary | secondary]
- list-item-[style : disk | square | box | boxChecked | boxCrossed]
- list-item-[color]-[style]

### Heading

- header : Basic Header
- header-[color: primary | secondary | success | danger | warning]
- header-[size: 1 | 2 | 3 | 4 | 5]
- header-[size]-[Color]

### Inputs

- input : Basic input
- input-[color: primary | secondary | success | danger | warning]
- input-[width: s | m | l | xl]
- input-[color]-[width]
