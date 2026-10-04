import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  X 
} from 'lucide-react';

const MasarPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [visibleProfiles, setVisibleProfiles] = useState(9);
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const totalProfiles = 46;
  const profilesArray = Array.from({ length: totalProfiles }, (_, i) => i + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProfile === null) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        // Prevent default scrolling for arrows
        e.preventDefault();
      }
      if (e.key === 'ArrowRight') {
        // ArrowRight navigates to next profile
        setSelectedProfile(prev => prev === totalProfiles ? 1 : prev! + 1);
      } else if (e.key === 'ArrowLeft') {
        // ArrowLeft navigates to previous profile
        setSelectedProfile(prev => prev === 1 ? totalProfiles : prev! - 1);
      } else if (e.key === 'Escape') {
        setSelectedProfile(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProfile, totalProfiles]);

  return (
    <>
      <SEO 
        title={t('masarTitle')}
        description={t('masarDesc')}
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/75 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/Services/10.jpg')] bg-cover bg-center bg-fixed z-0"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-20 text-center">
          
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb" dir={isRtl ? 'rtl' : 'ltr'}>
            <ol className={`inline-flex items-center space-x-1 ${isRtl ? 'space-x-reverse' : ''} md:space-x-3 bg-white/10 backdrop-blur-md py-2 px-6 rounded-full border border-white/20 shadow-lg`}>
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-200 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/services" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                    {t('services')}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-bold text-yellow">{t('masarPackage')}</span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-2xl">
            {t('masarHeroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md mb-8">
            {t('masarHeroDesc')}
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle2 className="w-32 h-32 text-green-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('masarWhoTitle')}</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium relative z-10">
                {t('masarWhoDesc')}
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <XCircle className="w-32 h-32 text-red-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('masarNotWhoTitle')}</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium relative z-10">
                {t('masarNotWhoDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              {t('masarWhatGetTitle')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow to-yellow/40 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
              <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:-translate-y-2 transition-all duration-500">
                <FileText className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">{t('masarGet1Title')}</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">{t('masarGet1Desc')}</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:-translate-y-2 transition-all duration-500">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{t('masarGet2Title')}</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">{t('masarGet2Desc')}</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
              <div className="w-20 h-20 bg-yellow/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow group-hover:-translate-y-2 transition-all duration-500">
                <Settings className="w-10 h-10 text-yellow-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex flex-col gap-2 group-hover:text-yellow-600 transition-colors">
                {t('masarGet3Title')}
                <span className="text-sm font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-full w-fit group-hover:bg-yellow/20 group-hover:text-yellow-700 transition-colors">{t('masarGet3Badge')}</span>
              </h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">{t('masarGet3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              {t('masarStepsTitle')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/40 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">1</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{t('masarStep1Title')}</h4>
                <p className="text-gray-600 font-medium">{t('masarStep1Desc')}</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{t('masarStep2Title')}</h4>
                <p className="text-gray-600 font-medium">{t('masarStep2Desc')}</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{t('masarStep3Title')}</h4>
                <p className="text-gray-600 font-medium">{t('masarStep3Desc')}</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">4</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{t('masarStep4Title')}</h4>
                <p className="text-gray-600 font-medium">{t('masarStep4Desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Profiles Portfolio Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              {t('masarProfilesTitle')}
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {t('masarProfilesDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profilesArray.slice(0, visibleProfiles).map((num) => (
              <div 
                key={num} 
                onClick={() => setSelectedProfile(num)}
                className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group relative z-10 cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-[4/1] w-full overflow-hidden bg-gray-100">
                  <img 
                    src={`/images/Profiles/${num}_Cover.webp`} 
                    alt={`Cover ${num}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="px-6 pb-8 relative" dir="ltr">
                  <div className="flex justify-start w-full">
                    <div className="w-16 h-16 rounded-full border-[3px] border-white overflow-hidden -mt-8 mb-4 bg-gray-100 shadow-md relative z-10 shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={`/images/Profiles/${num}.webp`} 
                        alt={`Profile ${num}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 mt-2">
                    <div className="h-3 bg-gray-200 rounded-full w-2/3 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-4/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleProfiles < totalProfiles && (
            <div className="text-center mt-16">
              <button 
                onClick={() => setVisibleProfiles(prev => Math.min(prev + 9, totalProfiles))}
                className=" cursor-pointer bg-white border-2 border-primary text-primary font-bold text-lg py-4 px-10 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {t('loadMore')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{t('masarStatsTitle')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              {t('masarStatsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow to-yellow-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-300 mb-4">{t('masarStats1Title')}</h4>
                <h5 className="text-2xl font-bold mb-3">{t('masarStats1Subtitle')}</h5>
                <p className="text-gray-200 text-lg leading-relaxed">{t('masarStats1Desc')}</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-300 mb-4">{t('masarStats2Title')}</h4>
                <h5 className="text-2xl font-bold mb-3">{t('masarStats2Subtitle')}</h5>
                <p className="text-gray-200 text-lg leading-relaxed">{t('masarStats2Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-gradient-to-r from-primary to-gray-900 rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden text-center text-white">
            {/* Decorative BG for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight drop-shadow-lg">
                {t('masarCtaTitle')}
              </h2>
              <p 
                className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium"
                dangerouslySetInnerHTML={{ __html: t('masarCtaDesc') }}
              ></p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://wa.me/201097828846?text=مسار" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-8 rounded-2xl font-bold text-xl hover:bg-[#1EBE5D] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)]"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('masarCtaWa')}
                </a>
                <a 
                  href="https://www.linkedin.com/in/ahmed-nagy-el-dokhmesy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#0A66C2] text-white py-4 px-8 rounded-2xl font-bold text-xl hover:bg-[#004182] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(10,102,194,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(10,102,194,0.6)]"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  {t('masarCtaLi')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Profiles Lightbox Modal */}
      {selectedProfile !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setSelectedProfile(null)}>
          <button 
            onClick={() => setSelectedProfile(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="absolute inset-y-0 left-2 md:left-6 flex items-center z-10 pointer-events-none">
            <button 
              onClick={(e) => { 
                e.preventDefault();
                e.stopPropagation(); 
                setSelectedProfile(prev => prev === 1 ? totalProfiles : prev! - 1); 
              }}
              className="cursor-pointer bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all pointer-events-auto backdrop-blur-sm"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-2 md:right-6 flex items-center z-10 pointer-events-none">
            <button 
              onClick={(e) => { 
                e.preventDefault();
                e.stopPropagation(); 
                setSelectedProfile(prev => prev === totalProfiles ? 1 : prev! + 1); 
              }}
              className="cursor-pointer bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all pointer-events-auto backdrop-blur-sm"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div 
            className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl mx-16 animate-on-scroll fade-in-up show"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/1] w-full bg-gray-100">
              <img 
                src={`/images/Profiles/${selectedProfile}_Cover.webp`} 
                alt={`Cover ${selectedProfile}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-8 pb-10 relative" dir="ltr">
              <div className="flex justify-start w-full">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] border-white overflow-hidden -mt-16 md:-mt-20 mb-6 bg-gray-100 shadow-sm relative z-10 shrink-0">
                  <img 
                    src={`/images/Profiles/${selectedProfile}.webp`} 
                    alt={`Profile ${selectedProfile}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div className="h-5 md:h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 md:h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-3 md:h-4 bg-gray-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasarPage;
