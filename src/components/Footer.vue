<template>
    <div class="footer">
        <div class="footer__navbar">
            <router-link to="#" class="footer__link">
                <img src="../assets/icon/logo-museum.svg" class="footer__link">
            </router-link>
            <router-link to="#" class="footer__link link">Каталог</router-link>
            <router-link to="#" class="footer__link link">Доставка</router-link>
            <router-link to="#" class="footer__link link">Оплата</router-link>
            <router-link to="#" class="footer__link link">Контакты</router-link>
            <router-link to="#" class="footer__link link">О галерее</router-link>
        </div>
        <div class="footer__contacts">
            <a href="tel:+74955555555" class="footer__link link">
                <img src="../assets/icon/phone.svg">
                +7 (495) 555-55-55
            </a>
            <a href="#" class="footer__link link">
                <img src="../assets/icon/adres.svg">
                г. Москва, ул. Расплетина, 24
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>