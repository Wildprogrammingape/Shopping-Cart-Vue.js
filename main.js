const app = Vue.createApp({
    // data: function(){} // shorthand,
    data(){
        return {
            // cart变量在main.js全局中定义，而ProductDisplay Component需要用，
            // 因此需要props将parent的变量传递到child中
            cart: [],
            premium: true,

        }
    },
    methods: {
        updateCart(id){
            // 将每次点击的商品id放到数组中，id来自于child component，通过emit传递
            this.cart.push(id);
        },
        // code challenge: add a new button to ProductDisplay, removes the product from the cart
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
