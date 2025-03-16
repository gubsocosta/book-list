<script setup>
const props = defineProps(['books']);
</script>

<template>
  <div class="books-list">
    <div
      v-for="(book, index) in books"
      :key="index"
      class="book"
    >
      <div
        v-if="book.isRead"
        class="readIt"
      >
        <i class="fa-solid fa-eye" />
      </div>
      <div class="book-cover">
        <img :src="book.cover">

        <button
          :class="{isRead: book.isRead}"
          @click="$emit('toggleIsRead', book.id)"
        >
          <i class="fa-solid fa-eye" />
          <span>{{ book.isRead ? 'Ja li' : 'Ainda nao li' }}</span>
        </button>
      </div>
      <div class="book-details">
        <p class="book-author">
          {{ book.author }}
        </p>
        <h3 class="book-title">
          {{ book.title }}
        </h3>
        <p><i class="fa-solid fa-hashtag icon" /> {{ book.isbn }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
