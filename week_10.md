# Week 10: 10/29/25

## Agenda

1. [Housekeeping](#Housekeeping) 
2. [Reading #3 Discussion](#Reading-#3-Discussion)
3. Review: In-Class 7
4. Tutorial: Generated Sound + Microphone
5. Review: Project #3 Proposal
6. Demos and Videos

## Housekeeping

* attendance
* talk by chia amisola tonight 10/29

## Reading #3 Discussion

1. What do computer programs -- and, paradigmatically, human beings -- need to know about the external world in order to build plausible visual representations of it. What kind of cognitive activity is involved in the making and reading of those representations?
2. If what AARON is making is not [art](https://en.wikipedia.org/wiki/Art), what is it exactly, and in what ways, other than its origin, does it differ from the 'real thing?' If it is not thinking, what exactly is it doing?

## Review: In-Class 7

* What questions do we have?

## Tutorial: Generated Sound + Microphone

### Generating Sound

Each note that exists from instruments is related to a specific frequency. For example, a [piano](https://en.wikipedia.org/wiki/Piano_key_frequencies) can be broken down by [this chart](https://upload.wikimedia.org/wikipedia/commons/a/ad/Piano_key_frequencies.png)

What this means for us is that we can generate tones by using the basic frequency (in the hz units) and electronically mimic the sound waves coming from each place. 

We can mathematically create a scale by seeing what is the ratio between the note, the hz, and the ratio. 

| note | hz | ratio | 
|---|---|---|
| C | 262 | 1 | 
| D | 294 | 1.122 | 
| E | 311 | 1.189 |
| F | 349 | 1.335 | 
| G | 392 | 1.498 | 
| A | 415 | 1.587 | 
| B | 466 | 1.782 |

#### Modifying Sound Files based on Freq (HZ)

The `.rate()` method that exists on sound files allows us to use this ratio to create a new tone!

#### Using Oscillators

We can customize sound files using the frequency, but we can also create new tones using the oscillator class in p5.sound.

```js
// p5.Oscillator takes 2 parameters:
// 1. frequency (note) to be played
// 2. type of waveform (sine, triangle, square, sawtooth)
let osc = new p5.Oscillator(261, "triangle")
```

The frequency is determined by the note (see above table), and the waveform is the literal sound wave that moves through the air. We are mimicking this electronically. 

### Microphone Input

We can create microphone input using the `new p5.AudioIn()`. This uses the class syntax of `new` to create an instance of the AudioIn class, and we can assign that to a variable. 

```js
let mic = new p5.AudioIn()
```

Once we have created it, we need to start the audio input.

```js
mic.start()
```

We can measure the volume of the microphone using
```js
mic.getLevel()
```

## Review: Project #3 Proposal

## Demos and Videos