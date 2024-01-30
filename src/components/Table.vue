<script setup lang="ts">
import TableForm from './TableForm.vue';
import TableRow from '../UI/TableRowUI.vue';
import ButtonUI from '../UI/ButtonUI.vue';
import NotificationUI from '../UI/NotificationUI.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const tableData = computed(() => {
    return store.getters.returnTableData;
});

const isSearching = computed(() => {
    return store.getters.searchingState;
});

const tableHead = {
    firstColumn: 'Id',
    secondColumn: 'Name',
    thirdColumn: 'Description',
    fourthColumn: 'Date'
}

let typeSort = 'descending';

const sortDataTable = (type: string) => {
    store.commit('SORT_TABLE', type)
    typeSort = typeSort === 'descending' ? 'increasing' : 'descending'
}

const returnFullTable = () => {
    store.commit("RESET_TABLE")
}
</script>

<template>
    <section id="table-view" class="container table-container">
        <TableForm />
        <div class="table-container__btn-wrapper">
            <ButtonUI
                v-if="isSearching === true"
                type="button"
                textButton="Сбросить поиск"
                @eventButton="returnFullTable()"
                :disabled="false"
            />
            <ButtonUI
                v-if="tableData.length !== 0 && tableData.length !== 1"
                type="button"
                :textButton="typeSort === 'descending' ? 'Отсортировать по убыванию' : 'Отсортировать по возрастанию'"
                @eventButton="sortDataTable(typeSort)"
                :disabled="false"
            />
        </div>
        <table v-if="tableData.length !== 0" class="table-view__table">
            <thead>
                <TableRow
                    :data="tableHead"
                    tablePosition="head"
                />
            </thead>
            <tbody>
                <TableRow
                    v-for="data in tableData"
                    :key="data.id"
                    :data="data"
                    tablePosition="body"
                />
            </tbody>
        </table>
        <NotificationUI
            v-else
            text="Поиск не дал результатов"
        />        
    </section>
</template>

<style scoped>
.table-container {
    margin-bottom: 30px;
}

.table-view__table {
    table-layout: fixed;
    width: 100%;
    white-space: nowrap;
    border-collapse: collapse;
}

.table-container__btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2%;
}

@media (max-width: 640px) {
    .table-view__table thead {
        display: none;
    }

    .table-container__btn-wrapper {
        flex-direction: column;
        gap: unset;
    }
}
</style> 