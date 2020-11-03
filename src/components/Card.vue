<template>
    <div class="card">
        <div class="card__img" :style="'background-image: url(' + getImgUrl(cardInfo.img) + ')'"
             :class="{'card__img-disable': cardInfo.isSoldOut}"></div>
        <div class="card__info">
            <h2 class="card__title" :class="{'card__title-disable': cardInfo.isSoldOut}">{{ cardInfo.title }}</h2>
            <div class="card__info-cost">
                <div class="card__cost">
                    <p v-if="cardInfo.isSoldOut" class="card__price card__price-sold">Продана на аукционе</p>
                    <p v-else :class="cardInfo.discount ? 'card__price card__price-prev' : 'card__price'">{{ cardInfo.cost }} $</p>
                    <p v-if="cardInfo.discount" class="card__price">{{ cardInfo.discount}} $</p>
                </div>
                <button v-if="!cardInfo.isSoldOut && !cardInfo.isInBasket" class="button" :disabled="loading" @click="toBuy()">
                    <Loader v-if="loading"/>
                    <span v-else>Купить</span>
                </button>
                <button v-if="!cardInfo.isSoldOut && cardInfo.isInBasket" class="button button-basket"> &#10003; В корзине</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "./Loader";

    export default {
        name: "Card",
        components: {Loader},
        props: {
            cardInfo: Object,
            addInBasket: Function
        },
        data() {
            return {
                loading: false
            }
        },
        methods: {
            getImgUrl(img) {
                return require('../assets/images/' + img)
            },
            toBuy() {
                this.loading = true
                setTimeout(() => {
                    try {
                        fetch('https://jsonplaceholder.typicode.com/posts/1')
                            .then(result => result.json())
                            .then(json => {
                                console.log('Response from "https://jsonplaceholder.typicode.com/posts/1": ', json)
                                this.loading = false
                                this.addInBasket(this.cardInfo.id)
                            })
                    }
                    catch (e) {
                        console.error(e)
                    }
                }, 2000)
            }
        }
    }
</script>

<style scoped>

</style>