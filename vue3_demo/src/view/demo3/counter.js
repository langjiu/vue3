export default function (number) {
  //减少
  function decrease() {
    number.value--
  }
  //添加
  function increase() {
    number.value++
  }
  return {
    increase,
    decrease
  }
}