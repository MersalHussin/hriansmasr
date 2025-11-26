import ClientsSection from "../components/Clients"
import FAQ from "../components/FAQ"
import Feedback from "../components/Feedback"
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SEO from '../components/SEO'

function FounderPage() {
  const { t } = useTranslation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return(
    <>
    <SEO 
      title="عن المؤسس - أحمد ناجي الدخميسي | HRins Egypt"
      description="أحمد ناجي الدخميسي - خبير موارد بشرية بخبرة أكثر من 16 عاماً. مؤسس HRins Egypt ومدير الموارد البشرية لشركة أودن"
      keywords="أحمد الدخميسي, خبير HR, مستشار موارد بشرية, HRins Egypt, لقاءات تليفزيونية"
    />
     <div className="relative w-full bg-primary text-white pt-12 pb-20 rounded-b-[80px] md:rounded-b-[180px]">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center flex-col">
        <p className="text-center text-white text-2xl md:text-3xl font-bold mb-2">{t('founderPageTitle')}</p>
        <img src="/images/LogoEldokhmesy.svg" className="text-center w-full max-w-[300px] md:max-w-[480px] mt-3" alt="Logo" />
        <Breadcrumb currentPage={t('founder')} />
      </div>
    </div>
    <section className="about-founder py-16">
      <h1 className="title text-primary">{t('founderPageTitle')}</h1>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-evenly items-center gap-8">
        <div className="max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary">{t('founderName')}</h1>
          <p className="text-base md:text-lg lg:text-xl mt-2 font-semibold text-black-v2">{t('founderBio')}</p>
        </div>
        <div className="image w-full md:w-auto">
          <img className="rounded-4xl w-full md:w-[600px] rounded-br-sm border-primary border-5" src="/public/images/TV/3.jpg" alt="صورة للمؤسس في الراديو 90:90" />
        </div>
      </div>
    </section>
    <section className="tv">
      <h1 className="title text-primary">{t('tvInterviewsTitle')}</h1>
        <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, titleKey: 'لقاء القناة الأولى', link: 'https://www.youtube.com/watch?v=Ql_otSqroa8' },
            { id: 2, titleKey: 'لقاء CBC سُفرة', link: 'https://www.youtube.com/watch?v=qsl0LyKEGL4&t=167s' },
            { id: 3, titleKey: 'لقاء الراديو 90:90', link: 'https://www.youtube.com/@AhmednagyEldokhmesy' },
            { id: 4, titleKey: 'لقاء شعبي FM', link: 'https://www.youtube.com/@AhmednagyEldokhmesy' },
            { id: 5, titleKey: 'لقاء MBC مصر الأول', link: 'https://www.facebook.com/reel/431350496724758' },
            { id: 6, titleKey: 'لقاء قناة اليوم', link: 'https://www.youtube.com/watch?v=delb9D4XY9U' },
            { id: 7, titleKey: 'لقاء قناة صدى البلد', link: 'https://www.youtube.com/watch?v=-JgimhOc37k' },
            { id: 8, titleKey: 'لقاء MBC مصر الثاني', link: 'https://www.facebook.com/watch/?v=1094396469161703&rdid=jkVzeeiCy9zG1iFE' },
            { id: 9, titleKey: 'لقاء MBC مصر الثالث', link: 'https://www.facebook.com/reel/629950543120114' },
          ].map((episode) => (
            <a key={episode.id} href={episode.link} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative overflow-hidden rounded-md border-primary border-5">
                <img className="w-full h-auto transition-transform duration-300 group-hover:scale-110 group-active:scale-110" src={`/images/TV/${episode.id}.jpg`} alt={t(episode.titleKey)} />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary via-primary/80 to-transparent p-4 pt-8">
                  <p className="text-white text-base md:text-lg font-bold text-center">{t(episode.titleKey)}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16">
      <h1 className="title text-primary">{t('trainingProgramsTitle')}</h1>
        <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-8">
          <img className="w-full rounded-lg" src="/images/courses image.jpg" alt="البرامج التدريبية" />
          <h1 className="text-black text-md  w-full sm:w-[700px] lg:w-[1000px] md:text-2xl font-medium text-center">{t('trainingProgramsDesc')}
          <span className="text-primary font-semibold  mt-2">
           {t('universitiesList')}
          </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
            <img className="w-20 md:w-24 transition-transform duration-300 hover:scale-110 active:scale-110 cursor-pointer" src="/images/Universteies/1.png" alt="جامعة مصر المعلوماتية" />
            <img className="w-20 md:w-24 transition-transform duration-300 hover:scale-110 active:scale-110 cursor-pointer" src="/images/Universteies/2.png" alt="جامعة مصر للعلوم والتكنولوجي" />
            <img className="w-20 md:w-24 transition-transform duration-300 hover:scale-110 active:scale-110 cursor-pointer" src="/images/Universteies/3.png" alt="جامعة الأسكندرية" />
            <img className="w-20 md:w-24 transition-transform duration-300 hover:scale-110 active:scale-110 cursor-pointer" src="/images/Universteies/4.png" alt="جامعة مايو" />
            <img className="w-20 md:w-24 transition-transform duration-300 hover:scale-110 active:scale-110 cursor-pointer" src="/images/Universteies/5.png" alt="جامعة النيل" />
          </div>
        </div>
      </div>
    </section>
    <Feedback/>
    <ClientsSection/>
    <FAQ/>
    </>
  )
}

export default FounderPage
