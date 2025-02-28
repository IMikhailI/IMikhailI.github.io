<template>
    <!-- Hero Section Start bg-gray-800 -->
    <div class="container  mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <div class="flex justify-center lg:justify-start mt-1 div1">
                    <div class="frontend">Курс по frontend с нуля</div>
                </div>
                <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">Основы веб-разработки: от идеи до реализации</h1>
                <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left">Освоите frontend-разработку с нуляю. Вы изучите HTML, CSS, и язык программирования JavaScript</p>
                <div class="flex justify-center lg:justify-start mt-10">
                    <LinkButton btn-type="primary" link="#subscribe" class="text-responsive px-20 py-6 ">Записаться на курс</LinkButton>
                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                    <img class="z-10 w-full" src="/images/komp.png" alt="Browser Logo" style="width: 450px; transform: translate(190px, 30px);" />
                    <div class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
                </div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>

<style scoped>
.div1 {
    box-shadow: 0 8px 24px rgb(166, 186, 206);
    border-radius: 12px;
    background-color:rgb(229, 233, 238);
    padding: 12px 20px;
    color:rgb(80, 65, 247);
    transition: all 0.3s ease;
    margin-bottom: 24px;
    max-width: 282px;
}

.div1:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(46, 54, 62, 0.15);
}

.frontend {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
}
</style>