import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Home = {
    async render() {
        return `
            <div class="main">
                <h2 class="explore-restaurant">Eksplor Restoran</h2>
                <section id="explore-restaurant-list"></section>
                </div>
            </div>
        `;
    },

    async afterRender() {
        const listRestaurant = await RestaurantSource.getRestaurants();
        const restaurantContainer = document.getElementById('explore-restaurant-list');
        restaurantContainer.innerHTML = '';
        listRestaurant.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
