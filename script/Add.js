// document.getElementById('Activity').addEventListener('click',function(){
//     let emptyString = '';

// })


document.getElementById('Activity').addEventListener('click', function() {
    let emptyString = '';

    // Example: Assign a value to emptyString and log it
    emptyString = "Button Clicked!";
    console.log(emptyString);

    // Example: Update an element's text content
    document.getElementById('output').textContent = emptyString;
});
