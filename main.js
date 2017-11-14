function semafor(){
     
var boje1 = document.getElementsByClassName('boje1');
var boje2 = document.getElementsByClassName('boje2');
var boje3 = document.getElementsByClassName('boje3');
var boje4 = document.getElementsByClassName('boje4');

boje1[0].style.background = 'red';
boje1[1].style.background = 'gray';
boje1[2].style.background = 'gray';

boje2[0].style.background = 'gray';
boje2[1].style.background = 'gray';
boje2[2].style.background = 'green';

boje3[0].style.background = 'gray';
boje3[1].style.background = 'gray';
boje3[2].style.background = 'green';

boje4[0].style.background = 'red';
boje4[1].style.background = 'gray';
boje4[2].style.background = 'gray';


function changeToYellow(){
    boje1[1].style.background = 'yellow';
    boje2[1].style.background = 'yellow';
    boje3[1].style.background = 'yellow';
    boje4[1].style.background = 'yellow';  
}



function changeToGreen(){
    boje1[0].style.background = 'gray';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'green';
    boje2[0].style.background = 'red';
    boje2[1].style.background = 'gray';
    boje2[2].style.background = 'gray';
    boje3[0].style.background = 'red';
    boje3[1].style.background = 'gray';
    boje3[2].style.background = 'gray';
    boje4[0].style.background = 'gray';
    boje4[1].style.background = 'gray';
    boje4[2].style.background = 'green';   
}

function changeToYellow1(){
    boje1[1].style.background = 'yellow';
    boje2[1].style.background = 'yellow';
    boje3[1].style.background = 'yellow';
    boje4[1].style.background = 'yellow';  
}    

function changeToRed(){
    boje2[0].style.background = 'gray';
    boje2[1].style.background = 'gray';
    boje2[2].style.background = 'green';
    boje3[0].style.background = 'gray';
    boje3[1].style.background = 'gray';
    boje3[2].style.background = 'green';
    boje1[0].style.background = 'red';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'gray';
    boje4[0].style.background = 'red';
    boje4[1].style.background = 'gray';
    boje4[2].style.background = 'gray';
}


    var x = setTimeout (changeToYellow,1000);
    var y = setTimeout(changeToGreen,3000);
    var a = setTimeout(changeToYellow1,6000);
    var b = setTimeout(changeToRed,9000);
    var start = setInterval(semafor,12000);
}
semafor();