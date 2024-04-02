<script setup>
import { RouterView } from 'vue-router';
import SmallHeader from '../components/templates/Small/SmallHeader.vue';
import SmallFooter from '../components/templates/Small/SmallFooter.vue';
</script>

<template>
    <header>
        <SmallHeader />
    </header>
    <main>
        <router-view />
    </main>
    <footer>
        <SmallFooter />
    </footer>
</template>