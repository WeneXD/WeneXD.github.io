function change_XD(){
    const XD=4;
    setTimeout(function(){
        change_XD();
        meow=Clamp(Math.floor(Math.random()*XD),0,XD-1).toString();
        document.getElementById("XD").setAttribute("pic","img/XD"+meow+".gif");
        console.log("XD changed ["+meow+"]")
    },500);
}

function click_XD(){
    //Nuh uh if spoopy already active
    if (document.getElementById("jumpscare")!=null){
        return;
    }

    //Fullscreen for full spoopyness
    var page=document.documentElement;
    page.requestFullscreen()
    
    //Play le spoopy audio
    let jumpscare_audio = new Audio("audio/jumpscare.mp3");
    jumpscare_audio.play();

    //Create le spoopy image
    let img_background=document.createElement("div");
    img_background.setAttribute("class","jumpscare-background fade-in")
    img_background.innerHTML=
    '<div class="jumpscare" id="jumpscare"><img class="jumpscare-image" id="jumpscare-image" alt="spoopy picture" title="scary" src='+document.getElementById("XD").getAttribute("pic")+'>'
    +'<br><a class="jumpscare-text">*jumpscare*</a></div>'
    document.body.appendChild(img_background)
    document.getElementById("jumpscare-image").addEventListener("click",click_jumpscare);

    //Make timer for spoopiness to disappear
    setTimeout(delete_XD,5500,img_background);
}

function delete_XD(XD){
    document.getElementById("jumpscare").setAttribute("class","fade-out jumpscare")
    setTimeout(function(){
        XD.setAttribute("class","jumpscare-background fade-out");
    },1000);
    setTimeout(function(){
        XD.remove();
        //Scare the people that don't know how to exit fullscreen :3
        //document.exitFullscreen();
    },2500);
    setTimeout(function(){
        XD.innerHTML="";
    },2000);
}

function click_jumpscare(){
    const fart_texts=["fart","*brrp*"]

    //Jarvis, play the fart.mp3
    let fart_audio = new Audio("audio/fart.mp3");

    //Create funny fart text
    let fart_text=document.createElement("p");
    fart_text.setAttribute("class","fart");

    //Random position for the fart text
    fart_x=Math.floor(Math.random()*60)+20;
    fart_y=Math.floor(Math.random()*60)+20;
    fart_size=Math.floor(Math.random()*80)+10;
    fart_text.setAttribute("style",`left:${fart_x}vw;top:${fart_y}vh;font-size:${fart_size}px;`)

    //InnerHTML and append to document.
    farter=Math.floor(Math.random()*fart_texts.length);
    fart_text.innerHTML=fart_texts[farter];
    document.body.appendChild(fart_text);

    fart_audio.play();

    setTimeout(() => {
        fart_text.remove();
    },950);
}

function Clamp(x,min,max){
	if (x<min) {x=min} else if (x>max) {x=max}
	return x;
}

(function(window, document, undefined) {

    change_XD();
  
    window.onload = init;
  
    function init(){
        document.getElementById("XD").addEventListener("click",click_XD);
    }
  
  })(window, document, undefined);