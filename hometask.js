
// #1
// function func(a) {
//     if (a < 10){

//         return a; 
//     }
//     let b = (a % 10);
//     return Math.min(b, func(Math.floor((a) / 10)));
// }

// console.log(func(457)); 



// #2
// function func(a) {
//     if (a < 10){

//         return a; 
//     }
//     let b = (a % 10);
//     return Math.max(b, func(Math.floor((a) / 10)));
// }

// console.log(func(457)); 




// #3
// function func(a, b) {
//     if (a <= b) {
//         func(a + 1, b);
//         console.log(a);
//     }
// }

// func(5,10);


// #4
// function func(a, b, c) {
//     let sum = (a + b + c) + (a - b) * c + (b / a) + (c % b);
//     return sum;
// }

// console.log(func(3, 5, 7));





// #5
// function func(a){
    
//     return (b)=>{
    //         return b=a/a
    //     }
    // }
    // let second=func(1)
    // console.log(second(14));
    // console.log(second());
    // console.log(second());
    
    
    
    
    // console.log(second());
    // console.log(second());
    // console.log(second());
    // console.log(second());
    
    // #6
    // function func(a){
        //     let cnt=0
        //     return ()=>{
            //        let b= reverse(a) 
            //        if (b!=a)
            //         cnt++
            //     }
            //     if(cnt==1){
                //     return b
                //     }
                //     }
                //     let second = func(123)
                //     console.log(second());
                //     console.log(second());
                //     console.log(second());
                //     console.log(second());
                
                
                // #7
                // function func(a) {
                //     const str = Math.abs(a).toString();
                //     if (str.length === 1) {
                //         return str; 
                //     }
                //     return func(str.slice(1, -1));
                // }
                
                // console.log(func(56773)); 
                // console.log(func(234));   
           
           
            // #8
            // function func(a) {
            //     let b = a.toString(); 
                
            //     return () => {
            //         b = b.slice(1); 
            //         return b;
            //     }
            // }
            
            // let second = func(48647);