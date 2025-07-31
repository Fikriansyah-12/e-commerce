<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useDialog } from "~/composables/useDialog";

const _controller = useDialog();
const modalDialog = ref(null);

onClickOutside(modalDialog, () => _controller.callback.onTapBack);
</script>

<template>
  <div v-show="_controller.isShown" class="overlay"></div>

  <Transition name="drop">
    <div v-show="_controller.isShown" class="modal-wrapper">
      <div ref="modalDialog" class="modal-card"></div>
    </div>
  </Transition>
</template>
