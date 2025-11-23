import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import ServiceCard from "../components/ServiceCard"
import Feedback from "../components/Feedback"
import FAQ from "../components/FAQ"
import ClientsSection from "../components/Clients"

function Home() {
  const { t } = useTranslation()
  
  return (
    <>
    <section className="hero flex items-center bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center min-h-[calc(100vh-90px)] py-10">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-evenly items-center gap-8">
        <div className="data w-full md:max-w-[700px] ">
          <div className="text flex flex-col gap-5 justify-center items-center">
            <img src="/public/images/Auth.svg" alt="" className="w-[250px] md:w-[300px]" />
            <h1 className="text-primary font-extrabold leading-tight max-w-[400px] md:max-w-full text-[42px] sm:text-[50px] md:text-5xl lg:text-6xl xl:text-7xl text-center">{t('heroTitle')}</h1>
            <p className="max-w-[500px] text-black-v2 text-lg md:text-2xl font-medium text-center">{t('heroDesc')}</p>
          </div>
          <div className="buttons flex flex-col md:flex-row gap-4 mt-6 justify-center  items-center">
            <Link to="mersal.top" className="bg-primary font-semibold border-3 border-primary p-3 px-10 text-xl md:text-2xl text-white rounded-xl w-full md:w-auto text-center">{t('explore')}</Link>
            <Link to="https://mersal.top" className="border-3 border-primary font-semibold p-3 px-8 text-xl md:text-2xl text-primary rounded-xl w-full md:w-auto text-center">{t('contact')}</Link>
          </div>
        </div>
        <div className="image w-full md:max-w-[1000px]">
          <img src="/images/Mr Ahmed Hero.png" alt="image" className="w-full" />
        </div>
      </div>
    </section>  
    <section className="about py-16">
      <h1 className="title text-primary text-center text-3xl md:text-5xl mb-8">{t('aboutTitle')}</h1>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center gap-8">
        <div className="image w-full md:w-auto">
          <img className="rounded-4xl w-full md:w-[600px] rounded-tl-sm border-primary border-5" src="/images/about-image.jpg" alt="image" />
        </div>
        <div className="max-w-[600px] w-full">
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary">{t('aboutHeading')}</h1>
          <p className="text-lg md:text-xl mt-2 font-semibold text-black-v2">{t('aboutDesc')}</p>
          <Link className="bg-yellow block w-fit mt-3 py-3 px-6 text-white rounded-md text-lg md:text-xl font-semibold" to="/founder">{t('founder')}</Link>
        </div>
      </div>
    </section>  
    <section className="services">
      <h1 className="title text-primary">{t('servicesTitle')}</h1>
      <div className="container mx-auto max-w-330 px-4 flex flex-wrap gap-6 justify-evenly items-center">
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تالتة" titleEn="Optimizing LinkedIn" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="HR Consalting " />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="Carer Coaching" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="CV Writing" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="Training" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="Public corporate training" />
      </div>
      </section>  
      {/* Feedback Section */}
      <Feedback/>
      <ClientsSection/>
      <FAQ/>
   
    </>
  )
}

export default Home
