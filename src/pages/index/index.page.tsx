import Layout from "../../components/layout/layout.component";
import MainScreen from "./components/main/main.screen";
import AboutScreen from "./components/about/about.screen";

function Landing(){
    return (
        <Layout>
            <MainScreen/>
            <AboutScreen/>
        </Layout>
    )
}

export default Landing;
