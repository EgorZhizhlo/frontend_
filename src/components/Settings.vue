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
      <label for="bg-color">Chat Background</label>
      <input id="bg-color" type="color" v-model="bgColor" />
    </div>
    <div class="form-group">
      <label for="reply-color">Reply Bubble Color</label>
      <input id="reply-color" type="color" v-model="replyColor" />
    </div>
    <div class="form-group">
      <label for="request-color">Request Bubble Color</label>
      <input id="request-color" type="color" v-model="requestColor" />
    </div>
    <div class="form-group avatar-wrapper">
      <label>Change Avatar</label>
      <button class="btn-avatar" @click="$refs.avatar.click()">Upload Avatar</button>
      <input type="file" id="avatar" ref="avatar" @change="handleAvatarChange" style="display: none;" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const font = ref("Arial");
const fontColor = ref("#000000");
const bgColor = ref("#f8f9fa");
const replyColor = ref("#d1e7dd");
const requestColor = ref("#cfe2ff");

const handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const avatar = URL.createObjectURL(file);
    $emit("update-logo", avatar);
  }
};

watch(font, (newValue) => $emit("update:font", newValue));
watch(fontColor, (newValue) => $emit("update:fontColor", newValue));
watch(bgColor, (newValue) => $emit("update:bgColor", newValue));
watch(replyColor, (newValue) => $emit("update:replyColor", newValue));
watch(requestColor, (newValue) => $emit("update:requestColor", newValue));
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
