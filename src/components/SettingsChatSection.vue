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
        :requestColor="requestColor" :logo="logo" :UUID="UUID" @send-message="addMessage" />
    </div>
  </div>
</template>

<script>
import Settings from '@/components/Settings.vue';
import Chat from '@/components/Chat.vue';
import { getUUID, getParams } from '@/services/api';
import logo from '@/assets/logo.jpeg';


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
      logo: logo,
      messages: [{ id: 1, user: 'AI', text: 'Hello! How can I assist you today?' }],
      UUID: null,
    };
  },
  async created() {
    try {
      this.UUID = await getUUID();
    } catch (error) {
      console.error('Ошибка при получении UUID:', error);
    }
    try {
        const params = await getParams(this.UUID);
        this.font = params.font || 'Arial';
        this.fontColor = params.font_color || '#000000';
        this.bgColor = params.bg_color || '#f7f7f7';
        this.replyColor = params.reply_color || '#d1e7dd';
        this.requestColor = params.request_color || '#cfe2ff';
        
        // Добавляем начальное сообщение после загрузки параметров
      } catch (error) {
        console.error('Error fetching parameters:', error);

      }
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
