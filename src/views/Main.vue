<template>
    <div class="content">
        <h1 class="content__title">Картины эпохи возрождения</h1>
        <div class="content__items">
            <Card v-for="item of allStoreItems" :key="item.id"
                  :card-info="item"
                  :add-in-basket="addInBasket"
            />
        </div>
    </div>
</template>

<script>
    import Card from "../components/Card";
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "Main",
        components: {Card},
        data() {
            return {
                items: [
                    {
                        id: 1,
                        title: '"Рождение Венеры" Сандро Боттичелли',
                        img: '1.png',
                        cost: 2000000,
                        discount: 1000000,
                        isInBasket: false,
                        isSoldOut: false
                    },
                    {
                        id: 2,
                        title: '"Тайная вечеря" Леонардо Да Винчи',
                        img: '2.png',
                        cost: 3000000,
                        discount: null,
                        isInBasket: false,
                        isSoldOut: false
                    },
                    {
                        id: 3,
                        title: '"Сотворение Адама" Микеланджело',
                        img: '3.png',
                        cost: 6000000,
                        discount: 5000000,
                        isInBasket: true,
                        isSoldOut: false
                    },
                    {
                        id: 4,
                        title: '"Урок Анатомии" Рембрандт',
                        img: '4.png',
                        cost: 6000000,
                        discount: null,
                        isInBasket: false,
                        isSoldOut: true
                    },
                ]
            }
        },
        computed: mapGetters(['allStoreItems']),
        methods: {
            ...mapMutations(['addStoreItems', 'updateStoreItems']),
            addInBasket(id) {
                let currentItem = this.allStoreItems.find(x => x.id === id)
                currentItem.isInBasket = true
                this.updateStoreItems(currentItem)
            }
        },
        mounted() {
            let savedStoreItems = localStorage.getItem('saveStoreItem')
            if (savedStoreItems) {
                JSON.parse(savedStoreItems).forEach(item => this.addStoreItems(item))
            } else {
                this.items.forEach(item => this.addStoreItems(item))
            }
        }
    };
</script>
