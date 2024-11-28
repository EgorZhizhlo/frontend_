# Frontend module

# Introduction

This project is a web application built with Vue.js that connects to an API. It is containerized using Docker for easy deployment and scalability. The application provides a user-friendly interface for interacting with the backend services.
Technologies Used

    - Vue.js: A progressive JavaScript framework for building user interfaces.
    - Docker: A platform for developing, shipping, and running applications in containers.
    - JavaScript: The programming language used for frontend development.
    - API: The backend service that the frontend communicates with.

# Prerequisites
### System Requirements

    Operating System: Windows, macOS, or Linux.

### Software Requirements

    Docker: Ensure Docker is installed on your machine. You can download it from Docker's official website.
    Node.js: (Optional) Required for development purposes. Download from Node.js official website.

# Getting Started
### Clone the Repository

To get started, clone the project repository to your local machine:

```
bash

https://github.com/EgorZhizhlo/frontend_.git
cd repo
```

### Build the Docker Image

Navigate to the project directory and build the Docker image using the provided Dockerfile:

```
bash

docker build -t my-vue-app .
```

### Running the Application
Run the Docker Container

After building the image, you can run the application in a Docker container:

```
bash

docker run -p 8080:80 my-vue-app
```

# Accessing the Application

Once the container is running, you can access the application by opening a web browser and navigating to:

1) http://127.0.0.1:8080
2) http://172.17.0.2:8080

# Application Structure

The project directory structure is as follows:

Code

```
/my-vue-app
│
├── Dockerfile          # Instructions to build the Docker image
├── package.json        # Project metadata and dependencies
├── src/               # Source code for the Vue.js application
│   ├── components/     # Vue components
│   ├── views/          # Application views
│   └── App.vue         # Main Vue component
└── public/             # Static assets
```

# Frontend Details
### Vue.js Overview

The frontend is built using Vue.js, which allows for the creation of reactive components. The main entry point is App.vue, which serves as the root component.
API Connection

The application connects to the backend API to fetch and send data. The API endpoints are defined in the src/services/api.js file. Ensure that the API is running and accessible from the frontend.
Configuration
Environment Variables

You may need to set the following environment variables for the application to function correctly:

    VUE_APP_API_URL: The base URL for the API

Configuration Files

The main configuration file is package.json, which includes project dependencies and scripts.
Troubleshooting
Common Issues

    Container Fails to Start: Check the Docker logs for errors.

bash

    docker logs <container-id>

    Cannot Access Application: Ensure the container is running and the correct port is mapped.

Logs

To view logs for debugging, use the following command:

bash

docker logs <container-id>

## User Experience

Module contains 2 pages: Settings (which is coded in SettingsPage.vue) and Chat (ChatView).

#### Settings page 

Settings page contains of Header (HeaderSection.vue), drag-and-drop section (UploadSection.vue), Chat Settings (Settings.vue), Chat (Chat.vue) (Also there are additional prarmeteres for Settings and Chat in SettingsChatSection.vue), Form to recieve link for customised AI (CopyLink.vue) and Footer (Footer.vue)

#### Chat page

Chat page uses already mentioned Chat.vue, practically being subpart of Settings

---

# Using AIistant

#### 1. **How to Upload Files**

1. Go to the **"Files"** section at the top of the page.
2. Click on the **"Drag and drop files here"** area.
3. Drag and drop a file into the designated area or click it to select a file from your computer.
4. Once the file is uploaded, it will be processed, and you can use it in your interaction with the AI.

## 2. **How to Chat with the AI**

1. The chat window is located on the right side of the interface.
2. Type your query into the text input field below the chat window.
3. Press **Enter** or the send button to submit your message.
4. The AI will respond in text format. Feel free to ask any question or request any task.

## 3. **Customizing Chat Colors and Interface**

1. In the **"Chat Settings"** section, you can customize the chat appearance:
   - **Font:** Select a font from the dropdown menu.
   - **Text Color:** Click the color box to choose the text color.
   - **Chat Background:** Adjust the background color of the chat.
   - **Reply Bubble Color:** Select a color for the AI's response bubbles.
   - **Request Bubble Color:** Set the color for your message bubbles.
2. Changes will apply immediately to the interface.

## 4. **Changing Your Avatar**

1. Click the **"Upload Avatar"** button.
2. Select an image from your device.
3. Once uploaded, the avatar will appear next to model's replies

## 5. **Sharing a Link to the Chat**

1. At the bottom of the page, you’ll find the **"Shareable Link"** field.
2. Click the **"Copy"** button to copy the unique link for the current chat.
3. Share the link to revisit this chat or send it to another user.

---

# frontend_
