var age=14
var answer = document.getElementById('pergjigju')

if (age >= 18){

    answer.innerHTML='Ti ke te drejt vote'
}

else{
    answer.innerHTML='Ti ske te drejt vote'
}

var input =document.getElementById('input')
var buton =document.getElementById('btn_id')
var answer =document.getElementById('pergjigju')

buton.onclick = function(){
if (input.value > 18 ){
    answer.innerHTML='value is greater than 10'
}

else if(input.value <10) {
     answer.innerHTML='value is lower than 10'
}

else  {
     answer.innerHTML='value is equal to 10'
}
}



    