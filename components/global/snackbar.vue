<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useSnackbar } from "~/composables/useSnackbar";

const _controller = useSnackbar();
const modalDialog = ref(null);

onClickOutside(modalDialog, () => _controller.tapExit());
</script>

<template>
  <div v-show="_controller.isShown" class="overlay"></div>

  <Transition name="drop">
    <div v-show="_controller.isShown" class="modal-wrapper">
      <div ref="modalDialog" class="modal-card"></div>
    </div>
  </Transition>
</template>
