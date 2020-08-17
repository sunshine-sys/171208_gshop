import axios from 'axios'


export default (type, url, params, isresponse, isError) => {
    var serialize = function(obj) {
        var str = "";
        if (obj == null || obj == undefined) {
            return str
        }

        Object.keys(obj).forEach(function(key) {
            str += `${key}=${obj[key]}&`;
        });

        return str.trimRight('&');
    }
    
    // 这里就是设置请求头的地方
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // axios.defaults.headers.common['timestamp'] = timestamp;
    axios.defaults.headers.common['ua'] = '5'; //客户端来源 发胜说先随便填一个 cookieGet("ua")
    axios.defaults.headers.common['source'] = '8';
    // axios.defaults.headers.common['sn'] = guid();

    return new Promise((resolve, reject) => {
        switch (type) {
            case 'post':
                params = serialize(params)
                axios.post(url, params, isresponse).then(response => {
                    if (isresponse) {
                        resolve(response); //需要返回全部 不然获取不到头部的分页数据类似情况
                    } else {
                        resolve(response.data);
                    }
                }).catch((error) => {
                    reject(error);
                    console.log("post--", error);
                })
                break;
            case 'postJson':
                axios.post(url, params, isresponse).then(response => {

                    if (isresponse) {
                        resolve(response); //需要返回全部 不然获取不到头部的分页数据类似情况
                    } else {
                        resolve(response.data);
                    }

                }).catch((error) => {
                    reject(error);
                    console.log("post--", error);
                })
                break;

            case 'get':
                axios.get(url, {
                    params
                }, isresponse).then(response => {

                    if (isresponse) {
                        resolve(response); //需要返回全部 不然获取不到头部的分页数据类似情况
                    } else {
                        resolve(response.data);
                    }

                }).catch((error) => {
                    reject(error);
                    console.log("get--", error);
                })
                break;
        }

    })
}