// Below are global variables that will be used in the code, some are grabbing areas of the html.
Start=document.getElementById("start")
DisTime = document.getElementById("time");
Quiz = document.getElementById("Test")
questions1= document.getElementById("Questions")
WrongRight=document.querySelector(".Opacity")
high=document.getElementById("Highscores")
end=""
submit=document.getElementById("save")
secondsLeft = 90;

// This is an event listener for the Start Quiz button, it will activate the timer as well as hide the orginal starting section and begin to display the quiz section.
// It will finally call the next function in the process.
Start.addEventListener('click',function(){
  setTime()
  start1=document.getElementById("On")
  start2=start1.setAttribute('id', 'hide')
  Show1 = document.querySelector(".hide1")
  go1=Show1.setAttribute('class', 'Test')
  first()
})

// This function is grabbing elements based on their id. It changes the text content of the sections displaying each question and each answer to
// data-1. Inside the data attribute is the question and answers that correspond to each other. It calls the next function in the process.
function first(){
  questions1= document.getElementById("Questions")
  questions1.textContent=questions1.getAttribute("data-1")
  answer1=document.getElementById("answer1")
  answer2=document.getElementById("answer2")
  answer3=document.getElementById("answer3")
  answer4=document.getElementById("answer4")

  answer1.textContent=answer1.getAttribute("data-1")

  answer2.textContent=answer2.getAttribute("data-1")

  answer3.textContent=answer3.getAttribute("data-1")

  answer4.textContent=answer4.getAttribute("data-1")
  second()
}

// This function is called when a button within the "Test" id is clicked. It is grabbing elements based on their id. 
// It checks to make sure what question the test is on since there are muliple functions
// being called by the same button. If the requirment for the order in which the questions are displayed is correct then,
// it displays if the answer was correct or wrong depending on the answer that was clicked. this is checked through the event target
// and compared to the answer which is correct. It changes the text content of the sections displaying each question and each answer to
// data-2. Inside the data attribute is the question and answers that correspond to each other. It calls the next function in the process.
function second(){Quiz.addEventListener('click', function (event){
  questions1= document.getElementById("Questions")
    if(questions1.textContent==questions1.getAttribute("data-1")){
      tar = event.target
      state2 = tar.getAttribute("data-1")
      console.log(state2)
      if(state2=="Booleans"){
        WrongRight.textContent="Correct"
        questions1= document.getElementById("Questions")
        questions1.textContent=questions1.getAttribute("data-2")
        answer1.textContent=answer1.getAttribute("data-2")
        answer2.textContent=answer2.getAttribute("data-2")
        answer3.textContent=answer3.getAttribute("data-2")
        answer4.textContent=answer4.getAttribute("data-2")
    }
    else{
        secondsLeft-=10;
        WrongRight.textContent="Wrong"
        questions1= document.getElementById("Questions")
        questions1.textContent=questions1.getAttribute("data-2")
        answer1.textContent=answer1.getAttribute("data-2")
        answer2.textContent=answer2.getAttribute("data-2")
        answer3.textContent=answer3.getAttribute("data-2")
        answer4.textContent=answer4.getAttribute("data-2")
    }
    third()
}})};

// This function is called when a button within the "Test" id is clicked. It is grabbing elements based on their id. 
// It checks to make sure what question the test is on since there are muliple functions
// being called by the same button. If the requirment for the order in which the questions are displayed is correct then,
// it displays if the answer was correct or wrong depending on the answer that was clicked. this is checked through the event target
// and compared to the answer which is correct. It changes the text content of the sections displaying each question and each answer to
// data-3. Inside the data attribute is the question and answers that correspond to each other. It calls the next function in the process.
function third(){Quiz.addEventListener('click', function question(event){
  questions1= document.getElementById("Questions")
  if(questions1.textContent==questions1.getAttribute("data-2")){
  tar = event.target
  state3 = tar.getAttribute("data-2")
  console.log(state3)
  if(state3=="Parentheses"){
      WrongRight.textContent="Correct"
      questions1= document.getElementById("Questions")
      questions1.textContent=questions1.getAttribute("data-3")
      answer1.textContent=answer1.getAttribute("data-3")
      answer2.textContent=answer2.getAttribute("data-3")
      answer3.textContent=answer3.getAttribute("data-3")
      answer4.textContent=answer4.getAttribute("data-3")
  }
  else{
      WrongRight.textContent="Wrong"
      secondsLeft-=10;
      questions1= document.getElementById("Questions")
      questions1.textContent=questions1.getAttribute("data-3")
      answer1.textContent=answer1.getAttribute("data-3")
      answer2.textContent=answer2.getAttribute("data-3")
      answer3.textContent=answer3.getAttribute("data-3")
      answer4.textContent=answer4.getAttribute("data-3")
  }
  fourth()
}})};

// This function is called when a button within the "Test" id is clicked. It is grabbing elements based on their id. 
// It checks to make sure what question the test is on since there are muliple functions
// being called by the same button. If the requirment for the order in which the questions are displayed is correct then,
// it displays if the answer was correct or wrong depending on the answer that was clicked. this is checked through the event target
// and compared to the answer which is correct. It changes the text content of the sections displaying each question and each answer to
// data-4. Inside the data attribute is the question and answers that correspond to each other. It calls the next function in the process.
function fourth() {Quiz.addEventListener('click', function question(event){
  tar = event.target
  questions1= document.getElementById("Questions")
    if(questions1.textContent==questions1.getAttribute("data-3")){
  state4 = tar.getAttribute("data-3")
  console.log(state4)
  if(state4=="All of the above"){
      WrongRight.textContent="Correct"
      questions1= document.getElementById("Questions")
      questions1.textContent=questions1.getAttribute("data-4")
      answer1.textContent=answer1.getAttribute("data-4")
      answer2.textContent=answer2.getAttribute("data-4")
      answer3.textContent=answer3.getAttribute("data-4")
      answer4.textContent=answer4.getAttribute("data-4")
  }
  else{
      WrongRight.textContent="Wrong"
      secondsLeft-=10;
      questions1= document.getElementById("Questions")
      questions1.textContent=questions1.getAttribute("data-4")
      answer1.textContent=answer1.getAttribute("data-4")
      answer2.textContent=answer2.getAttribute("data-4")
      answer3.textContent=answer3.getAttribute("data-4")
      answer4.textContent=answer4.getAttribute("data-4")
  }
  fifth()
}})};
// This function is called when a button within the "Test" id is clicked. It is grabbing elements based on their id. 
// It checks to make sure what question the test is on since there are muliple functions
// being called by the same button. If the requirment for the order in which the questions are displayed is correct then,
// it displays if the answer was correct or wrong depending on the answer that was clicked. this is checked through the event target
// and compared to the answer which is correct. It changes the text content of the sections displaying each question and each answer to
// data-5. Inside the data attribute is the question and answers that correspond to each other. It calls the next function in the process.
function fifth(){ Quiz.addEventListener('click', function question(event){
  questions1= document.getElementById("Questions")
    if(questions1.textContent==questions1.getAttribute("data-4")){
      tar = event.target
      state5 = tar.getAttribute("data-4")
      console.log(state5)
      if(state5=="Quotes"){
        WrongRight.textContent="Correct"
        questions1= document.getElementById("Questions")
        questions1.textContent=questions1.getAttribute("data-5")
        answer1.textContent=answer1.getAttribute("data-5")
        answer2.textContent=answer2.getAttribute("data-5")
        answer3.textContent=answer3.getAttribute("data-5")
        answer4.textContent=answer4.getAttribute("data-5")
  }
  else{
      WrongRight.textContent="Wrong"
      secondsLeft-=10;
      questions1= document.getElementById("Questions")
      questions1.textContent=questions1.getAttribute("data-5")
      answer1.textContent=answer1.getAttribute("data-5")
      answer2.textContent=answer2.getAttribute("data-5")
      answer3.textContent=answer3.getAttribute("data-5")
      answer4.textContent=answer4.getAttribute("data-5")
  }
  sixth()
}})};
// This function is called when a button within the "Test" id is clicked. It is grabbing elements based on their id. 
// It checks to make sure what question the test is on since there are muliple functions
// being called by the same button. If the requirment for the order in which the questions are displayed is correct then,
// it displays if the answer was correct or wrong depending on the answer that was clicked. this is checked through the event target
// and compared to the answer which is correct. It then sets the variable 'end' to "Stop" this will stop the timer in the another function.
// It calls the next function in the process.
function sixth(){ Quiz.addEventListener('click', function question(event){
  questions1= document.getElementById("Questions")
    if(questions1.textContent==questions1.getAttribute("data-5")){
      tar = event.target
      state5 = tar.getAttribute("data-5")
      console.log(state5)
      if(state5=="Terminal/Bash"){
        WrongRight.textContent="Correct"
        end="Stop"
  }
  else{
      WrongRight.textContent="Wrong"
      secondsLeft-=10;
      end="Stop"
  }
  final()
}})};

// This function hides the section with the quiz by changing the name of the class, this will hide them or display them in the css.
// It will set the content of the element that displays your score to the current amount of time left.
function final(){
  finalseconds=secondsLeft
  hide=document.querySelector(".Test")
  hide1=hide.setAttribute('class', 'hide1')
  show=document.querySelector(".hide2")
  show1=show.setAttribute('class', 'Show')
  score=document.querySelector(".score")
  score.textContent="Your final score is: " + finalseconds;

}
// An event listener for the "SAVE" button, it will activate a function.
// The function will stop the button from deleting the input right away through prevent.Default.
// It will save the input of your initals and place it into a a variable that contains objects. it will then save the time left.
// The array of object is saved into the local stoarage as the key "Player" and stringifyed. The next fucntions are called.
submit.addEventListener("click", function(event) {
  event.preventDefault();
  comment = document.getElementById("initials");
  var Player = {
    player: comment.value,
    score: finalseconds}
  
  localStorage.setItem("Player", JSON.stringify(Player));
    renderMessage();
    highscore()
  });
// This function uses the parse method to remove the object out of the string that was stringified in a prior function that was saved under the key "Player".
// It displays to the message class, the initals from the local stoarage and the seconds left that were saved to the storage corresponding with those initals.
function renderMessage() {
    var Highscore = JSON.parse(localStorage.getItem("Player"));
    document.querySelector(".message").textContent = Highscore.player+":"+ Highscore.score
    
  }

// This function hides the section where you can save your score and displays the section that displays the highscore.
function highscore(){
  show=document.querySelector(".Show")
  show1=show.setAttribute('class', 'hide2')
  show2=document.querySelector(".hide3")
  show12=show2.setAttribute('class', "Show1")
  }
  
// An event listener for the "View Highscore" button. It uses the parse method to remove the object out of the string that was stringified in a prior function and was saved under the key "Player".
// It displays the highscore which is grabbed from the local storage, as an alert.
high.addEventListener('click', function(){
  scores=JSON.parse(localStorage.getItem("Player"));
  alert("The highscore is:   " + scores.player+": " + scores.score)
})



// This function starts the timer by creating an interval which is set to 1000, this is equal to 1 second.
// The seconds left is displayed next ot the time.
// If the timer is equal to or less than 0 it will stop and call the function named final to stop the game even though all questiones aren't answered.
// If end is equal the "Stop" then the timer will stop and no longer display the time. the variable end becomes equal to stop when all questions are answered.
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    DisTime.textContent = "Time: " + secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      DisTime.textContent="Time: ";
      final()
    }
    if(end=="Stop"){
      clearInterval(timerInterval)
      DisTime.textContent = "Time: ";
    }

  }, 1000);
}
