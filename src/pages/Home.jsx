import { RestaurantCard } from "../components/RestaurantCard";
import { FoodCard } from "../components/FoodCard";
import { PopularDishes } from "../components/PopularDishes";
import { Offers } from "../components/Offers";
import { FoodCategories } from "../components/FoodCategories";
import { Testimonials } from "../components/Testimonials";
import { Header } from "../components/Header";


export default function Home() {
  return (
    <div className="home">
          <Header/>
          <FoodCard/>
          <FoodCategories/>
          <Offers/>
          <PopularDishes/>
          <RestaurantCard/>
          <Testimonials/>
    </div>
  );
}
