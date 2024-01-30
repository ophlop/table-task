<template>
    <div class="notitfication">
        <p>{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    text: string
}

defineProps<Props>()
</script>

<style scoped>
.notitfication {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
    color: #181818;
    background-color: #d1d1d1;
    border: 0;
    border-radius: 16px;
    padding: 6px 20px;
    display: flex;
    align-items: center;
}

.notitfication>p {
    margin: 0;
}
</style>