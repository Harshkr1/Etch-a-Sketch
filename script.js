const row = function (num) {
    const container = document.getElementById('container');
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);
    }
    const arr = document.querySelectorAll('.rows')
    for (const item of arr) {
        const input = document.querySelector('input');
        const btn = document.querySelector('.btn');
        const grid = document.querySelector('.grid');
        for (let i = 0; i < num; i++) {
            const coulmn = document.createElement('div');
            coulmn.classList.add('coulm');
            item.appendChild(coulmn);
        }
    }

}
const emptyHTMl = function (parentnode) {
    parentnode.innerHTML = "";
}
const reset = function () {
    const container = document.getElementById('container');
    const Reset = document.querySelector('.reset');
    Reset.addEventListener('click', () => {
        emptyHTMl(container);
        row(16);
    })
}
const gridnum = function () {
    const container = document.getElementById('container');
    const input = document.querySelector('input');
    const btn = document.querySelector('.btn');
    const color = document.querySelector('.color')
    const grid = document.querySelector('.grid');
    btn.addEventListener('click', () => {
        if (input.value <= 0 || input.value > 40) {
            // const message = document.createElement('p');
            // message.classList.add('message');
            // message.textContent = 'Enter something in between 1 and 40';
            // grid.insertBefore(message,color);
            alert('Enter something in between 1 and 40');
        }
        else {
            //to empty inner HTML Here what we  need to do is :
            emptyHTMl(container);
            row(input.value);
        }

    })
}
const colorChange = function (item) {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
    })
}
const addColor = function () {
    //all 256 divs are selected here not to add touch function here 
    const block = document.querySelectorAll('.coulm');
    block.forEach(colorChange);
}
const bgRemove = function (item) {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "";
    })
}
//we neeed mehtod to remove existing background color when eraser button is clicked and then it is hovered over it 
const removerColor = function () {
    const block = document.querySelectorAll('.coulm');
    const eraser = document.querySelector('img');
    eraser.addEventListener('click', () => {
        block.forEach(bgRemove);
    })
}
const blackPen = function () {
    const block = document.querySelectorAll('.coulm');
    const pen = document.querySelector('.item1')
    pen.addEventListener('click', () => {
        block.forEach(colorChange);
    })
}
const RandomeColorGenerator= function ()
{
    let letter= '0123456789ABCDEF';
    let hexCode='#';
    for( let i=0;i<6;i++)
    {
        hexCode+=letter[Math.floor(Math.random()*16)]
    }
    return hexCode;
}
const randomColorSelector=function(item)
{
    let color= RandomeColorGenerator();
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = color;
    })
}
const mixPen = function () {
    const block = document.querySelectorAll('.coulm');
    const pen = document.querySelector('.item2')
    pen.addEventListener('click', () => {
        block.forEach(randomColorSelector);
    })
}
const run = function () {
    row(16);
    reset();
    gridnum();
    addColor();
    removerColor();
    blackPen();
    mixPen();
}
run();