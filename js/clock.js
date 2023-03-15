document.querySelector`#myName`.innerHTML = prompt("adinizi giriniz")
startTime();
setInterval(() => {
    startTime()
}, 1000);

function startTime() {
    const today = new Date();
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = weekday[today.getDay()];
    m = m.toString().padStart(2, '0');
    s = s.toString().padStart(2, '0');
    document.querySelector`#myClock`.innerHTML = `${h} : ${m}: ${s} ${d} `
  }

  