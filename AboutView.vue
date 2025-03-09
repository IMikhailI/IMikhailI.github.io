<script setup>
import { ref } from 'vue';

const activeTab = ref(1); // По умолчанию активна первая вкладка
</script>

<template>
  <div>
    <div class="about-page">
    <!-- Декоративные круги -->
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    <div class="circle circle-5"></div>
    <!-- <div class="circle circle-6"></div> -->

    <!-- Декоративные линии -->
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
    <div class="line line-4"></div>
    <div class="line line-5"></div>
    <div class="line line-6"></div>
    <div class="line line-7"></div>

    <!-- Декоративные прямоугольники -->
    <div class="rectangle rectangle-1"></div>
    <div class="rectangle rectangle-2"></div>
    
    <!-- Герой-секция -->
    <div class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-2 fw-bold mb-4">Курс по frontend с нуля</h1>
        <p class="lead mb-4">Основы веб-разработки: от идеи до реализации</p>
        <p class="mb-4">Освоите frontend-разработку с нуля. Вы изучите HTML, CSS, и язык программирования JavaScript.</p>
        <router-link to="/" class="btn btn-primary btn-lg">
          Записаться на курс
        </router-link>
      </div>
    </div>

    <!-- Бегущая строка -->
    <div class="marquee-section py-3">
      <div class="marquee-content">
        <div class="marquee-text">
          <span>🚀 Освойте frontend-разработку с нуля! 🚀</span>
          <span>🎯 Практические задания, поддержка преподавателя, доступ навсегда! 🎯</span>
          <span>💻 Начните свой путь в IT уже сегодня! 💻</span>
        </div>
        <div class="marquee-text">
          <span>🚀 Освойте frontend-разработку с нуля! 🚀</span>
          <span>🎯 Практические задания, поддержка преподавателя, доступ навсегда! 🎯</span>
          <span>💻 Начните свой путь в IT уже сегодня! 💻</span>
        </div>
      </div>
    </div>

    <!-- Остальной контент страницы -->
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="container py-5">
            <h2 class="text-center mb-5">Кто такой frontend-разработчик?</h2>
      <div class="card mb-4 animated-card mx-auto" style="max-width: 800px;">
        <div class="card-body">
          <p class="card-text">
            <strong>Frontend-разработчик</strong> — это специалист, который занимается разработкой пользовательского интерфейса, то есть той части сайта или приложения, которую видят посетители страницы. Главная задача фронтенд-разработчика — перевести готовый дизайн-макет в код так, чтобы все работало правильно.
          </p>
          <p class="card-text">
            Frontend-разработчики работают с такими технологиями, как:
          </p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="bi bi-filetype-html me-2 accent-icon"></i> <strong>HTML</strong> — язык разметки для создания структуры веб-страниц.
            </li>
            <li class="list-group-item">
              <i class="bi bi-filetype-css me-2 accent-icon"></i> <strong>CSS</strong> — язык стилей для оформления веб-страниц.
            </li>
            <li class="list-group-item">
              <i class="bi bi-filetype-js me-2 accent-icon"></i> <strong>JavaScript</strong> — язык программирования для добавления интерактивности на веб-страницах.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Основные задачи frontend-разработчика (с кубом справа) -->
    <div class="container py-5">
  <div class="row align-items-center">
    <!-- Текст (левая часть) -->
    <div class="col-md-8">
      <div class="card mb-4 animated-card">
        <div class="card-body">
          <h5 class="card-title mb-3 accent-title">Основные задачи frontend-разработчика:</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="bi bi-check-circle me-2 accent-icon"></i> Верстка макетов с использованием HTML и CSS.
            </li>
            <li class="list-group-item">
              <i class="bi bi-check-circle me-2 accent-icon"></i> Добавление интерактивности с помощью JavaScript.
            </li>
            <li class="list-group-item">
              <i class="bi bi-check-circle me-2 accent-icon"></i> Оптимизация производительности веб-страниц.
            </li>
            <li class="list-group-item">
              <i class="bi bi-check-circle me-2 accent-icon"></i> Адаптация сайтов под мобильные устройства.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 3D-куб (правая часть) -->
    <div class="col-md-4 text-center cube-wrapper">
      <div class="cube-container">
        <div class="cube">
          <div style="--x:-1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:0; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
        </div>
        <div class="cube">
          <div style="--x:-1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:0; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
        </div>
        <div class="cube">
          <div style="--x:-1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:0; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          <!-- Разделитель -->
          <hr class="divider" />

          <!-- Терминал -->
          <div class="card animated-card">
            <div class="wrap">
              <div class="terminal">
                <hgroup class="head">
                  <p class="title">
                    <svg
                      width="14px"
                      height="14px"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                      ></path>
                    </svg>
                    Terminal
                  </p>

                  <button class="copy_toggle" tabindex="-1" type="button">
                    <svg
                      width="14px"
                      height="14px"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                      ></path>
                      <path
                        d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                      ></path>
                    </svg>
                  </button>
                </hgroup>

                <div class="body">
                  <pre class="pre">
                    <code>-&nbsp;</code>
                    <code>npm&nbsp;</code>
                    <code class="cmd" data-cmd="create vue@latest"></code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Новый блок: Быть IT-специалистом престижно и выгодно -->
          <div class="mt-5">
            <h2 class="text-center mb-5">Быть IT-специалистом престижно и выгодно</h2>

            <div class="row g-4">
              <div class="col-md-6">
                <div class="card h-100">
                  <div class="card-body">
                    <i class="bi bi-laptop fs-1 mb-3 accent-icon"></i>
                    <h5 class="card-title">Работа из любой точки мира</h5>
                    <p class="card-text">Не нужно тратить время и деньги на дорогу. Для работы нужны только ноутбук и стабильный интернет.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100">
                  <div class="card-body">
                    <i class="bi bi-lightbulb fs-1 mb-3 accent-icon"></i>
                    <h5 class="card-title">Самореализация</h5>
                    <p class="card-text">Вы можете делать интересные вдохновляющие проекты без ограничений в зарплате.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100">
                  <div class="card-body">
                    <i class="bi bi-headset fs-1 mb-3 accent-icon"></i>
                    <h5 class="card-title">Работа головой</h5>
                    <p class="card-text">Вы используете знания, а не стоите «у станка». При этом, у вас будут творческие задачи — скучать не придется.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100">
                  <div class="card-body">
                    <i class="bi bi-people fs-1 mb-3 accent-icon"></i>
                    <h5 class="card-title">Окружение и нетворкинг</h5>
                    <p class="card-text">Большинство айтишников — это люди, стремящиеся к развитию и готовые помочь советам.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100">
                  <div class="card-body">
                    <i class="bi bi-clock fs-1 mb-3 accent-icon"></i>
                    <h5 class="card-title">Баланс между работой и отдыхом</h5>
                    <p class="card-text">В IT внимательно следят, чтобы сотрудникам было комфортно работать.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100">
                  <div class="card-body">
                    <i class="bi bi-graph-up fs-1 mb-3 accent-icon"></i>
                    <h5 class="card-title">Постоянный рост в доходе</h5>
                    <p class="card-text">Ваш уровень заработка растет с вашими знаниями. А еще IT-компании ежегодно индексируют зарплаты.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Преимущества курса -->
    <div class="benefits-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Почему наш курс?</h2>
        <div class="row g-4">
          <div class="col-md-4 text-center">
            <i class="bi bi-laptop fs-1 mb-3"></i>
            <h3>Практические задания</h3>
            <p>Реальные проекты, которые помогут закрепить знания.</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="bi bi-people fs-1 mb-3"></i>
            <h3>Поддержка от преподавателя</h3>
            <p>Ответы на вопросы и помощь в решении задач.</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="bi bi-infinity fs-1 mb-3"></i>
            <h3>Доступ навсегда</h3>
            <p>Все материалы курса доступны вам навсегда.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Программа курса -->
    <div class="container py-5">
    <h2 class="text-center mb-5">Программа курса</h2>

    <!-- Переключатели (вкладки) -->
    <div class="d-flex justify-content-center mb-4">
      <button
        class="btn btn-primary mx-2 btn-lg"
        :class="{ 'active': activeTab === 1 }"
        @click="activeTab = 1"
      >
        Раздел 1
      </button>
      <button
        class="btn btn-primary mx-2 btn-lg"
        :class="{ 'active': activeTab === 2 }"
        @click="activeTab = 2"
      >
        Раздел 2
      </button>
      <button
        class="btn btn-primary mx-2 btn-lg"
        :class="{ 'active': activeTab === 3 }"
        @click="activeTab = 3"
      >
        Раздел 3
      </button>
    </div>

    <!-- Контент вкладок -->
    <transition name="fade" mode="out-in">
      <div v-if="activeTab === 1" class="program-card">
        <div class="card-body text-center p-5">
          <h3 class="card-title mb-4">Основные элементы веб-разработки</h3>
          <p class="card-text">
            Основы HTML, CSS и JavaScript. Структура HTML, семантика CSS, синтаксис JavaScript (переменные, типы, условия, функции). Основы веб-разработки, клиент-серверное взаимодействие, этапы веб-проекта. Роль HTML, CSS, JavaScript в создании веб-страниц.
          </p>
        </div>
      </div>
      <div v-else-if="activeTab === 2" class="program-card">
        <div class="card-body text-center p-5">
          <h3 class="card-title mb-4">Работа с веб-страницами</h3>
          <p class="card-text">
            Углубление в HTML, CSS, JavaScript. Формы, таблицы, семантика HTML. Flexbox, Grid, медиазапросы CSS. DOM, события, асинхронный JavaScript. Создание адаптивных, интерактивных веб-страниц. Работа с DOM, обработка событий.
          </p>
        </div>
      </div>
      <div v-else-if="activeTab === 3" class="program-card">
        <div class="card-body text-center p-5">
          <h3 class="card-title mb-4">Разработка веб-проекта</h3>
          <p class="card-text">
            Архитектура UX/UI веб-сайта: структура сайта, навигация, сценарии. Основы UX/UI, композиция, типографика (текст, изображения). Модульная верстка, оптимизация. Настройка дизайна через CSS.
          </p>
        </div>
      </div>
    </transition>
  </div>

    <!-- Отзывы студентов -->
    <div class="testimonials-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Отзывы наших студентов</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text">"Отличный курс! Всё объясняется понятно и доступно."</p>
                <div class="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="Аватар" class="rounded-circle me-3">
                  <div>
                    <h5 class="mb-0">Иван Иванов</h5>
                    <small>Студент</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text">"Очень понравилась практическая часть курса."</p>
                <div class="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="Аватар" class="rounded-circle me-3">
                  <div>
                    <h5 class="mb-0">Мария Петрова</h5>
                    <small>Студент</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text">"Курс помог мне начать карьеру в веб-разработке."</p>
                <div class="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="Аватар" class="rounded-circle me-3">
                  <div>
                    <h5 class="mb-0">Алексей Смирнов</h5>
                    <small>Студент</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Создатель и преподаватель курса -->
    <div class="creator-section py-5">
      <div class="container">
        <h2 class="text-center mb-5">Создатель и преподаватель курса</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card shadow-sm">
              <div class="card-body text-center">
                <img src="https://via.placeholder.com/150" alt="Фото преподавателя" class="rounded-circle mb-4">
                <h3 class="card-title mb-3">Имя Фамилия</h3>
                <p class="card-text">
                  Опытный frontend-разработчик с более чем X годами опыта. Специализируется на создании современных и интерактивных веб-приложений. Автор множества успешных проектов и курсов.
                </p>
                <div class="social-links">
                  <a href="#" class="text-decoration-none me-3"><i class="bi bi-github"></i></a>
                  <a href="#" class="text-decoration-none me-3"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="text-decoration-none"><i class="bi bi-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Призыв к действию -->
    <div class="cta-section text-center py-5">
      <div class="container">
        <h2 class="mb-4">Готовы начать?</h2>
        <p class="lead mb-4">Присоединяйтесь к нашему курсу и начните свой путь в веб-разработке!</p>
        <router-link to="/" class="btn btn-primary btn-lg">
          Записаться на курс
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
/* Общие стили для темной темы */
body[data-bs-theme="dark"] .hero-section {
  background: linear-gradient(135deg, #212529, #343a40);
}

body[data-bs-theme="dark"] .benefits-section,
body[data-bs-theme="dark"] .program-section,
body[data-bs-theme="dark"] .testimonials-section,
body[data-bs-theme="dark"] .cta-section {
  background-color: var(--bs-dark-bg);
  color: var(--bs-light-text);
}

body[data-bs-theme="dark"] .card {
  background-color: var(--bs-dark-bg);
  color: var(--bs-light-text);
}

body[data-bs-theme="dark"] .list-group-item {
  background-color: var(--bs-dark-bg);
  color: var(--bs-light-text);
}

/* Стили для герой-секции */

.card-text {
  font-size: 110%;

}

.hero-section {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    padding: 100px 0;
    border-radius: 0 0 30px 30px;
  }

  .hero-section h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  .hero-section .lead {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .hero-section .btn {
    font-size: 1.25rem;
    padding: 0.75rem 2rem;
  }

  .card {
    padding: 1rem;
    overflow: hidden;
    border: 1px solid #c5c5c5;
    border-radius: 12px;
    background-color: #d9d9d92f;
    backdrop-filter: blur(8px);
    min-width: 100%;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .animated-card {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-out forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .divider {
    border: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c5c5c5, transparent);
    margin: 2rem 0;
  }

  .accent-title {
    color: #0d6efd; /* Акцентный цвет для заголовков */
  }

  .accent-icon {
    color: #0d6efd; /* Акцентный цвет для иконок */
  }

  .list-group-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    border: none;
    background-color: transparent;
  }

  .list-group-item i {
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }

  .terminal {
    display: flex;
    flex-direction: column;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    min-height: 32px;
    padding-inline: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #202425;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 2rem;
    user-select: none;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #8e8e8e;
    font-size: 0.875rem;
  }

  .title > svg {
    height: 14px;
    width: 14px;
    margin-top: 2px;
    color: #006adc;
  }

  .copy_toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    border: 0.65px solid #c1c2c5;
    margin-left: auto;
    border-radius: 6px;
    background-color: #202425;
    color: #8e8e8e;
    cursor: pointer;
  }

  .copy_toggle > svg {
    width: 16px;
    height: 16px;
  }

  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow-x: auto;
    padding: 0.75rem;
    line-height: 16px;
    color: white;
    background-color: black;
    white-space: nowrap;
    font-size: 0.875rem;
  }

  .pre {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-wrap: nowrap;
    white-space: pre;
    background-color: transparent;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 0.875rem;
  }

  .pre code:nth-child(1) {
    color: #575757;
  }

  .pre code:nth-child(2) {
    color: #e34ba9;
  }

  .cmd {
    height: 16px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .cmd::before {
    content: attr(data-cmd);
    position: relative;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    animation: inputs 8s steps(22) infinite;
  }

  .cmd::after {
    content: "";
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    border-right: 0.15em solid #e34ba9;
    animation: cursor 0.5s step-end infinite alternate, blinking 0.5s infinite;
  }

  @keyframes blinking {
    20%,
    80% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0);
    }
  }

  @keyframes cursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes inputs {
    0%,
    100% {
      width: 0;
    }
    10%,
    90% {
      width: 58px;
    }
    30%,
    70% {
      width: 215px;
      max-width: max-content;
    }
  }

  @keyframes clipboard-check {
    100% {
      color: #fff;
      d: path(
        "M 9 5 H 7 a 2 2 0 0 0 -2 2 v 12 a 2 2 0 0 0 2 2 h 10 a 2 2 0 0 0 2 -2 V 7 a 2 2 0 0 0 -2 -2 h -2 M 9 5 a 2 2 0 0 0 2 2 h 2 a 2 2 0 0 0 2 -2 M 9 5 a 2 2 0 0 1 2 -2 h 2 a 2 2 0 0 1 2 2 m -6 9 l 2 2 l 4 -4"
      );
    }
  }

  .about-page {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    background-color: #f0f0f09a; /* Светло-серый фон для светлой темы */
  }

  body[data-bs-theme="dark"] .about-page {
    background-color: #212529; /* Темный фон для темной темы */
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    z-index: 0;
  }

  .circle-1 {
    width: 400px;
    height: 400px;
    top: -200px;
    left: -200px;
    background: radial-gradient(circle, rgba(13, 110, 253, 0.3), transparent);
  }

  .circle-2 {
    width: 300px;
    height: 300px;
    top: 20%;
    right: -150px;
    background: radial-gradient(circle, rgba(255, 193, 7, 0.3), transparent);
  }

  .circle-3 {
    width: 500px;
    height: 500px;
    bottom: -250px;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(220, 53, 69, 0.3), transparent);
  }

  .circle-4 {
    width: 350px;
    height: 350px;
    top: 70%;
    left: -175px;
    background: radial-gradient(circle, rgba(25, 135, 84, 0.3), transparent);
  }

  .circle-5 {
    width: 450px;
    height: 450px;
    bottom: -225px;
    right: -225px;
    background: radial-gradient(circle, rgba(111, 66, 193, 0.3), transparent);
  }

  .circle-6 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(13, 110, 253, 0.3), transparent);
  }

  .line {
    position: absolute;
    z-index: 0;
  }

  .line-1 {
    width: 100%;
    height: 2px;
    top: 15%;
    left: 0;
    transform: rotate(-30deg);
    background: linear-gradient(90deg, rgba(13, 110, 253, 0.3), transparent);
  }

  .line-2 {
    width: 100%;
    height: 2px;
    bottom: 15%;
    right: 0;
    transform: rotate(30deg);
    background: linear-gradient(90deg, rgba(13, 110, 253, 0.3), transparent);
  }

  .line-3 {
    width: 100%;
    height: 2px;
    top: 40%;
    left: 0;
    transform: rotate(-60deg);
    background: linear-gradient(90deg, rgba(255, 193, 7, 0.3), transparent);
  }

  .line-4 {
    width: 100%;
    height: 2px;
    bottom: 40%;
    right: 0;
    transform: rotate(60deg);
    background: linear-gradient(90deg, rgba(255, 193, 7, 0.3), transparent);
  }

  .line-5 {
  width: 100%;
  height: 2px;
  top: 50%;
  right: -500px;
  transform: rotate(100deg);
  background: linear-gradient(90deg, rgba(13, 110, 253, 0.3), transparent);
}

.line-6 {
  width: 100%;
  height: 2px;
  bottom: 20%;
  right: 0;
  transform: rotate(15deg);
  background: linear-gradient(90deg, rgba(255, 193, 7, 0.3), transparent);
}

.line-7 {
  width: 100%;
  height: 2px;
  top: 80%;
  left: 0;
  transform: rotate(-45deg);
  background: linear-gradient(90deg, rgba(220, 53, 69, 0.3), transparent);
}

  .rectangle {
    position: absolute;
    z-index: 0;
    background: rgba(13, 110, 253, 0.2);
  }

  .rectangle-1 {
    width: 200px;
    height: 400px;
    top: 10%;
    right: -100px;
    transform: rotate(45deg);
  }

  .rectangle-2 {
    width: 200px;
    height: 400px;
    bottom: 10%;
    left: -100px;
    transform: rotate(-45deg);
  }

  /* Стили для темной темы */
  body[data-bs-theme="dark"] .circle-1 {
    background: radial-gradient(circle, rgba(13, 110, 253, 0.2), transparent);
  }

  body[data-bs-theme="dark"] .circle-2 {
    background: radial-gradient(circle, rgba(255, 193, 7, 0.2), transparent);
  }

  body[data-bs-theme="dark"] .circle-3 {
    background: radial-gradient(circle, rgba(220, 53, 69, 0.2), transparent);
  }

  body[data-bs-theme="dark"] .circle-4 {
    background: radial-gradient(circle, rgba(25, 135, 84, 0.2), transparent);
  }

  body[data-bs-theme="dark"] .circle-5 {
    background: radial-gradient(circle, rgba(111, 66, 193, 0.2), transparent);
  }

  body[data-bs-theme="dark"] .circle-6 {
    background: radial-gradient(circle, rgba(13, 110, 253, 0.2), transparent);
  }

  body[data-bs-theme="dark"] .line-1,
  body[data-bs-theme="dark"] .line-2,
  body[data-bs-theme="dark"] .line-3,
  body[data-bs-theme="dark"] .line-4,
  body[data-bs-theme="dark"] .line-5,
  body[data-bs-theme="dark"] .line-6,
  body[data-bs-theme="dark"] .line-7 {
    background: linear-gradient(90deg, rgba(13, 110, 253, 0.2), transparent);
  }

  body[data-bs-theme="dark"] .rectangle {
    background: rgba(13, 110, 253, 0.1);
  }

  /* .creator-section {
  background-color: var(--bs-body-bg);
  color: var(--bs-body-color);
} */

.creator-section .card {
  border: none;
  border-radius: 12px;
  background-color: var(--bs-card-bg);
  transition: transform 0.3s, box-shadow 0.3s;
}

.creator-section .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.creator-section img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.creator-section .social-links a {
  font-size: 1.5rem;
  color: var(--bs-primary);
  transition: color 0.3s;
}

.creator-section .social-links a:hover {
  color: var(--bs-link-hover-color);
}

/* Стили для карточек */
.program-card {
  background-color: var(--bs-card-bg);
  border: 1px solid var(--bs-border-color);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 800px; /* Ограничиваем ширину карточки */
}

.program-card .card-body {
  padding: 3rem; /* Увеличиваем отступы */
}

.program-card .card-title {
  color: var(--bs-primary);
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.program-card .card-text {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center; /* Выравниваем текст по центру */
}

/* Стили для кнопок */
.btn-primary {
  font-size: 1.1rem;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;
}

.btn-primary.active {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  transform: scale(1.05); /* Увеличиваем активную кнопку */
}

/* Анимация для переключения разделов */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Стили для бегущей строки */
.marquee-section {
  background-color: #f8f9fa; /* Светло-серый фон */
  color: #212529; /* Темный текст */
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: flex;
  width: 200%; /* Увеличиваем ширину, чтобы вместить два блока текста */
  animation: marquee 80s linear infinite; /* Увеличили длительность анимации */
}

.marquee-text {
  display: flex;
  align-items: center;
  width: 100%; /* Каждый блок текста занимает 100% ширины */
}

.marquee-text span {
  display: inline-block;
  padding-right: 2rem;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-60%); /* Сдвигаем на половину ширины */
  }
}

/* Адаптация для темной темы */
body[data-bs-theme="dark"] .marquee-section {
  background-color: #212529; /* Темный фон для темной темы */
  color: #f8f9fa; /* Светлый текст для темной темы */
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.cube-container {
  position: relative;
  transform: skewY(-20deg);
  animation: animate 5s linear infinite;
}

.cube {
  position: relative;
  z-index: 2;
}

.cube-wrapper {
  position: relative; /* Меняем на относительное позиционирование */
  top: 0; /* Сбрасываем абсолютное позиционирование */
  right: 0; /* Сбрасываем абсолютное позиционирование */
  z-index: 10; /* Убедимся, что куб поверх других элементов */
  margin-top: -650px; /* Поднимаем куб выше */
  margin-left: 1070px; /* Сдвигаем куб правее */
}

/* Адаптация для планшетов и небольших экранов */
@media (max-width: 1392px) {
  .cube-wrapper {
    margin-top: -650px; /* Меньше поднимаем куб */
    margin-left: 950px; /* Меньше сдвигаем куб вправо */
  }
}

/* Адаптация для планшетов и небольших экранов */
@media (max-width: 992px) {
  .cube-wrapper {
    margin-top: -700px; /* Меньше поднимаем куб */
    margin-left: 650px; /* Меньше сдвигаем куб вправо */
  }
}

/* Скрываем куб на мобильных устройствах */
@media (max-width: 768px) {
  .cube-wrapper {
    display: none; /* Скрываем куб */
  }
}

.cube-container {
  position: relative;
  transform: skewY(-20deg);
  animation: animate 5s linear infinite;
}

.cube:nth-child(2) {
  z-index: 1;
  translate: -60px -60px;
}

.cube:nth-child(3) {
  z-index: 3;
  translate: 60px 60px;
}

.cube div {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 30px;
  translate: calc(-70px * var(--x)) calc(-60px * var(--y));
}

.cube span {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #dcdcdc;
  z-index: calc(1 * var(--i));
  transition: 1.5s;
}

.cube span:hover {
  transition: 0s;
  background: #ef4149;
  filter: drop-shadow(0 0 30px #ef4149);
}

.cube span:hover:before,
.cube span:hover:after {
  transition: 0s;
  background: #ef4149;
}

.cube span:before {
  content: "";
  position: absolute;
  left: -40px;
  width: 40px;
  height: 100%;
  background: #fff;
  transform-origin: right;
  transform: skewY(45deg);
  transition: 1.5s;
}

.cube span:after {
  content: "";
  position: absolute;
  top: -40px;
  left: 0px;
  width: 100%;
  height: 40px;
  background: #f2f2f2;
  transform-origin: bottom;
  transform: skewX(45deg);
  transition: 1.5s;
}

@media (max-width: 768px) {
  .cube-wrapper {
    margin-top: -50px; /* Меньше поднимаем на мобильных */
    margin-left: 50px; /* Меньше сдвигаем вправо на мобильных */
  }
}

</style>