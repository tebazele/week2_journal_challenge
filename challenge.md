# Week 2 Challenge 

Welcome to the CodeWorks Zoo! In this challenge, you will use Javascript to sort zoo animals into pens. 

We're going to practice the art of refactoring our code to make it (1) more reusable and (2) to make sure our code is following the single-responsibility principle (each function does only one thing).

You're going to learn more about
- passing arguments into functions
- using parameters within functions
- setting default values for parameters
- using callback functions
- using returns from callback functions

Fork the following repository to your computer and use the app.js file to write your code as you work through this challenge.
[Week 2 Challenge](https://github.com/tebazele/week2_journal_challenge)

## Let's dive in!

#### Take a look at app.js
At the top of this file, you'll see an array called newAnimals. These are the animals you'll be bringing into your zoo. All of these animals need pens, but they need to be sorted very carefully. Animals that are alike in type can live together unless they are solitary (dangerous) - if an animal is listed as `isSolitary: true`, it must be placed in a pen by itself.

#### Go ahead and run bcw serve to see the page in localhost:8080. 
We've already created your zoo layout in the index.html. You'll see that there is are pens for birds, mammals, and fish as well as 5 pens for solitary animals.

#### Back in app.js
Below the newAnimal array, you'll see that we've already written three functions that place the animals into the correct pens. 

These functions do what they're supposed to do, but they're all very similar, meaning there's a lot of repeated code. And they're also complicated functions that have too many responsibilities. 

Let's take a look at what each function is doing.

```js
function penTheBirds() {
    // NOTE here, we declare an empty array to store the birds
    let birdPen = []
    // NOTE we look through the newAnimals array, find the birds, and store them in our birdPen
    newAnimals.forEach(a => {
        if (a.type == 'bird') {
            birdPen.push(a)
        }

    })
    // NOTE we draw birds to the page by looping through our new birdPen array and storing the emojis for each bird in birdEmojis
    let birdEmojis = '';
    for (let i = 0; i < birdPen.length; i++) {
        const bird = birdPen[i];
        birdEmojis += bird.emoji
    }
    // NOTE we grab the bird pen by its ID
    let birdElem = document.getElementById('birdPen')

    // NOTE we draw the bird emojis into the pen
    birdElem.innerHTML = `<h1>${birdEmojis}</h1>`
}
// NOTE here we call the function
penTheBirds()
```
The following function `penTheMammals` is almost identical with one additional check to make sure any solitary animals get their own pens. 

```js
newAnimals.forEach(a => {
        // NOTE Here, we check if our mammal is solitary (needs to be in a pen by itself) and draw it to "Solitary Pen 1"
        if (a.type == 'mammal' && a.isSolitary == true) {
            document.getElementById('solitaryPen1').innerHTML = `<h1>${a.emoji}</h1>`
        } else if (a.type == 'mammal' && a.isSolitary == false) {
            mammalPen.push(a)
        }
    })
```
Our penTheFish function also looks very similar to the other two functions. Let's see if we can fix that. 

##### Don't forget to comment out these function calls before moving on
`penTheBirds()`
`penTheMammals()`
`penTheFish()`

## Part 2: Refactoring

#### Refactor these functions to make one reusable function
Let's start with a little refactoring. Can we write a reusable sorting function called `penTheAnimals` that takes in two arguments "animalType" and "solitaryPenNumber"? Because not all the types have solitary animals, we'll set a default value of 0 so we only need to send in the `solitaryPenNumber` as an argument when we need it.

**HINT 1** If you're not sure how to begin writing the `penTheAnimals` function, try copying the code from `penTheFish` and changing 'fish' to 'animal' wherever it appears.

**HINT 2** Remember that the parameters 'animalType' and 'solitaryPenNumber' will be values we'll pass into the function when we invoke it. Use these parameters in your function. For example, when you refactor the first if statement, it should look like this: 
```js
if (a.type == animalType)
```

**HINT 3** Use string interpolation to target the correct solitaryPen: 
```js
 document.getElementById(`solitaryPen${solitaryPenNumber}`)
 ```

 ##### Uncomment the function calls below your `penTheAnimals` function to test it

## Part 3

#### More Refactoring
Awesome! We now have a function that's much more reusable! Let's do a little bit more refactoring right inside our function. Notice that we are checking the animal type in both our 'if' condition and our 'else if' condition. Let's fix that.

In the first line of our function, let's use the array method `filter` to create an array called `animalsByType` of only animals of type 'animalType'. [mdn Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Then, instead of running `newAnimals.forEach()`, only iterate over your filtered array: 
```js
animalsByType.forEach()
```

Then, rewrite the "if/else-if" statement to be a simple if/else statement that checks IF the animal is solitary and draws a solitary animal to it's special pen, or ELSE it pushes the social animals to the empty `animalPen` array.

##### Once your function is working, comment out the `penTheAnimals()` function calls before moving on to Part 4

## Part 4

#### Single-Responsibility Principle
We've done some excellent refactoring. The only problem is that this one function is still doing way too much. Remember that single-responsibility principle? Let's see what we can do to fix that too.

Let's start by moving the code that draws our **social animals** to the page into another function. (We'll worry about the solitary animals later.) This draw function will have two parameters, 'animalPenArray' and 'animalType' and we'll call it inside our `penTheAnimals` function.

**HINT 1** We've purposefully labeled the pens with IDs so you can target them with string interpolation: 
```js
let animalElem = document.getElementById(`${animalType}Pen`)
```
##### Uncomment the penTheAnimals3() function invocations to check your code and make sure to comment them back in before moving on to part 5

## Part 5
#### Using the return from one function to determine how another function handles data

Next, let's learn about *returning* data from one function so that it can be used by another. We've written the code out for you in this section so you can use it as an example. 

Take a look at the new function `isSolitaryCheck`. This function checks to see if `isSolitary` is false for *every* animal in our filtered array. It then returns true or false. What we get back from this function determines how we handle putting the animals into their pens in our `penTheAnimals` function.

##### Uncomment the penTheAnimals4 function invocations if you want see that this newest refactoring still draws our animals into their pens; don't forget to comment them back out again before moving on to part 5

## Part 5

#### Let's write two functions that return the arrays we need to draw
You'll probably note that the `isSolitaryCheck` function Part 4 doesn't really decrease the workload of our original penTheAnimals function. Let's do some more refactoring to make our code cleaner. 

We need to handle drawing the solitary animals to the page quite differently than we do the social animals, so let's separate the two processes into two functions.

We've written two functions, `penTheSocialAnimals(animalType)` and `penTheSolitaryAnimals()`. We've also refactored the `drawAnimals` function to be able to draw both social animals and solitary animals. 

Your challenge in Part 5 is to write the code for `filterSocialAnimalsByType` and `filterSolitaryAnimals`. Use the notes as hints, and remember we need these functions to return arrays that can be sent into our draw function. 

## Part 6
#### Part 6 is the final part of this challenge! Whew! 
Let's refactor our code once more so that we can call our `penTheAnimals` function without any arguments. We can get all the information we need by iterating over our `newAnimals` array. This final refactored function will 
- iterate through our `newAnimals` array once and filter the animals by type into three separate arrays (birdArray, mammalArray, and fishArray)
- Pass each array into our isSolitaryCheck function to check for solitary animals
- IF the check finds solitary animals, filter them out of the array
- draw the social animals
- filter through newAnimals again looking for solitary animals
- draw solitary animals