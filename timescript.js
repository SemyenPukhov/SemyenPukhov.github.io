var date = new Date();
var time  = date.getHours() + " : " + date.getMinutes() + " : " date.getSeconds();
document.getElementsById('nowtime').innerHTML = time;
