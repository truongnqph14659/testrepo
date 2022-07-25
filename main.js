// const a = 10
// const b = 'dinh huy'
// const ngon = false
// const huy = {
//   name:"huy nguyen",
//   age:'30',
//   // 2 cach khai bao phuong thuc
//   run(){
//     console.log(asasas)
//   },
//   ngoi: function ngoi(){
//     console.log("ngooif xuoongs")
//   }
// }
// const arr = [
//   {id:1,name:"nguyen huy",age:30},
//   {id:2,name:"nguyen quang",age:31},
//   {id:2,name:"nguyen dieu",age:32},
// ]
// let kq =""
// function loc_data(arr){
//   if(!Array.isArray(arr) || arr.length==0) return null
//   for(let i =0;i<arr.length;i++){
//     // console.log(arr[i].id)
//     kq+=`<div>${arr[i].id} là ${arr[i].name}</div>`
//   }
//   return kq
// }
// loc_data(arr)
// const app = document.getElementById('app')
// if(app){
// app.innerHTML= kq
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi", "Lemon", "Pineapple");
// console.log(fruits.length)
main()
function main() {
  const data = splitName('Lê Thị A')
  console.log(data.length)
  data
    .map((item) => {
      console.log(item)
    })
    .join('')
}
function splitName(name) {
  const dataSplit = name.split(' ')
  const used = new Array(3)
  const res = ''
  const dataStore = []
  process(dataSplit, used, res, 0, dataStore)
  return dataStore
}
function process(dataSplit, used, res, count, dataStore) {
  if (count == dataSplit.length && res != '') {
    dataStore.push(res)
  }
  for (let i = 0; i < dataSplit.length; i++) {
    if (used[i]) continue
    used[i] = true
    process(dataSplit, used, res + ' ' + dataSplit[i], count + 1, dataStore)
    used[i] = false
  }
}
