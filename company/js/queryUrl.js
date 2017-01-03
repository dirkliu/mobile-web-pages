

function queryUrl(url, key){
    url = url.replace(/^[^?=]*\?/ig, '').split('#')[0]; 
    var json = {};
    url.replace(/(^|&)([^&=]+)=([^&]*)/g, function(a, b, key, value) {
        try {
            key = decodeURIComponent(key);
        } catch (ex) {}
        try {
            value = decodeURIComponent(value);
        } catch (e) {}
        if (!(key in json)) {
            json[key] = /\[\]$/.test(key) ? [value] : value; 
        } else if (json[key] instanceof Array) {
            json[key].push(value);
        } else {
            json[key] = [json[key], value];
        }
    });
    return key ? json[key] : json;
}