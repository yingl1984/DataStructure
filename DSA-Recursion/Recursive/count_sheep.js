function countSheep(n){
    if(n===0){
        console.log('All sheep jumped over the fence');
        return;
    }
    console.log('Another sheep jumps over the fence');
    countSheep(n-1);
}

// countSheep(3);

function countSheep_iteration(n){
    while(n > 0){
        console.log('Another sheep jumps over the fence');
        n--;
    }
    console.log('All sheep jumped over the fence');
}
countSheep_iteration(3);

//O(n)