import Layout from "../../components/layout/layout.component";
import MainScreen from "./components/main/main.screen";
import AboutScreen from "./components/about/about.screen";
import PromotionScreen from "./components/promotion/promotion.screen";
import SearchScreen from "./components/search/search.screen";

function Landing(){
    return (
        <Layout>
            <MainScreen/>
            <AboutScreen/>
            <SearchScreen/>
            <PromotionScreen/>
        </Layout>
    )
}

export default Landing;
