const buttons = document.querySelectorAll(".btn-complete"); 
const sumElement = document.querySelector(".add"); 
const subtractElement = document.querySelector(".subtract"); 


let sum = parseInt(sumElement.textContent);
let subtract = parseInt(subtractElement.textContent);

for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {
        alert("Board updated successfully"); 

        buttons[i].disabled = true; 
        buttons[i].style.backgroundColor = "gray"; 
      
        sum -= 1; 
        subtract += 1; 

        sumElement.textContent = sum; 
        subtractElement.textContent = subtract;
        const container = document.getElementById('Activity')
        const div = document.createElement('div');
        div.innerText=`completed The task`
       container.appendChild(div)
        
        if(sum===0){
            alert('Congrates!!!You have completed all the current task')
        }
      
    };
}





document.getElementById('Clear-History').addEventListener('click',function(){
    document.getElementById('Activity').innerHTML = '';
})