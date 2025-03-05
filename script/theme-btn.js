
document.getElementById('random-background').addEventListener('click',function(){
    const color = ['blue', 'orange', 'green', 'aqua'];
    document.body.style.backgroundColor = color[Math.floor(Math.random() * color.length)];  
})