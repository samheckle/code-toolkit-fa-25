# Week 13: 11/19/25

## Agenda

1. [Housekeeping](#Housekeeping) 
2. [Reading Discussion #4](#reading-discussion)
3. [External Data](#external-data)
4. [Project 5 Research Review](#project-5-research)
5. [Demos and Videos](#demos-and-videos)

## Housekeeping

* attendance
* upcoming assignment
* later in the demo we will need an api key from https://www.omdbapi.com/ 

## Reading Discussion

> Names are functionally territories. I become a landscape...Language shapes worlds and selves, drawing the territories that we then inhabit. Naming then, is placemaking: as naming identifies a domain of control, it becomes the act of domaining itself.

What digital territories do you inhibit? How did  your online persona (username, domain name, other identities you might be referred as) become to be? How is this different from your "birth" name? 

> The cloud is no longer just a warehouse. It is a climate model, a forecasting machine. And just as weather was institutionalized mostly for war and profit, memory is now being captured, modeled, and selectively mediated not just by the platforms we see (TikTok, Instagram), but by the cloud providers, ad networks, and analytics firms behind them. These systems sell our attention through targeted advertising, shape daily tools like search, maps, and recommendation feeds, and in some cases extend into defense or surveillance work. All of it happens largely outside our control.

How do you see yourself disengaging from these systems? How do you imagine continued use of them going forward?

> To program a television show is to schedule or to broadcast it; to program a computer is to produce a series of stored instructions that supposedly guarantee—and often stand in for—a certain action. One is descriptive, the other prescriptive.

What role does the algorithm play in prescribing labels to you? Does that match the descriptions you have about yourself?

## External Data

### String Variable Types

Going back to class 2, we talked about different types of variables. But, strings (or words), have a lot of [special properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) we can use to manipulate the text. 

Take this [starter code](https://editor.p5js.org/samheckle/sketches/UDghY0Ha1r), and we will work with manipulating the `.txt` file with our javascript.

### JSON

JSON (pronounced jay-son), is another type of file format used commonly to send data between clients and servers. 

![data between client and server](https://kagi.com/proxy/OIP.5b9URi8HKSr9A9f-jvmxCQHaFM?c=3SgynE8ofVcfX71I7M3hSy7-8GsGNVaWMLYt1IFzJZWe-Af51hnWao5boloRrMRQWp0zt3nZ0TrRpU3qndK3MVnBwghYfckdGsgNikjryEM6-BH_VdsWux364VwLaz29)

We can retrieve these files using an API (application programming interface), which is the way in which we can ask for and receive data. 

The best way to do this in plain javascript is to use the [`fetch()` api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). 

### `fetch()`

In this example, we will be using the [OMDB api](https://www.omdbapi.com/), which we generated the token for at the beginning of class. We need to construct the request with javascript.

First, we need to say exactly what we are asking for in the request. We use JavaScript's native [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). This is in object format, which allows us to say what information we are giving, including our `token` that allows us to make the request.

```js

    const params = new URLSearchParams({
        apikey: "your-api-key-from-email",
        s: "movie-you-are-searching-for",
        type: "movie"
    })

    const url = "http://www.omdbapi.com/?" + params
```

Then we need to construct the URL.

```js
    const url = "http://www.omdbapi.com/?" + params
```

Then we need to use `fetch()` with this 

### More Interesting data and tools
* https://github.com/dariusk/corpora/
* https://tinytools.directory/

## Project #5 Research

## Demos and Videos

* Coding Train [Data & API Playlist](https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)

