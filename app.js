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

const animalArray = [
    {
        name: 'Fred',
        species: 'ostrich',
        type: 'bird',
        diet: 'omnivore',
        age: 6,
        isSolitary: false
    },
    {
        name: 'Leonard',
        species: 'lion',
        type: 'mammal',
        diet: 'carnivore',
        age: 12,
        isSolitary: true
    },
    {
        name: 'Perry',
        species: 'porpoise',
        type: 'fish',
        diet: 'carnivore',
        age: 3,
        isSolitary: false
    },
    {
        name: 'Wilma',
        species: 'owl',
        type: 'bird',
        diet: 'carnivore',
        age: 2,
        isSolitary: false
    },
    {
        name: 'Stewart',
        species: 'koala',
        type: 'mammal',
        diet: 'herbivore',
        age: 10,
        isSolitary: false
    },
    {
        name: 'Finnegan',
        species: 'shark',
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
    return birdPen
}

function penTheMammals(animalArray) {
    let mammalPen = []
    animalArray.forEach(a => {
        if (a.type == 'mammal') {
            mammalPen.push(a)
        }
    })
    return mammalPen
}

function penTheFish(animalArray) {
    let fishPen = []
    animalArray.forEach(a => {
        if (a.type == 'fish') {
            fishPen.push(a)
        }
    })
    return fishPen
}

// NOTE Challenge is to refactor these functions and create a reusable function that sorts all the animals into pens

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
    let zoo = createZooObject(animalArray)
    zoo.fishPen = fishPen;
    zoo.birdPen = birdPen;
    zoo.mammalPen = mammalPen;

    return zoo

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