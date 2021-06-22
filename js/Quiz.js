class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide
    //write code here to hide question elements

    //write code to change the background color here
   background("blue")
    //write code to show a heading for showing the result of Quiz
   fill(0);
   textSize(30);
   text("Result of the Quiz",340, 50);
   text("----------------------------",320, 65);
    //call getContestantInfo( ) here
   getContestantInfo();

    //write condition to check if contestantInfor is not undefined
   if(allContestants !==undefined){
    debugger;
    var display_Answers = 230;
    fill("Blue");
    textSize(20);
    text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    var correctAns = "2";
        if (correctAns === allContestants[plr].answer){
          fill("Green")
          textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
        else{
          fill("red");
          display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
   }}
    //write code to add a note here
   
    //write code to highlight contest who answered correctly
    
  }

}
