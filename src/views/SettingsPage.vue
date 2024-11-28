<template>
  <div id="app">
    <createSession />
    <HeaderSection />
    <UploadSection />
    <SettingsChatSection />
    <CopyLink />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import UploadSection from '@/components/UploadSection.vue';
import SettingsChatSection from '@/components/SettingsChatSection.vue';
import CopyLink from '@/components/CopyLink.vue';
import FooterSection from '@/components/FooterSection.vue';
import createSession from '@/components/CreateSession.vue';
export default {
  components: {
    HeaderSection,
    UploadSection,
    SettingsChatSection,
    FooterSection,
    CopyLink,
    createSession,
  },
};
</script>

<style src="./styles.css"></style>