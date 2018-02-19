/**
 * Created by wumengchao on 2018/2/13.
 */
let promise=new Promise(function(resolve,reject){
    let a=Math.random()*100;
    if(a>50){
        return resolve(a)
    }
});
promise.then(function(res){
    console.log(res)
    let b=Math.random()*200;
    return new Promise(function(resolve,reject){
        if(b>100){
            resolve(b)
        }
    })
}).then(function(res){
    "use strict";
    console.log(res)
})
console.log("promise")
