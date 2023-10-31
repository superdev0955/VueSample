<template>
  <div class="rounded-2xl border-2 border-blue-400 flex cursor-pointer" data-cy="upload-image" :class="isDragActive && 'border-blue-600'">
    <div v-bind="getRootProps()" class="w-full h-full">
      <input v-bind="getInputProps()" />
      <div class="justify-center items-center w-full py-3 px-5">
        <img src="/icon-upload-cloud.svg" class=" block mx-auto fill-current text-gray-400" :class="isDragActive && 'text-gray-800 scale-125'" />
<!--        <div v-if="isDragActive" class="min-w-min text-center text-gray-800">Release to upload...</div>-->
        <div class="min-w-min text-center text-gray-400">
            <span class="text-blue-600 font-semibold"> Click to upload </span>
            or drag and drop
            SVG, PNG, JPG or GIF (max. 800x400px)
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { useDropzone } from 'vue3-dropzone';
    import { computed, ref } from "vue";

    const props = defineProps({
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
            type: [String],
            default: "",
        },

        options: {
            type: Array,
            default: () => [],
        },

        multiple: {
            type: Boolean,
            default: false
        }
    });
    const imgPreview = ref([]);
    const emit = defineEmits(["update:modelValue"]);

    function onDrop(acceptFiles) {
        imgPreview.value = [];

        if (Array.isArray(acceptFiles)){
            for (let x = 0; x < acceptFiles.length; x++) {
                imgPreview.value.push({url: URL.createObjectURL(acceptFiles[x])});
            }
        }

        if ( acceptFiles.length == 1 && props.multiple == false){
            emit("preview", ... imgPreview.value);
         }else {
            emit("preview", imgPreview.value);
        }

        emit("update:modelValue", ...acceptFiles);
        emit("upload", ...acceptFiles);
    }

    const deleteFile = (file) => { props.files.splice(props.files.indexOf(file), 1); };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
                                                                onDrop,
                                                                multiple: props.multiple,
                                                            });

</script>
