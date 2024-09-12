console.log("Hello, World!")
const changeBtn = document.querySelector(`.change-size`)
const container = document.querySelector('.container')
let boxNumbers = 16


changeBtn.addEventListener("click", () => {

    boxNumbers = prompt("Enter number of boxes not more than 100")
    if(boxNumbers > 100){
        boxNumbers = 100;
    }

    remove()
    displayBoxes(boxNumbers)
})


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;  
}


function displayBoxes(numOfBoxes){
    let size = 720;
    let dimension = size/numOfBoxes;
    
    for(let i = 1; i <= numOfBoxes * numOfBoxes; i++){

        const box = document.createElement("div")
        box.classList.add("div-box")
        box.style.width = `${dimension}px`;
        box.style.height =`${dimension}px`;
        box.style.border = "solid";
        box.style.borderWidth = "thin";

        container.append(box)
    }


    const boxes = document.querySelectorAll('.div-box')
    boxes.forEach(box => {

    box.addEventListener("mouseover", () =>    {

        const random = getRandomColor()
        box.style.backgroundColor = random;
    
    })

})

    


}

function remove(){

    
    const boxes = document.querySelectorAll('.div-box')
    boxes.forEach(box => {

        container.removeChild(box)
    })


}

displayBoxes(boxNumbers);




































// const boxes = document.querySelectorAll('.grid-box')
// boxes.forEach(box => {

//     box.addEventListener("mouseover", () =>    {
//         box.style.backgroundColor = "black";
    
//     })

// })

    
