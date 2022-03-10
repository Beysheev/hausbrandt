const modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
const close = document.getElementsByClassName("close")[0];

btn.onclick = () => {
    modal.style.display = 'block'
}
close.onclick = () => {
    modal.style.display = 'none'
}
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
}

// let names = (arr) => {
//     let el = document.getElementsByClassName('label')
//     return [...arr, el.item(value)]
// }
// console.log(names([]))


const fourMdl = document.getElementById('my-Modal');
let fourthBtn = document.getElementById('my_Btn');
const closer = document.getElementsByClassName("fourth__close")[0];

fourthBtn.onclick = () => {
    fourMdl.style.display = 'block'
}
closer.onclick = () => {
    fourMdl.style.display = 'none'
}
window.onclick = (event) => {
    if (event.target === fourMdl) {
        fourMdl.style.display = 'none'
    }
}

