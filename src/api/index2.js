


// 防抖动函数
/**
 * [throttle 简单的节流函数]
 * @param  {[function]} func    [包装函数]
 * @param  {[number]} wait    [延时时间]
 * @return {[可拓展]}         [description]
 */
export const debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};
/**
 * [getFarmatDate 格式化时间函数]
 * @param  {[number string]} date [时间字符串或时间戳]
 * @return {[string]}      [格式化的时间字符串]
 */
export const getFarmatDate = function (date) {
// console.log(date)
    let d = new Date(date); //根据时间戳生成的时间对象
    let date1 = (d.getFullYear()) + "-" +
        ((d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1)) + "-" +
        (d.getDate() > 9 ? d.getDate() : '0' + d.getMonth()) + " " +
        (d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) + ":" +
        (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes())
    //+ ":"  +(d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds())
    ;
    return date1;
};
