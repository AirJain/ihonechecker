<template>
  <div class="content" :style="{ height: height }">
    <van-list
      v-show="list.length > 0"
      v-model="loading"
      :finished="finished"
      finished-text="—— 没有更多了 ——"
      @load="onLoad"
    >
      <div class="list" v-for="(item, index) in list" :key="index">
        <div class="list-item">
          <div class="top">
            <div>
              {{item.products[0].localText}}
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
            <div>邮编:{{ item.zipCode }}</div>
            <div>型号:{{item.products[0].productText}}</div>
            <div>运营商:</div>
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
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Switch } from "vant";
import { List } from "vant";
import { Toast } from "vant";
import { Dialog } from "vant";

Vue.use(Toast);
Vue.use(List);
Vue.use(Switch);
export default {
  props: {
    height: {},
  },
  components: {},
  data() {
    return {
      checked: false,
      page: 1,
      size: 10,
      finished: false,
      loading: false,
      list: [],
    };
  },
  created() {},
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http
        .get("http://118.31.113.136:8081/stock/rest/sysMonitor/pageList", {
          params: {
            userId: 1,
            pageNo: this.page,
            pageSize: this.size,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.list = res.data.data;
            this.isListEnd(res.data.total);
          }
        })
        .finally(() => {
          this.loading = false;
          this.isLoading = false;
        });
    },
    isListEnd(total) {
      if (total < this.size * this.page) {
        this.finished = true;
      } else {
        this.finished = false;
      }
    },
  },
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
