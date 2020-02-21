<template>
  <div class="create">
    <!-- 富文本框 -->
    <div class="editor">
      <client-only>
        <vue-editor v-model="inputText"></vue-editor>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ""
    };
  }
};
</script>

<style scoped lang='less'>
.editor {
    width: 800px;
    margin: 50px auto;
}
</style>