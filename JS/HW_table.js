const tableEL = document.createElement('table');
const theadEL = document.createElement('thead');
tableEL.appendChild(theadEL);
const trowEL = document.createElement('tr');
theadEL.appendChild(trowEL);


function createThEl(content){
    const thEl = document.createElement('th');
    thEl.textContent = content;
    return thEl;
}

// const th1 = createThEl('product')
// const th2 = createThEl('brand')
// const th3 = createThEl('price')

// trowEL.appendChild(th1)
// trowEL.appendChild(th2)
// trowEL.appendChild(th3)

const tableHeaderList = ['product', 'brand', 'price','color'];

tableHeaderList.forEach((el)=>{
    const thEl = createThEl (el);
    trowEL.appendChild(thEl);
})


