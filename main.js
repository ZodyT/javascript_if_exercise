const btn = document.getElementById('button1');

function random() {
    return Math.floor(Math.random() * 1000) + 1;
}

/*  OVERVIEW: Complete the function with a selection statment so it changes the

    div id="if-block"
    div id="else_if-block"
    div id="else-block"
*/


function buttonClick() {
    let text = document.getElementById("rng");
    let randomNumber = random();
    text.innerHTML = randomNumber;


    /* TODO: Change the styles of the 3 different HTML Div elements when the random number generated
        is less than 100,
        100 -> 500,
        and 500 -> 1000 (the number generated will always be between 1 - 1000)  
        (hint: if, else if, else) 
    */


    /*
        Use these CSS style rules for this exercise. (THE IF SECTION HAS BEEN DONE FOR YOU!!!)
    
        margin = '1px';
        borderRadius = '25px';
        border = "2px solid rgb(38, 189, 251)";
        padding = '20px';
        width = 'auto';
        height = '150px';
    */
    if (randomNumber < 250) {
        // TODO: create a variable to represent the div with id="if-block" -DONE
        let _if = document.getElementById('if-block');

        // TODO: use the (_if) HTML Element and change it's style properties to the CSS rules above 
        _if.style.margin = '1px';
        _if.style.borderRadius = '25px';
        _if.style.border = "2px solid rgb(38, 189, 251)";
        _if.style.padding = '20px';
        _if.style.width = 'auto';
        _if.style.height = '150px';
    }



}

btn.onclick = function () { buttonClick() };



