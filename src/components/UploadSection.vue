<script setup>
import { ref } from "vue";

const fileList = ref([]);

const triggerFileInput = () => {
  document.getElementById("fileInput").click();
};

const handleFileChange = (event) => {
  const files = Array.from(event.target.files);
  addFilesToList(files);
};

const onFileDrop = (event) => {
  const files = Array.from(event.dataTransfer.files);
  addFilesToList(files);
};

const addFilesToList = async (files) => {
  for (const file of files) {
    const fileEntry = {
      id: Date.now() + Math.random(),
      name: file.name,
      progress: 0,
    };
    fileList.value.push(fileEntry);

    try {
      const response = await uploadFile(file);
      console.log('File uploaded successfully:', response);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
};

const removeFile = (index) => {
  fileList.value.splice(index, 1);
};
</script>

<template>
  <section class="upload-section" @dragover.prevent @drop.prevent="onFileDrop">
    <input
      type="file"
      id="fileInput"
      class="file-input-hidden"
      @change="handleFileChange"
      multiple
    />
    <div class="upload-container" @click="triggerFileInput">
      <h3 class="section-title">Files</h3>
      <p class="section-subtitle">Drag and drop files here</p>
    </div>
    <div class="file-list">
      <div
        v-for="(file, index) in fileList"
        :key="file.id"
        class="file-item"
      >
        <div class="file-name">{{ file.name }}</div>
        <button class="btn-remove" @click="removeFile(index)">×</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.upload-section {
  padding: 20px;
}
.upload-container {
  border: 2px dashed #dee2e6;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.upload-container:hover {
  background-color: #f8f9fa;
}
.section-title {
  font-weight: bold;
}
.section-subtitle {
  color: #6c757d;
}
.file-input-hidden {
  display: none;
}
.file-list {
  margin-top: 20px;
}
.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dee2e6;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.btn-remove {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn-remove:hover {
  background-color: #c82333;
}
</style>
