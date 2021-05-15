const app = Vue.createApp({
    // data: function(){} // shorthand,
    data(){
        return {
            // cart变量在main.js全局中定义，而ProductDisplay Component需要用，
            // 因此需要props将parent的变量传递到child中
            cart: 0,
            premium: false,

        }
    },
    methods: {
        
    },
    
})







// //匿名函数
// const myfunc = function(){
//     return 1;
// }

// //箭头函数
// const myfunc = () => {
//     return 1;
// }
