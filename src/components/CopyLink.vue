<template>
  <div class="copy-link">
    <label for="link">Shareable Link</label>
    <div class="link-wrapper">
      <input id="link" type="text" :value="url" readonly />
      <button @click="copyToClipboard">Copy</button>
    </div>
  </div>
</template>

<script setup>
import { getUUID } from '@/services/api';
import { ref, onMounted } from "vue";

const url = ref("");

onMounted(async () => {
  let token = await getUUID(); // Предполагаем, что функция возвращает токен

  if (token) {
    url.value = `http://localhost:5173/chat/${token}`;
  }
});

const copyToClipboard = () => {
  navigator.clipboard.writeText(url.value).then(() => {
    alert("Link copied to clipboard!");
  }).catch((err) => {
    console.error(err);
  });
};
</script>

<style scoped>
.copy-link {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.link-wrapper {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>