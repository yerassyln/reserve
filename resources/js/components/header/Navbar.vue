<template>
    <div class="container">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">
                <img src="/images/logo/logo.png" alt="">
            </b-navbar-brand>


            <b-collapse id="nav-collapse" is-nav class="flex-column">

                <!-- Top aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Алматы" right>
                        <b-dropdown-item>Алматы</b-dropdown-item>
                        <b-dropdown-item disabled>Нур-Султан</b-dropdown-item>
                        <b-dropdown-item disabled>Шымкент</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item class="text-primary" href="#">Стать партнером</b-nav-item>
                    <b-nav-item href="#">Контакты</b-nav-item>
                    <b-nav-item v-if="!logged" href="#">Регистрация</b-nav-item>
                    <!--                    <b-nav-item class="button-primary" href="#">Войти</b-nav-item>-->
                    <b-button v-if="!logged">Войти</b-button>
                    <b-nav-item-dropdown right v-if="logged">
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>


                <!-- Bottom aligned nav items -->
                <b-navbar-nav class="ml-auto mt-1">

                    <b-nav-item href="#">Lounge - Бары</b-nav-item>

                    <b-nav-item href="#">Фаст - фуды</b-nav-item>

                    <b-nav-item href="#">Семейный - ужин</b-nav-item>
                    <b-nav-item href="#">Караоке</b-nav-item>
                    <b-nav-item href="#">Iftar</b-nav-item>
                    <b-nav-item href="#">Все рестораны</b-nav-item>




                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>


export default {
    name: "Navbar",
    data() {
        return {
            logged: false,
        }
    }
}
</script>

<style scoped>

</style>
