const caja=document.getElementById('caja')

caja.addEventListener('mouseover',()=>{
    caja.style.background='yellow';

});

caja.addEventListener('mouseout',()=>{
    caja.style.background='yellow';

});

caja.addEventListener('click',()=>{
    alert('click');

});

const areaTouch=document.getElementById('areTouch')
areaTouch.addEventListener('touchstart'),()=>{
    areaTouch.style.background='blue';
}
areaTouch.addEventListener('touched'),()=>{
    areaTouch.style.background='green';
}
areaTouch.addEventListener('click'),()=>{
    alert('Click Area Touch');
}