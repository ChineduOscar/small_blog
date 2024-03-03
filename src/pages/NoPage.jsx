import { Helmet } from "react-helmet-async"
import Layout from "../layout/Layout"
import noPageImage from "../assets/no_page.jpg"

const NoPage = () => {
  return (
    <Layout>
      <Helmet>
          <title>Books of Ugwu Leonard,Jr</title>
          <meta
          name="description"
          content="Interesting books, great books"
          />
      </Helmet>
        <div className="flex justify-center items-center">
            <img src={noPageImage} alt="" className="h-[100vh] w-full md:w-[80%]" />
        </div>
    </Layout> 
  )
}

export default NoPage
