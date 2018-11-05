<template>
    <div class="breadcrumb">
        <img src="../../assets/icon_location.png" alt="">
        <span>川中油气矿&gt;轻烃厂&gt;<strong>{{navActive}}</strong></span>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    navActive() {
      return this.$route.matched[0].name;
    }
  },
//   watch: {
//     $route() {
//       this.getBreadcrumb();
//     }
//   },
//   methods: {
//     getBreadcrumb() {
//       let matched = this.$route.matched;

//       if (
//         (matched[0].name == "框架合同" && matched[0].name !== "框架合同列表") ||
//         (matched[0].name == "项目合同" && matched[0].name !== "项目合同列表") ||
//         (matched[0].name == "支出合同" && matched[0].name !== "支出合同列表")
//       ) {
//         matched = [{ name: "合同签署", path: "/contract" }].concat(matched);
//       }
//       this.levelList = matched;
//       // console.log(matched)
//     }
//   },
//   mounted() {
//     console.log(this.$route.matched);
//   }
};
</script>
<style lang="less">
.breadcrumb {
  font-size: 12px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 35px;
  line-height: 35px;
  color: #666666;
  strong {
    font-weight: normal;
    color: #00b6fc;
  }
}
</style>


