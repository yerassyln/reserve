<template>
    <div class="container login">
        <b-form @submit="onSubmit"  v-if="show">
            <h1 class="mb-2">Вход</h1>
            <p>Привет, рады видеть Вас снова</p>
            <b-form-group
                id="input-group-1"
                label="Номер телефона:"
                label-for="input-1"
                description="Пожалуйста введите номер телефона в формате +7"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.phone_number"
                    type="number"
                    placeholder="+7(702) 844-69-43"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    placeholder="Введите пароль"
                    required
                ></b-form-input>
            </b-form-group>

<!--            <b-form-group id="input-group-3" label="Food:" label-for="input-3">-->
<!--                <b-form-select-->
<!--                    id="input-3"-->
<!--                    v-model="form.food"-->
<!--                    :options="foods"-->
<!--                    required-->
<!--                ></b-form-select>-->
<!--            </b-form-group>-->
            <div class="row">
                <div class="col-md-6">
                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group
                            v-model="form.checked"
                            id="checkboxes-4"
                            :aria-describedby="ariaDescribedby"
                        >
                            <b-form-checkbox value="that">Запомнить</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <div class="col-md-6">
                    <router-link to="/forget-password">
                        <p class="text-danger text-right">Забыли пароль?</p>
                    </router-link>
                </div>
            </div>

            <b-button type="submit" variant="primary">Войти</b-button>
<!--            <b-button type="reset" variant="danger">Reset</b-button>-->
            <router-link to="/register">
                <p></p>
                <p class="text-danger">Зарегистрироваться</p>
            </router-link>
        </b-form>

    </div>
</template>

<script>
export default {

    name:'login',
    data() {
        return {
            form: {
                phone_number: '',
                password: '',
                checked: []
            },
            show:true
        }
    },
    methods: {

        onSubmit(event) {
            event.preventDefault()
            console.log(this.$store.state.isUserLoggedIn())
            this.$store.dispatch('login')
            // console.log(this.$store.state.login.isUserLoggedIn())

            let phone_number = this.form.phone_number
            let password = this.form.password
            // console.log(this.$store.dispatch('login', { phone_number, password }))
            // this.$store.dispatch('login', { phone_number, password })
            //     .then(() => this.$router.push('/'))
            //     .catch(err => console.log(err))
        },
        async logout (){
        }
    },
    computed : {
        isLoggedIn : function(){
            console.log(this.$store.getters.isAuthenticated)
            return this.$store.getters.isAuthenticated}
    },
}
</script>
