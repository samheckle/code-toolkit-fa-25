# Week 03: 9/10/25

## Agenda

1. Attendance 
2. [Review](##Review)
3. Reading Discussion
4. Lecture: Conditionals & Events
5. Tutorial: Transformations Continued, Conditionals
6. Assignment

## Review

### Common Problems
1. Read the instructions carefully!
2. Make sure you use appropriate naming conventions
    * Having variables named x1, x2, x3 are not helpful -> try being specific what the variable is changing
3. Code organization
    * Ensure your code is clear and easy to understand
    * Doing all the math together vs. after the shapes it impacts
4. Read your code!
    * Do you notice any patterns?
    * Is there a more efficient solution?
    * How can you write the same code in a different way?
    * Is there any redundant code? Can parts be removed?
    * Do you need the push() pop() or are you just copying the class demo?
5. When using generated code, ensure that you are translating it to what we use in class. 
    * If you are finding something we have not covered, the onus is on you to ensure that it doesn’t go beyond material we have covered
    * It’s actually extra work at this point in the semester to use generated code, because it will always make the most efficient code, but we haven’t gotten there yet.
    * You will receive a 0 on any assignment that uses material that goes beyond what we have covered thus far (right now you should be using variables and p5 shapes!)

### Documentation 
Feel free to reference this for future documentation

If it is easier to write about your assignment in google doc, figma, ppt that is totally fine, just make it accessible to me in some way. 

1. No high level overviews! Literally walk me through what you did: 
    * what did you try? 
    * What images/references did you pull? 
    * How did you determine color?
    * Inspirational artists? How did you land on the aesthetic?
2. Include any sketches!
    * Illustrator is helpful to get shapes correctly
    * Procreate to play with different designs
    * Any moodboards, figma, miro, google docs
    * Pen and paper
3. What were things you experimented with?
    * What experiment put you on the path for your final design? Take screenshots & screen recordings of any visual outputs.
4. Include any links
    * Citation of AI usage
    * Any other p5 sketches you might have looked at. 
    * p5.Reference is not required to be linked, unless you find it helpful.

### In-Class #2

Questions? 

### Exercise #1

Questions about grades or feedback? Send an email.

### Check-In: Class Feedback

How are we feeling about this format for class notes? 
1) Is GitHub working for you as a source to hold all the class notes? 
2) Anything else helpful to include or things you might want in terms of organization?
3) Grades are out for the first 2 assignments, is there anything that you might want on top of the 3 sections (DESIGN, CODE, DOCUMENTATION)? 
4) Is there any class material that we need to cover again at this point?
5) Noticing a lot of UI/UX, website (HTML/CSS) development, and typography. anything else that might spark an interest please let me know! the end of the semester can change based on interest. 

Things you should feel comfortable with at this time:
* difference between `setup()` and `draw()`
* cartesian coordinate system 
* declaring variables using `let` and assigning variables with `=`
* using p5 variables like `width` and `height`
* using mathematical operators `+`, `-` and shorthands `+=` and `++`

Things you might need more practice with:
* `push()` and `pop()`
* `rotate()`
* `frameRate` and `sin()`


I will not forget my USB-C dongle in the future 😌

## Reading Discussion

Questions to consider:

1) Discuss the feedback loop between media > new media. What is the role of the computer as a "media synthesizer and manipulator"? Is this a positive or negative description in your opinion? What other roles does your computer have? 
> The pretense of modern media to create simulations of sensible reality is similarly canceled; media are reduced to their original condition as information carrier, nothing less, nothing more. In a technological remake of the Oedipal complex, a son murders hs father. The iconic code of cinema is discarded in favor of the more efficient binary one. Cinema becomes a slave to the computer...Media and computer...merge into one. All existing media are translated into numerical data accessible for the computer...In short, media become new media. (pg. 25)

2) Think about the different principles Manovich defined: Numerical Representation, Modularity, Automation, Variability, Transcoding. Do you agree with these categories? Which ones would you replace, and what with? What about the term of "new media"? Starting on page 49 which defines "What New Media Is Not", do you agree with these definitions?

3) How does Manovich relate to the Critical Engineer Manifesto? What is the importance of computer literacy in new media art? Think about the contexts in which code is created (most code examples are in English, privilege of using a computer from a young age)? What are ways we can break from these contexts to make media art more accessible?
> What I call the "computer layer" is not itself fixed but rather changes over time. As hardware and software keep evolving and as the computer is used for new tasks and in new ways, this layer undergoes continuous transformation. The new use of the computer as a media machine is a case in point. This use is having an effect on the computer's hardware and software, especially on the level of the human-computer interfact, which increasingly resembles the interfaces of older media machines and cultural technologies. (pg. 46)

Question for all: *Who makes computers and determines how they are used?*

## Lecture: Conditionals & Events

### Coding Glossary
<table>
<tbody>
<tr><td>boolean</td><td>in reference to boolean expression, can be 

`true` or `false`, `0` or `1`

</td></tr>
<tr><td>conditional statement</td><td>uses specific phrases

`if`, `else if`, and `else` 

uses comparison and logical operators

</td></tr>
</tbody>
</table>

#### Comparison Operators

In an expression, we have seen both assignment (`=`), and mathematical operators (`+`, `-` etc). We can also use comparison operators to compare between two values of a variable against a number. 

This is a way for us to create environments that have particular logic to the interaction, and we need to be explicit about what we are telling the computer in order to make the interaction happen. 

| comparison operators| | 
|---|---|
| equal | `==`
| NOT equal | `!=`
| strict equal | `===`
| strict NOT equal | `!==`
| greater than | `>`
| greater than or equal to | `>=`
| less than | `<`
| less than or equal to | `<=`

When we use comparison operators in an expression, it would look something like:
```js
let num = 1

num < 15 // what does this evaluate to? is it being used anywhere?
```

Comparison expressions evaluate to either `true` or `false`, which is a `boolean`. 

#### Differences Between `=`, `==` and `===`?

These are all different syntaxes!
<table>
<tbody>
<tr><td>assignment</td><td>
gives a value to a variable

`=`

</td></tr>
<tr><td>comparison</td><td>checks if two values (like strings or numbers) are equal

`==`

</td></tr>

<tr><td>strict comparison</td><td>checks if two values are even more equal (ie. matches capitalization)

`===`

</td></tr>
</tbody>
</table>

So we should know the distinct differences between `=` and `==`, but we should ***never*** be using `===`. 

### Conditional Statements

A conditional statement is an expression that evaulates to `true` or `false` and does code based on that action. Think of it like a flowchart:

<img src="https://kagi.com/proxy/conditional-statements-3-638.jpg?c=OvWOGeaOTSdcGCVl2otm07WhSg9hGsLVk3dKvcnxgwpckV6LOqfeUCn4AcSIFEk4dB-yGQzgYeV0Enh4Sj1xS2Pxgj0IpDrJuQYuj02WnwdD8RfZGbz1JgOUdgk1dK9qv36szAsSWtnbWVjDDdW_GvZhi6rZFYLUDX-hUV6W6AI%3D" width="400px">

We write conditional statements using the syntax `if()` and putting our comparison expression inside the `()`. We also need `{}`, so any code inside of the if-statement's `{}` will be locked behind that logic, and won't execute unless the comparison expression evaluates to `true`. 

```js
let num = 1

fill('red')

if (num < 7){
    fill('green')
}

circle(width/2, height/2, 30)
```

If statements need a different syntax that changes the logic of the flowchart. This is where logical operators come in. We can determine if something has more than one conditional expression, but only if the logical operators are true. 

#### Nested Conditional Statements

If statements can be nested, or written inside, of one another. 

```js
let num1 = 10
let num2 = 20

fill('red')

if(num1 < 7){
    if(num2 < 25){
        fill('green')
    }
}

circle(width/2, height/2, 30)
```

This means that ***both*** comparisons need to evaluate to true in order for us to have a fill of green. But, we can also use a shorthand with the logical operators. 

#### Logical Operators

Logical operators allow us to use more than one expression at a time. 

| logical operators | |
|---|---|
| AND | `&&` if both expressions evaluate to true |
| OR | `\|\|` if either side of the expression evaluates to true |
| NOT | `!` if the expression is true, make it false

So if we wanted to use more than one comparison expression, we need to determine how their logic connects to the previous expression. 
This is different functions, where we can pass in multiple parameters delineated by a period, eg. `fill(255, 0, 0)`.

##### `&&`
```js
let num1 = 10
let num2 = 20

if(num1 < 7 && num2 < 25){
    fill('green')
}
```

This does the exact same thing as the example code above, where we nested one if statement inside the other. But now, we need to think about the resulting booleans (from the comparison expressions) + the operators they use. So, we need to evaluate each side of the expression, and then evaluate their total, similar to order of operations. 

First, we look at `num1 < 7`, which evaluates to?
Then, we look at `num2 < 25`, which evaluates to?

If it uses the `&&` syntax, BOTH sides need to be true in order to evaluate to true. 

##### `||`
With `||`, only ONE expression needs to be true. 
```js
let num1 = 10
let num2 = 20

if(num1 < 7 || num2 < 25){
    fill('green')
}
```
So in this example, the fill would be green because ONE side of the logic operator is true. 

##### `!`

The NOT operator does a couple of things, but it also means opposite. So it also allows us to assign boolean variables to the opposite of what it was previously. Think of it as multiplying by `-1`. 

```js
let event = false

// if something happens, set event to be the opposite of what it was previously
event = !event

```

#### Cascading If-Statements

With if-statements, we can cascade them and make an entire flowchart with our code. So `if` something happens, do this. `otherwise`, do something else. 

The way this is written in code is using `if`, `else if` and `else`. `if()` and `else if()` need to have a conditional statement inside the parenthesis, but `else` does NOT have a parenthesis because it is a catch all. 

```js
let num = 1
if(num < 7){
    fill('green')
} else if(num < 10){
    fill('blue')
} else{
    fill('red')
}
circle(width/2, height/2, 60)
```

### Events

<table>
<tbody>
<tr><td>event</td><td>something that happens based off user input
</td></tr>
<tr><td></td><td>

`mouseX`, `mouseY`, `mousePressed()`
</td></tr>
</tbody>
</table>

There are [lots of different types of events in p5.js](https://p5js.org/reference/#Events)

Specifically in this class, we will look at keyboard and mouse events. 

#### Difference between `mousePressed()` and mouseIsPressed

Or any other function vs. variable in events. 

We know that `mousePressed()` is a function because of `()`
* this happens ONE time when the mouse button is pressed

`mouseIsPressed` is a variable
* this is a `boolean` that evaluates to `true` or `false` if the mouse is CURRENTLY being pressed (and held down)

## Assignment

Due Class 4:

Do:
- [ ] In-Class Practice #3
- [ ] Complete Exercise #2
