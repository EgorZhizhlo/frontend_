<script setup>
import Chat from '@/components/Chat.vue';
</script>

<template>
    <h1>Chat Session ID: {{ $route.params.session_id }}</h1>
    <Chat></Chat>
</template>