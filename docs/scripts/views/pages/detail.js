import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../template/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReview from '../../utils/post-review-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
    async render() {
        return `
            <div class="main">
                <h2 tabindex="0" class="explore-restaurant-label">Detail Restoran</h2>
                <section id="detail-restoran"></section>
                <div class="like" id="likeButtonContainer"></div>
                <div class="form-review">
                    <form>
                        <div class="mb-3">
                            <label for="inputName" class="form-label">Nama</label>
                            <input name="inputName" type="text" class="form-control" id="inputName">
                        </div>
                        <div class="mb-3">
                            <label for="inputReview" class="form-label">Review Restoran</label>
                            <input name="inputReview" type="text" class="form-control" id="inputReview">
                        </div>
                        <button id="submit-review" type="submit" class="btn">Kirim</button>
                    </form>
                </div>
            </div>
        `;
    },
        
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.getElementById('detail-restoran');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
            
        LikeButtonPresenter.init({
            likeButtonContainer: document.getElementById('likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                city: restaurant.city,
                pictureId: restaurant.pictureId,
                description: restaurant.description,
                rating: restaurant.rating,
            },
        });

        const submitReview = document.getElementById('submit-review');
        submitReview.addEventListener('click', (event) => {
            event.preventDefault();
            PostReview();
        });
    },
};

export default Detail;
