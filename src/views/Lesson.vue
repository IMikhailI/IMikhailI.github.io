<!-- views/Lesson.vue -->
<template>
    <div class="container mx-auto px-5 py-12">
        <h1 class="text-3xl font-bold mb-8">Урок {{ lessonId }}</h1>
        <div class="content">
            <!-- Здесь будет содержимое урока -->
             <p>AAAAAAAAAAA</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const lessonId = route.params.id;
</script>