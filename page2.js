const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const notification = document.createElement("div");

function growYesButton() {
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + "px";
}

// Función para mostrar la notificación al hacer clic en "Sí"
function showNotification() {
    notification.className = "notification";
    notification.textContent = "¡Viste que sí te dominaba! 😘";
    document.body.appendChild(notification);
    notification.style.display = "block";
}

// Simular fuegos artificiales
function showFireworks() {
    const body = document.body;
    body.style.backgroundImage = "url('https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')";
    body.style.backgroundSize = "cover";
}

// Event listeners
noButton.addEventListener('mouseover', growYesButton);
noButton.addEventListener('click', growYesButton);

// Mostrar fuegos artificiales y notificación al hacer clic en "Sí"
yesButton.addEventListener('click', function() {
    showFireworks();
    showNotification();
});
