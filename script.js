Show = document.querySelector(".hide")
Show1 = document.querySelector(".hide1")
// go=Show.setAttribute('class', 'position')
// go1=Show1.setAttribute('class', 'Test')
DisTime = document.getElementById("time");
Quiz = document.querySelector(".Test")


question= document.getElementById("Questions")

questioncontent= question.getAttribute("data-1")
question.textContent=questioncontent
answer1=document.getElementById("answer1")
answer2=document.getElementById("answer2")
answer3=document.getElementById("answer3")
answer4=document.getElementById("answer4")

answer1.textContent=answer1.getAttribute("data-1")

answer2.textContent=answer2.getAttribute("data-1")

answer3.textContent=answer3.getAttribute("data-1")

answer4.textContent=answer4.getAttribute("data-1")

var secondsLeft = 90;

Quiz.addEventListener('click', function(event){
    tar = event.target
    state = tar.getAttribute("data-1")
    console.log(state)
    if(state=="Booleans"){
        question.textContent=question.getAttribute("data-2")
        answer1.textContent=answer1.getAttribute("data-2")
        answer2.textContent=answer2.getAttribute("data-2")
        answer3.textContent=answer3.getAttribute("data-2")
        answer4.textContent=answer4.getAttribute("data-2")
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