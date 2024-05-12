const time = document.querySelector(".time");
const btn = document.querySelector(".btn");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const body = document.querySelector("body");

increase.addEventListener("click", () => {
    // let newtime=0;
    let newtime = parseInt(time.innerHTML);
    newtime = newtime + 1;
    time.innerHTML = newtime;
})
decrease.addEventListener("click", () => {
    // let newtime=0;
    let newtime = parseInt(time.innerHTML);
    if (newtime <= 0) {
        alert("Can not be less than zero");
        return;
    }
    newtime = newtime - 1;
    time.innerHTML = newtime;
})
let intervalid;
btn.addEventListener("click", () => {
    intervalid=setInterval(() => {
        let newtime = parseInt(time.innerHTML);
        if (newtime === 0) {
            clearInterval(intervalid);
            alert("Time out");
            return;
        }
        else {
            newtime = newtime - 1;
            time.innerHTML = newtime;
        }

    }, 1000)
})