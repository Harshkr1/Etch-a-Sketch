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
row(16);
const remove=function()
{
    
}


const gridnum = function () {
    const input = document.querySelector('input');
    const btn = document.querySelector('.btn');
    const grid = document.querySelector('.grid');
    btn.addEventListener('click', () => {
        if (input.value < 0 || input.value > 40) {
            const message = document.createElement('p');
            message.classList.add('message');
            message.textContent = 'Enter something in between 1 and 40';
            grid.appendChild(message);

        }
        else {
            row(input.value);
        }
    })
}
gridnum();