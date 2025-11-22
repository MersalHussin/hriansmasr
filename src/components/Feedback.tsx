import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Feedback = () => {
    const feedbacks = [
        '/images/Feedback/1.png',
        '/images/Feedback/2.png',
        '/images/Feedback/1.png',
        '/images/Feedback/2.png',
        '/images/Feedback/1.png'
    ]

    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <section className="feedback bg-[url('/images/Feedback-Background.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center relative">
            <h1 className="title text-white text-5xl font-bold ">أراء عملائنا</h1>
            
            <div className="container mx-auto px-20">
                <Slider {...settings}>
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="px-4">
                            <img 
                                className="w-[400px] h-[400px] object-cover rounded-2xl mx-auto transition-all duration-300"
                                src={feedback}
                                alt="feedback"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

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
