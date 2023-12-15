<script setup>
import { ref, computed } from 'vue';
import q from '@/data/quizes.json';
import { useRoute } from 'vue-router';
import Question from '@/components/Question.vue';
import QuizHeader from '@/components/QuizHeader.vue';
import Result from '@/components/Result.vue';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = q.find(d => d.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfcorrectAnswers = ref(0);
const questionStatus = computed(() => `${currentQuestionIndex.value} / ${quiz.questions.length}`)
const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}% `);
const result = computed(() => `${numberOfcorrectAnswers.value} / ${quiz.questions.length}`)

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfcorrectAnswers.value++;
    }
    currentQuestionIndex.value++;
}

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <Result v-if="currentQuestionIndex >= quiz.questions.length" :result="result" />
        <Question 
            v-else 
            @optionSelected="onOptionSelected($event)" 
            :question="quiz.questions[currentQuestionIndex]" 
        />
    </div>
</template>