<script setup>
import { RouterView } from 'vue-router';
import LargeHeader from '../components/templates/Large/LargeHeader.vue';
import LargeAside from '../components/templates/Large/LargeHeader.vue';
import LargeFooter from '../components/templates/Large/LargeFooter.vue';
</script>

<template>
    <header>
        <LargeHeader />
    </header>
    <aside>
        <LargeAside />
    </aside>
    <main>
        <router-view />
    </main>
    <footer>
        <LargeFooter />
    </footer>
</template>