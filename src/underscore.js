/**
 * Created by wumengchao on 2018/2/19.
 */
import _ from 'underscore'
var a=123;
(function(window){
   function makeAdder(Cap){
       "use strict";
       return function(num){
           return num+Cap
       }
   }
   var add1024=makeAdder(1024);
   console.log(add1024(12));
})(window);
console.log(a);