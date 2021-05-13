<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-6">

                <div class="col-md-12 title">
                    <h1 v-html="restaurant.name"></h1>
                </div>
                <div class="col-md-12 mt-2">
                    <h4 v-html="restaurant.category">Category</h4>
                </div>
                <div class="col-md-12 mt-4 text-bolder flex">
                        <span v-html="restaurant.rating">7.5</span>
                        &nbsp;
                        <span >Средняя оценка</span>
                </div>
                <div class="mt-1 text-grey col-md-12">
                    <span v-html="restaurant.feedback">57 </span><span>&nbsp;отзыва</span>
                </div>
                <div class="col-md-12 mt-5 subtitle">
                    <h4 class="mb-2">Контакты</h4>
                    <p class="mb-1"><b-icon-clock></b-icon-clock> &nbsp; <span v-html="restaurant.schedule"></span></p>
                    <p class="mb-1"><b-icon-teleb></b-icon-teleb> &nbsp; <span v-html="restaurant.phone_number"></span></p>
                    <p class="mb-1"><b-icon-instagram></b-icon-instagram> &nbsp; <a :href="restaurant.instagram">Instagram</a></p>
                    <p class="mb-1"><b-icon-geo-alt></b-icon-geo-alt> &nbsp; <span v-html="restaurant.address"> </span></p>
                </div>

            </div>
            <div class="col-md-6">
                <div class="carousel">
                    <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="#ababab"
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                    >
                        <b-carousel-slide v-for="image in images">
                            <template #img>
                                <img
                                    class="d-block img-fluid"
                                    width="1024"
                                    height="250"
                                    :src="'/images/restaurants_photo/'+image"
                                    alt="image slot"
                                >
                            </template>
                        </b-carousel-slide>

                    </b-carousel>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6">
                <div class="col-md-12">
                    <iframe :src="restaurant.map" width="100%" height="420" frameborder="0"></iframe>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mt-5 col-md-12">
                    <div class="subtitle">
                        <h4>Забронировать место</h4>
                        <p>Нажмите на один из столиков чтобы сделать бронь</p>
                    </div>
                </div>
                <div class="restaurant-map w-100">
                    <button @click="">
                        <img src="/images/inner_maps/inner_map1.png" class="w-100" alt="inner_map">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Restaurant",
    data() {
        return {
            images:[],
            restaurant:[],

            slide: 0,
            sliding: null
        }
    },
    methods: {
        getImages(id){
            axios.post('/getImages',{
                id:id
            }).then(response=>{
                this.images = response.data


            })
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },
    mounted() {
        if(this.$route.query.name!==undefined){
            axios.post('getRestaurant',
                {
                    name:this.$route.query.name
                }).then(response=>{
                    if(response.data.length === 0){
                        this.$router.push('/404')
                    }
                this.getImages(response.data[0].id)
                this.restaurant = response.data[0]
            })

        }

    }
}
</script>

<style scoped>
</style>
