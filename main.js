const btn = document.getElementById('button1');

function random() {
    return Math.floor(Math.random() * 1000) + 1;
}

function buttonClick() {
    let text = document.getElementById("rng");
    let randomNumber = random();
    text.innerHTML = randomNumber;

    // let count = 0;
    // let counter = document.getElementById('counter');
    // counter.innerHTML = count + 1;

    if (randomNumber < 10) {
        let _if = document.getElementById('if-block');
        _if.style.margin = '1px';
        _if.style.borderRadius = '25px';
        _if.style.border = "2px solid rgb(38, 189, 251)";
        _if.style.padding = '20px';
        _if.style.width = 'auto';
        _if.style.height = '150px';
    } else if (randomNumber >= 10 && randomNumber < 100) {

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
