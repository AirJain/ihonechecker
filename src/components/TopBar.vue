<template>
  <div class="topbar">
    <van-nav-bar
      :title="title"
      @click-left="$router.back()"
      fixed
      :placeholder="true"
      :safe-area-inset-top="true"
      :border="false"
      @click-right="rightClick"
    >
      <template #left v-if="showLeft">
        <van-icon
          :name="require('../assets/img/b_arrow.png')"
          size="22"
        ></van-icon>
      </template>
      <template #right>
        <slot name="right">{{ rightText }} </slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  components: {},
  props: ["title", "rightText", "showLeft"],
  watch: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    rightClick() {
      this.$emit("rightClick");
    },
  },
};
</script>

<style scoped lang="scss">
.topbar {
  height: 46px;
  ::v-deep .van-nav-bar {
    .van-nav-bar__title {
      color: #23272a;
      font-size: 19px;
      font-weight: 500;
    }
  }
  ::v-deep .van-nav-bar__content {
    max-width: 10rem;
    margin: 0 auto;
  }
  ::v-deep .van-nav-bar__placeholder {
    height: 0;
  }
}
</style>
