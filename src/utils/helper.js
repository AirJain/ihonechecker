/*
 * @Author: yxx 793505879@qq.com
 * @Date: 2022-06-13 20:25:24
 * @LastEditors: yxx 793505879@qq.com
 * @LastEditTime: 2022-06-13 21:42:45
 * @FilePath: \ihonechecker\src\utils\helper.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
  },
  convertPhone(productName) {
    let rtData = null;
    switch (productName) {
      case "i13":
        rtData = "iPhone 13"
        break;
      case "i13Pro":
        rtData = "iPhone 13 Pro"
        break;
      case "i13ProMax":
        rtData = "iPhone 13 Pro Max"
        break;
      case "i13mini":
        rtData = "i13mini"
        break;
    }
    return rtData;
  },
  setReduce(data) {
    let resMap = {};
    for (var i = 0; i < data.length; i++) {
      let item = data[i]; 
      if (!resMap[item.color]) {
        resMap[item.color] = [item];
      } else {
        resMap[item.color].push(item); 
      }
    }
    return resMap;
  },
  
}
