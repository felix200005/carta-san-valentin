// Obtener los elementos
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const status = document.getElementById('status');

// Variable para saber si está abierto o cerrado
let isOpen = false;

// Función para abrir y cerrar
function toggleCard() {
    if (!isOpen) {
        // ABRIR
        envelope.classList.add('open');
        letter.classList.remove('hidden');
        status.textContent = 'Estado: Abierto 📬';
        status.style.background = '#ffebf0';
        isOpen = true;
        console.log('¡Carta abierta! ❤️');
    } else {
        // CERRAR
        envelope.classList.remove('open');
        letter.classList.add('hidden');
        status.textContent = 'Estado: Cerrado 📭';
        status.style.background = '#fff';
        isOpen = false;
        console.log('Carta cerrada 💌');
    }
}

// Al hacer click en el sobre
envelope.addEventListener('click', function(e) {
    // Evitar que el click se propague si viene de la carta
    if (!e.target.closest('.letter')) {
        toggleCard();
    }
});

// Al hacer click en la carta
letter.addEventListener('click', function(e) {
    e.stopPropagation(); // Evitar que el click llegue al sobre
    if (isOpen) {
        toggleCard();
    }
});

// Mensaje inicial en consola
console.log('💌 ¡Proyecto cargado correctamente!');
console.log('🎯 Haz click en el sobre para abrir la carta');
console.log('🎯 Haz click en la carta para cerrarla');
console.log('🎯 O haz click en el sobre nuevamente para cerrar');
console.log('🖼️ Imágenes de Kuromi cargadas 💜');
console.log('📱 Versión responsive optimizada');;

