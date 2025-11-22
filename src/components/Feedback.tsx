import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const Feedback = () => {
    const feedbacks = [
        '/images/Feedback/1.png',
        '/images/Feedback/2.png',
        '/images/Feedback/1.png',
        '/images/Feedback/2.png',
        '/images/Feedback/1.png'
    ]

    return (
        <section className="feedback bg-[url('/images/Feedback-Background.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center relative">
            <h1 className="title text-white text-5xl font-bold mb-12">أراء عملائنا</h1>
            
            <div className="container mx-auto px-20 relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    className="feedback-swiper"
                >
                    {feedbacks.map((feedback, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <img 
                                    className={`w-[400px] h-[400px] object-cover rounded-2xl transition-all duration-500 mx-auto ${
                                        isActive 
                                            ? 'border-4 border-yellow scale-100 opacity-100' 
                                            : 'scale-75 opacity-50'
                                    }`}
                                    src={feedback}
                                    alt="feedback"
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow text-white p-4 rounded-full hover:bg-yellow-v2 transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow text-white p-4 rounded-full hover:bg-yellow-v2 transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Feedback
