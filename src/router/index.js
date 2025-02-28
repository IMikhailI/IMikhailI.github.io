import { createRouter, createWebHistory } from 'vue-router';
import Main from '../layouts/Main.vue';
import Lesson from '../views/Lesson.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
        },
        {
            path: '/lesson/:id',
            name: 'lesson',
            component: Lesson,
            props: true
        }
    ]
});

export default router;