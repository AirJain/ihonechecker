<template>
  <div class="content">
    <van-list
      v-show="list.length > 0"
      v-model="loading"
      :finished="finished"
      finished-text="—— 没有更多了 ——"
      @load="onLoad"
    >
      <div class="list" v-for="(item, index) in list" :key="index">
        <div class="list-item all-center">
          <van-image
            width="50"
            height="50"
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="list-item all-center">{{ item.name }}</div>
        <div class="list-item all-center">
          <van-switch
            v-model="item.checked"
            inactive-color="#f2f2f2"
            size="25px"
            @input="onInput($event, item)"
          />
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
    keyword: { type: String },
  },
  watch: {
    keyword(val) {
      this.getList();
    },
  },
  components: {},
  data() {
    return {
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
    onLoad() {
      this.page = this.page + 1;
      this.getList();
    },
    getList() {
      this.$http
        .get("http://118.31.113.136:8081/stock/rest/sysUser/pageList", {
          params: {
            searchText: this.keyword,
            pageNo: this.page,
            pageSize: this.size,
          },
        })
        .then((res) => {
          if (res.data.data.length > 0) {
            this.list = res.data.data;
            this.isListEnd(res.data.total);
            this.setAuthor(this.list);
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
    setAuthor(list) {
      for (var i = 0; i < list.length; i++) {
        let item = list[i];
        if (item.author == 1) {
          list[i].checked = true;
        } else {
          list[i].checked = false;
        }
      }
    },
    editAuthor(item) {
      if (item.checked == true) {
        item.author = 1;
      } else {
        item.author = 0;
      }
      this.$http
        .get("http://118.31.113.136:8081/stock/rest/sysUser/changeAuthor", {
          params: {
            userId: item.id,
            author: item.author,
          },
        })
        .then((res) => {
          Toast(res.data.msg);
        })
        .finally(() => {
          this.loading = false;
          this.isLoading = false;
        });
    },
    onInput(checked, item) {
      Dialog.confirm({
        title: "提醒",
        message: "是否切换开关？",
      }).then(() => {
        item.checked = checked;
        this.editAuthor(item);
        this.getList();
      });
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
  .list {
    display: flex;
    background: #ffffff;
    padding: 5px 0;
    .list-item {
      width: calc(100% / 3);
    }
  }
}
</style>
