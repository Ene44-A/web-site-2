// Toggle sidebar menu
document.getElementById('open-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('-translate-x-full');
    document.getElementById('open-sidebar').classList.add('hidden');
    document.getElementById('close-container').classList.remove('hidden');
});

document.getElementById('close-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('open-sidebar').classList.remove('hidden');
    document.getElementById('close-container').classList.add('hidden');
});

// Add event listeners to hide the sidebar when a link is clicked
const sidebarLinks = document.querySelectorAll('#sidebar nav a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('sidebar').classList.add('-translate-x-full');
        document.getElementById('open-sidebar').classList.remove('hidden');
        document.getElementById('close-container').classList.add('hidden');
    });
});

// Carousel functionality
const carouselInner = document.getElementById('carouselInner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalCards = carouselInner.children.length;
const cardsPerView = 3; // Número de cards visibles al mismo tiempo

function showCard(index) {
    const newTransform = -index * (100 / cardsPerView);
    carouselInner.style.transform = `translateX(${newTransform}%)`;
}

function nextCard() {
    currentIndex = (currentIndex + cardsPerView) % totalCards;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - cardsPerView + totalCards) % totalCards;
    showCard(currentIndex);
}

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Auto-rotate functionality
setInterval(nextCard, 3000);
