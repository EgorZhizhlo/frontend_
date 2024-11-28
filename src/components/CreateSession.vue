<template>
    <!-- Ваш шаблон -->
</template>

<script>
import { createSession, getCookie } from '@/services/api';

export default {
    data() {
        return {
            sessionToken: null,
        };
    },
    mounted() {
        this.checkAndCreateSession();
    },
    methods: {
        async checkAndCreateSession() {
            this.sessionToken = getCookie('auth_token');

            if (!this.sessionToken) {
                try {
                    const sessionData = await createSession();

                    document.cookie = `auth_token=${sessionData.token}`;
                    console.log('Session created successfully:', sessionData);
                } catch (error) {
                    console.error('Error creating session:', error);
                }
            } else {
                console.log('Session token already exists in cookies:', this.sessionToken);
            }
        },
    },
};
</script>