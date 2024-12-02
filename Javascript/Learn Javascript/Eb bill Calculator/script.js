let btn = document.getElementById("bill"); 

btn.addEventListener("click", () => {
    let usage = Number(document.getElementById("input").value); 
    let amount = 0; 

  
    if (usage <= 50) {
        amount = usage * 0.75;
    } 
    else if (usage <= 150) {
        amount = 50 * 0.75 + (usage - 50) * 1;
    } 
    else if (usage <= 250) {
        amount = 50 * 0.75 + 100 * 1 + (usage - 150) * 1.3;
    } 
    else if (usage > 250) {
        amount = 50 * 0.75 + 100 * 1 + 100 * 1.3 + (usage - 250) * 1.5;
    }

    
    let result = document.getElementById("result");
    result.innerHTML = "Rs " + amount; 
});
