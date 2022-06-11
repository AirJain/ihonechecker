<template>
  <div class="search" @click="to">
    <form action="/" style="width: 100%">
      <van-search
        v-model="keyword"
        show-action
        :placeholder="placeholder"
        @search="onSearch"
        @cancel="onCancel"
        @input="onInput"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </form>
  </div>
</template> 
<script>
import Vue from "vue";
import { Field } from "vant";
import { Search } from "vant";

Vue.use(Search);
Vue.use(Field);
export default {
  props: {
    placeholder: {
      type: String,
    }, 
  },
  watch: {},
  components: {},
  data() {
    return {
      keyword: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    to() {},
    onSearch() {
      this.$emit("onSearch", this.keyword);
    },
    onCancel() {
      this.$emit("onSearch", this.keyword);
    },
    onInput(val) {
      this.$emit("onInput", val);
    },
  },
};
</script>
<style lang="scss" scoped>
// ::v-deep .van-cell {
//   width: 82%;
//   border-radius: 40px;
// }
// ::v-deep .van-field__control {
//   width: 90%;
// }
// ::v-deep .van-cell::after {
//   border-bottom: none;
// }
// ::v-deep .van-field__control {
//   font-size: 30px;
//   height: 40px;
// }
// ::v-deep .van-search {
//   width: 100%;
//   border-radius: 40px;
// }

// ::v-deep .van-icon {
//   font-size: 30px;
//   margin-top: 8px;
// }

// ::v-deep .van-search__content {
//   background-color: unset;
// }
// ::v-deep .van-icon-clear {
//   // padding-bottom: 10px;
// }
.all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
// .search {
//   background: #ffffff;
//   padding: 5px;
//   display: flex;
//   border-radius: 40px;
//   .search-btn {
//     border-left: 1.5px #888a96 solid;
//     padding-left: 50px;
//     font-weight: bold;
//     margin-top: 3px;
//   }
//   margin-bottom: 30px;
// }
</style>
