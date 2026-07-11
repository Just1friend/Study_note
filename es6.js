//var提前声明（变量提升） let
//let块级作用域 不能重复声明 不会污染全局变量

//模板字符串
//let id = 'infinity'
//id1 = ${id}
//``反引号包裹模板字符串

//函数默认值function add(a,b=10) 剩余参数...keys
//arguments为传入的参数
function pick(obj,...keys){
    console.log(keys);
    let result = Object.create(null);
    for(let i = 0;i<keys.length;i++){

    }
    return ;
}

//扩展运算符[...arr]将数组分割作为独立参数传入
//箭头函数let add = val => val; 简写版本
//没有this绑定 函数内部没有arguments 不能用来实例化对象

//解构赋值 
//对对象
let node = {
    type:'iden',
    name:'foo'
}

let {type,name} = node;//得到内部成员 加:可以自定义命名变量
//对数组
let arr = [1,2,3];
let[a,b,c] = arr;

//es6可直接写入变量函数作为对象属性与方法 不需要赋值
//对象的方法is()比较相等 两个无穷也会相等
//assign合并多个对象

//symbol表示独一无二的值
let n = Symbol('name');

//set与map
//set.add(2) delete
//Weakset不能传入非对象类型 不可迭代 没有很多方法 
//map.set('age',18)
let m = new Map([
    ['a',1],
    ['b',2]
])

//数组扩展功能
//from()将伪数组转化为真数组
//of()将一组值转化为数组
//copywithin()
[1,2,3,8,9,10].copyWithin(0,3);
//find() findIndex()
[1,2,-10,-20].find((n)=>{
    n<0;
})
// entries() keys() values()