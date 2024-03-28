function display(num){
    document.getElementById("result").value += num;
}
function calculate(){
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}
function clears(){
    document.getElementById("result").value= " ";
}
// function myCal(event){
//     if(event.key=='0' || event.key=='1' || event.key=='2' || event.key=='3' || event.key=="4" || event.key=='5' || event.key=='6' || event.key=='7' || event.key=='8' || event.key=='9' || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='/')
//     document.getElementById("result").value += event.key;
// }
// var calc = document.getElementById("calc");
// calc.onkeyup = function(event){
//     if(event.keyCode===13) {
//         let x=document.getElementById('result').value; 
//         calculate();
//     }
// }