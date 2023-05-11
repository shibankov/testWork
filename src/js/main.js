// function component(text) {
//   const element = document.createElement('h1');
//   element.textContent = text;
//   return element;
// }
//
// document.body.prepend(component('Проект собран на Webpack'))


//range
let rangeInput = document.querySelector(".range-input input");
let rangeValue = document.querySelector(".range-input .value div");

let start = parseFloat(rangeInput.min);
let end = parseFloat(rangeInput.max);
let step = parseFloat(rangeInput.step);

for(let i=start;i<=end;i+=step){
    rangeValue.innerHTML += '<div>'+i+'</div>';
}

rangeInput.addEventListener("input",function(){
    let top = parseFloat(rangeInput.value)/step * -22;
    rangeValue.style.marginTop = top+"px";
});
