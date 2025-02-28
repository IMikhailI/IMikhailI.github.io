<template>
  <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
      <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center relative z-10">
          <div class="lg:w-5/6 order-2 lg:order-none">
              <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Создатель и преподаватель курса. </h2>
              <div class="mt-10 space-y-6">
                  <div class="text">Выпускник Сургутского государственного университета направления "Педагогическое образование", профиль "технологический"</div>
              </div>
          </div>
          <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
              <div class="card">
                  <div class="profile-pic">
                      <img 
                          :src="profileImage" 
                          alt="Профиль автора"
                          class="w-full h-full object-cover"
                      />
                  </div>
                  <div class="bottom">
                      <div class="content">
                          <span class="name">Добродомов Михаил Александрович</span>
                          <!-- <span class="about-me"
                              >ТЕКСТ ТЕКСТ ТЕКСТ
                          </span> -->
                      </div>
                      <div class="bottom-bottom">
                          <div class="social-links-container">
                              <!-- <svg
                                  viewBox="0 0 16 15.999"
                                  height="15.999"
                                  width="16"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      transform="translate(6 598)"
                                      d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                                      data-name="Subtraction 4"
                                      id="Subtraction_4"
                                  ></path>
                              </svg> -->
                              <!-- <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                  ></path>
                              </svg> -->
                              <!-- <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1"
                                  ></path>
                              </svg> -->
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const profileImage = ref('/images/meditation.png')
</script>

<style scoped>

<style scoped>
.container {
  margin-left: 23rem;
}

@media (max-width: 768px) {
  .container {
    margin-left: 52rem;
  }
}

@media (max-width: 480px) {
  .container {
    margin-left: 22rem;
  }
}

.text {
    position: relative;
    margin: 0 auto;
    max-width: 800px;
    font-size: 21px;
    letter-spacing: -0.2px;
    line-height: 143%;
    color: #000000;
    padding: 0 1rem;
    /* background-color: #d5d8ed89; */
    background: rgba(223, 231, 232, 0.52);
    border-radius: 18px;
    /* box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1); */
    box-shadow: 0 10px 24px rgb(114, 130, 133);
    padding: 25px;
}

/* .text:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
} */

.card {
  width: 380px;
  height: 380px;
  background: white;
  border-radius: 32px;
  padding: 3px;
  position: relative;
  box-shadow: rgba(32, 23, 23, 0.19) 0px 70px 30px -50px;
  transition: all 0.5s ease-in-out;
}

.card .profile-pic {
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 29px;
  z-index: 1;
  border: 0px solid rgb(25, 7, 216);
  overflow: hidden;
  transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
}

.card .profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out 0s;
}

.card .bottom {
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background: rgb(9, 92, 96);
  top: 80%;
  border-radius: 29px;
  z-index: 2;
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.card .bottom .content {
  position: absolute;
  bottom: 0;
  left: 2rem;
  right: 2rem;
  height: 180px;
}

.card .bottom .content .name {
  display: block;
  font-size: 1.4rem;
  color: white;
  font-weight: bold;
}

.card .bottom .content .about-me {
  display: block;
  font-size: 1rem;
  color: white;
  margin-top: 1.5rem;
}

.card .bottom .bottom-bottom {
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card .bottom .bottom-bottom .social-links-container {
  display: flex;
  gap: 1.5rem;
}

.card .bottom .bottom-bottom .social-links-container svg {
  height: 24px;
  fill: white;
  filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
}

.card:hover {
  border-top-left-radius: 55px;
}

.card:hover .bottom {
  top: 20%;
  border-radius: 80px 29px 29px 29px;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}

.card:hover .profile-pic {
  width: 120px;
  height: 120px;
  aspect-ratio: 1;
  top: 12px;
  left: 12px;
  border-radius: 50%;
  z-index: 3;
  border: 9px solid rgb(6, 71, 74);
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
  transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
}

.card:hover .profile-pic img {
  transform: scale(2.5);
  -o-object-position: 0px 25px;
  object-position: 0px 25px;
  transition: all 0.5s ease-in-out 0.5s;
}
</style>