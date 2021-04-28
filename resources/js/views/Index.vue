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
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск ресторанов"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Искать</b-button>
                </b-nav-form>
            </div>
        </div>
        <div class="container category">
            <div class="title">
                <h1>Категории</h1>
            </div>
            <div class="cards mt-5 row">
                <div class="col-md-4">
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
                </div>

                <div class="col-md-4">
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
                </div>

                <div class="col-md-4">
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
                </div>

            </div>
        </div>
        <div class="container pt-5 best-category">
            <div class="title">
                <h1>Лучшее от Reserve.kz</h1>
            </div>
            <div class="cards mt-5 row">
                <div class="col-md-4">
                    <b-card
                        title="Seven bar & Restaurant"
                        img-src="/images/seven.png"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <b-card-text>
                            <p>
                                Элитный ресторан, расположенный на 28 этаже Esentai Tower.</p>
                            <div class="row">
                                <div class="col-md-9">
                                    <p class="address">
                                        <b-icon-cursor></b-icon-cursor>
                                        &nbsp
                                        <span>Esentai Tower, пр. Аль-Фараби, 77/7</span>
                                    </p>
                                    <p>
                                        <b-icon-phone></b-icon-phone>
                                        &nbsp
                                        <span>+7 775 885 58 88</span>
                                    </p>
                                </div>
                                <div class="col-md-3 grade">
                                    <h4>4.7</h4>
                                </div>
                            </div>
                        </b-card-text>
                    </b-card>
                </div>

                <div class="col-md-4">
                    <b-card
                        title="Ресторан VISTA"
                        img-src="/images/vista.png"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <b-card-text>
                            <p>
                                Ресторан Vista находится на 30 этаже Ritz Carlton. </p>
                            <div class="row">
                                <div class="col-md-9">
                                    <p class="address">
                                        <b-icon-cursor></b-icon-cursor>
                                        &nbsp
                                        <span>Ritz Carlton hotel, пр. Аль-Фараби, 77/7</span>
                                    </p>
                                    <p>
                                        <b-icon-phone></b-icon-phone>
                                        &nbsp
                                        <span>+7 727 332 88 88</span>
                                    </p>
                                </div>
                                <div class="col-md-3 grade">
                                    <h4>4.7</h4>
                                </div>
                            </div>
                        </b-card-text>
                    </b-card>
                </div>

                <div class="col-md-4">
                    <b-card
                        title="Ресторан PALLADIUM"
                        img-src="/images/palladium.png"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                    >
                        <b-card-text>
                            <p>
                                Pеспектабельный ресторан с многолетней историей в центре Алматы.
                            </p>
                            <div class="row">
                                <div class="col-md-9">
                                    <p class="address">
                                        <b-icon-cursor></b-icon-cursor>
                                        &nbsp
                                        <span>пр. Назарбаева, 275</span>
                                    </p>
                                    <p>
                                        <b-icon-phone></b-icon-phone>
                                        &nbsp
                                        <span>+7 727 332 88 88</span>
                                    </p>
                                </div>
                                <div class="col-md-3 grade">
                                    <h4>4.7</h4>
                                </div>
                            </div>

                        </b-card-text>
                    </b-card>
                </div>

            </div>
        </div>
        <div class="container pt-5 choose">
            <div class="title">
                <h1>Подобрать ресторан</h1>
            </div>
            <div class="search-block">

                <form class="row">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Дата:</label>
                                <b-form-input type="date"></b-form-input>
                            </div>
                            <div class="col-md-6">
                                <label>Время:</label>
                                <b-input type="date"></b-input>
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
                                        name="radios-btn-default"
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
                                        name="plain-stacked"
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
                                        name="radios-btn-default"
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
                                        name="plain-stacked"
                                        plain
                                        stacked
                                    ></b-form-radio-group>
                                </b-form-group>
                            </div>
                            <div class="row mb-2" v-else>
                                <div class="col-md-6">
                                    <b-form-input type="text" :value="min_price"></b-form-input>
                                </div>
                                <div class="col-md-6">
                                    <b-form-input type="text" :value="max_price"></b-form-input>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <b-form-group label="" v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        id="btn-radios-1"
                                        v-model="price_type"
                                        :options="priceOptions"
                                        :aria-describedby="ariaDescribedby"
                                        name="radios-btn-default"
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
                                        name="plain-stacked"
                                        plain
                                        stacked
                                    ></b-form-radio-group>
                                </b-form-group>
                            </div>
                            <div class="row mb-2" v-else>
                                <div class="col-md-6">
                                    <b-form-input type="text" :value="min_price"></b-form-input>
                                </div>
                                <div class="col-md-6">
                                    <b-form-input type="text" :value="max_price"></b-form-input>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-md-4"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Index",
    data() {
        return {
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
    components: {},
}

</script>


