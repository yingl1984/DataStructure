const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new Map();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new Map();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));//20
    console.log(map2.get(str3));//10
}

WhatDoesThisDo();

