import Banner from "../../components/Banner";
import BestSellers from "../../components/BestSellers";
import Categories from "../../components/Categories";
import Futures from "../../components/Futures";
import Recommendations from "../../components/Recommendations";
import Slider from "../../components/Slider";

export default function Page() {
  return (
    <>
    <div>
        <Slider/>
        <Futures/>
        <Categories/>
        <Recommendations/>
        <BestSellers/>
        <Banner/>
    </div>
    </>
  )
}
