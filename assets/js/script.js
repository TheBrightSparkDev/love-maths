document.addEventListener("DOMContentLoaded",function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type")==="submit"){
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
}
)
/**
 * generates two random numbers so that the user will see the question they
 * have to answer.
 */
function runGame(){
    let num1 = Math.floor(math.random()*25) + 1;
    let num2 = Math.floor(math.random()*25) + 1;
}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}
function displayDivideQuestion(){
    
}