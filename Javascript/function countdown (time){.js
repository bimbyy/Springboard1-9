function countdown (time){ //set input as time
    let times = setInterval(function(){ //create new timer

        time --;

        if(time <= 0){// if less than 0 it ends

            clearInterval (times);

            console.log ('Done!');

        }
        else console.log (time);

    },1000)// interval stop
}
//----------------------------------------------
function randomGame(){
    let num;
    let time2 = 0;
    let timers = setInterval (function(){
        num = Math.random();
        time2++
        if(num>.75){
            clearInterval(timer);
            console.log("It took"+time2 +"try");
        }
    },1000)
}