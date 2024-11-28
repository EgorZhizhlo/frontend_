<script setup>
import { reactive, ref, watch } from "vue";
import { requestToLLM } from "@/services/api";

const props = defineProps([
  "messages",
  "font",
  "fontColor",
  "bgColor",
  "replyColor",
  "requestColor",
  "logo",
  "UUID",
]);

const emit = defineEmits(["send-message"]);

const newMessage = ref("");
const loading = ref(false); // Состояние загрузки

// Реакция на изменения настроек
const chatStyle = ref({});
const updateStyles = () => {
  chatStyle.value = {
    backgroundColor: props.bgColor,
    color: props.fontColor,
    fontFamily: props.font,
  };
};
const bubbleStyle = (isUser) => ({
  backgroundColor: isUser ? props.requestColor : props.replyColor,
  color: props.fontColor,
  fontFamily: props.font,
});

// Обновляем стили при изменении props
watch(() => props, updateStyles, { deep: true });
updateStyles();

const sendMessage = async () => {
  // Проверяем, есть ли введенное сообщение
  if (newMessage.value.trim()) {
    try {
      loading.value = true; // Начинаем загрузку
      // Делаем запрос к LLM
      emit("send-message", { id: Date.now(), user: "You", text: `${newMessage.value}` });
      const llmResponse = await requestToLLM(newMessage.value, props.UUID);

      // Отправляем сообщение с результатом от LLM
      emit("send-message", { id: Date.now(), user: "AI", text: `${llmResponse.message}` });
      newMessage.value = "";
    } finally {
      loading.value = false; // Завершаем загрузку
    }
  }
};
</script>

<template>
  <div class="chat" :style="chatStyle.value">
    <h4 class="chat-title">Chat</h4>
    <div class="chat-window">
      <div v-for="message in messages" :key="message.id" class="chat-message"
        :class="{ 'you': message.user === 'You' }">
        <img v-if="message.user !== 'You'" :src="logo" alt="Avatar" class="avatar" />
        <div class="bubble" :style="bubbleStyle(message.user === 'You')">
          <strong>{{ message.user }}</strong>: {{ message.text }}
        </div>
      </div>
    </div>
    
    <!-- Ввод сообщения -->
    <div v-if="!loading" class="chat-input-container">
      <input type="text" class="chat-input" v-model="newMessage" @keyup.enter="sendMessage"
        placeholder="Type a message..." />
    </div>
    
    <!-- Индикатор загрузки -->
    <div v-else class="loader-container">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
.chat {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.chat-title {
  font-weight: bold;
}

.chat-window {
  height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.chat-message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.chat-message.you {
  justify-content: flex-end;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.bubble {
  padding: 10px;
  border-radius: 15px;
  max-width: 70%;
  word-wrap: break-word;
}

.chat-input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}

.loader {
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>