const row= function()
{
    const container=document.getElementById('container');
    
    for(let i=0;i<16;i++){
        const row= document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);
    }
    const arr= document.querySelectorAll('.rows')
    
    for(const item of arr) {

        for(let i=0;i<16;i++) {
           const coulmn=document.createElement('div');
           coulmn.classList.add('coulm');
           item.appendChild(coulmn);
        }
    }
    
}




row();