<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Props {
    type: 'button' | 'submit' | 'reset' | undefined;
    disabled: boolean;
    textButton: string;
}

defineEmits(['eventButton'])

defineProps<Props>()
</script>

<template>
    <button
        :type="type"
        class="btn"
        :disabled="disabled" 
        @click="$emit('eventButton', 1)"
    >
        {{ textButton }}
    </button>
</template>
<!-- -->


<style>
.btn {
    width: 100%;
    height: 60px;
    background-color: #e3e3e3;
    margin-bottom: 30px;
    border: 0px;
    border-radius: 16px;
    font-size: 22px;
    color: #181818;
    cursor: pointer;
}

.btn:disabled,
.btn:disabled:hover {
    color: #d1d1d1;
    background-color: #e9e9e9;
    cursor: not-allowed;
}

.btn:hover {
    background-color: #181818;
    color: white;
}
</style>