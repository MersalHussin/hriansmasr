import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import ServiceCard from "../components/ServiceCard"
import Feedback from "../components/Feedback"

function Home() {
  const { t } = useTranslation()
  
  return (
    <>
    <section className="hero flex items-center bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center h-[calc(100vh-90px)]">
      <div className="container mx-auto px-4 flex justify-evenly items-center">
        <div className="data max-w-[600px]">
          <div className="text flex flex-col gap-5 justify-center items-center">
            <img src="/public/images/Auth.svg" alt="" />
            <h1 className="text-primary font-extrabold leading-24 text-7xl">{t('heroTitle')}</h1>
            <p className="text-black-v2 text-2xl font-medium">{t('heroDesc')}</p>
          </div>
          <div className="buttons flex gap-4 mt-6 justify-start items-center">
            <Link to="mersal.top" className="bg-primary font-semibold border-3  border-primary p-3 px-10 text-2xl text-white rounded-xl">{t('explore')}</Link>
            <Link to="https://mersal.top" className="border-3 border-primary font-semibold p-3 px-8 text-2xl text-primary rounded-xl">{t('contact')}</Link>
          </div>
        </div>
        <div className="image max-w-210">
          <img src="/images/Mr Ahmed Hero.png" alt="image" />
        </div>
      </div>
    </section>  
    <section className="about">
      <h1 className="title text-primary">من نحن</h1>
      <div className="container mx-auto px-4 flex justify-evenly items-center">
    <div className="image">
          <img className="rounded-4xl w-[600px] rounded-tl-sm border-primary border-5" src="/images/about-image.jpg" alt="image" />
        </div>
        <div className=" max-w-[600px]">
        <h1 className="text-3xl  font-extrabold text-primary">نحن في اتش أرجية مصر</h1>
        <p className="text-xl mt-2 font-semibold text-black-v2">نحن في H RG مصر نعمل على تمكين الشركات من النمو بثقة من خلال تقديم حلول احترافية تدعم التطوير، وترفع كفاءة العمل، وتبني أساس قوي للنجاح. نجمع بين الخبرة، والرؤية الواضحة، والفهم الحقيقي لاحتياجات السوق، لنقدّم خدمات تساعد الشركات على تحسين أدائها واتخاذ قرارات أفضل.</p>
        <Link className="bg-yellow block w-fit mt-3  py-3 px-6 text-white rounded-md text-xl font-semibold " to="/founder">عن المؤسس</Link>
        </div>
        
      </div>
    </section>  
    <section className="services">
      <h1 className="title text-primary"> خدماتنا</h1>
      <div className="container mx-auto max-w-330 px-4 flex flex-wrap gap-6 justify-evenly items-center">
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تالتة" titleEn="Optimizing LinkedIn" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="HR Consalting " />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="Carer Coaching" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="CV Writing" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="Training" />
        <ServiceCard image="/public/images/about-image.jpg" titleAr="خدمة تانية" titleEn="Public corporate training" />
      </div>
      </section>  
    <section className="feedback">
      <Feedback/>
      </section>  
   
    </>
  )
}

export default Home
