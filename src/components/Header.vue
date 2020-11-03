<template>
    <div class="header">
        <div class="header__navbar">
            <router-link to="#" class="header__link">
                <img src="../assets/icon/logo-museum.svg" class="header__link">
            </router-link>
            <router-link to="#" class="header__link link">Каталог</router-link>
            <router-link to="#" class="header__link link">Доставка</router-link>
            <router-link to="#" class="header__link link">Оплата</router-link>
            <router-link to="#" class="header__link link">Контакты</router-link>
            <router-link to="#" class="header__link link">О галерее</router-link>
        </div>
        <div class="header__search-form">
            <input class="input" v-model="searchInput" placeholder="Поиск по названию картины">
            <button class="button">Найти</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                searchInput: ''
            }
        }
    }
</script>

<style scoped>

</style>