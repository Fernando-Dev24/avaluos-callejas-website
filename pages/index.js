import Layout from "../components/Layout";
import Header from "../components/home/Header";
import About from '../components/home/About';
import Objetives from "../components/home/Objetives";
import Services from "../components/home/Services";
import Achievements from "../components/home/Achievements";
import Footer from '../components/home/Footer';

const Home = () => {
    return (
      <Layout>
        <Header />
        <About />
        <Objetives />
        <Services />
        <Achievements />
        <Footer />
      </Layout>
    )
};

export default Home;
