// JavaScript code for form validation
const inputField = document.getElementById('inputField');

const form = document.getElementById('myForm')
form.addEventListener('submit', function (event) {
  // Prevent form from submitting
  event.preventDefault();
 
  // Retrieve the input field value
  const inputValue = inputField.value;
  
  // Regular expression pattern for alphanumeric input
  const alphaNum = /^[a-zA-Z0-9]+$/; 

  // Check if the input value matches the pattern
  if (alphaNum.test(inputValue)) {
    // Valid input: display confirmation and submit the form
    alert('Form submitted.');
    form.reset(); 
  } else {
    // Invalid input: display error message
    alert('Input must be in an alphanumeric format');
  }
});


   
    

    

      

      