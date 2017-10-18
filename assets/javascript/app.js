//Object containing questions/answers, as well as differentiating correct answer
var whoA = {
    quest: "What is the title of the first episode featuring the 10th Doctor?",
    choices: {
        ansA: "Plastic Christmas",
        ansB: "Elastic Christmas",
        ansC: "Violet",
        cor: "Rose"
    }
}
var whoB = {
    quest: "If you were to come face to face with a Dalek, what you most likely hear it say?",
    choices: {
        ansA: "Eradicate",
        ansB: "Eliminate",
        ansC: "Evaluate",
        cor: "Exterminate"
    }
}
var whoC = {
    quest: "In the episode <i>A Good Man Goes to War</i>, the Doctor gives Col. Manton a new name. What was the new name?",
    choices: {
        ansA: "Col. Surrender",
        ansB: "Col. Bravery",
        ansC: "Col. Sadface",
        cor: "Col. Runaway"
    }
}
var whoD = {
    quest: "Which of the following is NOT one of the names used by the character played by Maisie Williams?",
    choices: {
        ansA: "Me",
        ansB: "Ashildr",
        ansC: "The Knightmare",
        cor: "Arya",
    }
}
var whoE = {
    quest: "How long did Rory stand guard over the Pandorica while Amy was trapped inside?",
    choices: {
        ansA: "2 years",
        ansB: "20 years",
        ansC: "200 years",
        cor: "2,000 years"
    }
}
var whoF = {
    quest: "By what name is Melody Pond best known?",
    choices: {
        ansA: "Clara Oswald",
        ansB: "Rose Tyler",
        ansC: "Martha Jones",
        cor: "River Song"
    }
}
var whoG = {
    quest: "What famous artist did Amy and the Doctor go back in time to help?",
    choices: {
        ansA: "Jackson Pollock",
        ansB: "Leonardo da Vinci",
        ansC: "Michaelangelo",
        cor: "Vincent van Gogh"
    }
}
var whoH = {
    quest: "What performer played the War Doctor?",
    choices: {
        ansA: "Simon Pegg",
        ansB: "Emma Thompson",
        ansC: "Emma Watson:",
        cor: "John Hurt"
    }
}
var whoI = {
    quest: "What does TARDIS stand for?",
    choices: {
        ansA: "Temporaral Aerial Redistributing Device Integration System",
        ansB: "Technical Array Randomizer Deployment in Science",
        ansC: "Terminal Alloy Restrictive Development Inverting Scenario",
        cor: "Time and Relative Dimension in Space"
    }
}
var whoJ = {
    quest: "What terrifying alien species is introduced in the episode <i>Blink</i>?",
    choices: {
        ansA: "The Cybermen",
        ansB: "The Atraxi",
        ansC: "The Salarians",
        cor: "The Weeping Angels"
    }
}
var whoK = {
    quest: "What Doctor Who spinoff's title is an anagram of Doctor Who?",
    choices: {
        ansA: "Hoot Crowd",
        ansB: "Hot Rod Cow",
        ansC: "Two Cod Roo",
        cor: "Torchwood"
    }
}
var whoL = {
    quest: "What ultimately happens to Amy and Rory?",
    choices: {
        ansA: "They're killed by the Weeping Angels",
        ansB: "They are converted into Cybermen",
        ansC: "They cease to have existed after standing too close to the crack in spacetime",
        cor: "They live long and presumably happy lives together"
    }
}
var whoM = {
    quest: "Which word or phrase is not commonly said by the 11th Doctor?",
    choices: {
        ansA: "Geronimo!",
        ansB: "Bowties are cool",
        ansC: "Come along, Pond",
        cor: "Allons-y!"
    }
}
var whoN = {
    quest: "What TV show is Rose forced to play a futuristic, deadly version of in the episode Bad Wolf?",
    choices: {
        ansA: "Big Brother",
        ansB: "Who Wants to be a Millionaire",
        ansC: "Survivor",
        cor: "The Weakest Link"
    }
}
var WhoO = {
    quest: "In the first season, who is established to be the oldest living being in the universe?",
    choices: {
        ansA: "Lady Cassandra",
        ansB: "Jack Harkness",
        ansC: "Professor Yana",
        cor: "The Face of Boe"
    }
}
var whoP = {
    quest: "The 13th Doctor will have the distinction of the first version to be played by a woman. What is the appropriate response to this news?",
    choices: {
        ansA: "I'm a giant loser and I hate this news because the Doctor has always been a man",
        ansB: "I suck because I think this is terrible because I'm an anonymous misogynist Internet troll",
        ansC: "I will die alone because I can't handle the Doctor being played by a woman",
        cor: "Dude, that's awesome!"
    }
}
var whoQ = {
    quest: "According to history books, by what name is Rory best known?",
    choices: {
        ansA: "Captain Jack",
        ansB: "The Face of Boe",
        ansC: "Col. Runaway",
        cor: "The Last Centaurian"
    }
}
var whoR = {
    quest: "How long was the Doctor trapped in the Confession Dial?",
    choices: {
        ansA: "2 years",
        ansB: "2,000 years",
        ansC: "2 million years",
        cor: "2 billion years"
    }
}
//Array of object names
var questions = [whoA, whoB, whoC, whoD, whoE, whoF, whoG, whoH, whoI, whoJ, whoK, whoL, whoM, whoN, WhoO, whoP, whoQ, whoR]
//var ansChoices = [obj.choices.ansA, obj.choices.ansB, obj.choices.ansC, obj.choices.cor]
//script to randomly choose question from above array
obj = shuffle(questions);
console.log(obj);
//splice method

//display question and answer choices (choices as buttons)

//display timer

//screen showing user selected correct answer/displaying 
//their correct answer in green - timed

//screen showing user selected incorrect answer/displaying 
//correct answer in red - timed

//add various related images to answer screen - this will look so dope.

//define reset function

//show results page with number of questions right/wrong
//restart button (calls reset function)

//create time-out function that hides question/answers

//
console.log(whoC.quest);
