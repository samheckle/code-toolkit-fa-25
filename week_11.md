# Week 11: 11/5/25

## Agenda

1. [Housekeeping](#Housekeeping) 
2. [Project 3](#project-3)
3. [Review: In-Class 7](#review-in-class-7)
4. [Lecture: the DOM](#the-dom)
5. [Demos and Videos](#demos-and-videos)

## Housekeeping

* attendance
* project 3
* homework

## Project 3

## The DOM

| coding glossary | | 
|---|---|
| HTML/CSS | markup languages that determine the structure + style of web pages, inside `index.html` and `style.css` |
| Document Object Model | the way that javascript perceives the structure of the webpages | 

| HTML | CSS | JS | 
|---|---|---|
| structure | style | interaction | 

### HTML

Hyper-text markup language (HTML) defines the structure of a webpage using a series of tags, enclosed in `< >`. 

```html
<!-- this is a comment -->
<!-- this is an opening tag -->
<html>
    
<!-- this is a closing tag -->
</html>
```

Looking at the default `.html` file inside our p5 editor:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.10/lib/p5.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.10/lib/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>
```

`<html>` has two "child" elements, meaning tags that are nested between the opening and closing tags. 
* `<head>` gives us extra data about the webpage, but it isn't seen inside the page
* `<body>` is the actual content of the page

Other html tags (not a definitive list):
* `<p>` - paragraphs
* `<em>` - emphasis / italics
* `<strong>` - bold
* `<img>` - images, use `src` attribute to determine paths to files
* `<a>` - links, uses `href` attribute to go to another file or site

Take a look at the [full list of html tags on the docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements).

### CSS

Cascading style sheets determine the style, or what the web page looks like. This is a series of rules that look very similar to objects with properties. They are given via a selector. 

```css
/* this is a comment in css */

p { /* selector, or which tag/element we want to apply the style to*/ 
    color: blue; /* rule in key:value pair */
}
```

We can see a [full list of css properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties) in the documentation. 

Looking at the default `.css` in the p5.editor:

```css
html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
```

### DOM

The Document Object Model is the way that Javascript is able to perceive and reference HTML code to make changes to it. 

![dom](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg)

This enables us to programatically add items to the DOM using p5.js: https://p5js.org/reference/#DOM

## Demos and Videos

### Resources / Videos
* Allison Parrish [Browser Controls](https://creative-coding.decontextualize.com/browser-controls/)
* Coding Train [HTML/CSS/DOM Playlist](https://www.youtube.com/watch?v=URSH0QpxKo8&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX) (videos 8.1-8.16)

### Misc Links
* [Open Processing](https://openprocessing.org/sketch/create) for live collaboration (you and your group would all need an account)