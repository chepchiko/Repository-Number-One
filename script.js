document.addEventListener("DOMContentLoaded", function() {

    /* ==========================================
       1. ЛОГИКА МОДАЛЬНЫХ ОКОН
       ========================================== */

    // Получаем элементы окон
    const modalAbout = document.getElementById('modal-about');
    const modalNews = document.getElementById('modal-news');
    const modalContacts = document.getElementById('modal-contacts');

    // Получаем кнопки в меню, которые их открывают
    const aboutBtn = document.getElementById('nav-about');
    const newsBtn = document.getElementById('nav-news');
    const contactsBtn = document.getElementById('nav-contacts');

    // Получаем кнопки закрытия (крестики)
    const closeAbout = document.getElementById('close-about');
    const closeNews = document.getElementById('close-news');
    const closeContacts = document.getElementById('close-contacts');

    // Универсальная функция открытия
    const openModal = (modal) => {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
        }
    };

    // Универсальная функция закрытия
    const closeModal = (modal) => {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Возвращаем прокрутку
        }
    };

    // Назначаем кнопки открытия
    if (aboutBtn) aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalAbout);
    });

    if (newsBtn) newsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalNews);
    });

    if (contactsBtn) contactsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalContacts);
    });

    // Назначаем кнопки закрытия (крестики)
    if (closeAbout) closeAbout.addEventListener('click', () => closeModal(modalAbout));
    if (closeNews) closeNews.addEventListener('click', () => closeModal(modalNews));
    if (closeContacts) closeContacts.addEventListener('click', () => closeModal(modalContacts));

    // Закрытие окна при клике на область ЗА пределами окна (на затемнение)
    window.onclick = function(event) {
        if (event.target === modalAbout) closeModal(modalAbout);
        if (event.target === modalNews) closeModal(modalNews);
        if (event.target === modalContacts) closeModal(modalContacts);
    };

    // Закрытие по нажатию клавиши Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            if (modalAbout && modalAbout.style.display === 'block') closeModal(modalAbout);
            if (modalNews && modalNews.style.display === 'block') closeModal(modalNews);
            if (modalContacts && modalContacts.style.display === 'block') closeModal(modalContacts);
        }
    });


    /* ==========================================
       2. ВАШ ТЕКУЩИЙ КОД (Слайдер, прокрутка)
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

    // Регистрация и вход (ваш старый код)
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

    // Маска даты (из вашего старого кода)
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
