<script setup>
import Books from './components/Books.vue';
import BookProgress from './components/BookProgress.vue';

import {reactive} from "vue";

let books = reactive([
  {
    id: 1,
    title: "History of Europe",
    cover: "./img/a-short-history-of-europe-cover.png",
    isRead: true,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo",
  },
  {
    id: 2,
    title: "Penguin Classics",
    cover: "./img/the-penguin-classics-book-cover.png",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo, Jon Snow",
  },
  {
    id: 3,
    title: "Becoming",
    cover: "./img/becoming-cover.png",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo",
  },
  {
    id: 4,
    title: "Sonnets",
    cover:"./img/sonnets-cover.png",
    isRead: false,
    isbn: "0-395-07157-8",
    author: "Daniel Trejo",
  },
]);

function toggleIsRead(bookId) {
  const bookFound = books.find(book => book.id === bookId);

  if (bookFound) {
    bookFound.isRead = !bookFound.isRead
  }
}
</script>

<template>
  <div class="container">
    <h1>📖 Meus Livros</h1>
    <div class="header-btns">
      <button class="btn">
        Adicionar Livro +
      </button>
    </div>

    <div class="books-container">
      <Books :books="books"
             @toggleIsRead="toggleIsRead"
      />
      <BookProgress :books="books"/>
    </div>
  </div>
</template>

<style scoped>
</style>
