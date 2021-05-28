// 用来显示reviews, 通过props从父组件(ProductDisplay.js)中传递变量(reviews)进来
// 将该component传递到index.html，再在ProductDisplay.js中使用
app.component('review-list', {
    props: ['reviews'],
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
        </li>
        </ul>
    </div>
    `

})

// 总结： review相关的element显示在ReviewForm.js中，用户输入的review也传递到变量里， 
// 当submit event发生时连同用户的review一同emit到父组件index.html和ProductDisplay.js中
// 在 ProductDisplay.js中定义该reviews变量，触发submit事件后将用户输入传入reviews变量中：

//<review-form @review-submitted="addReview"></review-form>

// data(){
//     return {
//         reviews: [],
//     }
// },

// methods: {
//     addReview(review){// 参数来自于$emit的第二个参数
//         this.reviews.push(review)
//     }
// }


// 然后再写一个名为ReviewList.js的Component 用来显示reviews, 
// 通过props从父组件(ProductDisplay.js)中传递变量(reviews)进来
// 将该component传递到index.html，再在ProductDisplay.js中使用

// <review-list v-bind:reviews="reviews"></review-list>

// 这样review-list既可显示用户的评价，评价从父组件ProductDisplay.js传递过来(来自ReviewForm.js的用户输入)