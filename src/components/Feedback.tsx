import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Feedback = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const [activeSlide, setActiveSlide] = useState(0)
    
    const feedbacks = [
        '/images/Feedback/1.png',
        '/images/Feedback/1.png',
        '/images/Feedback/1.png',
        '/images/Feedback/2.png',
        '/images/Feedback/1.png'
    ]

    const openPreview = (index: number) => {
        if (index === activeSlide) {
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
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        afterChange: (current: number) => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            }
        ]
    }

    return (
        <section className="feedback bg-[url('/images/Feedback-Background.jpg')] bg-cover bg-center min-h-screen py-16 flex flex-col justify-center items-center relative">
            <h1 className="title text-white text-3xl md:text-5xl font-bold mb-8">{t('feedbackTitle')}</h1>
            
            <div className="container mx-auto px-4 md:px-20">
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
                        </div>
                        <img 
                            src={feedbacks[currentImage]}
                            alt="preview"
                            className="max-w-[90%] max-h-[70vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="flex gap-4 mt-6">
                            <button 
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="bg-yellow text-white p-4 rounded-full hover:bg-yellow-v2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="bg-yellow text-white p-4 rounded-full hover:bg-yellow-v2"
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
                .slick-slide {
                    opacity: 0.5;
                    transform: scale(0.85);
                    transition: all 0.5s ease;
                }
                .slick-center {
                    opacity: 1;
                    transform: scale(1);
                }
                .slick-center img {
                    border: 4px solid #EFB61B ;
                }
                .slick-prev, .slick-next {
                    width: 50px;
                    height: 50px;
                    background: #EF8A1B;
                    border-radius: 50%;
                    z-index: 10;
                }
                .slick-prev:hover, .slick-next:hover {
                    background: #EFB61B;
                }
                .slick-prev {
                    left: 0;
                }
                .slick-next {
                    right: 0;
                }
            `}</style>
        </section>
    )
}

export default Feedback
