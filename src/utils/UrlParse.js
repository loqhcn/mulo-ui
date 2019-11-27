


//拼接baseurl
const getRealUrl = function (baseUrl, url) {
    if (/^https?:\/\//.test(url)) {
        return url;
    }
    return (baseUrl || '') + url;
}



export {
    getRealUrl
}