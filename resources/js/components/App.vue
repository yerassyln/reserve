<template>
    <div id="app">
        <div>
            <router-view name="header" />
            <div>
                <router-view />
            </div>
            <router-view name="footer" />
        </div>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
