let currentSection = 1;
const totalSections = 4;

function scrollToNextSection() {
    currentSection++;
    if (currentSection >= totalSections) {
        currentSection = totalSections;
        transformButtonToContact();
    }
    document.getElementById(`section${currentSection}`).scrollIntoView({ behavior: 'smooth' });
}

function transformButtonToContact() {
    const button = document.querySelector('.sticky-button');
    button.textContent = '';
    button.classList.add('contact');
    button.onclick = function() {
        // Hier kannst du die Logik für den Kontakt-Button hinzufügen
        // z.B. ein Kontaktformular anzeigen oder einen Mailto-Link öffnen
        window.open('https://www.linkedin.com/in/mewiyo/', '_blank');
    };
}

// Initialisiere den Button beim Laden der Seite
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.sticky-button');
    if (currentSection >= totalSections) {
        transformButtonToContact();
    }
});
