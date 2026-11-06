document.addEventListener("DOMContentLoaded", function() {

    /* ==========================================
       ВАШ ТЕКУЩИЙ КОД (Слайдер, прокрутка)
       ========================================== */

    // Плавная прокрутка к разделам
    const navAbout = document.getElementById('nav-about');
    const navEvents = document.getElementById('nav-events');
    const sectionAbout = document.getElementById('about');
    const sectionEvents = document.getElementById('events');

    if (navAbout && sectionAbout) {
        navAbout.addEventListener('click', function(e) {
            e.preventDefault();
            sectionAbout.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    if (navEvents && sectionEvents) {
        navEvents.addEventListener('click', function(e) {
            e.preventDefault();
            sectionEvents.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Слайдер
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        const slides = Array.from(track.children);
        let currentIndex = 0;
        const updateSlide = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide(currentIndex);
        });
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide(currentIndex);
        });
    }

    // Регистрация и вход
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                alert('Пароли не совпадают!');
                return;
            }
            alert('Регистрация успешна!');
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Вход выполнен!');
            window.location.href = 'index.html';
        });
    }

    // Маска даты
    const birthDateInput = document.getElementById('birthDate');
    if (birthDateInput) {
        birthDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 8) value = value.slice(0, 8);
            let formatted = '';
            if (value.length > 0) {
                formatted = value.substring(0, 2);
                if (value.length > 2) formatted += '.' + value.substring(2, 4);
                if (value.length > 4) formatted += '.' + value.substring(4, 8);
            }
            e.target.value = formatted;
        });
    }

});
