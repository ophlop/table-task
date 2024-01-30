<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface Props {
    data: object,
    tablePosition: string;
}

const props = defineProps<Props>()

const getClass = computed(() => {
    const position = props.tablePosition;

    return {
        tr: position === 'head' ? 'tr-head' : 'tr-body',
        td: position === 'head' ? 'td-head' : 'td-body',
    };
});
</script>

<template>
    <tr :class="getClass.tr">
        <td
            v-for="([key, value], index) in Object.entries(data)"
            :key="`${index}`"
            :class="getClass.td"
            :data-label="key"
        >
            {{ value }}
        </td>

    </tr>
</template>

<style scoped>
td {
    box-sizing: border-box;
    padding: 4px 20px;
    white-space: nowrap;
    overflow: hidden;
    height: 60px;
}

.td-head {
    font-size: 24px;
    font-weight: 600;
}

.td-body {
    font-size: 22px;
    font-weight: 400;
}

.tr-head {
    background-color: #e3e3e3;
}

.tr-body {
    background-color: #eee;
}

td:first-child {
    width: 6%;
}

td:nth-child(2) {
    width: 14%;
}

td:nth-child(3) {
    width: 40%;
}

td:last-child {
    width: 40%;
}

@media (max-width: 980px) {
    .td-head {
        font-size: 20px;
    }

    .td-body {
        font-size: 18px;
    }
}

@media (max-width: 640px) {
    tr {
        margin-bottom: 10px;
        display: block;
        border-bottom: 2px solid #d1d1d1;
    }

    td {
        display: block;
        text-align: right;
        height: 40px;
        padding-top: 10px;
        font-size: 13px;
        border-bottom: 1px dotted #d1d1d1;
    }

    .td-head {
        font-size: 16px;
    }

    .td-body {
        font-size: 14px;
    }

    td:last-child {
        border-bottom: 0;
    }

    td:before {
        content: attr(data-label);
        float: left;
        text-transform: uppercase;
        font-weight: bold;
    }

    td:first-child,
    td:nth-child(2),
    td:nth-child(3),
    td:last-child {
        width: 100%;
    }
}
</style>