import ClientsSection from "../components/Clients"
import FAQ from "../components/FAQ"
import Feedback from "../components/Feedback"

function FounderPage() {
  return(
    <>
     <div className="relative w-full bg-primary text-white pt-12 pb-20 rounded-b-[180px]">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center flex-col">
        <p className="text-center text-white text-3xl font-bold mb-2">عن المؤسس</p>
        <img src="/images/LogoEldokhmesy.svg" className="text-center max-w-120  mt-3"></img>
      </div>
    </div>
    <section className="about-founder">
      <h1 className="title text-primary">عن المؤسس</h1>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-evenly items-center gap-8">
        <div className="max-w-[600px] w-full ">
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary">أحمد ناجي الدخميسي</h1>
          <p className="text-lg md:text-xl mt-2 font-semibold text-black-v2">مستشار وخبير موارد بشرية، بخبرة تمتد لأكثر من 16 عامًًا في تطوير الأفراد وبناء نظم الموارد البشرية الاحترافية. قمت بتأسيس شركة اتش ارجيه مصر ( HRins Egypt ) لتقديم حلول مبتكرة وعملية لتمكين الأفراد والمؤسسات من تحقيق أداء استثنائي ومستدام.مديرالموارد البشرية لشركة اودن للاستثمارات المالية من اهم شركات الخبرات في البورصة المصرية</p>
        </div>
        <div className="image w-full md:w-auto ">
          <img className="rounded-4xl w-full md:w-[600px] rounded-br-sm border-primary border-5" src="/images/about-image.jpg" alt="image" />
        </div>
      </div>
    </section>
    <section className="tv">
      <h1 className="title text-primary">اللقاءات التليفزونية</h1>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-evenly items-center gap-8">
        <div className="image w-full md:w-auto flex gap-5 flex-wrap justify-center ">
          <img className="w-full w-300px md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
          <img className="w-full md:w-[400px] rounded-md border-primary border-5" src="/public/images/TV/Rectangle 14.jpg" alt="image" />
        </div>
      </div>
    </section>
    <section className="h-screen">
      <h1 className="title text-primary">البرامج التدريبية</h1>
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-evenly items-center gap-8">
        <div className="image w-full md:w-auto flex flex-col gap-5">
          <img className="w-full w-300px md:w-full " src="/public/images/courses image.jpg" alt="image" />
          <h1 className="max-w-4xl text-black text-2xl font-medium">برامج تدريبية متميزة بالتعاون مع أبرز الجامعات المصرية مثل:

          <span className="text-primary font-semibold">
           جامعة الإسكندرية - جامعة مصر للعلوم والتكنولوجي - جامعة مدينة زويل - جامعة مايو - جامعة مصر المعلوماتية - وغيرها من الجامعات...
          </span>
          </h1>
          <div className="univertisys justify-center gap-5 items-center flex">
            <img className="w-25" src="/public/images/Universteies/1.png" alt="" />
            <img className="w-25" src="/public/images/Universteies/2.png" alt="" />
            <img className="w-25" src="/public/images/Universteies/3.png" alt="" />
            <img className="w-25" src="/public/images/Universteies/4.png" alt="" />
            <img className="w-25" src="/public/images/Universteies/5.png" alt="" />
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
