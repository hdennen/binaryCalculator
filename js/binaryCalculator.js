document.addEventListener('DOMContentLoaded', function() { //newer JS version of jQuery's document(ready)
    var res = document.getElementById('res');
}, false);

var input = function(){
    var char = event.target.innerHTML;
    res.innerHTML += char;
};
var clr = function(){ //do not use 'clear' for this function name!!!! it already exists in js.
    res.innerHTML = "";
};
var solve = function(){
    var operand1 = res.innerHTML.match(/([10]+)/);
    var operator = res.innerHTML.match(/[\+\-\*\/]/); //remember to escape operators with '\'
    var operand2 = res.innerHTML.match(/([10]+$)/);
    var int1 = parseInt(operand1,2); //binary to integer
    var int2 = parseInt(operand2,2);
    if(operator == '\+'){ //escaping is important here too. as is the ==, === will not work.
        var solution = int1+int2;
    }else if(operator == '\-'){
        var solution = int1-int2;
    }else if(operator == '\*'){
        var solution = int1*int2;
    }else if(operator == '\/'){
        var solution = int1/int2;
    }

    res.innerHTML = solution.toString(2); //integer to binary
    };