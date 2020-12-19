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

    if (randomNumber < 250) {
        // TODO: create a variable to represent the div with id="if-block" -DONE
        let _if = document.getElementById('if-block');

        // TODO: use the _if object and change it's style properties to the CSS rules above 
        _if.style.margin = '1px';
        _if.style.borderRadius = '25px';
        _if.style.border = "2px solid rgb(38, 189, 251)";
        _if.style.padding = '20px';
        _if.style.width = 'auto';
        _if.style.height = '150px';
    } else if (randomNumber >= 250 && randomNumber < 500) {

        let else_if = document.getElementById('else_if-block');
        else_if.style.margin = '1px';
        else_if.style.borderRadius = '25px';
        else_if.style.border = "2px solid rgb(38, 189, 251)";
        else_if.style.padding = '20px';
        else_if.style.width = 'auto';
        else_if.style.height = '150px';
    } else {

        let _else = document.getElementById('else-block');
        _else.style.margin = '1px';
        _else.style.borderRadius = '25px';
        _else.style.border = "2px solid rgb(38, 189, 251)";
        _else.style.padding = '20px';
        _else.style.width = 'auto';
        _else.style.height = '150px';
    }



}

btn.onclick = function () { buttonClick() };



