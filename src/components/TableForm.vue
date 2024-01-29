<script setup lang="ts">
import Button from '../UI/ButtonUI.vue';
import InputUI from '../UI/InputUI.vue'
import SelectUI from '../UI/SelectUI.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex';

const searchParam = ref<string>('Общий поиск');
let dataInput = ref<string>('')
const store = useStore()

const disabledSubmit = computed(() => {
    return dataInput.value.length !== 0 && dataInput.value !== null ? false : true
})

const inputType = computed(() => {
    return searchParam.value === 'Id' ? 'number' : searchParam.value === 'Date' ? 'date' : 'text'
})

function formSubmit() {
    store.commit('SEARCH_ROW', {
        filter: searchParam.value,
        searchData: dataInput.value
    })
    dataInput.value = ''
    console.log(dataInput.value)
}
</script>

<template>
    <form @submit.prevent="formSubmit">
        <SelectUI
            :options="['Общий поиск', 'Id', 'Date']"
            :tabindex="1"
            v-model="searchParam"
            labelText="Выберете параметр поиска:"
        />
        <InputUI
            v-model="dataInput"
            :type='inputType'
            id='search-parametr'
            :required="true"
            :disabled="false"
            :labelText="`${searchParam === 'Общий поиск' ? 'Общий поиск по Name и Description' : `Поиск по ${searchParam}`}`"
        />
        <Button
            type="submit"
            textButton="Поиск"
            :disabled="disabledSubmit"
        />
    </form>
</template>