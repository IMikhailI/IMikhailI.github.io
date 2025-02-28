<script setup>
import downloads from "../data/downloads";
</script>

<template>
    <!-- Download Section Start -->
    <div id="download-section" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Быть IT-специалистом престижно и выгодно</h2>
                <!-- <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-17">текст текст текст текст текст текст текст текст текст текст текст</p> -->
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="(download, index) in downloads" 
                    :key="download.id" 
                    :class="[index === 0 ? 'lg:mb-10' : '', index === 1 ? 'lg:mt-10' : '', index === 2 ? 'lg:mt-20 lg:-mb-10' : '', index === 4 ? 'lg:mt-10 lg:-mb-10' : '', index === 5 ? 'lg:mt-20 lg:-mb-20' : '', 'custom-color', 'lift-simple']" 
                    class="shadow-lg rounded-lg tyty">
                    <div class="flex justify-center mt-12">
                        <img style="width: 100px; height: 100px" :src="download.icon" alt="Browser Logo" />
                    </div>
                    <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">{{ download.title }}</h3>
                    <p class="text-md font-theme-content text-theme-grayish-blue text-center mt-3">{{ download.subTitle }}</p>
                    <div class="my-7">
                        <!-- <img class="w-full" src="/images/bg-dots.svg" alt="Dot Backaground" /> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- Download Section End -->
</template>

<style>
.custom-color {
    /* background-color: rgb(9, 92, 96); */
    background-color: #d5d8ed89;

}
.tyty{
    box-shadow: 0 10px 24px rgb(114, 130, 133);
    padding: 10px;
}
.lift-simple {
    transition: transform 0.3s ease;
}
.lift-simple:hover {
    transform: translateY(-10px);
}
</style>
    <!-- <div class="flex justify-center mb-8">
        <LinkButton btn-type="primary" :link="download.link" class="text-sm">Add & Install Extension</LinkButton>
    </div> -->