<script setup>
import {computed} from 'vue';

const props = defineProps(['books']);
const booksRead = computed(() => props.books.filter(b => b.isRead).length);
const booksReadMessage = computed(() => booksRead.value >= props.books.length
  ? 'Parabens, voce leu todos os livros'
  : `${booksRead.value} de ${props.books.length} livro(s) lido(s)`
);
</script>

<template>
  <div class="books-read">
    <label for="progress">Seu Progresso</label>
    <br>
    <progress
      :value="booksRead"
      :max="books.length"
    />
    <p>{{ booksReadMessage }}</p>
  </div>
</template>

<style scoped>

</style>
