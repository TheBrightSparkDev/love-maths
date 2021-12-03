document.addEventListener("DOMContentLoaded",function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type")==="submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }
    document.getElementById("answer-box").addEventListener("keydown",function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    })
    runGame("addition");
})
/**
 * generates two random numbers so that the user will see the question they
 * have to answer.
 */
function runGame(gameType){
    document.getElementById("answer-box").value="";
    document.getElementById("answer-box").focus();
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;
    if (gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    }else if(gameType === "multiply"){
        displayMultiplyQuestion(num1,num2);
    }else if (gameType === "subtract"){
        displaySubtractQuestion(num1,num2);
    }else if(gameType === "division"){
        displayDivideQuestion(num1,num2);
    }else {
        alert(`unknown game type: ${gameType}`)
        throw(`unknown game type: ${gameType} Aborting!`)
    }
}
/**
 * checks if the answer is correct.
 */
function checkAnswer(){
   let userAnswer = parseInt(document.getElementById("answer-box").value);
   let calculatedAnswer = calculateCorrectAnswer();
   let isCorrect = userAnswer === calculatedAnswer[0];
   if (isCorrect){
       alert("You got it right!")
       incrementScore();
   } else { alert(`aww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
   incrementWrongAnswer();
}
   runGame(calculatedAnswer[1]);
}
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operator = document.getElementById("operator").innerText;
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    }if (operator === "-"){
        return [operand1 - operand2, "subtract"];
    }    if (operator === "x"){
        return [operand1 * operand2, "multiply"];
    }    if (operator === "/"){
        return [operand1 / operand2, "division"];
    }     else {
        alert(`Unimplemented Operator ${operator}`)
        throw `Unimplemented Operator ${operator} Aborting!` 
}
}
/**
 * 
 */
function incrementScore(){
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
function displayAdditionQuestion(operand1,operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}
function displaySubtractQuestion(operand1,operand2){
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
       
}
function displayMultiplyQuestion(operand1,operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";    
}
function displayDivideQuestion(operand1,operand2){
    let answer = operand1 * operand2;
    document.getElementById("operand1").textContent = answer;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";    
}