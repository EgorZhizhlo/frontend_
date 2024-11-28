<template>
  <div class="row">
    <div class="settings-wrapper">
      <Settings :font="font" :fontColor="fontColor" :bgColor="bgColor" :replyColor="replyColor"
        :requestColor="requestColor" :logo="logo" @update:font="updateFont" @update:fontColor="updateFontColor"
        @update:bgColor="updateBgColor" @update:replyColor="updateReplyColor" @update:requestColor="updateRequestColor"
        @update-logo="updateLogo" />
    </div>
    <div class="chat-wrapper">
      <Chat :messages="messages" :font="font" :fontColor="fontColor" :bgColor="bgColor" :replyColor="replyColor"
        :requestColor="requestColor" :logo="logo" @send-message="addMessage" />
    </div>
  </div>
</template>

<script>
import Settings from './Settings.vue';
import Chat from './Chat.vue';

export default {
  name: 'SettingsChatSection',
  components: { Settings, Chat },
  data() {
    return {
      font: 'Arial',
      fontColor: '#000000',
      bgColor: '#f7f7f7',
      replyColor: '#d1e7dd',
      requestColor: '#cfe2ff',
      logo: 'zizlik.jpg',
      messages: [{ id: 1, user: 'AI', text: 'Hello! How can I assist you today?' }],
    };
  },
  methods: {
    updateFont(value) { this.font = value; },
    updateFontColor(value) { this.fontColor = value; },
    updateBgColor(value) { this.bgColor = value; },
    updateReplyColor(value) { this.replyColor = value; },
    updateRequestColor(value) { this.requestColor = value; },
    updateLogo(newLogo) { this.logo = newLogo; },
    addMessage(message) { this.messages.push(message); },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  gap: 20px;
  margin: 1%;
}

.settings-wrapper,
.chat-wrapper {
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
}
</style>
