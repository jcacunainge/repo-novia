const message = "Kimberly, te amo muchísimo, gracias por ser mi novia.";
const displayElement = document.getElementById("message");
let index = 0;

// Función para mostrar cada letra con un retraso
function showLetterByLetter() {
    if (index < message.length) {
        displayElement.innerHTML += message[index];
        index++;
        setTimeout(showLetterByLetter, 200); // Retraso de 200ms entre cada letra
    }
}

setTimeout(showLetterByLetter, 1000);



function showButton() {
    document.getElementById("next-btn").style.display = "block";
}


function goToNextPage() {
    window.location.href = "page2.html";
}

function showLetterByLetter() {
    if (index < message.length) {
        displayElement.innerHTML += message[index];
        index++;
        setTimeout(showLetterByLetter, 200);
    } else {
        showButton(); 
    }
}
