function urlify_string(str){
    if(str == null || str.length == 0){
        return str;
    }
    let result = "";
    for(let i= 0; i < str.length; i++){
        if(str.charAt(i) != " "){
            result += str.charAt(i);
        }else{
            result += "%20";
        }
    }
    return result;
}

let strA="www.thinkful.com /tauh ida parv een";
console.log(urlify_string(strA));