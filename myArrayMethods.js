class MyOwnArray{
constructor(...args){
    this.length = 0;
    this.data = {};
    this.push(...args)
}
get(index){
   return index ? this.data[index] : this.data;
}
push(...args){
    for (const arg of args) {
        this.data[this.length] = arg;
        this.length++;
    }
}
}
const myList = new MyOwnArray(9,false,null,'this array is good');
myList.push('another push');
console.log(myList.get());