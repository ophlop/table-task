<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface Props {
    modelValue: string | number;
    type: string;
    id: string;
    required: boolean;
    disabled: boolean;
    labelText: string;
}

const props = defineProps<Props>()

const modelValue = ref(props.modelValue);
</script>

<template>
    <div class="input-wrapper">
        <label :for="id">{{ labelText }}</label>
        <input
            :id="id"
            v-model="modelValue"
            :type="type"
            :required="required"
            :disabled="disabled"
            @input="$emit('update:modelValue', ($event.target as any).value)" 
        />
    </div>
</template>

<style scoped>
input {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 4px 20px;

    border: 2px solid #d1d1d1;
    border-radius: 16px;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #181818;
    font-weight: 400;
}

label {
    font-size: 30px;
    font-weight: 600;
    color: #181818;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 30px;
    margin-bottom: 30px;
}
</style>