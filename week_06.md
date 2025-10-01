# Week 06: 10/1/25

![chatgpt](https://kagi.com/proxy/im-more-confused-with-the-right-side-of-this-meme-cant-even-v0-qtjr4zrjrlwe1.jpeg?c=MHaoEHf4JA4T1dYEo1CR0TTuV1U6nrue6Vv7pnQqdGL4gryBwiwxF0rk-YXSnqOiPcnHYQrl_ybBGffRZRaRFb-9J8yKaHupxmPlyyLgiO50l54eH1ZcG9YXBbvlEbL95A_BuKNWEY-QPJD4myoxOGhF2bszbODPQBCOK9mac7KtOgoYIt80DJCkmxzoqvE8smuOTaKEegnCgSQAmnuBtz-YYIL7wgTlTLCfAZWbB34%3D)

## Agenda

1. Attendance 
2. Reading Discussion
3. Lecture: Data Structures Part 1: Arrays
4. In-class: Arrays

## Reading Discussion

* Can technology be biased? Or is it designed that way?
* Define "phantom objectivity" in your own words. How does "phantom objectivity" apply to generative models?


## Data Structures Part 1: Arrays

### Coding Glossary: Arrays

| Review | | 
|---|---|
| variable | name for a placeholder piece of data |
| declaration | using `let` to assign a value to a variable or using `function` to create a new function | 
| variable types | `boolean`, `number`, `string` (words) |

| New terms | | 
|---|---|
| array | data structure that holds a *series* of variables, uses `[]`| 
| element | one piece of array data |
| index | location of a particular element, starting at 0 |

#### Declaring an ***Array***
```js
let myNewArray = []
```

#### Initializing an array with ***Elements***
```js
let myNewArray = [10, 15, 20]
```
#### Retrieving a specific ***Element*** with the ***Index***
The index is the location of the data we want to grab. The location is automatically assigned because of the `array`, since it is a *series* of data, so it always starts at 0 and increases by one for every element. When we want to retrieve a specific element, we use `[]` and the index (location) we want to grab.

```js
myNewArray[0] // 10
myNewArray[1] // 15
myNewArray[2] // 20
```
#### Arrays are like tables

<table>
<tbody>
<tr><td>index</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>
<tr><td>value</td><td>"this"</td><td>"is"</td><td>"a"</td><td>"sentence"</td></tr>
</tbody>
</table>

```js
let data = ["this", "is", "a", "sentence"]
```

In code, we typically only want an array to hold 1 type of data. So it should be *either* a list of numbers, booleans, or strings.

#### Arrays are Living Variables
We can change the value of an element in the array by reassigning it, like we do with normal variables.

```js
let teachers = ["Sam", "Patrick", "Rory"]
teachers[1] = "Sam" 
// override the old value, reassign to new
// teachers is now ["Sam", "Sam", "Rory"]
```
If we use an index (location), that does not exist yet, it will add empty `undefined` items in the series until it gets to that location.
```js
let animals = ["Cat", "Dog"] // animals has elements at 0 and 1
animals[4] = "Giraffe"
// animals is now ["Cat", "Dog", undefined, undefined, "Giraffe"]
```
This isn't the best way to add to an array, because we don't want to accidentally create empty variables.

---

#### Unique Attributes of an Array
JavaScript is an object-oriented programming language, so whenever we create a piece of data (like a variable or an array), it is considered an `object`.

`Objects` allow us to enact specific actions *on* them. We need to reference the specific object in order to do that action.

##### `.push()`

`push()` is a function we have seen inside of p5, but [`.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) is a function that exists in an array. We need to use the name of our array, and the `.` to use the specific function.

```js
let myArray = [2, 4, 6]
myArray.push(8)
// this automatically adds 8 to the end of the array
// the new array is [2, 4, 6, 8]
```
This adds an element to the end of the array.

##### properties
Properties are variables that are unique to an object (in this instance an array). We again use the `.` to reference a specific property we want to access. 

Arrays have a property called [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length). This gives us how many items exist in the array.
```js
let myArray = [2, 4, 6] // 3 items total
myArray.length // this is 3
```
This counts the number of ***elements*** that exist inside the array.

---