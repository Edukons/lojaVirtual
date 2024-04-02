<script setup>
import { RouterView } from 'vue-router';
import MediumHeader from '../components/templates/Medium/MediumHeader.vue';
import MediumAside from '../components/templates/Medium/MediumAside.vue';
import MediumFooter from '../components/templates/Medium/MediumFooter.vue';
</script>

<template>
    <header>
        <MediumHeader />
    </header>
    <aside>
        <MediumAside />
    </aside>
    <main>
        <router-view />
    </main>
    <footer>
        <MediumFooter />
    </footer>
</template>