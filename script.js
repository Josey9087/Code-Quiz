Start=document.getElementById("start")
DisTime = document.getElementById("time");
Quiz = document.getElementById("Test")
questions1= document.getElementById("Questions")
WrongRight=document.querySelector(".Opacity")
end=""

Start.addEventListener('click',function(){
  setTime()
  start1=document.getElementById("On")
  start2=start1.setAttribute('id', 'hide2')
  Show1 = document.querySelector(".hide1")
  go1=Show1.setAttribute('class', 'Test')
  first()
})

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

var secondsLeft = 90;

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

function sixth(){ Quiz.addEventListener('click', function question(event){
  questions1= document.getElementById("Questions")
  end="Stop"
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

function final(){
  hide=document.querySelector(".Test")
  hide1=hide.setAttribute('class', 'hide1')
  show=document.querySelector(".hide")
  show1=show.setAttribute('class', 'Show')
  score=document.querySelector(".score")
  score.textContent="Your final score is: " +secondsLeft;

}




function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    DisTime.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      DisTime.textContent="Time: ";
    }
    if(end=="Stop"){
      clearInterval(timerInterval)
      DisTime.textContent = "Time: ";
    }

  }, 1000);
}
