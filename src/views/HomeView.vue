<template>
  <div id="app">
    <HeaderSection />
    <UploadSection />
    <SettingsChatSection />
    <CopyLink :url="'https://CATeam.best/'" />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from '../components/HeaderSection.vue';
import UploadSection from '../components/UploadSection.vue';
import SettingsChatSection from '../components/SettingsChatSection.vue';
import FooterSection from '../components/FooterSection.vue';
import CopyLink from '../components/CopyLink.vue';

export default {
  components: {
    HeaderSection,
    UploadSection,
    SettingsChatSection,
    FooterSection,
    CopyLink,
  },
};
</script>

<style src="./styles.css"></style>
