var DisTime = document.getElementById("time");
var Quiz = document.querySelector(".Test")


question= document.getElementById("Questions")

questioncontent= question.getAttribute("data-1")
question.textContent=questioncontent
answer1=document.getElementById("answer1")
answer2=document.getElementById("answer2")
answer3=document.getElementById("answer3")
answer4=document.getElementById("answer4")

state1=answer1.getAttribute("data-1")
answer1.textContent=state1

state2=answer2.getAttribute("data-1")
answer2.textContent=state2

state3=answer3.getAttribute("data-1")
answer3.textContent=state3

state4=answer4.getAttribute("data-1")
answer4.textContent=state4
var secondsLeft = 10;

Quiz.addEventListener('click', function(event){
    tar = event.target
    state = tar.getAttribute("data-state")
    console.log(state)
    if(state=="Yes"){
        question.textContent=question.getAttribute("data-2")
    }
    else{
        secondsLeft+=7;
    }
})


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    DisTime.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      DisTime.textContent=" ";
    }

  }, 1000);
}

setTime()