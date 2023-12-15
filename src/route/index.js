import QuizViewVue from '@/views/QuizView.vue';
import QuizesViewVue from '@/views/QuizesView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const route = createRouter({
    history: createWebHistory(import.meta?.url?.env?.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizes',
            component: QuizesViewVue,
        },
        {
            path: '/quizes',
            redirect: '/'
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: QuizViewVue,
        },

    ]
})

export default route;