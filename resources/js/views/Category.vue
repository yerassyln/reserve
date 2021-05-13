<template>
    <div class="container" id="category">
        <div class="row pt-2 ">
            <div class="col-md-12 mb-5">
                <h1 v-if="this.$route.query.name" v-html="this.$route.query.name"></h1>
            </div>
            <div class="col-md-4 ">
                <div class="title">
                    <h4>Фильтры</h4>
                </div>

                <form class="row filters">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Дата:</label>
                                <b-form-input type="date"></b-form-input>
                            </div>
                            <div class="col-md-6">
                                <label>Время:</label>
                                <b-input type="time"></b-input>
                            </div>
                            <hr>
                        </div>
                        <div  class="row mt-3">
                            <div class="col-md-12">
                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        id="btn-radios-1"
                                        v-model="restaurant_type"
                                        :options="typeOptions"
                                        :aria-describedby="ariaDescribedby"
                                        name="restaurant_type"
                                        buttons
                                    ></b-form-radio-group>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row mt-3" v-if="!this.$route.query.name&&restaurant_type==='chosen'">
                            <div class="col-md-12">
                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        v-model="restaurant_chosen"
                                        :options="restaurantOptions"
                                        :aria-describedby="ariaDescribedby"
                                        name="restaurant_type"
                                        plain
                                        stacked
                                    ></b-form-radio-group>
                                </b-form-group>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12">
                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        id="btn-radios-1"
                                        v-model="price_type"
                                        :options="priceOptions"
                                        :aria-describedby="ariaDescribedby"
                                        name="price_type"
                                        buttons
                                    ></b-form-radio-group>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12" v-if="price_type==='chosen'">
                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        v-model="price_chosen"
                                        :options="priceListOptions"
                                        :aria-describedby="ariaDescribedby"
                                        name="price"
                                    ></b-form-radio-group>
                                </b-form-group>
                            </div>
                            <div v-else class="col-md-12">
                                <div class="row mb-2">
                                    <div class="col-md-6">
                                        <b-form-input type="text" v-model="min_price"></b-form-input>

                                    </div>
                                    <div class="col-md-6">
                                        <b-form-input type="text" v-model="max_price"></b-form-input>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12">

                                        <h5>Фильтр по рейтингу:</h5>
                                    </div>
                                    <div class="col-md-12">
                                        <b-form-group label="" v-slot="{ ariaDescribedby }">
                                            <b-form-radio-group
                                                v-model="ratingFilter"
                                                :options="ratingOptions"
                                                :aria-describedby="ariaDescribedby"
                                                name="rating_filter"
                                                plain
                                                stacked
                                            ></b-form-radio-group>
                                        </b-form-group>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h5>Дополнительно:</h5>
                                    </div>
                                    <div class="col-md-12">
                                        <b-form-group label="" v-slot="{ ariaDescribedby }">
                                            <b-form-radio-group
                                                v-model="additionalFilter"
                                                :options="additionalOptions"
                                                :aria-describedby="ariaDescribedby"
                                                name="additional_filter"
                                                plain
                                                stacked
                                            ></b-form-radio-group>
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-8">
                <h4>Список ресторанов</h4>
                <div class="mt-5">
                    <h4 class="text-center" v-if="restaurantList.length == 0">

                        Рестораны этой категории скоро появятся...
                    </h4>
                </div>
                <div class="row mt-4">

                    <div class="col-md-6 mb-2" v-for="item in restaurantList" :key="item.id">
                        <router-link :to="{path:'/restaurant',query:{name:item.name}}">
                            <b-card
                                :title="item.name"
                                :img-src="'/images/restaurants_photo/'+restaurantImages[item.id]"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2"
                            >
                                <b-card-text>
                                    <p v-html="item.description">
                                        Ресторан Vista находится на 30 этаже Ritz Carlton. </p>
                                    <div class="row">
                                        <div class="col-md-9">
                                            <p class="address" >
                                                <b-icon-cursor></b-icon-cursor>
                                                &nbsp
                                                <span v-html="item.address">Ritz Carlton hotel, пр. Аль-Фараби, 77/7</span>
                                            </p>
                                            <p>
                                                <b-icon-phone></b-icon-phone>
                                                &nbsp
                                                <span v-html="item.phone_number">+7 727 332 88 88</span>
                                            </p>
                                        </div>
                                        <div class="col-md-3 grade">
                                            <h4 v-html="item.rating">4.7</h4>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "category",
    data() {
        return {
            restaurantImages:[],
            restaurantList: [],
            restaurantListAll: [],
            restaurant_type: 'chosen',
            typeOptions: [
                {text: 'Вид кухни', value: 'chosen'},
                {text: 'Все рестораны', value: 'type_all'},
            ],
            restaurant_chosen: '',
            restaurantOptions: [
                {text: 'Европейская кухня', value: 'Европейская кухня'},
                {text: 'Азиатская кухня', value: 'Азиатская кухня'},
                {text: 'Итальянская кухня', value: 'Итальянская кухня'},
                {text: 'Казахская кухня', value: 'Казахская кухня'},
                {text: 'Турекая кухня', value: 'Турекая кухня'},
                {text: 'Русская кухня', value: 'Русская кухня'},
                {text: 'Восточная кухня', value: 'Восточная кухня'},
                {text: 'Фаст Фуд', value: 'Фаст Фуд'},
                {text: 'Кофе и десерты', value: 'Кофе и десерты'},
            ],
            price_type: 'chosen',
            priceOptions: [
                {text: 'По цене', value: 'chosen'},
                {text: 'Выбрать диапазон', value: 'range'},
            ],
            ratingFilter: 'all',
            ratingOptions: [
                {text: 'Любой рейтинг', value: 'all'},
                {text: 'Рейтинг выше 6', value: 'rating_6'},
                {text: 'Рейтинг выше 8', value: 'rating_8'},
            ],
            additionalFilter: '',
            additionalOptions: [
                {text: 'Скидки', value: 'discount'},
                {text: 'Потратить бонусы', value: 'spend_bonuses'},
                {text: 'С танцполом', value: 'with_dancefloor'},
            ],
            price_chosen: '',
            priceListOptions: [
                {text: 'Дешевые', value: 'cheap'},
                {text: 'Средние', value: 'medium'},
                {text: 'Дорогие', value: 'expensive'},
            ],
            min_price: 1000,
            max_price: 100000,
        }
    },
    methods: {
        getRestaurantsAll() {
            axios.post('/getRestaurantsAll',
                {
                    category: this.$route.query.name
                }).then(response => {
                this.restaurantListAll = response.data
                this.restaurantList = response.data
                if(this.$route.query.name){
                    this.filterByCategory(this.$route.query.name)
                }
            })
        },

        filterByCategory(val) {
            let restaurantList = this.restaurantListAll

            restaurantList = restaurantList.filter((item) => {

                return (item.category === val)
            })
            this.restaurantList = restaurantList;
        },
        filterByPrice(val1, val2) {
            let restaurantList = this.restaurantListAll

            restaurantList = restaurantList.filter((item) => {

                return (item.price >= val1 && item.price < val2)
            })
            this.restaurantList = restaurantList;
        },
        filterByRating(val) {

            let restaurantList = this.restaurantListAll

            restaurantList = restaurantList.filter((item) => {

                return (item.rating >= val)
            })
            this.restaurantList = restaurantList;
        },
        filterAdditional(val){
            let restaurantList = this.restaurantListAll

            restaurantList = restaurantList.filter((item) => {
                if(val===1){
                    return (item.discounts === 1)
                }
                if(val===2){
                    return (item.bonus_usage === 1)
                }
                if(val===3){
                    return (item.dance_fphloor === 1)
                }
            })
            this.restaurantList = restaurantList;
        }

    },
    mounted() {
        this.getRestaurantsAll();
        axios.post('/getFirstImage').then(response=>{
            this.restaurantImages = response.data

        })

    },
    computed: {
        minAndMax() {
            const {min_price, max_price} = this
            return {min_price, max_price}
        }
    },
    watch: {

        restaurant_type: function (val){
            if(val ==='type_all')
            this.$router.push('/category')
            this.restaurantList = this.restaurantListAll
        },
        restaurant_chosen: function (val) {
            this.filterByCategory(val)
        },
        price_chosen: function (val) {
            if (val === 'cheap') {
                this.filterByPrice(0, 3000)
            } else if (val === 'medium') {

                this.filterByPrice(3000, 10000)
            } else {
                this.filterByPrice(10000, 1000000)
            }
        },
        minAndMax: function (val, val1) {
            /*переменные которые только что изменили свои свойства*/
            let min1 = parseInt(val['min_price'])
            let max1 = parseInt(val['max_price'])

            if (min1 > max1) {
                this.max_price = min1 + 1
            }
            this.filterByPrice(min1, max1)


        },
        ratingFilter: function (val) {
            if (val === 'all') {
                this.filterByRating(0)
            } else if(val === 'rating_6'){
                this.filterByRating(6)
            } else if(val === 'rating_8'){
                this.filterByRating(8)
            }
        },
        additionalFilter:function (val){
            if(val==='discount'){
               this.filterAdditional(1)
            }
            if(val==='spend_bonuses'){
               this.filterAdditional(2)
            }
            if(val==='with_dancefloor'){
               this.filterAdditional (3)
            }
        }
    }
}
</script>

<style scoped>

</style>
