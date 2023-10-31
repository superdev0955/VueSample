<script setup>
import _range from 'lodash/range'
import {computed, ref, watch} from "vue";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const props = defineProps({
    selectedDate: Date,
    min: Date,
    max: Date,
})

const emit = defineEmits(['dateChange', 'update:modelValue'])

const date = ref(new Date())
const month = computed(() => date.value.getMonth())
const year = computed(() => date.value.getFullYear())

const firstDay = computed(() => new Date(year.value, month.value).getDay())
const previousMonth = computed(() => month.value === 0 ? 12 : month.value - 1)
const previousMonthYear = computed(() => previousMonth.value === 12 ? year.value - 1 : year.value)
const lastDate = computed(() => 32 - new Date(year.value, month.value, 32).getDate())
const lastDay = computed(() => new Date(year.value, month.value, lastDate.value).getDay())
const previousMonthLastDay = 32 - new Date(previousMonthYear.value, previousMonth.value, 32).getDate();

const highlightSelectedDate = (day) => {
    return (
        day === props.selectedDate.getDate() &&
        props.selectedDate.getMonth() === date.value.getMonth() &&
        props.selectedDate.getFullYear() === date.value.getFullYear()
    );
};

function handleSelectDate(e, n) {
    e.preventDefault();
    const copiedDate = new Date(date.value.getTime());
    copiedDate.setDate(n);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    // if (copiedDate < now) {
    //     // Selected date is in the past
    //     return;
    // }

    date.value = copiedDate
    emit('dateChange', copiedDate)
}

function nextMonth() {
    const copiedDate = new Date(date.value.getTime());

    if (month.value === 11) {
        copiedDate.setMonth(0);
        copiedDate.setFullYear(year.value + 1);
    } else {
        copiedDate.setMonth(month.value + 1);
    }
    date.value = copiedDate
}

function nextYear() {
    const copiedDate = new Date(date.value.getTime());
    copiedDate.setFullYear(year.value + 1);
    date.value = copiedDate
}

function prevMonth() {
    const copiedDate = new Date(date.value.getTime());

    if (month.value === 0) {
        copiedDate.setMonth(11);
        copiedDate.setFullYear(year.value - 1);
    } else {
        copiedDate.setMonth(month.value - 1);
    }
    date.value = copiedDate
}

function prevYear() {
    const copiedDate = new Date(date.value.getTime());

    copiedDate.setFullYear(year.value - 1);
    date.value = copiedDate
}

function goToToday() {
    date.value = new Date()
}

const min = ref(props.min)
const max = ref(props.max)
watch(() => props.min, x => min.value = x)
watch(() => props.max, x => max.value = x)

watch(date, function () {
    emit('update:modelValue', date.value)
})

const isInRange = (dateInRange) => {
    return min.value ? dateInRange?.getTime() >= min.value?.getTime() && dateInRange?.getTime() <= date.value.getTime() :
        dateInRange?.getTime() <= max.value?.getTime() && dateInRange?.getTime() >= date.value.getTime()
}
</script>
<template>
    <div class="space-y-2 max-w-sm text-sm">
        <div class="bg-white rounded-lg">
            <div class="border-b p-3 flex justify-between">
                <div class="flex space-x-2 text-gray-400">
                    <button @click.prevent="prevYear">
                        <i class="bi bi-chevron-double-left text-lg"/>
                    </button>
                    <button @click.prevent="prevMonth">
                        <i class="bi bi-chevron-left text-base"/>
                    </button>
                </div>
                <div class="flex items-center space-x-3">
                    <h2 class="font-bold">
                        {{ months[date.getMonth()] }} {{ date.getFullYear() }}
                    </h2>
                    <button @click.prevent="goToToday">
                        <i class="bi bi-calendar2-day text-base"/>
                    </button>
                </div>
                <div class="flex space-x-2 text-gray-400">
                    <button @click.prevent="nextMonth" class="rotate-180">
                        <i class="bi bi-chevron-left text-base"/>
                    </button>
                    <button @click.prevent="nextYear" class="rotate-180">
                        <i class="bi bi-chevron-double-left text-base"/>
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-7 gap-y-1 text-center py-3 date-row pl-2">
                <div class="text-red-500">Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>

                <button
                    v-for="n of _range(previousMonthLastDay - firstDay + 1, previousMonthLastDay + 1)"
                    class="!text-gray-400 !bg-transparent cursor-default"
                    disabled
                >
                    {{ n }}
                </button>

                <button
                    v-for="n of _range(1, lastDate + 1)"
                    :class="`disabled:opacity-50 ${isInRange(new Date(year, month, n)) ? 'bg-teal-50 !rounded-none' : ''} ${highlightSelectedDate(n) ?'!bg-teal-600 !text-white' : 'hover:bg-gray-200 disabled:hover:bg-transparent transition-colors'}`"
                    @click.prevent="e => handleSelectDate(e, n)"
                    :disabled="new Date(date.getFullYear(), date.getMonth(), n) < min || new Date(date.getFullYear(), date.getMonth(), n) > max"
                >
                    {{ n }}
                </button>

                <button
                    v-for="n of _range(1, 7 - lastDay)"
                    class="!text-gray-400 !bg-transparent cursor-default"
                    disabled>
                    {{ n }}
                </button>
            </div>
        </div>
    </div>
</template>
