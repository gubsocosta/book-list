<script setup>
import {reactive, ref} from 'vue';

import BooksList from './components/BooksList.vue';
import BookProgress from './components/BookProgress.vue';
import AddBook from './components/AddBook.vue';

let books = reactive([
  {
    id: 1,
    title: 'History of Europe',
    cover: './img/a-short-history-of-europe-cover.png',
    isRead: true,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo',
  },
  {
    id: 2,
    title: 'Penguin Classics',
    cover: './img/the-penguin-classics-book-cover.png',
    isRead: false,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo, Jon Snow',
  },
  {
    id: 3,
    title: 'Becoming',
    cover: './img/becoming-cover.png',
    isRead: false,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo',
  },
  {
    id: 4,
    title: 'Sonnets',
    cover:'./img/sonnets-cover.png',
    isRead: false,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo',
  },
]);

let showAddBook = ref(false);

function toggleIsRead(bookId) {
  const bookFound = books.find(book => book.id === bookId);

  if (bookFound) {
    bookFound.isRead = !bookFound.isRead;
  }
}

function addBook(newBook) {
  newBook.id = Math.max(...books.map(b => b.id)) + 1;
  books.push(newBook);
  showAddBook.value = false;
}
</script>

<template>
  <div
    v-if="!showAddBook"
    class="container"
  >
    <h1>📖 Meus Livros</h1>
    <div class="header-btns">
      <button
        class="btn"
        @click="showAddBook = true"
      >
        Adicionar Livro +
      </button>
    </div>

    <div class="books-container">
      <BooksList
        :books="books"
        @toggle-is-read="toggleIsRead"
      />
      <BookProgress :books="books" />
    </div>
  </div>
  <div
    v-else
    class="container"
  >
    <AddBook
      @add-book="addBook"
      @close-add-book="showAddBook = false"
    />
  </div>
</template>

<style scoped>
</style>
