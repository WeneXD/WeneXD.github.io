const buttons={
    b0:0,b1:0,b2:0,
    b3:0,b4:0,b5:0,
    b6:0,b7:0,b8:0
}

const win_quote=[
    "is the one",
    "wins at last",
    "wins",
    "did it"
]

const draw_quote=[
    "both lose",
    "draw",
    "it's a draw",
    "too bad",
    "._."
]

var turn="X";
var next_up="O";
var paused=false;

/*window.addEventListener('load',function(){
    for (var key in buttons){
        console.log(key);
        let button=document.getElementById(key);
        console.log(button);
        button.addEventListener('onclick',function(){
            console.log("A");
        });
    }
})
    Doesn't work even though the events are added. -.-
        -> Hardcode it in HTML :))))
*/

window.addEventListener('load',function(){
    const info=document.getElementById("info");
});


function button_press(bt){
    var id=bt.getAttribute("id");
    if (!paused){
        for (var key in buttons){
            if (key==id){
                if (buttons[key]==0){
                    document.getElementById("t"+id.charAt(1)).innerHTML=turn;
                    switch (turn){
                        case 'X':
                            buttons[key]=1;
                            turn="O";
                            break;
                        case 'O':
                            buttons[key]=2;
                            turn="X";
                            break;
                        default:
                            console.log("Makes you think.");
                            break;
                    }
                    info.innerHTML=turn+"'S TURN";
                    check();
                }
            }
        }
    }
}

function restart(){
    paused=false;
    for (var key in buttons){
        buttons[key]=0;
    }
    for (var i=0; i<9; i++){
        turn=next_up;
        document.getElementById("t"+i.toString()).innerHTML="";
        info.innerHTML=turn+"'S TURN";
        if (turn=="X"){next_up="O";}else{next_up="X";}
    }
}

function check(){
    let winner=0;
    for (var plr=1; plr<3; plr++){      //Loop through X and O's placements.
        if (winner>0){break;}
        for (var id=0; id!=9; id+=3){   //Check horizontal lines.
            //console.log("[HORIZONTAL] "+id.toString() + " | " + plr.toString());
            if (buttons["b"+id.toString()]==plr && buttons["b"+(id+1).toString()]==plr && buttons["b"+(id+2).toString()]==plr){
                winner=plr;
                break;
            }
        }
        for (var id=0; id!=4; id++){    //Check vertical lines.
            //console.log("[VERTICAL] "+id.toString() + " | " + plr.toString());
            if (buttons["b"+id.toString()]==plr && buttons["b"+(id+3).toString()]==plr && buttons["b"+(id+6).toString()]==plr){
                winner=plr;
                break;
            }
        }
            //Check corner to corner.
        if (winner>0){break;}
        if (buttons.b0==plr && buttons.b4==plr && buttons.b8==plr){
            winner=plr;
        }
        if (buttons.b2==plr && buttons.b4==plr && buttons.b6==plr){
            winner=plr;
        }
    }
    if (winner==0){
        let free_space=false;
        for (var key in buttons){
            if (buttons[key]==0){
                free_space=true;
            }
        }
        if (!free_space){
            draw();
        }
    } else {
        win(winner);
    }
}

function win(winner){
    paused=true;
    let quote=win_quote[Math.floor(Math.random()*win_quote.length)].toUpperCase();
    if (winner==1){
        info.innerHTML="X "+quote;
        next_up="O";
    }else{
        info.innerHTML="O "+quote;
        next_up="X";
    }
}

function draw(){
    paused=true;
    let quote=draw_quote[Math.floor(Math.random()*draw_quote.length)].toUpperCase();
    info.innerHTML=quote;
}