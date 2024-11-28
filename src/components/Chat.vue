<script setup>
import { reactive, ref, watch } from "vue";

const props = defineProps([
  "messages",
  "font",
  "fontColor",
  "bgColor",
  "replyColor",
  "requestColor",
  "logo",
]);

const emit = defineEmits(["send-message"]);

const newMessage = ref("");


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

const sendMessage = () => {
  if (newMessage.value.trim()) {
    emit("send-message", { id: Date.now(), user: "You", text: newMessage.value });
    newMessage.value = "";
  }
};
</script>

<template>
  <div class="chat" :style="chatStyle.value">
    <h4 class="chat-title">Chat</h4>
    <div class="chat-window">
      <div
        v-for="message in messages"
        :key="message.id"
        class="chat-message"
        :class="{ 'you': message.user === 'You' }"
      >
        <img
          v-if="message.user !== 'You'"
          :src="logo"
          alt="Avatar"
          class="avatar"
        />
        <div class="bubble" :style="bubbleStyle(message.user === 'You')">
          <strong>{{ message.user }}</strong>: {{ message.text }}
        </div>
      </div>
    </div>
    <input
      type="text"
      class="chat-input"
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Type a message..."
    />
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
</style>
