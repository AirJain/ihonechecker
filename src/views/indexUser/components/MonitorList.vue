<template>
  <div class="content" :style="{ height: height }">
    <div class="list" v-for="(item, index) in list" :key="index">
      <div class="list-item">
        <div class="top">
          <div>
            USA
            <span class="time"> 2022/6/6 13:53</span>
          </div>
          <div>
            <van-switch
              v-model="checked"
              inactive-color="#f2f2f2"
              size="20px"
            />
          </div>
        </div>
        <div class="mid">
          <div>邮编:03079</div>
          <div>型号:iPhone 13Pro</div>
          <div>运营商:unlocked</div>
        </div>
        <div class="bottom">
          <div class="peizhi">
            <span class="type"> Sierra Blue: </span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
          </div>
          <div class="peizhi">
            <span class="type"> Sierra Blue: </span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
          </div>
          <div class="peizhi">
            <span class="type"> Sierra Blue: </span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
            <span class="memory">128GB</span>
          </div> 
        </div>
        <div class="edit"><van-icon name="edit" size="15" /> 编辑</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Switch } from "vant";

Vue.use(Switch);
export default {
  props: {
    list: {
      type: Array,
    },
    height: {},
  },
  components: {},
  data() {
    return {
      checked: false,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 84vh;
  overflow-y: auto;
  font-size: 24px;
  margin-top: 10px;
  .list {
    background: #ffffff;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    .list-item {
      font-size: 14px;
      position: relative;
      .top {
        display: flex;
        justify-content: space-between;
        .time {
          color: #888a96;
          margin-left: 10px;
        }
      }
      .mid {
        display: flex;
        justify-content: space-between;
      }
      .bottom {
        text-align: left;
        margin-top: 10px;
        .peizhi {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          .type {
            width: 25%;
          }
          .memory {
            width: calc(70% / 4);
          }
        }
      }
      .edit {
        color: #888a96;
        right: 2px;
        bottom: 2px;
        margin-top: 10px;
        text-align: right;
      }
    }
  }
}
</style>
