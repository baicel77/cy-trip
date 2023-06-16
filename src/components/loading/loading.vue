<template>
  <div class="loading">
    <div class="toast">
      <img src="../../assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.3);
  z-index: 10;
  .toast {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 10px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
}
</style>