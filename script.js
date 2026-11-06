document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       ПЛАВНАЯ ПРОКРУТКА К РАЗДЕЛАМ
       ========================================== */
    const navAbout = document.getElementById('nav-about');
    const navEvents = document.getElementById('nav-events');
    const navEventsFooter = document.getElementById('nav-events-footer');
    const sectionAbout = document.getElementById('about');
    const sectionEvents = document.getElementById('events');

    if (navAbout && sectionAbout) {
        navAbout.addEventListener('click', function (e) {
            e.preventDefault();
            sectionAbout.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    if (navEvents && sectionEvents) {
        navEvents.addEventListener('click', function (e) {
            e.preventDefault();
            sectionEvents.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    if (navEventsFooter && sectionEvents) {
        navEventsFooter.addEventListener('click', function (e) {
            e.preventDefault();
            sectionEvents.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    /* ==========================================
       СЛАЙДЕР
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
       РЕГИСТРАЦИЯ И ВХОД
       ========================================== */
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
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
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Вход выполнен!');
            window.location.href = 'index.html';
        });
    }

    /* ==========================================
       МАСКА ДАТЫ
       ========================================== */
    const birthDateInput = document.getElementById('birthDate');
    if (birthDateInput) {
        birthDateInput.addEventListener('input', function (e) {
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

    /* ==========================================
       МОДАЛЬНЫЕ ОКНА
       ========================================== */
    const infoModal = document.getElementById('infoModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModal');

    // Контент для каждой модалки. Ключ = значение data-modal в HTML
    const modalData = {
        social: {
            title: 'Социальное волонтерство',
            html: `
                <p>Помощь людям, которые оказались в сложной жизненной ситуации: пожилым, детям-сиротам, людям с инвалидностью, пациентам больниц.</p>
                <h3>Чем можно помочь</h3>
                <ul>
                    <li>Помощь в домах престарелых и интернатах;</li>
                    <li>Организация досуга для детей в больницах;</li>
                    <li>Сопровождение людей с инвалидностью;</li>
                    <li>Помощь в приютах для животных.</li>
                </ul>
                <p><a href="register.html">Стать волонтером →</a></p>
            `
        },
        eco: {
            title: 'Экологическое волонтерство',
            html: `
                <p>Забота об окружающей среде Москвы и всей страны: уборка территорий, посадка деревьев, раздельный сбор отходов, экопросвещение.</p>
                <h3>Форматы участия</h3>
                <ul>
                    <li>Городские субботники и экологические акции;</li>
                    <li>Посадка деревьев и озеленение дворов;</li>
                    <li>Помощь в пунктах раздельного сбора;</li>
                    <li>Эко-уроки в школах и детских садах.</li>
                </ul>
                <p><a href="register.html">Присоединиться →</a></p>
            `
        },
        event: {
            title: 'Событийное волонтерство',
            html: `
                <p>Участие в крупных городских мероприятиях: фестивалях, форумах, спортивных событиях и культурных программах Москвы.</p>
                <h3>Что делают волонтеры</h3>
                <ul>
                    <li>Помощь в навигации и аккредитации гостей;</li>
                    <li>Работа на информационных стойках;</li>
                    <li>Поддержка спикеров и участников;</li>
                    <li>Помощь в организации зон активностей.</li>
                </ul>
                <p><a href="register.html">Стать волонтером →</a></p>
            `
        },
        volunteers: {
            title: 'Волонтерам',
            html: `
                <p>Все, что нужно знать действующим и будущим волонтерам «Мосволонтера»:</p>
                <ul>
                    <li><strong>Мероприятия</strong> — регистрируйтесь на ближайшие события;</li>
                    <li><strong>Направления волонтерства</strong> — выберите то, что вам по душе;</li>
                    <li><strong>Обучение</strong> — бесплатные онлайн-курсы и вебинары;</li>
                    <li><strong>Личный кабинет</strong> — книжка волонтера, часы и достижения.</li>
                </ul>
                <p>Уже с нами? <a href="login.html">Войдите</a> или <a href="register.html">зарегистрируйтесь</a>.</p>
            `
        },
        organizations: {
            title: 'Организациям',
            html: `
                <p>«Мосволонтер» сотрудничает с НКО, государственными учреждениями и бизнесом. Мы помогаем находить волонтеров и организовывать добровольческие программы.</p>
                <h3>Что вы получите</h3>
                <ul>
                    <li>Доступ к базе проверенных волонтеров;</li>
                    <li>Помощь в подготовке и проведении мероприятий;</li>
                    <li>Информационную поддержку на ресурсах центра;</li>
                    <li>Обучение для сотрудников и добровольцев.</li>
                </ul>
                <p><a href="register.html">Подать заявку на партнерство →</a></p>
            `
        },
        about: {
            title: 'О Мосволонтере',
            html: `
                <p>«Мосволонтер» — крупнейший центр добровольчества в России. Уже 12 лет мы объединяем неравнодушных людей, чтобы делать Москву добрее.</p>
                <h3>Наши цифры</h3>
                <ul>
                    <li>Более 1,5 млн добрых дел;</li>
                    <li>Свыше 10 направлений волонтерства;</li>
                    <li>Тысячи мероприятий по всей столице ежегодно;</li>
                    <li>Бесплатное обучение и поддержка для каждого добровольца.</li>
                </ul>
                <p>Присоединяйтесь — <a href="register.html">стать волонтером</a>.</p>
            `
        },
        news: {
            title: 'Новости',
            html: `
                <div class="news-item">
                    <h3>Открыт набор волонтеров на «Миссию памяти»</h3>
                    <small>23 марта 2025</small>
                    <p>Российский Красный Крест приглашает добровольцев помочь в восстановлении исторической памяти. Регистрация открыта до конца года.</p>
                </div>
                <div class="news-item">
                    <h3>Стартовал набор на выставку «Герои нашего времени»</h3>
                    <small>13 августа 2025</small>
                    <p>Помогите подготовить портреты для городской выставки — присоединяйтесь к команде волонтеров проекта.</p>
                </div>
                <div class="news-item">
                    <h3>«Мосволонтер» запустил новые онлайн-курсы</h3>
                    <small>1 марта 2025</small>
                    <p>Бесплатные курсы для волонтеров и организаторов: от основ добровольчества до управления командами.</p>
                </div>
            `
        },
        contacts: {
            title: 'Контакты',
            html: `
                <p><strong>Центр «Мосволонтер»</strong></p>
                <ul>
                    <li>Адрес: г. Москва, ул. Примерная, д. 1;</li>
                    <li>Телефон: <a href="tel:+74951234567">+7 (495) 123-45-67</a>;</li>
                    <li>Email: <a href="mailto:info@mosvolonter.ru">info@mosvolonter.ru</a>;</li>
                    <li>Часы работы: пн–пт, 09:00–18:00.</li>
                </ul>
                <h3>Мы в соцсетях</h3>
                <p>ВКонтакте, Telegram, Одноклассники — присоединяйтесь к сообществу.</p>
            `
        }
    };

    function openModal(key) {
        const data = modalData[key];
        if (!data || !infoModal || !modalBody) return;
        modalBody.innerHTML = `<h2>${data.title}</h2>${data.html}`;
        infoModal.classList.add('show');
        infoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!infoModal) return;
        infoModal.classList.remove('show');
        infoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Клик по любому элементу с data-modal
    document.querySelectorAll('[data-modal]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            openModal(this.dataset.modal);
        });
    });

    // Закрытие по крестику
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Закрытие по клику на затемнение
    if (infoModal) {
        infoModal.addEventListener('click', function (e) {
            if (e.target === infoModal) closeModal();
        });
    }

    // Закрытие по Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

});
