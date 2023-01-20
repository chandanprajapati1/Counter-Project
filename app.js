const btn1 = document.querySelector('.decrease');
const btn2 = document.querySelector('.increase');
const btn3 = document.querySelector('.reset');
const CounterPlaceholder = document.querySelector('#value')

let count = 0;

function changeColor(count){
  let color = ""
  if(count<0){
    color = "red";

  }

  else if(count>0){
    color = "green";
  }
  else {
  color ="black"
  }

  return color;
}

function reset(){
 count = 0;
CounterPlaceholder.innerHTML = count;
}



btn1.addEventListener('click',()=>{
  count--
  CounterPlaceholder.innerHTML = count
  CounterPlaceholder.style.color = changeColor(count)
});


btn2.addEventListener('click',()=>{
  count++
  CounterPlaceholder.innerHTML = count
  CounterPlaceholder.style.color = changeColor(count)
});



// console.log(btn1, btn2, btn3,CounterPlaceholder);