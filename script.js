let button = document.querySelector("button")
let list = document.querySelector('ul')

button.addEventListener("click", function(){
  if (document.querySelector('input').value !== ''){
    let task = document.createElement("li");
    task.textContent = document.querySelector('input').value;
    list.appendChild(task);
    task.addEventListener('click', function(){
      task.remove();
    })
  }
})



