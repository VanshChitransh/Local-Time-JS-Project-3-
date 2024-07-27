const clock = document.querySelector('.clock')
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
const date1 = document.querySelector('.date')
setInterval(function(){
    let date11 = new Date();
    date1.innerHTML = date11.toLocaleDateString();
},1000)