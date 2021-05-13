<template>
    <div class="w-full  p-2">
        <span class="text-bolder">{{ item.name }}</span>
        <br>
        <span>{{ item.category }}</span>
    </div>
</template>

<script>
export default {
    name: "ItemTemplate",
    props: {
        item: {required: true},
    }
}
</script>

<style scoped>

</style>
<div class="vs__list">
<div class=""><!---->
    <div class="vs__item-active vs__list-item">
        <div data-v-7cc09a68="" class="w-full p-2"><span data-v-7cc09a68="">SEVEN BAR &amp; RESTAURANT</span> <span
            data-v-7cc09a68="">Европейская кухня</span></div>
    </div>
    <div class="vs__list-item">
        <div data-v-7cc09a68="" class="w-full p-2"><span data-v-7cc09a68="">Пинта Bar &amp; Grill</span> <span
            data-v-7cc09a68="">Европейская кухня</span></div>
    </div>
</div>
</div>
