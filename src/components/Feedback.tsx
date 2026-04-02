import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Feedback = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const [activeSlide, setActiveSlide] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1080)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    
    const feedbacks = [
        '/images/Feedback/1.webp',
        '/images/Feedback/2.webp',
        '/images/Feedback/3.webp',
        '/images/Feedback/4.webp',
        '/images/Feedback/5.webp',
        '/images/Feedback/6.webp',
        '/images/Feedback/7.webp',
        '/images/Feedback/8.webp',
        '/images/Feedback/9.webp',
        '/images/Feedback/10.webp',
        '/images/Feedback/11.webp',
        '/images/Feedback/12.webp',
        '/images/Feedback/13.webp',
        '/images/Feedback/14.webp',
        '/images/Feedback/15.webp',
        '/images/Feedback/16.webp',
        '/images/Feedback/17.webp',
        '/images/Feedback/18.webp',
        '/images/Feedback/19.webp',
        '/images/Feedback/20.webp',
        '/images/Feedback/21.webp',
        '/images/Feedback/22.webp',
        '/images/Feedback/23.webp',
        '/images/Feedback/24.webp',
        '/images/Feedback/25.webp',
    ]

    const openPreview = (index: number) => {
        if (isMobile || index === activeSlide) {
            setCurrentImage(index)
            setIsOpen(true)
        }
    }

    const closePreview = () => {
        setIsOpen(false)
    }

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % feedbacks.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
    }

    const settings = {
        centerMode: !isMobile,
        centerPadding: '0',
        slidesToShow: isMobile ? 1 : 3,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        afterChange: (current: number) => setActiveSlide(current)
    }

  return (
        <section className="feedback bg-[linear-gradient(135deg,#0A2552_0%,#12397A_100%)] min-h-[90vh] py-20 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute -top-20 -left-14 h-72 w-72 rounded-full bg-yellow/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-14 h-72 w-72 rounded-full bg-yellow-v2/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full">
                <h1 className="title text-white text-3xl md:text-5xl font-bold mb-2">{t('feedbackTitle')}</h1>
                <p className="text-center text-white/85 text-base md:text-lg px-4 max-w-3xl mx-auto mb-10">
                    نتائج حقيقية من ناس طبقت وخدت خطوات قوية في السوق
                </p>

                <div className="container mx-auto px-4 md:px-20 feedback-slider">
                    <Slider {...settings}>
                        {feedbacks.map((feedback, index) => (
                            <div key={index} className="px-2 md:px-4">
                                <img
                                    className="w-full max-w-[400px] h-[300px] md:h-[400px] object-cover rounded-2xl mx-auto transition-all duration-300 cursor-pointer"
                                    src={feedback}
                                    alt="feedback"
                                    onClick={() => openPreview(index)}
                                />
                            </div>
                        ))}
                    </Slider>
                    <p className="text-center text-white/70 text-sm mt-5">اضغط على الصورة لعرضها بالحجم الكامل</p>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ backgroundColor: '#000000b8', backdropFilter: 'blur(10px)' }} onClick={closePreview}>
                    <button 
                        onClick={(e) => { e.stopPropagation(); closePreview(); }}
                        className="absolute top-4 right-4 text-white text-4xl hover:text-yellow"
                    >
                        &times;
                    </button>
                    
                    <div className="relative flex flex-col items-center">
                        <div className="text-white text-xl md:text-2xl font-bold mb-4">
                            {currentImage + 1} / {feedbacks.length}
                        </div>ژ
                        <img 
                            src={feedbacks[currentImage]}
                            alt="preview"
                            className="max-w-[90%] max-h-[70vh] object-contain rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="flex gap-4 mt-6">
                            <button 
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="bg-yellow text-white p-4 rounded-full hover:bg-yellow-v2 active:bg-yellow-v2 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="bg-yellow text-white p-4 rounded-full hover:bg-yellow-v2 active:bg-yellow-v2 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .feedback-slider .slick-slide {
                    opacity: 0.5;
                    transform: scale(0.85);
                    transition: all 0.5s ease;
                }
                .feedback-slider .slick-center {
                    opacity: 1;
                    transform: scale(1);
                }
                .feedback-slider .slick-center img {
                    border: 4px solid #EFB61B ;
                }

                .feedback-slider .slick-prev,
                .feedback-slider .slick-next {
                    width: 50px;
                    height: 50px;
                    background: #EF8A1B;
                    border-radius: 50%;
                    z-index: 10;
                }

                .feedback-slider .slick-prev:hover,
                .feedback-slider .slick-next:hover {
                    background: #EFB61B;
                }

                .feedback-slider .slick-prev {
                    left: 0;
                }

                .feedback-slider .slick-next {
                    right: 0;
                }

                @media (max-width: 1080px) {
                    .feedback-slider .slick-slide {
                        opacity: 1 !important;
                        transform: scale(1) !important;
                    }

                    .feedback-slider .slick-slide img {
                        border: 4px solid #EFB61B !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default Feedback
