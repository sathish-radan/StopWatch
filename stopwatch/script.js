var time = document.querySelector('.timer');
var start_time = document.querySelector('.start');
var stop_time = document.querySelector('.stop');
var reset_time = document.querySelector('.reset');


var counter;

var m = 0 , s = 0 , ms = 0 ;


start_time.addEventListener('click',function(){
    
    if(!counter){
    counter =  setInterval(run,10);
    }
    function run(){
        time.textContent = currentTime();
        ms++;

        if (ms == 100){
            s += 1,ms = 0;
        }
    }

    stop_time.addEventListener('click',function(){
        clearInterval(counter);
        counter = false
    })

    reset_time.addEventListener('click',function(){
        clearInterval(counter)
        counter = false
        
        ms = 0 , s = 0 , m = 0 ;
        time.textContent = currentTime();
        
    })
    


    
})

function currentTime() {
    return m + ":" + s + ":" + ms
}