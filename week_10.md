# Week 10: 10/29/25

## Agenda

1. [Housekeeping](#Housekeeping) 
2. [Reading #3 Discussion](#reading-3-discussion)
3. [Review: In-Class 7](#review-in-class-7)
4. [Tutorial: Generated Sound + Microphone](#tutorial-generated-sound--microphone)
5. [Tutorial: Web Hosting](#the-dom-and-web-hosting)
6. [Review: Project #3 Proposal](#review-project-3-proposal)
7. [Demos and Videos](#demos-and-videos)

## Housekeeping

* attendance
* [talk by chia amisola tonight 10/29](https://event.newschool.edu/cdlectureserieschiaamisola)
* makeup session TBD: this will be on zoom and will be optional drop in hours. Either Week of Nov 10 or Nov 17

## Reading #3 Discussion

1. What do computer programs -- and, paradigmatically, human beings -- need to know about the external world in order to build plausible visual representations of it. What kind of cognitive activity is involved in the making and reading of those representations?
2. If what AARON is making is not [art](https://en.wikipedia.org/wiki/Art), what is it exactly, and in what ways, other than its origin, does it differ from the 'real thing?' If it is not thinking, what exactly is it doing?

## Review: In-Class 7

* What questions do we have?

## Tutorial: Generated Sound + Microphone

### Generating Sound

Each note that exists from instruments is related to a specific frequency. For example, a [piano](https://en.wikipedia.org/wiki/Piano_key_frequencies) can be broken down by [this chart](https://upload.wikimedia.org/wikipedia/commons/a/ad/Piano_key_frequencies.png)

What this means for us is that we can generate tones by using the basic frequency (in the hz units) and electronically mimic the sound waves coming from each place. 

![sound waves](https://www.thedawstudio.com/wp-content/uploads/2016/08/Types_of_Soundwaves.jpg)

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

***Note: Some browsers hate this, so if you use Firefox or not Chrome, you might need to change the version of your p5 to 0.9.0 in `index.html`***



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

## Web Hosting

### Hosting our p5 code on the web for free

***These steps only need to be completed once.***

1. Make an account on [github](https://github.com/). 
2. Go to your profile and click repositories. 
3. Click "new"
4. Make a public repository. 
    * This can be named whatever: it depends if you want to use it just for the class demo / individual projects OR for the entire class. I default to make repos for entire classes.
    * A repository is like a folder in google drive. 
5. After creating, go into the project settings and click the pages tab on the left. 
6. Under the "Branch" section from the dropdown menu select "main" and push save. 
7. After a few minutes, we have a site that is live. 
    * We can check the status of the deployment under the "actions" tab. Once it is green, we can go to our site. 

We can visit our sites by going to the link: `https://[your-github-username].github.io/[your-repository-name]/[your-folder-where-index.html-is]/`

### Adding our p5 folder

We can download our p5 folder from the web editor. This also means if we want, we can code p5 on our own computers. Usually I use [VSCodium](https://vscodium.com/), but any text editor would be fine (Sublime, Atomic, VSCode, Notepad++ are all popular text editors)

Once we have our folder downloaded + extracted from zip, we need to rename it to something. Usually the name of the assignment is fine, but if you want to optimize the URL you can customize this name for that here. 

Then, in github, you press + and "Upload Files" and drag and drop that folder. 

## Review: Project #3 Proposal

Pair up with another group and give feedback!
* Think about the observe-analyze-interpret-evaluate system. 
* Try sketching out alternative solutions. 

## Demos and Videos
## Demos

* [using microphone input + recording](https://github.com/samheckle/code-toolkit-fa-25/blob/main/mycoolproject/sketch.js)
    * [live site](https://samheckle.github.io/code-toolkit-fa-25/mycoolproject/) hosted on github pages
* [oscillators basic](https://editor.p5js.org/samheckle/sketches/ZdEQ8a6H2)
    * creating oscillators using `p5.Oscillators`
* [oscillators advanced](https://editor.p5js.org/samheckle/sketches/v5ikJpKIU)
* [sound file rate](https://editor.p5js.org/samheckle/sketches/AHcHTCoFK)


### Videos
* [17.1: Loading and Playing sound](https://youtu.be/Pn1g1wjxl_0?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.3: Timing, Jumps and Cues](https://youtu.be/SfA5CghXw18?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.4: Amplitude Analysis](https://youtu.be/NCCHQwNAN6Y?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.5: Adding Sound Effects - video tutorial](https://youtu.be/40Me1-yAtTc?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.6: Sound Synthesis - video tutorial](https://youtu.be/Bk8rLzzSink?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.8: Microphone Input](https://youtu.be/wUSva_BnedA?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.9: Sound Visualization: Graphing Amplitude](https://youtu.be/jEwAMgcCgOA?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.10: Sound Visualization: Radial Graph](https://youtu.be/h_aTgOl9J5I?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW)
* [17.11: Sound Visualization: Frequency Analysis with FFT](https://www.youtube.com/watch?v=2O3nm0Nvbi4&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=11)