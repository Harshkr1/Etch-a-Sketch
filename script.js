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
        item.style.backgroundColor ="black";
    })
}

const addColor = function () {
    //all 256 divs are selected here not to add touch function here 
    const block = document.querySelectorAll('.coulm');
    block.forEach(colorChange);
}



const run = function () {
    row(16);
    reset();
    gridnum();
    addColor();
}
run();