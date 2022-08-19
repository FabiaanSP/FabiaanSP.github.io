const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const encrypted = "XYZABCDEFGHIJKLMNOPQRSTUVW";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function isUpperCase(x) {
    if (x == x.toUpperCase()) { return true; } else { return false; }
}
  
let input = document.querySelector('#input');
let display = document.querySelector('#display');
let rnd = randomIntFromInterval(0, abc.length - 1);
display.innerHTML = abc[rnd];

var firstNext = true;
next();

function next() {
    
    display.innerHTML = abc[rnd];
        
        if (input.value.toUpperCase() == encrypted[rnd] || firstNext) {

            firstNext = false;
            
            // Richtig
            $('#input').css("box-shadow", "0px 0px 20px #00ff00");
            rnd = randomIntFromInterval(0, abc.length - 1);
            display.innerHTML = abc[rnd];
    
            setTimeout(function(){
                $('#input').css("box-shadow", "none");
            },1250)
        } else {
            // Falsch
            alert("Das war leider Falsch\nRichtige Antwort: " + encrypted[rnd]);
            
            rnd = randomIntFromInterval(0, abc.length - 1);
            display.innerHTML = abc[rnd];
        }
        
        input.value = "";

}

function convert(x) {
    let output = "";
    x.split('').forEach(char => {
        output += encrypted[abc.indexOf(char.toUpperCase())];
    });

    console.log(output);
    return output;
}


function changeMode() {
    location.href = "./sentences";
}