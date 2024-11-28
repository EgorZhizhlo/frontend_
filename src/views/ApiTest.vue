<template>
    <div>
      <button @click="fetchData">Получить данные</button>
      <ul v-if="data">
        <li v-for="item in data" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'App',
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
          this.data = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>