document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // ЛОГИКА ДЛЯ СТРАНИЦЫ РЕГИСТРАЦИИ
    // ==========================================
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        // Отключение поля "Отчество"
        const noMiddleNameCheckbox = document.getElementById('noMiddleName');
        const middleNameInput = document.getElementById('middleName');

        if (noMiddleNameCheckbox && middleNameInput) {
            noMiddleNameCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    middleNameInput.value = ''; 
                    middleNameInput.disabled = true; 
                    middleNameInput.style.backgroundColor = '#e5e5e5';
                } else {
                    middleNameInput.disabled = false; 
                    middleNameInput.style.backgroundColor = '#fff';
                }
            });
        }

        // Маска для даты рождения
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

        // Обработка отправки
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Пароли не совпадают! Пожалуйста, проверьте ввод.');
                return;
            }

            alert('Регистрация прошла успешно! (Демо-режим). Сейчас перенаправим на страницу входа.');
            window.location.href = 'login.html'; // Переход на вход после регистрации
        });
    }

    // ==========================================
    // ЛОГИКА ДЛЯ СТРАНИЦЫ ВХОДА
    // ==========================================
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем перезагрузку
            
            // Имитация проверки логина и пароля
            alert('Вы успешно вошли в систему! (Демо-режим). Перенаправление на главную.');
            window.location.href = 'index.html'; // Переход на главную
        });
    }
        // ==========================================
    // ЛОГИКА СЛАЙДЕРА НА ГЛАВНОЙ
    // ==========================================
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        // Получаем все слайды
        const slides = Array.from(track.children);
        let currentIndex = 0;

        // Функция обновления позиции дорожки
        const updateSlide = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        // Обработчик кнопки "Вперед"
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide(currentIndex);
        });

        // Обработчик кнопки "Назад"
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide(currentIndex);
        });
    }
        // ==========================================
    // ПЛАВНАЯ ПРОКРУТКА В ШАПКЕ
    // ==========================================
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
});

document.addEventListener("DOMContentLoaded", function() {

    /* ==========================================
       ЛОГИКА ДЛЯ СТРАНИЦЫ РЕГИСТРАЦИИ
       ========================================== */
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        // Отключение поля "Отчество"
        const noMiddleNameCheckbox = document.getElementById('noMiddleName');
        const middleNameInput = document.getElementById('middleName');

        if (noMiddleNameCheckbox && middleNameInput) {
            noMiddleNameCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    middleNameInput.value = ''; 
                    middleNameInput.disabled = true; 
                    middleNameInput.style.backgroundColor = '#e5e5e5';
                } else {
                    middleNameInput.disabled = false; 
                    middleNameInput.style.backgroundColor = '#fff';
                }
            });
        }

        // Маска для даты рождения
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

        // Обработка отправки
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Пароли не совпадают! Пожалуйста, проверьте ввод.');
                return;
            }

            alert('Регистрация прошла успешно! (Демо-режим). Сейчас перенаправим на страницу входа.');
            window.location.href = 'login.html'; 
        });
    }

    /* ==========================================
       ЛОГИКА ДЛЯ МОДАЛЬНЫХ ОКОН
       ========================================== */
    
    // Получаем все модальные окна
    const modalAbout = document.getElementById('modal-about');
    const modalNews = document.getElementById('modal-news');
    const modalContacts = document.getElementById('modal-contacts');
    
    // Получаем кнопки, которые их открывают
    const aboutBtn = document.getElementById('nav-about');
    const newsBtn = document.getElementById('nav-news');
    const contactsBtn = document.getElementById('nav-contacts');
    
    // Получаем кнопки закрытия
    const closeAbout = document.getElementById('close-about');
    const closeNews = document.getElementById('close-news');
    const closeContacts = document.getElementById('close-contacts');

    // Функция открытия
    const openModal = (modal) => {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
        }
    };

    // Функция закрытия
    const closeModal = (modal) => {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Возвращаем прокрутку
        }
    };

    // Клики по кнопкам в меню
    if (aboutBtn) aboutBtn.addEventListener('click', () => openModal(modalAbout));
    if (newsBtn) newsBtn.addEventListener('click', () => openModal(modalNews));
    if (contactsBtn) contactsBtn.addEventListener('click', () => openModal(modalContacts));

    // Клики по крестикам
    if (closeAbout) closeAbout.addEventListener('click', () => closeModal(modalAbout));
    if (closeNews) closeNews.addEventListener('click', () => closeModal(modalNews));
    if (closeContacts) closeContacts.addEventListener('click', () => closeModal(modalContacts));

    // Закрытие по клику на фон (вне окна)
    window.onclick = function(event) {
        if (event.target === modalAbout) closeModal(modalAbout);
        if (event.target === modalNews) closeModal(modalNews);
        if (event.target === modalContacts) closeModal(modalContacts);
    };

    // Закрытие по кнопке Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            if (modalAbout && modalAbout.style.display === 'block') closeModal(modalAbout);
            if (modalNews && modalNews.style.display === 'block') closeModal(modalNews);
            if (modalContacts && modalContacts.style.display === 'block') closeModal(modalContacts);
        }
    });

    /* ==========================================
       ЛОГИКА СЛАЙДЕРА НА ГЛАВНОЙ
       ========================================== */
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

    /* ==========================================
       ПЛАВНАЯ ПРОКРУТКА В ШАПКЕ
       ========================================== */
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
});


