const app = {
    data() {
        return {
            title: 'Sua loja',
            name: 'Daniel',
            lastName: 'Silva',
            products: [
                {
                    id: 1,
                    name: 'Jogo Ruim',
                    description: 'Filme incrível',
                    image: 'assets/img/1.jpg',
                    stars: 3,
                },
                {
                    id: 2,
                    name: 'Jogo bom',
                    description: 'Filme incrível (2)',
                    image: 'assets/img/2.jpg',
                    stars: 0,
                },
                {
                    id: 3,
                    name: 'Jogo médio',
                    description: 'Filme incrível (2)',
                    image: 'assets/img/2.jpg',
                    stars: 0,
                }
            ],
            cart: [],
            styles: {
                backgroundColor: '#fff',
                color: '#000'
            },
            darkMode: false
        }
    },

    computed: {
        fullName() {
            return this.name + ' ' + this.lastName;
        }
    },

    methods: {
        addCart(product) {
            this.cart.push(product)
        },

        removeCart(product) {
            this.cart = this.cart.filter((prod, index) => {
                return product != prod
            })
        },

        inCart(product) {
            return this.cart.indexOf(product) != -1
        },

        toggleTheme() {
            this.darkMode = !this.darkMode

            if (this.darkMode) {
                this.styles.backgroundColor = '#000',
                    this.styles.color = '#fff'
            } else {
                this.styles.backgroundColor = '#fff',
                    this.styles.color = '#000'
            }
        }
    },
}

Vue.createApp(app).mount('#app');