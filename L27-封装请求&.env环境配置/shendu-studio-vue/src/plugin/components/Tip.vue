<template>
  <div class="sb-tip" :style="{'border-left-color':color}">
    <strong>
      <slot></slot>

    </strong>
  </div>
</template>
<script>
  export default {
    props: {
      color: {
        type: String,
        default: "#369"
      }
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang='scss'>
  .sb-tip {
    border-left: 5px solid #369;
    margin: 5px 0;
    background: #eee;
    padding: 10px 0;
    text-indent: 5px;
  }
</style>