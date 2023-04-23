const newAnimals = [
    {
        name: 'Fred',
        species: 'swan',
        emoji: '🦢',
        type: 'bird',
        diet: 'omnivore',
        age: 6,
        isSolitary: false
    },
    {
        name: 'Leonard',
        species: 'lion',
        emoji: '🦁',
        type: 'mammal',
        diet: 'carnivore',
        age: 12,
        isSolitary: true
    },
    {
        name: 'Perry',
        species: 'porpoise',
        emoji: '🐬',
        type: 'fish',
        diet: 'carnivore',
        age: 3,
        isSolitary: false
    },
    {
        name: 'Wilma',
        species: 'owl',
        emoji: '🦉',
        type: 'bird',
        diet: 'carnivore',
        age: 2,
        isSolitary: false
    },
    {
        name: 'Stewart',
        species: 'koala',
        emoji: '🐨',
        type: 'mammal',
        diet: 'herbivore',
        age: 10,
        isSolitary: false
    },
    {
        name: 'Finnegan',
        species: 'shark',
        emoji: '🦈',
        type: 'fish',
        diet: 'carnivore',
        age: 17,
        isSolitary: true
    },
    {
        name: 'Carrie',
        species: 'kangaroo',
        emoji: '🦘',
        type: 'mammal',
        diet: 'herbivore',
        age: 8,
        isSolitary: false
    }
]


function penTheBirds() {
    let birdPen = []
    newAnimals.forEach(a => {
        if (a.type == 'bird') {
            birdPen.push(a)
        }
    })
    let birdEmojis = '';
    for (let i = 0; i < birdPen.length; i++) {
        const bird = birdPen[i];
        birdEmojis += bird.emoji
    }
    let birdElem = document.getElementById('birdPen')
    birdElem.innerHTML = `<h1>${birdEmojis}</h1>`
}


function penTheMammals() {
    let mammalPen = []
    newAnimals.forEach(a => {
        if (a.type == 'mammal' && a.isSolitary == true) {
            document.getElementById('solitaryPen1').innerHTML = `<h1>${a.emoji}</h1>`
        } else if (a.type == 'mammal' && a.isSolitary == false) {
            mammalPen.push(a)
        }
    })
    let mammalEmojis = '';
    for (let i = 0; i < mammalPen.length; i++) {
        const mammal = mammalPen[i];
        mammalEmojis += mammal.emoji
    }
    let mammalElem = document.getElementById('mammalPen')
    mammalElem.innerHTML = `<h1>${mammalEmojis}</h1>`
}


function penTheFish() {
    let fishPen = []
    newAnimals.forEach(a => {
        if (a.type == 'fish' && a.isSolitary == true) {
            document.getElementById('solitaryPen2').innerHTML = `<h1>${a.emoji}</h1>`
        } else if (a.type == 'fish' && a.isSolitary == false) {
            fishPen.push(a)
        }
    })

    let fishEmojis = '';
    for (let i = 0; i < fishPen.length; i++) {
        const fish = fishPen[i];
        fishEmojis += fish.emoji
    }
    let fishElem = document.getElementById('fishPen')
    fishElem.innerHTML = `<h1>${fishEmojis}</h1>`
}

// NOTE comment these function calls out before moving on to Part 2
penTheBirds()
penTheMammals()
penTheFish()


// STUB Part 2/3

function penTheAnimals(animalType, solitaryPenNumber = 0) {
    // YOUR CODE HERE
}

// NOTE uncomment these function invocations to test your penTheAnimals function
// penTheAnimals('bird')
// penTheAnimals('mammal', 1)
// penTheAnimals('fish', 2)


// STUB Part 4

function penTheAnimals3(animalType, solitaryPenNumber = 0) {
    // COPY & PASTE YOUR CODE FROM THE TOP OF YOUR penTheAnimals FUNCTION

    // NOTE send in the animalPen array and the animalType as arguments
    drawAnimals(animalPen, animalType)
}

function drawAnimals(animalPenArray, animalType) {
    // YOUR CODE HERE
}

// penTheAnimals3('bird')
// penTheAnimals3('mammal', 1)
// penTheAnimals3('fish', 2)

// STUB Part 5

function penTheAnimals4(animalType, solitaryPenNumber = 0) {
    let animalsByType = newAnimals.filter(a => a.type == animalType)
    let animalPen = []
    const canLiveTogether = isSolitaryCheck(animalsByType)
    // NOTE we can use the return from our isSolitaryCheck function in our if/else statement
    if (canLiveTogether) {
        drawAnimals(animalsByType, animalType)
    } else {
        animalsByType.forEach(a => {
            if (a.isSolitary == true) {
                document.getElementById(`solitaryPen${solitaryPenNumber}`).innerHTML = `<h1>${a.emoji}</h1>`
            } else {
                animalPen.push(a)
            }
        })
        drawAnimals(animalPen, animalType)
    }
}

function isSolitaryCheck(filteredArray) {
    // NOTE canLiveTogether will be true if none of the animals are solitary and false if any of the animals need to be isolated
    let canLiveTogether = filteredArray.every(a => a.isSolitary == true)
    return canLiveTogether
}

// penTheAnimals4('bird')
// penTheAnimals4('mammal', 1)
// penTheAnimals4('fish', 2)



// STUB Part 6
function penTheSocialAnimals(animalType) {
    let socialAnimalsByType = filterSocialAnimalsByType(animalType);
    drawAnimals2(socialAnimalsByType, animalType)
}

function penTheSolitaryAnimals() {
    let solitaryAnimalsByType = filterSolitaryAnimals();
    drawAnimals2(solitaryAnimalsByType)
}

function filterSocialAnimalsByType(animalType) {
    // NOTE Use filter to return an array of animals of animalType && isSolitary == false
    // YOUR CODE HERE
}

function filterSolitaryAnimals() {
    // NOTE use filter to return an array of animals where isSolitary == true
    // YOUR CODE HERE

}

function drawAnimals2(animalPenArray, animalType = '') {
    if (animalPenArray[0].isSolitary == false) {
        let animalEmojis = '';
        for (let i = 0; i < animalPenArray.length; i++) {
            const animal = animalPenArray[i];
            animalEmojis += animal.emoji
        }
        let animalElem = document.getElementById(`${animalType}Pen`)
        animalElem.innerHTML = `<h1>${animalEmojis}</h1>`
    } else {
        for (let i = 0; i < animalPenArray.length; i++) {
            const animal = animalPenArray[i];
            document.getElementById(`solitaryPen${i + 1}`).innerHTML = `<h1>${animal.emoji}</h1>`
        }
    }
}

// penTheSocialAnimals('bird')
// penTheSocialAnimals('mammal')
// penTheSocialAnimals('fish')
// penTheSolitaryAnimals()



// STUB Part 7
function penTheAnimals6() {
    // YOUR CODE HERE
}

// penTheAnimals6()