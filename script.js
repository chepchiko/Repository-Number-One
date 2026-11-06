document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Плавная прокрутка ---------- */
    const navAbout   = document.getElementById('nav-about');
    const navEvents  = document.getElementById('nav-events');
    const secAbout   = document.getElementById('about');
    const secEvents  = document.getElementById('events');
    if (navAbout && secAbout)   navAbout.addEventListener('click',  e => { e.preventDefault(); secAbout.scrollIntoView({behavior:'smooth'}); });
    if (navEvents && secEvents) navEvents.addEventListener('click', e => { e.preventDefault(); secEvents.scrollIntoView({behavior:'smooth'}); });

    /* ---------- Слайдер ---------- */
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (track && prevBtn && nextBtn) {
        const slides = Array.from(track.children);
        let i = 0;
        const go = n => { track.style.transform = `translateX(-${n * 100}%)`; };
        nextBtn.addEventListener('click', () => { i = (i + 1) % slides.length; go(i); });
        prevBtn.addEventListener('click', () => { i = (i - 1 + slides.length) % slides.length; go(i); });
    }

    /* ---------- Регистрация / вход ---------- */
    const registerForm = document.getElementById('registerForm');
    if (registerForm) registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const p = document.getElementById('password').value;
        const c = document.getElementById('confirmPassword').value;
        if (p !== c) { alert('Пароли не совпадают!'); return; }
        alert('Регистрация успешна!');
        window.location.href = 'login.html';
    });
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', e => {
        e.preventDefault(); alert('Вход выполнен!'); window.location.href = 'index.html';
    });

    /* ---------- Маска даты ---------- */
    const birth = document.getElementById('birthDate');
    if (birth) birth.addEventListener('input', e => {
        let v = e.target.value.replace(/\D/g,'').slice(0,8), f = '';
        if (v.length) { f = v.slice(0,2); if (v.length>2) f += '.'+v.slice(2,4); if (v.length>4) f += '.'+v.slice(4,8); }
        e.target.value = f;
    });

    /* ============================================
       МОДАЛЬНЫЕ ОКНА — надёжная версия
       ============================================ */
    console.log('[modal] скрипт загружен');

    const infoModal  = document.getElementById('infoModal');
    const modalBody  = document.getElementById('modalBody');
    const closeBtn   = document.getElementById('closeModal');

    console.log('[modal] infoModal найден:', !!infoModal);
    console.log('[modal] modalBody найден:', !!modalBody);
    console.log('[modal] closeBtn найден:',  !!closeBtn);

    const modalData = {
        social: {
            title: 'Социальное волонтерство',
            html: `
                <p>Помощь людям в сложной жизненной ситуации: пожилым, детям-сиротам, людям с инвалидностью, пациентам больниц.</p>
                <h3>Чем можно помочь</h3>
                <ul>
                    <li>Помощь в домах престарелых и интернатах;</li>
                    <li>Организация досуга для детей в больницах;</li>
                    <li>Сопровождение людей с инвалидностью;</li>
                    <li>Помощь в приютах для животных.</li>
                </ul>
                <p><a href="register.html">Стать волонтером →</a></p>`
        },
        eco: {
            title: 'Экологическое волонтерство',
            html: `
                <p>Забота об окружающей среде: уборка территорий, посадка деревьев, раздельный сбор отходов, экопросвещение.</p>
                <h3>Форматы участия</h3>
                <ul>
                    <li>Городские субботники и экологические акции;</li>
                    <li>Посадка деревьев и озеленение дворов;</li>
                    <li>Помощь в пунктах раздельного сбора;</li>
                    <li>Эко-уроки в школах и детских садах.</li>
                </ul>
                <p><a href="register.html">Присоединиться →</a></p>`
        },
        event: {
            title: 'Событийное волонтерство',
            html: `
                <p>Участие в крупных городских мероприятиях: фестивалях, форумах, спортивных событиях и культурных программах.</p>
                <h3>Что делают волонтеры</h3>
                <ul>
                    <li>Помощь в навигации и аккредитации гостей;</li>
                    <li>Работа на информационных стойках;</li>
                    <li>Поддержка спикеров и участников;</li>
                    <li>Помощь в организации зон активностей.</li>
                </ul>
                <p><a href="register.html">Стать волонтером →</a></p>`
        },
        volunteers: {
            title: 'Волонтерам',
            html: `
                <p>Все, что нужно знать действующим и будущим волонтерам «Мосволонтера»:</p>
                <ul>
                    <li><strong>Мероприятия</strong> — регистрируйтесь на ближайшие события;</li>
                    <li><strong>Направления волонтерства</strong> — выберите то, что по душе;</li>
                    <li><strong>Обучение</strong> — бесплатные онлайн-курсы и вебинары;</li>
                    <li><strong>Личный кабинет</strong> — книжка волонтера, часы и достижения.</li>
                </ul>
                <p>Уже с нами? <a href="login.html">Войдите</a> или <a href="register.html">зарегистрируйтесь</a>.</p>`
        },
        organizations: {
            title: 'Организациям',
            html: `
                <p>«Мосволонтер» сотрудничает с НКО, государственными учреждениями и бизнесом.</p>
                <h3>Что вы получите</h3>
                <ul>
                    <li>Доступ к базе проверенных волонтеров;</li>
                    <li>Помощь в подготовке и проведении мероприятий;</li>
                    <li>Информационную поддержку на ресурсах центра;</li>
                    <li>Обучение для сотрудников и добровольцев.</li>
                </ul>
                <p><a href="register.html">Подать заявку на партнерство →</a></p>`
        },
        about: {
            title: 'О Мосволонтере',
            html: `
                <p>«Мосволонтер» — крупнейший центр добровольчества в России. Уже 12 лет мы объединяем неравнодушных людей.</p>
                <h3>Наши цифры</h3>
                <ul>
                    <li>Более 1,5 млн добрых дел;</li>
                    <li>Свыше 10 направлений волонтерства;</li>
                    <li>Тысячи мероприятий по всей столице ежегодно;</li>
                    <li>Бесплатное обучение и поддержка для каждого добровольца.</li>
                </ul>
                <p>Присоединяйтесь — <a href="register.html">стать волонтером</a>.</p>`
        },
        news: {
            title: 'Новости',
            html: `
                <div class="news-item">
                    <h3>Открыт набор волонтеров на «Миссию памяти»</h3>
                    <small>23 марта 2025</small>
                    <p>Российский Красный Крест приглашает добровольцев. Регистрация открыта до конца года.</p>
                </div>
                <div class="news-item">
                    <h3>Стартовал набор на выставку «Герои нашего времени»</h3>
                    <small>13 августа 2025</small>
                    <p>Помогите подготовить портреты для городской выставки.</p>
                </div>
                <div class="news-item">
                    <h3>«Мосволонтер» запустил новые онлайн-курсы</h3>
                    <small>1 марта 2025</small>
                    <p>Бесплатные курсы для волонтеров и организаторов.</p>
                </div>`
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
                </ul>`
        }
    };

    function openModal(key) {
        console.log('[modal] открываю:', key);
        const data = modalData[key];
        if (!data) { console.warn('[modal] НЕТ данных для ключа:', key); return; }
        if (!infoModal || !modalBody) { console.error('[modal] Не найден #infoModal или #modalBody в HTML!'); return; }
        modalBody.innerHTML = '<h2>' + data.title + '</h2>' + data.html;
        infoModal.classList.add('show');
        infoModal.style.display = 'block';           // страховка
        infoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!infoModal) return;
        infoModal.classList.remove('show');
        infoModal.style.display = 'none';            // страховка
        infoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Делегирование: один обработчик на весь документ
    document.addEventListener('click', function (e) {
        const trigger = e.target.closest('[data-modal]');
        if (trigger) {
            e.preventDefault();
            openModal(trigger.dataset.modal);
            return;
        }
        // клик по крестику
        if (e.target.id === 'closeModal') { closeModal(); return; }
        // клик по затемнению (вне .modal-content)
        if (e.target === infoModal) { closeModal(); return; }
    });

    // Esc
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    console.log('[modal] готово, найдено триггеров:',
        document.querySelectorAll('[data-modal]').length);
});
