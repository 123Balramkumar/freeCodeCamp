
function calculateAge() {
    var userInput = document.getElementById('input').value;
    if(userInput === null || userInput == '') {
        return document.getElementById('output').innerHTML = 'Enter Date Of Birth';
    } else {
        var today = new Date();
        var dob = new Date(userInput);

        var age = today.getFullYear() - dob.getFullYear();

        return document.getElementById('output').innerHTML = "Age is: " + age + " years.";
    }
} 