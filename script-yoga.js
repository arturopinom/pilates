const { useState, useEffect, useRef } = React;

// Top Logo Bar Component
const TopLogoBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`logo-bar fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 ${!isScrolled ? 'hidden-bar' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="font-inter text-xs text-gray-600 tracking-wide hidden sm:inline">
                            Presentado por
                        </span>
                        <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                            <img 
                                src="https://www.energyclub.cl/img/cms/LEY_DEL_DEPORTE/LOGOLACUMBRE.png" 
                                alt="Fundación La Cumbre" 
                                className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                            />
                        </a>
                    </div>
                    <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="logo-container-item">
                        <img 
                            src="https://www.energyclub.cl/img/cms/LEY_DEL_DEPORTE/donaciones_logo.jpg" 
                            alt="Ley del Deporte" 
                            className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

// Icons Component
const Icons = {
    Activity: () => (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    Heart: () => (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    ),
    Sun: () => (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    Wind: () => (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
        </svg>
    ),
    Scale: () => (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
    ),
    Brain: () => (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    )
};

// Hero Section
const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleDiscoverBenefits = () => {
        const benefitsSection = document.querySelector('#beneficios');
        if (benefitsSection) {
            benefitsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* YouTube Video Background */}
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/v7AYKMP6rOE?autoplay=0&mute=0&loop=1&playlist=v7AYKMP6rOE&controls=1&showinfo=0&modestbranding=1&rel=0&vq=hd1080"
                    title="Yoga Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
            
            {/* Overlay */}
            <div className="hero-overlay absolute inset-0" />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className={`text-center text-white max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : ''}`}>
                    <h1 className="font-dm font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight uppercase leading-tight">
                        Yoga: encuentra tu<br />equilibrio interior
                    </h1>
                    <p className="font-inter text-lg sm:text-xl md:text-2xl mb-10 font-light tracking-wide opacity-95">
                        Armonía entre cuerpo, mente y espíritu
                    </p>
                    <button 
                        onClick={handleDiscoverBenefits}
                        className="btn-primary bg-gradient-to-r from-purple-900 to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:from-purple-800 hover:to-purple-600"
                    >
                        Descubre sus beneficios
                    </button>
                </div>
            </div>
        </section>
    );
};

// Mobile Video Section
const MobileVideoSection = () => {
    return (
        <section className="mobile-video-section py-8 bg-gray-50 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/v7AYKMP6rOE?rel=0&modestbranding=1&showinfo=0"
                        title="Video Yoga"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};

// What is Yoga Section
const WhatIsYoga = () => {
    return (
        <section id="que-es-yoga" className="py-20 md:py-32 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-dm font-bold text-4xl md:text-5xl text-gray-900 tracking-tight">
                            ¿Qué es el Yoga?
                        </h2>
                        <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed">
                            Una práctica milenaria que une cuerpo, mente y espíritu. El Yoga es mucho más que posturas: es un camino hacia el autoconocimiento, la paz interior y el bienestar integral.
                        </p>
                        <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed">
                            A través de la respiración consciente, meditación y asanas, el Yoga te ayuda a encontrar equilibrio, reducir el estrés y conectar con tu esencia.
                        </p>
                    </div>
                    <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop" 
                            alt="Persona meditando en posición de loto" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Benefits Section
const BenefitsSection = () => {
    const benefits = [
        {
            icon: <Icons.Heart />,
            title: "Paz Mental",
            description: "Reduce el estrés y la ansiedad a través de la meditación y respiración consciente"
        },
        {
            icon: <Icons.Activity />,
            title: "Flexibilidad",
            description: "Mejora tu rango de movimiento y previene lesiones con práctica regular"
        },
        {
            icon: <Icons.Sun />,
            title: "Energía Vital",
            description: "Aumenta tu vitalidad y energía con la circulación del prana"
        },
        {
            icon: <Icons.Brain />,
            title: "Claridad Mental",
            description: "Desarrolla concentración y presencia plena en cada momento"
        },
        {
            icon: <Icons.Scale />,
            title: "Equilibrio",
            description: "Encuentra armonía física, mental y emocional en tu vida diaria"
        },
        {
            icon: <Icons.Wind />,
            title: "Respiración",
            description: "Aprende técnicas de pranayama para calmar la mente y energizar el cuerpo"
        }
    ];

    useEffect(() => {
        if (window.innerWidth <= 768) {
            new Swiper('.benefits-swiper', {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }, []);

    return (
        <section id="beneficios" className="py-20 md:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-dm font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                        Beneficios del Yoga
                    </h2>
                    <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
                        Transforma tu vida con una práctica milenaria
                    </p>
                </div>
                
                {/* Desktop Grid */}
                <div className="desktop-grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="card-hover bg-white p-8 rounded-2xl shadow-lg group"
                        >
                            <div className="icon-container w-16 h-16 mb-6 text-purple-900 group-hover:text-orange-500">
                                {benefit.icon}
                            </div>
                            <h3 className="font-dm font-bold text-2xl text-gray-900 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="font-inter text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Swiper */}
                <div className="mobile-swiper">
                    <div className="swiper benefits-swiper">
                        <div className="swiper-wrapper">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                                        <div className="w-16 h-16 mb-6 text-purple-900">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="font-dm font-bold text-2xl text-gray-900 mb-3">
                                            {benefit.title}
                                        </h3>
                                        <p className="font-inter text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Yoga for Everyone
const YogaForEveryone = () => {
    const people = [
        {
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop",
            title: "Principiantes",
            alt: "Persona comenzando su práctica de Yoga"
        },
        {
            image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&h=800&fit=crop",
            title: "Todas las edades",
            alt: "Adultos mayores practicando Yoga"
        },
        {
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=800&fit=crop",
            title: "Recuperación",
            alt: "Yoga terapéutico y restaurativo"
        },
        {
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
            title: "Atletas",
            alt: "Deportistas complementando con Yoga"
        }
    ];

    useEffect(() => {
        if (window.innerWidth <= 768) {
            new Swiper('.everyone-swiper', {
                slidesPerView: 1.5,
                spaceBetween: 16,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }, []);

    return (
        <section className="py-20 md:py-32 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-dm font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                        Yoga para todos
                    </h2>
                    <p className="font-inter text-2xl gradient-text font-semibold">
                        Una práctica universal para cada persona
                    </p>
                </div>
                
                {/* Desktop Grid */}
                <div className="desktop-grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {people.map((person, index) => (
                        <div key={index} className="relative h-80 rounded-2xl overflow-hidden shadow-xl card-hover">
                            <img 
                                src={person.image} 
                                alt={person.alt} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <p className="text-white font-dm font-bold text-xl p-6">{person.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swiper */}
                <div className="mobile-swiper">
                    <div className="swiper everyone-swiper">
                        <div className="swiper-wrapper">
                            {people.map((person, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                        <img 
                                            src={person.image} 
                                            alt={person.alt} 
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                            <p className="text-white font-dm font-bold text-xl p-6">{person.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Types of Practice
const TypesOfPractice = () => {
    const types = [
        {
            title: "Hatha Yoga",
            description: "El estilo clásico y fundamental. Ideal para principiantes, enfoca en posturas básicas y respiración.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop"
        },
        {
            title: "Vinyasa Flow",
            description: "Secuencias dinámicas que sincronizan movimiento y respiración. Energizante y fluido.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
        },
        {
            title: "Yin Yoga",
            description: "Posturas pasivas mantenidas por varios minutos. Profundamente relajante y meditativo.",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop"
        },
        {
            title: "Ashtanga Yoga",
            description: "Serie estructurada de posturas desafiantes. Para practicantes que buscan disciplina e intensidad.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
        }
    ];

    useEffect(() => {
        if (window.innerWidth <= 768) {
            new Swiper('.types-swiper', {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }, []);

    return (
        <section className="py-20 md:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-dm font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                        Estilos de Yoga
                    </h2>
                    <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
                        Encuentra el camino que resuena con tu espíritu
                    </p>
                </div>
                
                {/* Desktop Grid */}
                <div className="desktop-grid md:grid-cols-2 gap-8">
                    {types.map((type, index) => (
                        <div 
                            key={index}
                            className="card-hover bg-white rounded-2xl overflow-hidden shadow-xl group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={type.image} 
                                    alt={type.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-dm font-bold text-2xl text-gray-900 mb-4">
                                    {type.title}
                                </h3>
                                <p className="font-inter text-gray-600 leading-relaxed">
                                    {type.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swiper */}
                <div className="mobile-swiper">
                    <div className="swiper types-swiper">
                        <div className="swiper-wrapper">
                            {types.map((type, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full">
                                        <div className="relative h-64 overflow-hidden">
                                            <img 
                                                src={type.image} 
                                                alt={type.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <h3 className="font-dm font-bold text-2xl text-gray-900 mb-4">
                                                {type.title}
                                            </h3>
                                            <p className="font-inter text-gray-600 leading-relaxed">
                                                {type.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Start Today Section
const StartToday = () => {
    const handleFindCenter = () => {
        window.open('https://www.google.com/maps/search/centros+de+yoga+cerca+de+mi/', '_blank');
    };

    const handleExploreMore = () => {
        const whatIsSection = document.querySelector('#que-es-yoga');
        if (whatIsSection) {
            whatIsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-32 md:py-40 overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&h=1080&fit=crop" 
                    alt="Persona meditando al amanecer" 
                    className="w-full h-full object-cover"
                />
                <div className="hero-overlay absolute inset-0" />
            </div>
            
            <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="font-dm font-extrabold text-4xl md:text-6xl text-white mb-8 tracking-tight">
                    Respira. Medita.<br />Encuentra tu paz.
                </h2>
                <p className="font-inter text-xl md:text-2xl text-white/90 mb-12 font-light">
                    Tu viaje hacia el bienestar comienza ahora
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={handleFindCenter}
                        className="btn-primary bg-white text-purple-900 px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-gray-100"
                    >
                        Encuentra un centro cercano
                    </button>
                    <button 
                        onClick={handleExploreMore}
                        className="btn-primary border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-white/10"
                    >
                        Explora más
                    </button>
                </div>
            </div>
        </section>
    );
};

// Footer
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Logos Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 pb-12 border-b border-gray-300">
                    <div className="text-center sm:text-right flex-1">
                        <p className="font-inter text-sm text-gray-600 mb-3 tracking-wide">
                            En colaboración con
                        </p>
                        <a href="http://www.fundacionlacumbre.cl/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img 
                                src="https://www.energyclub.cl/img/cms/LEY_DEL_DEPORTE/LOGOLACUMBRE.png" 
                                alt="Fundación La Cumbre" 
                                className="h-16 sm:h-20 w-auto object-contain mx-auto sm:ml-auto hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </div>
                    <div className="hidden sm:block w-px h-20 bg-gray-300"></div>
                    <div className="text-center sm:text-left flex-1">
                        <p className="font-inter text-sm text-gray-600 mb-3 tracking-wide">
                            Con el apoyo de
                        </p>
                        <a href="http://www.mindep.cl/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img 
                                src="https://www.energyclub.cl/img/cms/LEY_DEL_DEPORTE/donaciones_logo.jpg" 
                                alt="Ley del Deporte" 
                                className="h-16 sm:h-20 w-auto object-contain mx-auto sm:mr-auto hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </div>
                </div>
                
                <div className="text-center mb-8">
                    <h3 className="font-dm font-bold text-2xl text-gray-900 mb-2">
                        Yoga
                    </h3>
                    <p className="font-inter text-gray-600 tracking-wide">
                        Bienestar y equilibrio para todos
                    </p>
                </div>
                
                <div className="text-center text-gray-500 text-sm font-inter tracking-wide">
                    © 2025 Yoga. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

// Main App
const App = () => {
    return (
        <div className="min-h-screen">
            <TopLogoBar />
            <HeroSection />
            <MobileVideoSection />
            <WhatIsYoga />
            <BenefitsSection />
            <YogaForEveryone />
            <TypesOfPractice />
            <StartToday />
            <Footer />
        </div>
    );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
