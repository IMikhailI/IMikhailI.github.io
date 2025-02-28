<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

let email = ref("");
let emailError = ref(false);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let handleSubmit = () => {
    if (!email.value || !emailRegex.test(email.value)) {
        emailError.value = true;
    } else {
        console.log(emailRegex.test(email.value));
        Swal.fire({
            icon: "success",
            title: "Thank You",
            text: `${email.value} subscribed to our newsletter!`,
        });
    }
};
</script>

<template>
    <!-- Newsletter Section Start -->
    <div id="subscribe" class="bg-theme-primary mt-10">
        <div class="container w-full lg:w-2/5 mx-auto px-5">
            <section class="py-16">
                <!-- <h4 class="text-sm tracking-widest uppercase text-center text-white font-theme-heading">35,000+ Already Joined</h4>
                <h2 class="text-3xl md:text-4xl font-medium text-center text-white mt-9 mb-10 font-theme-heading">Stay up-to-date with what we'r doing</h2> -->
                <div class="relative flex flex-col items-center lg:flex-row justify-center lg:space-x-3">
                  <fromm @submit.prevent="handleSubmit()">
                    <div class="card ">
                        <div class="banner">
                            <span class="banner-text">Торопись</span>
                            <span class="banner-text">Торопись</span>
                        </div>
                        <span class="card__title">Мечтаешь о создании сайтов? </span>
                        <p class="card__subtitle">Запишись!</p>
                        <form class="card__form">
                            <input placeholder="Email" type="email" required="" />
                            <button class="sign-up">Записаться на курс</button>
                        </form>
                    </div>
                  </fromm>
                </div>
                <!-- <form @submit.prevent="handleSubmit()">
                    <div class="relative flex flex-col items-center lg:flex-row justify-center lg:space-x-3">
                        <div class="relative w-full lg:mb-0 font-theme-content">
                            <input v-model="email" @input="emailError = false" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="text" name="newsletter_email" placeholder="Enter your email address" />
                            <div v-show="emailError">
                                <img class="absolute right-3 top-3" src="/images/icon-error.svg" alt="Error Icon" />
                                <div class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded">Whosps, make sure it's an email</div>
                            </div>
                        </div>

                        <Button type="submit" btn-type="secondary">Subscribe</Button>
                    </div>
                </form> -->
            </section>
        </div>
    </div>
    <!-- Newsletter Section End -->
</template>


<style scoped>
  .card {
    width: 620px;
    padding: 40px;
    background: #fff;
    border: 8px solid rgb(2, 63, 66);
    box-shadow: 15px 15px 0 rgb(1, 45, 47);
    transform: rotate(-1.5deg);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .card:active {
    animation: shake 0.5s ease-in-out;
  }
  .card:hover {
    transform: rotate(0deg) scale(1.02);
    box-shadow: 20px 20px 0 rgb(1, 45, 47);
  }
  .banner {
    position: absolute;
    top: 3px;
    right: -95px;
    background: rgb(2, 63, 66);
    color: #fff;
    padding: 15px;
    width: 350px;
    text-align: center;
    transform: rotate(45deg);
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
    overflow: hidden;
    transition: background 0.5s ease;
  }
  .banner-text {
    display: inline-block;
    transition: opacity 0.5s ease, transform 0.5s ease;
    width: 100%;
    position: absolute;
    left: 13%;
    top: 50%;
    transform: translateY(-50%);
  }
  .banner:hover .banner-text:first-child {
    opacity: 0;
    transform: translateY(-100%);
  }
  .banner:hover .banner-text:last-child {
    opacity: 1;
    transform: translateY(-40%);
  }
  .banner-text:last-child {
    opacity: 0;
    transform: translateY(60%);
  }
  .banner:hover {
    background: rgb(1, 35, 37);
  }
  .card__title {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #000;
    width: 50%; /* or any other percentage or pixel value */
  }
  .card__subtitle {
    font-size: 16px;
    line-height: 1.4;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
  .card__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .card__form input {
    padding: 12px;
    border: 4px solid rgb(2, 63, 66);
    font-size: 16px;
    font-family: "Proxima Nova", sans-serif;
    transition: all 0.3s ease;
    background-color: #fff;
  }
  .card__form input:focus {
    outline: none;
    transform: scale(1.05);
  }
  .sign-up {
    border: 4px solid rgb(2, 63, 66);
    background: rgb(2, 63, 66);
    color: #fff;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .sign-up:hover {
    background: #fff;
    color: #000;
    transform: translateY(-5px);
    box-shadow: 0 5px 0 rgb(1, 45, 47);
  }
  .sign-up:active {
    animation: shake 0.5s ease-in-out;
    transform: translateY(0);
    box-shadow: none;
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>