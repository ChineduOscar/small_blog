import { useParams } from "react-router-dom"
import { booksApi } from "../api/booksApi"
import { Helmet } from "react-helmet-async"
import Layout from "../layout/Layout"

const Book = () => {
    console.log(booksApi)
    const { id } = useParams();
  const book = booksApi.find(book => book.id === id);
  const { title, overview, image, formats } = book;
 

  return (
    <Layout>
        <Helmet>
            <title>{title}</title>
            <meta
            name="description"
            content="Interesting books, great books"
            />
      </Helmet>
        <div className="relative px-4 md:px-12 mb-8">
            <p className="text-center text-3xl text-[#222] font-bold uppercase my-4 md:my-10">...</p>
            <div className="absolute top-0 left-0 right-0 uppercase text-center text-xl md:text-3xl bg-[#4c9e9e] text-white font-bold w-full p-2">{title}</div>
            <div className="flex md:flex-row flex-col gap-6 md:gap-8 md:justify-between items-center">
                <img src={image} alt={title} className="h-[450px] w-[300px] md:w-[350px]" />
                <p className="text-xl text-justify text-[#222]">
                   {overview}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center my-6 md:my-12">
                <p className="text-[#222] text-[28px] md:text-3xl font-bold mb-8 uppercase">Place your Order</p>
                <div className="flex flex-col justify-center items-center mb-6 md:mb-12">
                    <p className="text-[#222] text-[28px] md:text-3xl font-bold mb-6">Ebook Format</p>
                    <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-8 mb-6">
                        {formats
                            .filter((format) => format.type === 'ebook')
                            .map((format) =>
                            format.sites.map((site) => (
                                <a key={site.name} target="_blank" href={site.link}>
                                    <button className="text-xl font-semibold px-4 py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] rounded-md">{site.name}</button>
                                </a>
                            ))
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[#222] text-[28px] md:text-3xl font-bold mb-6">Hard Format</p>
                        <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-8">
                            {formats
                                .filter((format) => format.type === 'hardcopy')
                                .map((format) =>
                                format.sites.map((site) => (
                                    <a key={site.name} target="_blank" href={site.link}>
                                        <button className="text-xl font-semibold px-4 py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] rounded-md">{site.name}</button>
                                    </a>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Layout>
  )
}

export default Book
