function changeXD(){
    const XD=4;
    setTimeout(function(){
        changeXD();
        meow=Clamp(Math.floor(Math.random()*XD),0,XD-1).toString();
        currentXD=document.getElementById("XD").href
        console.log(currentXD)
        document.getElementById("XD").href="img/XD"+meow+".gif";
        console.log("XD changed ["+meow+"]")
    },500);
}

function Clamp(x,min,max){
	if (x<min) {x=min} else if (x>max) {x=max}
	return x;
}

changeXD()