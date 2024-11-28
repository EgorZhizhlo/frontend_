<template>
  <div class="settings">
    <h4>Chat Settings</h4>
    <div class="form-group">
      <label for="font">Font</label>
      <select id="font" v-model="font" class="form-control">
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select>
    </div>
    <div class="form-group">
      <label for="font-color">Text Color</label>
      <input id="font-color" type="color" v-model="fontColor" />
    </div>
    <div class="form-group">
      <label for="reply-color">Reply Bubble Color</label>
      <input id="reply-color" type="color" v-model="replyColor" />
    </div>
    <div class="form-group">
      <label for="request-color">Request Bubble Color</label>
      <input id="request-color" type="color" v-model="requestColor" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { updateParams } from '@/services/api'; // Предположим, что функция находится в файле api.js

const font = ref("Arial");
const fontColor = ref("#000000");
const bgColor = ref("#f8f9fa");
const replyColor = ref("#d1e7dd");
const requestColor = ref("#cfe2ff");

// Функция для обработки изменения аватара
const handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const avatar = URL.createObjectURL(file);
    emit("update-logo", avatar);
  }
};

// Эмиттер событий
const emit = defineEmits([
  'update:font',
  'update:fontColor',
  'update:bgColor',
  'update:replyColor',
  'update:requestColor',
  'update-logo'
]);

// Обновление параметров через API
const updateParam = async (paramName, value) => {
  try {
    const params = {
      font: font.value,
      font_color: fontColor.value,
      bg_color: bgColor.value,
      reply_color: replyColor.value,
      request_color: requestColor.value,
      logo: avatar.value
    };
    params[paramName] = value
    await updateParams(params);
  } catch (error) {
    console.error(`Ошибка обновления параметра ${paramName}:`, error);
  }
}

// Наблюдатели за изменениями параметров
watch(font, async (newValue) => {
  emit("update:font", newValue);
  await updateParam('font', newValue); // Вызываем обновление через API
});

watch(fontColor, async (newValue) => {
  emit("update:fontColor", newValue);
  await updateParam('font_color', newValue); // Вызываем обновление через API
});

watch(bgColor, async (newValue) => {
  emit("update:bgColor", newValue);
  await updateParam('bg_color', newValue); // Вызываем обновление через API
});

watch(replyColor, async (newValue) => {
  emit("update:replyColor", newValue);
  await updateParam('reply_color', newValue); // Вызываем обновление через API
});

watch(requestColor, async (newValue) => {
  emit("update:requestColor", newValue);
  await updateParam('request_color', newValue); // Вызываем обновление через API
});
</script>

<style scoped>
.settings {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

h4 {
  margin-bottom: 20px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

input[type="color"] {
  height: 36px;
  border: none;
  cursor: pointer;
}

.avatar-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-avatar {
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-avatar:hover {
  background-color: #0056b3;
}
</style>
