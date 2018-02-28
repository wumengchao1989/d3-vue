/**
 * Created by wumengchao on 2018/2/13.
 */

/**
 * test promise
 * */
/*function test() {
 return new Promise(function(resolve,reject){
 var http = new XMLHttpRequest();
 http.onreadystatechange = function () {
 if (http.readyState == 4 && http.status == 200) {
 if (http.responseText) {
 resolve(http.responseText)
 }
 }
 };
 http.open("POST","http://localhost:8080/wechatSC/Baby/getExpertList",true);
 http.send("{data:{'customerId':252,'orgId':40}}")
 })
 }
 test().then(function (res) {
 console.log("success", res)
 }, function (res) {
 console.log("failed", res)
 });*/

/**
 * test yield & generator
 * */
function testFlow(a:Number){
    console.log("flow",a)
}
function *foo(){
    yield console.log("step 1");
    return 1;
    yield console.log("step 2");
}
function fooNormal(){
    return function(){
       return 1;
    }

}
var a=foo();//generator始终返回一个generator对象(迭代器对象),generator对象内部有4个隐藏属性,generatorStatus,代表当前generator的状态,有closed,suspended
var b=fooNormal();
console.log(a);
console.log(b);
a.next();
a.next();
testFlow("as");





