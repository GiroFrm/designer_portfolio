
const productContainers = [...document.querySelectorAll('.slider')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    console.log("width item"+containerWidth/2);
    console.log("width container"+window.innerWidth);
    
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += window.innerWidth*0.4;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= window.innerWidth*0.4;
    })

})

