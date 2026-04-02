import { useState, useEffect } from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ReelsFeedback = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1080)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const reelLinks = [
        'https://youtube.com/shorts/lJX0FePMx98?si=5B6PuQ4CXFscVng5',
        'https://youtube.com/shorts/m8GOn_ZM9SI?si=iADEjKn1dnMiXW1x',
        'https://youtube.com/shorts/qooZiNSqVVs?si=zb5-KNwrFYyj-4bn',
        'https://youtube.com/shorts/slP55g_6c2o?si=r9QE4Z8FuR-zGJH2',
        'https://youtube.com/shorts/LzkVEM3WF64?si=bDrR3eMilgWQbkoA',
        'https://youtube.com/shorts/JvoGgEZOY6k?si=aqqVlKuTuWxGMHc4',
        'https://youtube.com/shorts/ZiBSn_oeYFo?si=HkK2-bA5HWyNuYqD',
        'https://youtube.com/shorts/pV9KelsuF-s?si=BNWN_lrrDYgOsyFN',
        'https://youtube.com/shorts/C6TPjRkipsw?si=iYUqIMvRzM_nYMOf',
        'https://youtube.com/shorts/l8CGHiltk_w?si=__VD6ZUpKqcPl5XD',
        'https://youtube.com/shorts/Q1DoMLSjh3I?si=3J6fJMfQ4cOjMmGo',
        'https://youtube.com/shorts/ajixOOjAcxk?si=5r3-i61mYCbs6TDH',
        'https://youtube.com/shorts/r2qy5juh7no?si=0W8FXApkBPv3P_Wu',
        'https://youtube.com/shorts/x6loNLVKfR8?si=M45QYHVbXvDLyDNk',
    ]

    const reels = reelLinks
        .map((link) => {
            const match = link.match(/(?:youtube\.com\/shorts\/|youtu\.be\/)([A-Za-z0-9_-]{11})/)
            return match ? { id: match[1], link } : null
        })
        .filter((item): item is { id: string; link: string } => item !== null)

    const reelsSettings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
    }

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/Hero-Background.jpg')] bg-cover bg-center opacity-[0.03] grayscale pointer-events-none" />
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-var(--color-brand-dark)/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-20 relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-dark)]/20 bg-[var(--color-brand-dark)]/5 px-5 py-2 text-sm font-bold text-[var(--color-brand-dark)] mb-4 shadow-sm">
                        🎬 تجارب وقصص نجاح
                    </span>
                    <h2 className="text-[var(--color-brand-dark)] text-3xl md:text-5xl font-black mb-4">
                        Reels من طلاب الكورس
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-xl font-bold">
                        اتفرج على الفيديوهات من داخل الموقع واسحب يمين وشمال لاكتشاف باقي الريلز وتجارب الشباب خطوة بخطوة
                    </p>
                </div>

                <div className="reels-slider">
                    <Slider {...reelsSettings}>
                        {reels.map((reel, index) => (
                            <div key={reel.id} className="px-2 md:px-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-4 hover:border-[var(--color-brand-dark)]/30 hover:shadow-xl transition-all duration-300">
                                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm relative group">
                                        <div className="absolute inset-0 bg-[var(--color-brand-dark)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                                        <iframe
                                            className="w-full aspect-9/16 bg-black"
                                            src={`https://www.youtube.com/embed/${reel.id}?rel=0&playsinline=1`}
                                            title={`Student reel ${index + 1}`}
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="mt-5 flex justify-center">
                                        <a
                                            href={reel.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-black hover:bg-red-600 hover:text-white transition-all duration-300 group"
                                        >
                                            <i className="fa-brands fa-youtube text-lg group-hover:scale-110 transition-transform" />
                                            شاهد على يوتيوب
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style>{`
                .reels-slider .slick-slide {
                    opacity: 1;
                    transform: scale(1);
                }

                .reels-slider .slick-prev,
                .reels-slider .slick-next {
                    width: 50px;
                    height: 50px;
                    background: var(--color-brand-dark);
                    border-radius: 50%;
                    z-index: 10;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                    transition: all 0.3s ease;
                }

                .reels-slider .slick-prev:hover,
                .reels-slider .slick-next:hover {
                    background: var(--color-brand-light);
                    transform: scale(1.1);
                }

                .reels-slider .slick-prev { left: -15px; }
                .reels-slider .slick-next { right: -15px; }

                .reels-slider .slick-dots {
                    bottom: -50px;
                }

                .reels-slider .slick-dots li button:before {
                    color: var(--color-brand-dark);
                    opacity: 0.2;
                    font-size: 12px;
                }

                .reels-slider .slick-dots li.slick-active button:before {
                    color: var(--color-brand-dark);
                    opacity: 1;
                    font-size: 14px;
                }

                @media (max-width: 768px) {
                    .reels-slider .slick-prev, .reels-slider .slick-next {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default ReelsFeedback
