// array of animals {
//     name, type, diet, age, isSolitary
// }

// Goal: split animals into pens based on type and need for solitude
// bring animals into zoo, sort them, feed them

// Sort by diet

// show sending in multiple arguments so that a function is reusable
// Show calling a function within another function
// getting and using a return from a called function

// FeedAnimal calls a sort function that determines what you feed the animal based on the return; hoisting


// first set of functions is feedBirds(), feedMammals(), feedFish()

const allAnimals = [
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
    }
]

// STUB before refactoring, sort the animals

function penTheBirds(animalArray) {
    let birdPen = []
    animalArray.forEach(a => {
        if (a.type == 'bird') {
            birdPen.push(a)
        }

    })
    let template = ''
    birdPen.forEach(b => {
        template += `<h1>${b.emoji}</h1>`
    })
    let birdElem = document.getElementById('birdPen')
    birdElem.innerHTML = template

}

function penTheMammals(animalArray) {
    let mammalPen = []
    animalArray.forEach(a => {
        if (a.type == 'mammal') {
            mammalPen.push(a)
        }
    })
    let template = ''
    mammalPen.forEach(m => {
        template += `<h1>${m.emoji}</h1>`
    })
    let mammalElem = document.getElementById('mammalPen')
    mammalElem.innerHTML = template
}

function penTheFish(animalArray) {
    let fishPen = []
    animalArray.forEach(a => {
        if (a.type == 'fish') {
            fishPen.push(a)
        }
    })
    let template = ''
    fishPen.forEach(f => {
        template += `<h1>${f.emoji}</h1>`
    })
    let fishElem = document.getElementById('fishPen')
    fishElem.innerHTML = template
}

// NOTE Challenge is to refactor these functions and create a reusable function that sorts all the animals into pens
// NOTE One option -- but can we refactor this further?
function penAnimals(animalArray) {
    let fishPen = []
    let birdPen = []
    let mammalPen = []
    animalArray.forEach(a => {
        if (a.type == 'fish') {
            fishPen.push(a)
        } else if (a.type == 'bird') {
            birdPen.push(a)
        } else {
            mammalPen.push(a)
        }
    })
    drawAnimals(fishPen)
    drawAnimals(birdPen)
    drawAnimals(mammalPen)

    // let zoo = createZooObject(animalArray)
    // zoo.fishPen = fishPen;
    // zoo.birdPen = birdPen;
    // zoo.mammalPen = mammalPen;

    // return zoo

}

function drawAnimals(arr) {
    let template = ''
    let animalType = ''
    arr.forEach(a => {
        template += `<h1>${a.emoji}</h1>`
        animalType = a.type
    })
    let animalElem = document.getElementById(`${animalType}Pen`)
    animalElem.innerHTML = template
}

function createZooObject(animalArray) {
    let zoo = {}
    animalArray.forEach(a => {
        zoo[`${a.type}Pen`] = []
    })
    return zoo
}


function sortAnimals(animalArray) {
    animalArray.forEach()
}
// called on button click
function feedBirds() {
    // decrease 
}

function feedAnimal(animalType) {
    const ret = getFood()

}

function getFood(animalType) {
    let foodType;
    if (animalType == 'carnivore') {
        // sort into pen
        foodType = 'meat'
    } else {
        foodType = 'plants'
    }
    sortAnimal()


}

function sortAnimal(isIntrovert) {
    if (isIntrovert) {

    }
}

// we are building a zoo and need to create pens depending on animal type, diet, and isSolitary, we will add a new pen depending on need

// penTheBirds(allAnimals)
// penTheFish(allAnimals)
// penTheMammals(allAnimals)
penAnimals(allAnimals)