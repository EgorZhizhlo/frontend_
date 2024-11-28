<template>
  <div id="app">
    <HeaderSection />
    <UploadSection />
    <Settings />
    <Chat />
    <CopyLink :url="'https://CATeam.best/'" />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import UploadSection from '@/components/UploadSection.vue';
import Settings from '@/components/Settings.vue';
import SettingsChatSection from '@/components/SettingsChatSection.vue';
import Chat from '@/components/Chat.vue';
import CopyLink from '@/components/CopyLink.vue';
import FooterSection from '@/components/FooterSection.vue';
export default {
  components: {
    HeaderSection,
    UploadSection,
    Settings,
    SettingsChatSection,
    Chat,
    FooterSection,
    CopyLink,
  },
};
</script>

<style src="./styles.css"></style>