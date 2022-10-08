    var seconds = 00 ;
    var tens = 00;
    var minutes = 00;
    
    var appendSecond = document.getElementById("seconds");
    var appendtens = document.getElementById("tens");
    var appendMin = document.getElementById("minutes");
    var buttonStart = document.getElementById("button-start"); 
    var butttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    
    var Interval;
    
    buttonStart.addEventListener("click", function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    });
    
    
    butttonStop.addEventListener("click", function() {
        clearInterval(Interval);
    }); 
    
    buttonReset.addEventListener("click" , function() {
        clearInterval(Interval);
        tens = 00;
        seconds = 00;
        minutes = 00;
        appendtens.innerHTML = "00";
        appendSecond.innerHTML = "00";
        appendMin.innerHTML = "00";
    }); 
    
    function startTimer() {
         tens++;
    
        if (tens <= 9) {
            appendtens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendtens.innerHTML = tens;
        }
    
        if (tens > 99) {
            seconds++;
            appendSecond.innerHTML = "0" + seconds;
            tens = 0;
            appendtens.innerHTML = "0" + 0;
        }
        
    
        if (seconds > 9) {
            appendSecond.innerHTML = seconds;
        }
    
        if (seconds > 59) {
            minutes++;
            appendMin.innerHTML = "0" + minutes;
            seconds = 0;
            appendSecond.innerHTML = "0" + 0 ;
           
        }
        if (minutes > 9) {
            appendMin.innerHTML = minutes; 
        }
    };