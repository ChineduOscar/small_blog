import { Helmet } from "react-helmet-async"
import image1 from "../assets/bio.jpg"
import image2 from "../assets/pic2.jpg"
import image3 from "../assets/pic3.jpg"
import Layout from "../layout/Layout"

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Ugwu Leonard,Jr</title>
        <meta
          name="description"
          content="Author,book writer,lecturer."
        />
      </Helmet>
      <section className="relative px-4 md:px-12 mb-8">
        <p className="text-center text-3xl text-[#222] font-bold uppercase my-4 md:my-10">...</p>
          <div className="absolute top-2 left-0 right-0 uppercase text-center text-xl md:text-3xl text-white bg-[#4c9e9e] font-bold w-full p-2">About author</div>
          <div>
              <p className="text-[#222] text-3xl md:text-4xl font-bold my-6 text-center lg:text-start">Ugwu Leonard,Jr</p>
              <div className="flex flex-col lg:block justify-center items-center">
                <img src={image1} loading="lazy" alt="" className="w-[30rem] h-[20rem] md:h-[30rem] lg:mr-6 mb-4 lg:mb-6 rounded-md lg:float-left"/>
                <div className="text-justify font-light text-[#222] text-xl md:text-2xl">
                  <p className="mb-8">It all became a flickering light when Leonard Jr. won the best poet
                  of the year twice in 2012 and 2013 from the Caritas University
                  Literary and Arts Association (CAULAA). During his first Degree in
                  Caritas University Enugu, his name echoed all over the Institution
                  because of his poetry renditions in notable events and festivals
                  hosted around the school, they gave him a name &rsquo;Leonard is
                  Back&rsquo; – a name carved out of one of his poetic renditions
                  titled &rsquo;Leonard is Back&rsquo; – the poetry rendition had the
                  audience chorusing the word &rsquo;Leonard is Back&rsquo; found at
                  the end of each verse of the poem.</p>
                  <p className="mb-4 md:mb-8">It was their best of him for the poem was rhythmic and the content
                  served as a voice to the voiceless students in the institution. In
                  2016, Leonard graduated from Caritas University Enugu with a BSC in
                  Political Science. While he was waiting for his National Youth
                  Service (NYSC) call up letter, He turned his writings to the Social
                  media (Facebook) where he got a lot of recognitions and awards. He
                  was awarded a certificate as the ‘Big Squire’ of the World Union of
                  Poets, 2016 after compiling the Anthology of Peace for the World
                  Union of Poets (WUP) published by Atunis Poetry in 2016 .</p>
                  <p className="mb-4 md:mb-8">He also became the coordinator of the Creative Writers Association
                  of Nigeria (CWAN) Enugu state chapter 2016-2018. In 2017, Leonard
                  became a Laureate at the World Nations Writers Union (WNWU) 2017;
                  accompanied with a certificate. After his Youth Service Corps in
                  2017, he returned to his hometown, Nsukka and obtained a Masters
                  Degree (MSC) in International Relations at the University of Nigeria
                  Nsukka. The same year, he published his first poetry collection in
                  Author House USA, with the pseudonym “Leonard D Great”. The name was
                  given to him by Author House because the first poem in the
                  collection was titled ‘Leonard the Great’, and as an American
                  publisher, marketing a book by its cover and author name is
                  paramount. There – somehow, Leonard Ugwu took the name and made it
                  his.</p>
                  <p className="mb-4 md:mb-8">The journey of this writer became even more resilient when he embarked
                  towards institutionalizing literature in his environment. In 2018, he
                  formed the Words and Arts Literary association, encompassing of
                  literary enthusiast and young talents ready to learn art, craft and
                  creative writing, this association was duly registered as an
                  association in the University of Nigeria, Nsukka, they held meetings
                  on the first and last Saturdays of every month. Their meetings
                  comprised of literary readings, criticisms, spoken words, on the spot
                  writing, lectures and annual events/ awards. This association have
                  grown to organize many literary reading and events in the University,
                  inviting prominent Authors for readings like Chimalum Nwankwo,
                  Chijioke Amu-Nnadi, Greg Mbajiorgu, Norbert Oyibo Eze, Ozioma
                  Onuzulike, Etc.</p>
                  <p className="mb-4 md:mb-8">Despite Leonard’s academic endowment in Political and International
                  Studies, he felt something was missing in his life, something about
                  him, something about his dream, something about his destiny,
                  something about his passion. As a creative writer who had studied
                  political science almost to a PhD level, something was missing, may
                  be the desire to read more literary books, maybe the knowledge of
                  literary criticism, may be the ability to get more ideas or
                  theoretical analysis and implant them in his books. There was
                  something missing, a vacuum he couldn&rsquo;t fathom. This vacuuming
                  desire and passion for creative writing made him go for a second
                  degree; a Post Graduate Diploma (PGD) in English and Literary
                  Studies, at the University of Nigeria, Nsukka which he completed in
                  2023. Currently Leonard Ifeanyi Ugwu is a Lecturer at the Institute
                  of African Studies (IAS), University of Nigeria, Nsukka. He is also
                  a Doctoral researcher (PhD in view) at the same University. His
                  writings have appeared in variety of prestigious journals,
                  anthologies, magazines, e-zines, and websites around the globe like
                  Brittle paper, Oddball Magazine, Spillwords press, Atunis poetry and
                  others. He is the author of two poetry collections and a play book:
                  Echoes of the Invisible (Author House, USA. 2017) 《poems》 Echoes
                  of Bullets (Emotion Press, Nigeria. 2021) 《poems》Babel and Boys
                  (Phoenix Award Books Publications, Nigeria 2023). 《A Play》All his
                  effort has been to change the world around him through Literature.
                  What has Leo not done for his dream?</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-10">
                  <img src={image2} alt="" className=" w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] rounded-[50%]" loading="lazy" />
                  <img src={image3} alt="" className=" w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] rounded-[50%]" loading="lazy" />
              </div>
          </div>
        </section>
    </Layout>
  )
}

export default About
