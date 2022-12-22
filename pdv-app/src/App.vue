<template>
    <div>
        <p>Home page</p>
        <HelloWorld msg="test" />

        <PdvButton @click="test">
            <template #name>click me</template>
        </PdvButton>

        <pre>clicked: {{ times }}</pre>
    </div>
</template>

<script setup>
import HelloWorld from './components/hellow-world.vue';
import PdvButton from 'remote_app/PdvButton';
import { ref } from 'vue';

const times = ref(0);

function test() {
    times.value += 1;
}
</script>

<style scoped></style>
