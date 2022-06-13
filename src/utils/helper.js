

import router from '@/router'
export default {
  Jump(url) {
    router.push(url);
  },
  convertNation(code) {
    let rtData = null;
    switch (code) {
      case "cn":
        rtData = "中国"
        break;
      case "us":
        rtData = "美国"
        break;
      case "at":
        rtData = "奥地利"
        break;
      case "au":
        rtData = "澳大利亚"
        break;
      case "ca":
        rtData = "加拿大"
        break;
      case "de":
        rtData = "德国"
        break;
      case "es":
        rtData = "西班牙"
        break;
      case "fr":
        rtData = "法国"
        break;
      case "hk":
        rtData = "中国香港特别行政区"
        break;
      case "it":
        rtData = "意大利"
        break;
      case "jp":
        rtData = "日本"
        break;
      case "kr":
        rtData = "韩国"
        break;
      case "nl":
        rtData = "荷兰"
        break;
      case "sg":
        rtData = "新加坡"
        break;
      case "se":
        rtData = "瑞典"
        break;
      case "th":
        rtData = "泰国"
        break;
      case "tw":
        rtData = "中国台湾省"
        break;
      case "uk":
        rtData = "英国"
        break;
    }

    return rtData;
  }
}
