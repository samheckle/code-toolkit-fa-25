# Week 08: 10/14/25

## Agenda

1. Attendance 
2. Review: In-Class 6
3. Review: Arrays
4. Lecture: Objects
5. Time & Classes
6. Lecture: Sound

## Review: In-Class 6

Any questions?
Any other topics to review at this time?

Write your questions in [this doc](https://cryptpad.fr/pad/#/2/pad/edit/k5-knCHsjrT-ctJe63mYU+4+/)

## Review: Arrays

<table>
<tbody>
<tr><td>array</td><td>

data structure that holds a *series* of variables, uses `[]`

</td></tr>
<tr><td>element</td><td>

one piece of array data

</td></tr>
<tr><td>index</td><td>

location of a particular element, starting at 0

</td></tr>
</tbody>
</table>

## Lecture: Objects

An object is a data structure similar to an array.

<table>
<tbody>
<tr><td>object</td><td>

data structure that holds variables using key-value pairs. it is unordered.

</td></tr>
<tr><td>key</td><td>

the `property` we access when we want to retrieve a piece of data from the object.

</td></tr>
<tr><td>value</td><td>

similar to the `element` in an array, the data that is stored

</td></tr>
</tbody>
</table>

#### Objects are also like tables

<table>
<tbody>
<tr><td>property</td><td>word1</td><td>word2</td><td>word3</td><td>word4</td></tr>
<tr><td>value</td><td>"this"</td><td>"is"</td><td>"a"</td><td>"sentence"</td></tr>
</tbody>
</table>

```js
let data = {
    word1: "this",
    word2: "is", 
    word3: "a",
    word4: "sentence"
}
```

#### Unique Attributes of an Object

We can add new `properties` by simply using a new property name. 

```js
let myObj = {
    a: 10,
    b: 15
}
myObj.c = 20
// this automatically adds .c as an accessible property
// the new object is {a:10, b:15, c:20}
```

## Time & Classes

### Defining Class

A class is a template for creating objects. This allows us to make reusuable objects with different properties. What is important for us is the `constructor` which allows us to define each object with unique properties.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
The `this` keyword references the specific object that is being created. So, it creates new properties that exist explicitly for the object that is created.

To create new classes, we are making an `instance` of a class. To do this, we use the `new` keyword. 

```js
let myRect = new Rectangle(100, 200)
// myRect.height = 100
// myRect.width = 200
```
This allows us to access the properties of the rectangle class using the `.` and whichever property we want to access. 

### Time

We can optionally use classes, but they are used throughout JavaScript as a programming language. For example, if we wanted to use time, we can use the [JavaScript Date class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

To get the current time and display it to the canvas, we can use:
```js
const date = new Date()
const currentTime = date.getHours() + ":" + date.getMinutes()
text(currentTime, width/2, height/2)
```
The `new` keyword means we are creating an instance of the Date object and allows us to access the time that exists on the computer we are currently using. 

## Lecture: Sound

To use sound in p5, we use the [p5 sound library](https://p5js.org/reference/p5.sound/), which allows us to add, manipulate, and create sound with p5. 

### Sources for sound:
* [orchestral sample library](http://virtualplaying.com/virtual-playing-orchestra/)
* [free music archive](https://freemusicarchive.org/)
* [freesoundorg](https://freesound.org/)
* [bbc sound effects](http://bbcsfx.acropolis.org.uk/)
* [free sound picture](https://www.soundofpicture.com/)

### Sound Project references
* https://teropa.info/loop/#/title
* https://www.nytimes.com/interactive/2018/09/21/magazine/voyages-travel-sounds-from-the-world.html
* http://jazz.computer/
* https://patatap.com/
* https://youtu.be/HI1raqxrUdk?si=j01yIjgDCCW91PpI
    * cassie's [sketch](https://editor.p5js.org/cassie/sketches/YZHxZ9ffl) recreating it

## Review Videos

* [arrays of objects](https://www.youtube.com/watch?v=fBqaA7zRO58&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=29)
* [classes](https://www.youtube.com/watch?v=T-HGdc8L-7w&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=24)
* [classes + constructors](https://www.youtube.com/watch?v=rHiSsgFRgx4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=25)

## Review Documentation
* [classes in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Demos
* Review demos in this [doc]([this doc](https://cryptpad.fr/pad/#/2/pad/edit/k5-knCHsjrT-ctJe63mYU+4+/)), with links to documentation
* [text objects](https://editor.p5js.org/samheckle/sketches/O31V3igyu)
  * using properties in objects with `.`
  * declaring objects with `{}`
* [classes and date](https://editor.p5js.org/samheckle/sketches/uN_Xrrnu3)
  * using the JavaScript Date class, using keyword `new`
* [sound files](https://editor.p5js.org/samheckle/sketches/nSnxnGwd1)
  * introducing sound files as assets to go in the `preload()`