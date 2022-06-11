<template>
  <div class="hello">
   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    // this.getData();
  },

  methods: {
    getData() {
      this.$http
        .get(
          "https://h5.doudtong.com/rest/cmm/v1/author/detail/info?author_id=104934349824",
          {}
        )
        .then((res) => {
          debugger;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
</style>
