<script setup>
import { RouterView } from 'vue-router';
import LargeHeader from '../components/templates/Large/LargeHeader.vue';
import LargeAside from '../components/templates/Large/LargeHeader.vue';
import LargeFooter from '../components/templates/Large/LargeFooter.vue';
</script>

<template>
    <div id="layout-large">
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
    </div>
</template>

<style scoped>
#layout-large {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside header'
    'aside main'
    'aside footer';
  min-height: 100vh;
}
header {
  display: flex;
  background-color: orange;
  widows: 100vw;
  justify-content: flex-end;
  padding: 1.5rem;
  grid-area: header;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #eeeeee;
  grid-area: footer;
}
aside {
  border-right: #eeeeee 1px solid;
  box-shadow: 0 0 10px 0 #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  grid-area: aside;
}
main {
  min-height: 80%;
  padding: 2rem;
  grid-area: main;
}
</style>