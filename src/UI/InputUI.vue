<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'

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

watch(() => props.modelValue, (newValue) => {
    modelValue.value = newValue;
});
</script>

<template>
    <div class="input-wrapper">
        <label :for="id" class="input-wrapper__label">{{ labelText }}</label>
        <input
            :id="id"
            class="input-wrapper__input"
            v-model="modelValue"
            :type="type"
            :required="required"
            :disabled="disabled"
            @input="$emit('update:modelValue', ($event.target as any).value)" 
        />
    </div>
</template>

<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
}

.input-wrapper__label {
    font-size: 30px;
    font-weight: 600;
    color: #181818;
}

.input-wrapper__input {
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
</style>