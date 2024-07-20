function rolldice(){
    const input = document.getElementById("input").value;
    const diceresults = document.getElementById("diceresults");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];
    for(let i = 0; i < input; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}">`);
    }
    diceresults.textContent = `Dice: ${values.join(", ")}.`;
    diceimages.innerHTML = images.join(``);
}