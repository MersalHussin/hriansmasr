import { t } from "i18next";

const Course = () => {
    const images = Array.from({ length: 16 }, (_, i) => i + 1);

    return (
        <div className="py-16">
            <h1 className="title text-primary text-3xl md:text-5xl font-bold mb-8 text-center">{t('gallery')}</h1>
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((num) => (
                    <div key={num} className="overflow-hidden rounded-lg shadow-lg border-5 border-primary">
                        <img 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                            src={`/images/Course/${num}.webp`} 
                            alt={`Course ${num}`} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Course;
