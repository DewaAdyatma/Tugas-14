// const tUbahWarna = document.getElementById('tUbahWarna');
// tUbahWarna.onclick = function () {
//     alert('OK');
// }
// tUbahWarna.addEventListener('click', UbahWarna);
// function UbahWarna() {
//     alert('OK');
// }

const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'lightgreen';
    // document.body.setAttribute('class', 'hijau-muda');
    document.body.classList.toggle('hijau-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

const slidermerah = document.querySelector('input[name=slidermerah]');
const sliderhijau = document.querySelector('input[name=sliderhijau]');
const sliderbiru = document.querySelector('input[name=sliderbiru]');

slidermerah.addEventListener('input', function(){
    const r = slidermerah.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sliderhijau.addEventListener('input', function(){
    const r = sliderhijau.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sliderbiru.addEventListener('input', function(){
    const r = sliderhijau.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

document.body.addEventListener('mousemove', function(event){
    // console.log(event.clientX);
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
    // console.log(xPos);
})

