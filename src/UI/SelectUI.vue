<script setup lang="ts">
import { ref, defineProps, onMounted, watch, getCurrentInstance } from 'vue'

interface Props {
    options: string[],
    tabindex: number,
    modelValue: string,
    labelText: string,
}

const { options, tabindex, modelValue } = defineProps<Props>()

const selected = ref(modelValue || options[0])
const open = ref(false)
const instance = getCurrentInstance()

const toggleDropdown = () => {
    open.value = !open.value
}

const selectOption = (option: string) => {
    selected.value = option
    open.value = false
    instance?.emit('update:modelValue', option)
}

const handleBlur = () => {
    open.value = false
}

onMounted(() => {
    instance?.emit('update:modelValue', selected.value);
})

watch(() => modelValue, (newVal) => {
    selected.value = newVal;
});
</script>

<template>
    <h3>{{ labelText }}</h3>
    <div class="custom-select" :tabindex="tabindex" @blur="handleBlur">
      <div class="selected" :class="{ open: open }" @click="toggleDropdown">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div class="item" v-for="(option, i) of options" :key="i" @click="selectOption(option)">
          {{ option }}
        </div>
      </div>
    </div>
</template>



<style scoped>
h3 {
    font-size: 30px;
    font-weight: 600;
    color: #181818;
    margin-top: 0;
}

.custom-select {
    position: relative;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    outline: none;
    height: 90px;
    line-height: 50px;
    font-size: 22px;
}

.selected {
    background-color: white;
    border-radius: 16px;
    border: 1px solid #d1d1d1;
    color: #181818;
    cursor: pointer;
    user-select: none;
    height: 60px;
    box-sizing: border-box;
    padding: 4px 20px;

}


.selected.open {
    border: 1px solid #181818;
    border-radius: 16px 16px 0px 0px;
}

.selected:after {
    position: absolute;
    content: “”;
    top: 22px;
    right: 10px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-color: #d1d1d1 transparent transparent transparent;
}

.items {
    color: #181818;
    border-radius: 0px 0px 16px 16px;
    overflow: hidden;
    border-right: 1px solid #d1d1d1;
    border-left: 1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1;
    position: absolute;
    background-color: white;
    left: 0;
    right: 0;
}

.item {
    color: #181818;
    padding-left: 20px;
    cursor: pointer;
    user-select: none;
}

.item:hover {
    background-color: #e3e3e3;
}

.selectHide {
    display: none;
}
</style>
