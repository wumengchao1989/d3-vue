/**
 * Created by wumengchao on 2018/1/16.
 */
import fetch from 'dva/fetch';
import { hashHistory } from 'dva/router';
import { Modal, Button } from 'antd';

export default {
    convertObjToQueryString: function(obj) {
        var paramStr = '';
        for (let name in obj) {
            paramStr += (name + '=' + obj[name] + '&');
        }
        if (paramStr[paramStr.length - 1] === '&')
            return paramStr.slice(0, paramStr.length - 1);
        else
            return paramStr;
    },
    get: function(originUrl, data) {
        let url = originUrl;
        let queryString = this.convertObjToQueryString(data);
        if (url.indexOf('?') !== -1) url = url + '&' + queryString;
        else url += ('?' + queryString);
        return fetch(url, {
            credentials: 'include'
        });
    },
    getJSON: function(originUrl, data) {
        return this.get(originUrl, data).then(function(res) {
            return res.json()
        });
    },
    post: function(url, data) {
        return fetch(url, {
            method: 'POST',
            /*headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization_Token': "bd5f07d0c4b64d68accef7e81f640c45",
                'Authorization_key': "key"
            },*/
            body: JSON.stringify(data)
        }).then(function(res){
            return res.json()

        })
    }
}
