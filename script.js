//your JS code here. If required.
const ptag = document.createElement('p');

var clock = setInterval(clockTiming ,1000);

function clockTiming (){
    let dateTime =new Date();
    let convert = dateTime.toLocaleString();
    ptag.id = 'timer';
    ptag.innerHTML = convert;
    document.body.appendChild(ptag);
}