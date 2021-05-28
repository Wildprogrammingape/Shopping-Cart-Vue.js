// Component for displaying products
app.component('product-display', {
    // 用props传递变量，从main.js到ProductDisplay这个Component
    // props:{
    //     premium:{type: Boolean, required: true}
    // },
    props:['premium','cart'],
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inStock">In stock</p>
            <p v-else>Out of stock</p>
            <p>Shipping: {{shippingFee}}</p>
            <ul>
              <li v-for="item in details">{{item}}</li>
            </ul>
            <div 
              v-for="(variant, index) in variants" 
              :key="variant.id" 
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{backgroundColor: variant.color}">
            </div>
            <button 
              class="button" 
              @click="addToCart" 
              :disabled="!inStock"
              :class="{disabledButton: !inStock}">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <review-list v-if="reviews.length" v-bind:reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
      
    </div>
    `,
    // data: function(){} // shorthand,
    data(){
        return {
            product: 'Socks',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'green', image: 'assets/images/socks_green.jpg', quantity: 50},
                {id: 2, color: 'blue', image: 'assets/images/socks_blue.jpg', quantity: 0}
            ],
            brand: 'LongChen Store',
            selectedVariant: 0,
            reviews: [],

        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        // 实时存储用户选中variant的index到变量selectedVariant中
        updateVariant(index){
            this.selectedVariant = index;
        },
        addReview(review){// 参数来自于$emit的第二个参数
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product + ' is on sale';
        },
        // 将inStock从data property改为computed property,实时改变为product的quantity
        // 初始值为第一个商品的quantity，为50
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        // 将image的地址改为实时hover的variant.image的地址
        // 初始显示的是variants[0].image，即为第一个商品
        image(){
            return this.variants[this.selectedVariant].image
        },
        shippingFee(){
            // premium已经通过props传递进来了
            if(this.premium == true){
                return 'Free'
            }
            else{
                return '$7.99'
            }
        },

        
    }
    

})

