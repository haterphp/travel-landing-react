import Layout from "../../components/layout/layout.component";
import MainScreen from "./components/main/main.screen";
import AboutScreen from "./components/about/about.screen";
import PromotionScreen from "./components/promotion/promotion.screen";

function Landing(){
    return (
        <Layout>
            <MainScreen/>
            <AboutScreen/>
            <PromotionScreen/>
        </Layout>
    )
}

export default Landing;
