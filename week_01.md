# Week 01: 8/28/25

![intro.gif](/images/week_01/intro.gif)

*Source: [Casey Reas, 2010](https://reas.com/p18_s2/)*

---

## Agenda

1. Syllabus
2. Introductions
3. Intro to Coding
4. Break
5. Tutorial: Drawing with p5.js
6. In-Class Practice
7. Assignment

---

## [Syllabus](https://docs.google.com/document/d/1PgKLd5I-t2KCITAn_-jvHkBmRXuLFgJ2lcNq_msGQ_o/edit?usp=sharing)

* If I am ever going too fast through *any* material, please interrupt me!
* Questions? Comments? Needs? Etc? Send an email. I value open communication more than anything else. If you miss class, expect to be late, or are struggling with an assignment, please let me know.

### [Statement on Technology](https://community.itp.io/community_statement#technology)

> We pledge to center creative and ethical uses of technology in our research, teaching, and making. We accept the claim that technology is a reflection of society, its histories, and its politics. We reject the claim that technology is neutral and acknowledge that every technology has the potential to do as much harm as good. We acknowledge that when technologies cause harm, the harm disproportionately affects Black, Brown, Indigenous, People of Color (BIPOC), queer, trans, disabled, femme, low-income, survivors, and all other marginalized bodies and communities worldwide.
>
> With this understanding, it is our responsibility to center these groups when hosting, participating in, or developing events (e.g. workshops or meetings), materials (e.g. courses, syllabi, resources), technologies (software, hardware, tools, etc) and creative applications made within this classroom (e.g. works of art, products, installations, experiments, etc).

### Expectations and Class Manifesto

1. Be curious!
    * what questions are you asking?
    * what do you not know?
    * how can you find those answers?
        * exploring the p5.js reference is a great past time
2. Practice!
    * learning to code takes time!
    * you *will* have to do a lot of work outside of class to understand what is going on in the context of your own projects  
3. Low Stress **NOT** Low Effort
    * did you learn something new? write it in your documentation!
    * did you struggle? write it in your documentation!
    * did you accomplish what you wanted? write it in your documentation!
    * if you made a solid attempt and wrote documentation (via a discussion post) you get full credit!

### Class Format

Broadly – this is similar to a math class.

You will be taught in class:

* syntax of how the coding language works
* application of how to use the coding language in a broad sense

Outside of class:

* practice the syntax
* contextualize the content in your own projects

A typical week structure might look like:

1. Review previous week’s assignment and questions
2. Introduce new content
3. Practice new content in class
    * You should be following along the demos!
4. Apply new content in upcoming assignment

---

## Introductions

### me

| sam heckle (they/she)|  |
| ----------- | ----------- |
| software engineer to creative technologist pipeline  | |
| things you can ask me about: coding, software engineering, physical computing, sewing, portfolio review, resume review, grad school, games, cats, keyboards, baking, nyc/seattle/san francisco, food | ![works cited](/images/week_01/works_cited.png)|
| please ask me about these things in [office hours](https://calendly.com/samanthaheckle/30min) | ![phone ew](/images/week_01/phone.png) |

### you

* name, pronouns (optional), year, program
* what interests you? what do you spend your free time doing?
* what are you looking to get out of this class?

---

## Introduction to Code

### Tutorial: Learning about p5 Editor

Make an account: <https://editor.p5js.org/>

#### Looking at the p5 Editor

| Click the Gear Icon in the Upper left.  |  |
| ----------- | ----------- |
| These are my preferred settings. | ![p5 settings](/images/week_01/settings.png)|

### Writing and Running Code

![p5.editor](/images/week_01/p5_editor.png)

### General Flow

| How to submit homework  |  |
| ----------- | ----------- |
| 1. Rename sketch to enable saving | ![name](/images/week_01/1.png)|
| 2. Save your sketch (you can also press ⌘+S or Ctrl+S) | ![save](/images/week_01/2.png)|
| 3. Finish your assignment| |
| 4. Tidy your code | ![save](/images/week_01/tidy.png)|
| 5. Retrieve the URL and submit. | ![save](/images/week_01/url.png)|

### Definitions: Coding Glossary vs. p5 Glossary

| coding glossary  | p5 glossary |
| ----------- | ----------- |
| terms that can be used *universally* when talking about code | terms that are specific to p5 and our class |

#### Coding Glossary

<details>
<summary> algorithm </summary>
series of steps to execute to solve a problem
</details>

<details>
<summary> syntax </summary>
grammars or punctuation of the language you code in
</details>

<details>
<summary> javascript </summary>

a programming language [^1]

</details>

<details>
<summary> p5.js </summary>

a javascript library[^2]

</details>

[^1]: the technical definition is a lightweight interpreted language with first-class functions
[^2]: it is **not** a programming language, but a way of interpreting plain javascript

<details>
<summary> documentation / reference </summary>

a dictionary for syntax of a particular coding language

</details>

<details>
<summary> comment </summary>

a way in code to write notes

</details>

``` js
    // this is a comment
    // we write comments in our code to explain what is going on and to organize ourselves
```

<details open>
<summary>  function </summary>

an instruction or command, may or may not have ***parameters***, also known as ***methods***

</details>

``` js
    // the syntax of a function is the name followed by parenthesis 
    functionName()
```

<details open>
<summary>  parameter </summary>

value that is passed into the function, also known as ***argument***

</details>

``` js
    // parameters go inside the parenthesis
    functionName(parameterValue)
```

some p5 examples of functions with and without parameters

``` js
    // without parameters
    beginShape()

    // with parameters
    fill(255)
    background(255)
```

#### p5.js Glossary

<details>
<summary>  sketch </summary>

the name of the things you are making in p5.js web editor

</details>

`setup()`: happens before the animation loop and *executes one time*. once it completes, it moves to the next line in the code.

![setup gif](/images/week_01/setup.gif)

`draw()`: is the animation loop, executes with framerate

![draw gif](/images/week_01/draw_loop.gif)

<details open>
<summary>  canvas </summary>

the area on the screen where the code is executed, similar to an artboard. uses the cartesian coordinate system (x, y).

</details>

![coordinates](/images/week_01/coordinates.png)

Important to note here is the blue line represents the x-axis, increasing from left to right. The red line represents the y-axis, increasing from top to bottom.

`(0, 0)` starts from the top left corner and increases until the `width` and `height` have been reached. The width and height are determined by the parameters passed in to the `createCanvas()` function located in setup.

#### p5 Functions covered in class

[rect()](https://p5js.org/reference/p5/rect/)
```
// remember any parameter wrapped in [] is optional
// x: x position, from top left corner (unless otherwise specified)
// y: y position, from top left corner (unless otherwise specified)
// w: width of rectangle, in pixels
// h: height of rectangle, in pixels
// optional rounding of edges using radius in px from top left, top right, bottom right, bottom left
rect(x, y, w, [h], [tl], [tr], [br], [bl])
```
[fill()](https://p5js.org/reference/p5/fill/)
```js
// r, g, b values with optional alpha
// from 0 - 255
fill(v1, v2, v3, [alpha])
// color names, wrapped in quotations
// fun tool to see all the color names: https://tools-olive.vercel.app/t/css-named-colors
fill('color name')
// greyscale, with optional alpha
// from 0 - 255
fill(gray, [alpha])
```
We also covered `circle()`, `ellipse()`, `line()`, `stroke()`, `noStroke()`

Options for your assignment next week:
* Look at any additional shapes in [2D primatives](https://p5js.org/reference/#2D%20Primitives), such as arc, quad, triangle
  
Challenge:
* Experiment with [curves](https://p5js.org/reference/#Curves) and [vertices](https://p5js.org/reference/#Vertex)

---

## Demos
* [in class demo](https://editor.p5js.org/samheckle/sketches/ueqmpQPqQ)

## Useful Misc Links
* [curve visualization](https://editor.p5js.org/samheckle/full/VIr36n9gq)
* ![catmull-rom](https://kagi.com/proxy/catmull-rom-splines-l.jpg)
---

## Assignment

Due Class 2:

Do:

* [ ] Finish in-class practice
* [ ] Exercise 1

Read:

* [ ] [The Critical Engineering Manifesto](https://criticalengineering.org/)
