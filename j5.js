const minimun = 19;
const maximum = 600;
const answer = Math.floor(Math.random()*(maximum - minimun + 1)) + minimun;

let attempt = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number between ${minimun} and ${maximum} .`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Enter a valid value`);
    }
    else if(guess < minimun || guess > maximum){
        window.alert(`Enter a valid value`);
    }
    else{
        attempt++;
        if(guess < answer){
            window.alert(`To Low! try again.`);
        }
        else if(guess > answer){
            window.alert(`To High! try again.`);
        }
        else{
            window.alert(`Correct The answer was ${answer} and it took you ${attempt} attempts.`);
            running = false;
        }
    }
    
}
