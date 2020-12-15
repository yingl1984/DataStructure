function countSheep(n){
    if(n===0){
        console.log('All sheep jumped over the fence');
        return;
    }
    console.log('Another sheep jumps over the fence');
    countSheep(n-1);
}

countSheep(3);