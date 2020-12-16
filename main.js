const btn = document.getElementById('button1');

function random() {
    return Math.floor(Math.random() * 1000) + 1;
}

/*  OVERVIEW: Complete the function with a selection statment so it changes the
                                                div id="if-block"
                                                div id="else_if-block"
                                                div id="else-block"
    Use these CSS style rules for this exercise    
        margin = '1px';
        borderRadius = '25px';
        border = "2px solid rgb(38, 189, 251)";
        padding = '20px';
        width = 'auto';
        height = '150px';
*/

function buttonClick() {
    let text = document.getElementById("rng");
    let randomNumber = random();
    text.innerHTML = randomNumber;


    /* TODO: Change the styles of the 3 different HTML Div elements when the random number generated
           is less than 100, 100 -> 500, or 500 -> 1000 (the number generated will always be between 1 - 1000)  (hint: if, else if, else)*/

    if (randomNumber < 10) {
        // TODO: create a variable to represent the div with id="if-block" -DONE
        let _if = document.getElementById('if-block');

        // TODO: use the _if object and change it's style properties to the CSS rules above 
    }



}

btn.onclick = function () { buttonClick() };



