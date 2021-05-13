<template>
    <div class="main-page">
        <div class="main-swiper w-100">
            <img alt="wallpaper" class="w-100" src="/images/wallpaper.png">

        </div>
        <div class="container transparent">
            <div class="main-title w-50 mobile-full ml-auto">
                <h1>Любимое место в один клик</h1>
                <h4>Бронируй рестораны по душе</h4>
            </div>
            <div class="main-search w-50 mobile-full mt-5 ml-auto">
                <b-nav-form>
                    <vue-suggestion :items="searchList"
                                    v-model="item"
                                    :setLabel="setLabel"
                                    @changed="inputChange"
                                    :itemTemplate="ItemTemplate"
                                    @selected="itemSelected">
                    </vue-suggestion>
<!--                    <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск ресторанов"></b-form-input>-->
                    <b-button size="sm" class="my-2 my-sm-0" @click="searchMain(item)">Искать</b-button>


                </b-nav-form>
            </div>
        </div>
        <div class="container category">
            <div class="title">
                <h1>Категории</h1>
            </div>
            <div class="cards mt-5 row">

                <div class="col-md-4">
                    <router-link :to="{path:'/category', query: { name: 'Восточная кухня' }}">
                        <b-card
                            title="Восточная кухня"
                            img-src="/images/east.png"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                        >
                            <!--                <b-card-text>-->
                            <!--                    Some quick example text to build on the card title and make up the bulk of the card's content.-->
                            <!--                </b-card-text>-->
                        </b-card>
                    </router-link>
                </div>

                <div class="col-md-4">
                    <router-link :to="{path:'/category', query: { name: 'Iftar' }}">
                        <b-card
                            title="Iftar - Ауызашар"
                            img-src="/images/iftar.png"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                        >
                            <!--                <b-card-text>-->
                            <!--                    Some quick example text to build on the card title and make up the bulk of the card's content.-->
                            <!--                </b-card-text>-->
                        </b-card>
                    </router-link>
                </div>

                <div class="col-md-4">
                    <router-link :to="{path:'/category', query: { name: 'Итальянская кухня' }}">
                        <b-card
                            title="Итальянская кухня"
                            img-src="/images/italian.png"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                        >
                            <!--                <b-card-text>-->
                            <!--                    Some quick example text to build on the card title and make up the bulk of the card's content.-->
                            <!--                </b-card-text>-->
                        </b-card>
                    </router-link>
                </div>

            </div>
        </div>
        <div class="container pt-5 best-category">
            <div class="title">
                <h1>Лучшее от Reserve.kz</h1>
            </div>
            <div class="cards mt-5 row">


                <div class="col-md-4" v-for="item in restaurantList" :key="item.id">
                    <router-link :to="{path:'/restaurant',query:{name:item.name}}">
                        <b-card
                            :title="item.name"
                            :img-src="'/images/restaurants_photo/'+restaurantImages[item.id]"
                            img-alt="Image"
                            img-top
                            img-height="200"
                            tag="article"
                            class="mb-2"
                        >
                            <b-card-text>
                                <p v-html="item.description">
                                    Ресторан Vista находится на 30 этаже Ritz Carlton. </p>
                                <div class="row">
                                    <div class="col-md-9">
                                        <p class="address">
                                            <b-icon-cursor></b-icon-cursor>
                                            &nbsp
                                            <span v-html="item.address">Ritz Carlton hotel, пр. Аль-Фараби, 77/7</span>
                                        </p>
                                        <p>
                                            <b-icon-telephone></b-icon-telephone>
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
        <div class="container pt-5 choose">
            <div class="title">
                <h1>Подобрать ресторан</h1>
            </div>
            <div class="search-block">

                <form class="row" action="/category">
                    <div class="col-md-4">
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
                        <div class="row mt-3">
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
                        <div class="row mt-3" v-if="restaurant_type==='chosen'">
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
                    </div>
                    <div class="col-md-4">
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
                                        <b-form-input type="text" :value="min_price"></b-form-input>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-input type="text" :value="max_price"></b-form-input>
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
                    </div>
                    <div class="col-md-4 last-filter">
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
                        <div class="row">
                            <div class="col-md-12 text-center">

                                <b-button class="my-2 my-sm-0" @click="search()" type="submit">Искать</b-button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ItemTemplate from './ItemTemplate';
import { VueSuggestion } from 'vue-suggestion';

export default {
    name: "Index",
    data() {
        return {
            restaurantImages:[],
            item: {},
            items: [
                { id: 1, name: 'Golden Retriever'},
                { id: 2, name: 'Cat'},
                { id: 3, name: 'Squirrel'},
            ],
            ItemTemplate,
            restaurantList: [],
            restaurantListAll: [],
            categoriesList: [],
            searchList:[],
            restaurant_type: 'chosen',
            typeOptions: [
                {text: 'Вид кухни', value: 'chosen'},
                {text: 'Все рестораны', value: 'type_all'},
            ],
            restaurant_chosen: 'chosen',
            restaurantOptions: [
                {text: 'Европейская кухня', value: 'european'},
                {text: 'Азиатская кухня', value: 'asian'},
                {text: 'Итальянская кухня', value: 'italian'},
                {text: 'Казахская кухня', value: 'kazakh'},
                {text: 'Турекая кухня', value: 'turkish'},
                {text: 'Русская кухня', value: 'russian'},
                {text: 'Восточная кухня', value: 'east'},
                {text: 'Фаст Фуд', value: 'fast_food'},
                {text: 'Кофе и десерты', value: 'coffee'},
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
            price_chosen: 'cheap',
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
        itemSelected (item) {
            this.item = item;
        },
        setLabel (item) {
            return item.name;
        },
        inputChange (text) {
            // your search method
            let items = this.restaurantListAll
            this.searchList = items.filter(item => {
                if(item.name.toLowerCase().includes(text)){
                    return item.name
                }
            });
            // now `items` will be showed in the suggestion list
        },
        search() {

        },
        searchMain(item) {
            let url = item.name.replaceAll(" ","%20")
            url = url.replaceAll("&","%26")

            this.$router.push('/restaurant?name='+url)
        }
        ,

        getRestaurantsAll() {

        },
    },
    components: {
        VueSuggestion,
    },
    mounted() {
        axios.post('/getRestaurantsAll').then(response => {
            this.restaurantListAll = response.data
            this.restaurantList = response.data
        })
        axios.post('/getFirstImage').then(response=>{
            this.restaurantImages = response.data

        })
    }
}

</script>
<style scoped>
.vue-suggestion .vs__list {
    width: 100%;
    text-align: left;
    border: none;
    border-top: none;
    max-height: 400px;
    overflow-y: auto;
    position: relative;
}
.vue-suggestion .vs__list .vs__list-item {
    background-color: #fff;
    padding: 10px;
}
.vue-suggestion .vs__list .vs__list-item:last-child {
    border-bottom: none;
}
.vue-suggestion .vs__list .vs__list-item:hover {
    background-color: #eee !important;
}
.vs__input:active{
    border: none;
}
.vue-suggestion .vs__list,
.vue-suggestion .vs__loading {
    position: absolute;
}
.vue-suggestion .vs__list .vs__list-item {
    cursor: pointer;
}
.vue-suggestion .vs__list .vs__list-item.vs__item-active {
    background-color: #f3f6fa;
}
</style>


