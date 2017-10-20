//Array of objects containing questions/answers, as well as differentiating correct answer
var questions = [{
    quest: "What is the title of the first episode featuring the 10th Doctor?",
    choices: ["Plastic Christmas", "Elastic Christmas", "Violet", "Rose"]
},
{
    quest: "If you were to come face to face with a Dalek, what you most likely hear it say?",
    choices: ["Eradicate", "Eliminate", "Evaluate", "Exterminate"]
},
{
    quest: "In the episode <i>A Good Man Goes to War</i>, the Doctor gives Col. Manton a new name. What was the new name?",
    choices: ["Col. Surrender", "Col. Bravery", "Col. Sadface", "Col. Runaway"]
},
{
    quest: "Which of the following is NOT one of the names used by the character played by Maisie Williams?",
    choices: ["Me", "Ashildr", "The Knightmare", "Arya",]
},
{
    quest: "How long did Rory stand guard over the Pandorica while Amy was trapped inside?",
    choices: ["2 years", "20 years", "200 years", "2,000 years"]
},
{
    quest: "By what name is Melody Pond best known?",
    choices: ["Clara Oswald", "Rose Tyler", "Martha Jones", "River Song"]
},
{
    quest: "What famous artist did Amy and the Doctor go back in time to help?",
    choices: ["Jackson Pollock", "Leonardo da Vinci", "Michaelangelo", "Vincent van Gogh"]
},
{
    quest: "What performer played the War Doctor?",
    choices: ["Simon Pegg", "Emma Thompson", "Emma Watson:", "John Hurt"]
},
{
    quest: "What does TARDIS stand for?",
    choices: ["Temporaral Aerial Redistributing Device Integration System", "Technical Array Randomizer Deployment in Science", "Terminal Alloy Restrictive Development Inverting Scenario", "Time and Relative Dimension in Space"]
},
{
    quest: "What terrifying alien species is introduced in the episode <i>Blink</i>?",
    choices: ["The Cybermen", "The Atraxi", "The Salarians", "The Weeping Angels"]
},
{
    quest: "What Doctor Who spinoff's title is an anagram of Doctor Who?",
    choices: ["Hoot Crowd", "Hot Rod Cow", "Two Cod Roo", "Torchwood"]
},
{
    quest: "What ultimately happens to Amy and Rory?",
    choices: ["They're killed by the Weeping Angels", "They are converted into Cybermen", "They cease to have existed after standing too close to the crack in spacetime", "They live long and presumably happy lives together"]
},
{
    quest: "Which word or phrase is NOT commonly said by the 11th Doctor?",
    choices: ["Geronimo!", "Bowties are cool", "Come along, Pond", "Allons-y!"]
},
{
    quest: "What TV show is Rose forced to play a futuristic, deadly version of in the episode <i>Bad Wolf</i>?",
    choices: ["Big Brother", "Who Wants to be a Millionaire", "Survivor", "The Weakest Link"]
},
{
    quest: "In the first season, who is established to be the oldest living being in the universe?",
    choices: ["Lady Cassandra", "Jack Harkness", "Professor Yana", "The Face of Boe"]
},
{
    quest: "According to history books, by what name is Rory best known?",
    choices: ["Captain Jack", "The Face of Boe", "Col. Runaway", "The Last Centaurian"]
},
{
    quest: "How long was the Doctor trapped in the Confession Dial?",
    choices: ["2 years", "2,000 years", "2 million years", "2 billion years"]
}]

//Array of answer choices
//script to randomly choose question from above array
//splice method


//display question and answer choices (choices as buttons)
//sort answer choices so they always appear in a different order
function pickQuests() {
    questions.sort(function sortQuests(a, b) {
        return 0.5 - Math.random()
    });
    questions.splice(9, 7);
};
function choiceButs(i) {
    questions[i].choices.sort(function sortButs(a, b) {
        return 0.5 - Math.random();
        document.getElementById("optionOne").innerHTML = questions[i].choices[0];
        document.getElementById("optionTwo").innerHTML = questions[i].choices[1];
        document.getElementById("optionThree").innerHTML = questions[i].choices[2];
        document.getElementById("optionFour").innerHTML = questions[i].choices[3];
    });
};
for (i = 0; i < 10; i += 1) {
    document.getElementById("question").innerHTML = questions[i].quest;
    pickQuests();
    choiceButs(i);
    console.log(questions[i].quest);
    console.log(questions[i].choices);
};





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
