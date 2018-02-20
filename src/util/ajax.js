/**
 * Created by wumengchao on 2017/5/19.
 */
import Axios from 'axios';
let weburl="http://localhost:8080";
export default {
    get:function(originUrl, data){

        return Axios.get(weburl+originUrl,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            data: JSON.stringify(data)
        }).then(function(res) {
            var resdata = res.data;
            return resdata;
        }).catch(function (res){
            console.log(res);
            return res;
        });
    },

    post:function(originUrl, data){

        // Axios.post(url, data, config);
        return Axios.post(
            weburl+originUrl,
            {
                data: JSON.stringify(data)

            },
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            }
        ).then(function(res) {
            var resdata = res.data;
            return resdata;
        }).catch(function (res) {
            console.log(res);
            // return res;
        });
    },
    wechatPost:function(originUrl, data){

        // Axios.post(url, data, config);
        return Axios.post(
            weburl1+originUrl,
            data,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            }
        ).then(function(res) {
            var resdata = res.data;
            return resdata;
        }).catch(function (res) {
            console.log(res);
            return res;
        });
    },
    upload:function(originUrl, obj){
        var formData = new FormData();
        console.log(obj);
        formData.append('file', obj);
        return $.ajax({
            url : weburl+originUrl,
            type : 'POST',
            data : formData,
            processData: false,
            contentType: false,
            beforeSend:function(){

            },
            success:function(data){
                console.log(data);
            }
        })

    }
}
