<script setup>
let newBook = {
  title: '',
  cover: '',
  isRead: false,
  isbn:  '',
  author: ''
};
</script>

<template>
  <h1>📖 Adicionar Livro</h1>

  <div class="header-btns">
    <button
      class="btn"
      @click="$emit('closeAddBook')"
    >
      Fechar x
    </button>
  </div>

  <form class="add-form">
    <div class="form-control">
      <label>Título</label>
      <input
        v-model="newBook.title"
        name="text"
        placeholder="Adicione o título"
        type="text"
        required
      >
    </div>
    <div class="form-control">
      <label>Capa</label>
      <input
        v-model="newBook.cover"
        name="cover"
        placeholder="Adicione o link da imagem de capa"
        type="text"
        required
      >
    </div>
    <div class="form-control">
      <label>Autor</label>
      <input
        v-model="newBook.author"
        name="author"
        placeholder="Adicione o autor"
        type="text"
      >
    </div>
    <div class="form-control">
      <label>ISBN#</label>
      <input
        v-model="newBook.isbn"
        name="isbn"
        placeholder="Adicione o ISBN"
        type="text"
      >
    </div>
    <div class="form-control form-control-check">
      <input
        id="readIt"
        v-model="newBook.isRead"
        name="readIt"
        type="checkbox"
      >
      <label for="readIt">Já li o livro</label>
    </div>

    <button
      class="btn btn-block"
      type="submit"
      @click.prevent="$emit('addBook', newBook)"
    >
      Salvar livro
    </button>
  </form>
</template>

<style scoped>

</style>
