function logAndDisplay(message) {
  const countdownDisplay = document.getElementById("countdown-display");
  countdownDisplay.style.color = "white";
  countdownDisplay.style.display = "flex";
  countdownDisplay.style.alignItems = "center";
  countdownDisplay.style.justifyContent = "center";
  countdownDisplay.style.fontSize = "30px";
  countdownDisplay.style.gap = "15px";
  countdownDisplay.innerHTML += `<h1>${message}</h1>`;
}

setTimeout(() => {
  logAndDisplay(10);
  setTimeout(() => {
    logAndDisplay(9);
    setTimeout(() => {
      logAndDisplay(8);
      setTimeout(() => {
        logAndDisplay(7);
        setTimeout(() => {
          logAndDisplay(6);
          setTimeout(() => {
            logAndDisplay(5);
            setTimeout(() => {
              logAndDisplay(4);
              setTimeout(() => {
                logAndDisplay(3);
                setTimeout(() => {
                  logAndDisplay(2);
                  setTimeout(() => {
                    logAndDisplay(1);
                    setTimeout(() => {
                      logAndDisplay(0);
                      setTimeout(() => {
                        logAndDisplay("Happy Independence day");
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
