<template>
    <div class="chat-wrapper">
      <Chat :messages="messages" :font="font" :fontColor="fontColor" :bgColor="bgColor" :replyColor="replyColor"
            :requestColor="requestColor" :logo="logo" :UUID="this.$route.params.session_id" @send-message="addMessage"/>
    </div>
  </template>
  
  <script>
  import Chat from '@/components/Chat.vue';
  import { getParams, getUUID } from '@/services/api';// Предположим, что функция getParams находится в файле params.js внутри папки api
  import logo from '@/assets/logo.jpeg';
  
  export default {
    name: 'SettingsChatSection',
    components: { Chat },
    data() {
      return {
        font: '',
        fontColor: '',
        bgColor: '',
        replyColor: '',
        requestColor: '',
        logo: logo,
        messages: [],
      };
    },
    async created() {
      try {
        const params = await getParams(this.$route.params.session_id);
        this.font = params.font || 'Arial';
        this.fontColor = params.font_color || '#000000';
        this.bgColor = params.bg_color || '#f7f7f7';
        this.replyColor = params.reply_color || '#d1e7dd';
        this.requestColor = params.request_color || '#cfe2ff';
        
        // Добавляем начальное сообщение после загрузки параметров
        this.messages.push({ id: 1, user: 'AI', text: 'Hello! How can I assist you today?' });
      } catch (error) {
        console.error('Error fetching parameters:', error);
        // В случае ошибки можно установить значения по умолчанию
        this.font = 'Arial';
        this.fontColor = '#000000';
        this.bgColor = '#f7f7f7';
        this.replyColor = '#d1e7dd';
        this.requestColor = '#cfe2ff';
      }
    },
    methods: {
      addMessage(message) {
        this.messages.push(message);
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-wrapper {
    flex: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
  }
  </style>