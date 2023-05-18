<script setup>
defineProps(["link", "img", "text", "size"]);
</script>

<template>
  <a :href="link" class="link">
    <img :src="img" :width="size" />
    <span class="text">Chrome 安装包</span>
  </a>
</template>

<style lang="sass" scoped>
.link
  padding: 16px
  font-size: 14px
  display: inline-flex
  flex-direction: column
  align-items: center
  justify-content: center

  .text
    margin-top: 6px
</style>
