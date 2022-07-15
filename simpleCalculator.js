function reset(){
    document.getElementById("output").value = "";
    console.log('reset');
}

function display(val){
    document.getElementById("output").value+= val;
}

function cal(){
    let x = document.getElementById("output").value;
    let y = eval(x);
    document.getElementById("output").value = y;
}
