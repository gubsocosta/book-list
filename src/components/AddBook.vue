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
    <button class="btn" @click="$emit('closeAddBook')">
      Fechar x
    </button>
  </div>

  <form class="add-form">

    <div class="form-control">
      <label>Título</label>
      <input
          name="text"
          placeholder="Adicione o título"
          type="text"
          v-model="newBook.title"
          required
      />
    </div>
    <div class="form-control">
      <label>Capa</label>
      <input
          name="cover"
          placeholder="Adicione o link da imagem de capa"
          type="text"
          v-model="newBook.cover"
          required
      />
    </div>
    <div class="form-control">
      <label>Autor</label>
      <input
          name="author"
          placeholder="Adicione o autor"
          type="text"
          v-model="newBook.author"
      />
    </div>
    <div class="form-control">
      <label>ISBN#</label>
      <input
          name="isbn"
          placeholder="Adicione o ISBN"
          type="text"
          v-model="newBook.isbn"
      />
    </div>
    <div class="form-control form-control-check">
      <input
          id="readIt"
          name="readIt"
          type="checkbox"
          v-model="newBook.isRead"
      />
      <label for="readIt">Já li o livro</label>
    </div>

    <button @click.prevent="$emit('addBook', newBook)" class="btn btn-block" type="submit">Salvar livro</button>
  </form>
</template>

<style scoped>

</style>
