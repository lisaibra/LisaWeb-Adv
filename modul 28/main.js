var butoni = document.getElementById('btn1');
var butoni2 = document.getElementById('btn2');
var butoni3 = document.getElementById('btn3');
var teksti = document.getElementById('teksti');
var butoni4 = document.getElementById('btn4');

butoni.onclick = function(){
    alert('Ke klikuar butoni')
}

butoni2.onmouseover = function(){
    alert('Ke ba hover')
}


butoni3.onmouseleave= function(){
    alert('Ke leave')
}

butoni4.onclick =function(){
    teksti.style.color="darkblue"
    teksti.style.backgroundColor="lightpink"
}
