var inquirer = require ("inquirer");

function BasicCard(front, back){
  this.front = front;
  this.back = back;
};

var firstPresident = new BasicCard("Who was the 1st President of the United States?", "George Washington");

function flashCardSwitch(front,back){
  if(process.argv.length <= 2){
    console.log(firstPresident.front);
  }
  else{
    console.log(firstPresident.back);
  }
};

flashCardSwitch();


function ClozeCard(text, cloze){
  this.partial = "...was the ...President of the United States"
  this.text = ["35th ", "42nd ", "44th"];
  this.cloze = ["JFK", "Bill Clinton", "Barack Obama"];
  this.flashcardFront = function(){
  
    inquirer.prompt([

    {
      type: "input",
      name: (this.cloze + ", " + this.text),
      message: this.partial,
      filter: function () {
    return new Promise(this.cloze + " was the " + this.text  + " President of the United States.");
      },
    }

]).then (function(){
  for (var i=0; i < 3; i++){
    if(ClozeCard.text[i] === ClozeCard.cloze[i]){
      console.log(this.cloze[i] + " was the " + this.text[i]  + " President of the United States.");
     }
    else{
      console.log("Oops, there was an error");
    }
  }
}); 
}
};

var firstPresidentCloze = new ClozeCard(ClozeCard.text, ClozeCard.cloze);
// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

firstPresidentCloze.flashcardFront();
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText); 

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 
