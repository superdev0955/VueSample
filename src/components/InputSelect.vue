<script setup>
  import { computed } from "vue";

  const props = defineProps({
    placeholder: {
      type: String,
      default: "",
    },

    errorMessage: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "text",
    },

    size: {
      type: String,
      default: "",
    },

    inputClass: {
      type: String,
      default: "",
    },

    id: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "",
    },

    modelValue: {
      type: [String, Number],
      default: "",
    },

    options: {
      type: Array,
      default: () => [],
    },

    isOptional: {
      type: Boolean,
      default: false,
    },

    htmlClass: {
        type: String,
        default: ""
    }
  });

  const emit = defineEmits(["update:modelValue"]);

  const value = computed({
    get() {
      return props.modelValue;
    },

    set(val) {
      emit("update:modelValue", val);
    },
  });

  const inputId = computed(() => {
    if (props.id.length > 0) {
      return props.id;
    }

    if (props.label.length > 0) {
      return props.label.replace(/\s+/g, "-").toLowerCase() + "-input";
    }

    return (Math.random() + 1).toString(36).substring(7) + "-input";
  });
</script>

<template>
  <div>
    <select
      :id="inputId"
      v-model="value"
      class="form-select mt-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block w-full mt-1"
      :class="[
        {
          'is-invalid': errorMessage.length > 0,
          'form-select-lg': size === 'lg',
          'form-select-sm': size === 'sm',
        },
        inputClass,
      ]"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
