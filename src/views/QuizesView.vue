<script setup>
import q from '@/data/quizes.json';
import { ref, watch } from 'vue';
import Card from '@/components/Card.vue';
import { useRouter, useRoute } from 'vue-router'

const quizes = ref(q);
const searchQuery = ref('');
const router = useRouter();

watch(searchQuery, () => {
    quizes.value = q.filter(quiz =>
        quiz?.name.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())
    );
});

const goToQuiz = (quiz) => {
    const id = quiz.id;
    router.push(`/quiz/${id}`);
}

</script>

<template>
    <header>
        <h1>Quizes</h1>
        <input type="text" name="search" id="search" placeholder="Search..." v-model="searchQuery">
    </header>
    <div class="options-container">
        <template v-for="quiz in quizes">
            <Card :quiz="quiz" @click="goToQuiz(quiz)" />
        </template>
    </div>
</template>

<style scoped>
header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

h1 {
    font-weight: bold;
    margin-right: 30px;
}

input {
    border: none;
    background-color: rgb(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}


.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}
</style>