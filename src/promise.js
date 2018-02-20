/**
 * Created by wumengchao on 2018/2/13.
 */

function test() {
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
});
