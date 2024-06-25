const addText = function(){
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    }

    setInterval(addText, 100)
    if (timer === 0) {
        clearInterval(timer);
        alert ("Вы победили в конкурсе!");
    }
  