import { Helmet } from "react-helmet-async"
import Slider from "../components/homeComponent/slider/Slider"
import Layout from "../layout/Layout"
import ImagesDisplay from "../components/homeComponent/BooksAd"
import AboutAuthor from "../components/homeComponent/AboutAuthor"

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ugwu Leonard,Jr</title>
        <meta
        name="description"
        content="Interesting books, great books, about ugwu leonard"
        />
      </Helmet>
      <Slider />
      <ImagesDisplay/>
      <AboutAuthor />
    </Layout>
  )
}

export default Home
