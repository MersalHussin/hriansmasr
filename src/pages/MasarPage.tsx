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
  X,
  Eye,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  PenTool,
  Target,
  Rocket
} from 'lucide-react';

const MasarPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [visibleProfiles, setVisibleProfiles] = useState(9);
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const totalProfiles = 46;
  const profilesArray = Array.from({ length: totalProfiles }, (_, i) => i + 1);
  const [randomHeroProfiles, setRandomHeroProfiles] = useState<number[]>([1, 2, 3, 4]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const shuffled = [...profilesArray].sort(() => 0.5 - Math.random());
    setRandomHeroProfiles(shuffled.slice(0, 4));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProfile === null) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
      }
      if (e.key === 'ArrowRight') {
        setSelectedProfile(prev => prev === totalProfiles ? 1 : prev! + 1);
      } else if (e.key === 'ArrowLeft') {
        setSelectedProfile(prev => prev === 1 ? totalProfiles : prev! - 1);
      } else if (e.key === 'Escape') {
        setSelectedProfile(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProfile, totalProfiles]);

  return (
    <div className="masar-page min-h-screen bg-white">
      <SEO 
        title={t('masarTitle')}
        description={t('masarDesc')}
      />
      
      {/* =========================================================================
          HERO SECTION (2-Column: Text on Right, Skeleton Profiles on Left)
          ========================================================================= */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden m-0 mb-0 !m-0 !mb-0 border-b border-gray-100">
        
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* RIGHT COLUMN: Hero Text */}
            <div className={`lg:col-span-7 flex flex-col ${isRtl ? 'lg:items-start text-start' : 'lg:items-start text-start'} items-center text-center lg:text-start`}>
              
              {/* Breadcrumb Navigation */}
              <nav className="flex mb-6" aria-label="Breadcrumb" dir={isRtl ? 'rtl' : 'ltr'}>
                <ol className={`inline-flex items-center space-x-1 ${isRtl ? 'space-x-reverse' : ''} md:space-x-3 bg-gray-50 border border-gray-200/80 py-1.5 px-5 rounded-full text-xs sm:text-sm`}>
                  <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center font-medium text-gray-500 hover:text-primary transition-colors">
                      {t('home')}
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <Link to="/services" className="font-medium text-gray-500 hover:text-primary transition-colors">
                        {t('services')}
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <span className="font-bold text-primary">{t('masarPackage')}</span>
                    </div>
                  </li>
                </ol>
              </nav>

              {/* Hero Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[58px] font-black text-gray-900 mb-5 leading-[1.18] tracking-tight">
                <span className="text-primary font-black">
                  {isRtl ? 'الواجهة المهنية للقيادات' : 'Executive Presence for Leaders'}
                </span>
              </h1>

              {/* Hero Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl font-medium leading-relaxed mb-8">
                {t('masarHeroDesc')}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-6">
                <a 
                  href="https://wa.me/201141778555?text=مسار" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_-5px_rgba(37,211,102,0.35)] hover:shadow-[0_15px_35px_-5px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base md:text-lg group cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>{t('masarHeroCtaPrimary')}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  )}
                </a>

                <a 
                  href="#profiles"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-primary font-bold px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base md:text-lg hover:-translate-y-0.5 shadow-sm cursor-pointer"
                >
                  <Eye className="w-5 h-5 text-primary" />
                  <span>{t('masarHeroCtaSecondary')}</span>
                </a>
              </div>

              {/* Trust Rating Line */}
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm font-medium">
                <span className="text-yellow text-sm">★★★★★</span>
                <span>{t('masarHeroTrust')}</span>
              </div>

            </div>

            {/* LEFT COLUMN: Skeleton Profile Showcase */}
            <div className="lg:col-span-5 relative w-full flex flex-col justify-center mt-10 lg:mt-0">
              
              <div className="relative w-full mx-auto sm:max-w-md lg:max-w-lg">
                {/* Background soft ambient halo */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 to-blue-400/15 rounded-3xl blur-3xl opacity-70 pointer-events-none"></div>

                {/* 2x2 Grid of 4 Skeleton Profiles */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5 relative z-10">
                  {randomHeroProfiles.map((num, idx) => (
                    <div 
                      key={num}
                      onClick={() => setSelectedProfile(num)}
                      className={`relative bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(28,84,179,0.15)] border border-gray-200/90 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer overflow-hidden group ${idx % 2 === 1 ? 'translate-y-6 sm:translate-y-8' : ''}`}
                    >
                      {/* Cover */}
                      <div className="relative aspect-[4/1] w-full overflow-hidden bg-gray-100">
                        <img 
                          src={`/images/Profiles/${num}_Cover.webp`} 
                          alt={`Cover ${num}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white font-bold text-[10px] sm:text-xs backdrop-blur-xs">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-yellow" />
                          <span className="hidden sm:inline">{t('masarPreviewClick')}</span>
                        </div>
                      </div>

                      {/* Profile Body with SKELETON Lines */}
                      <div className="px-3 sm:px-4 pb-4 sm:pb-5 pt-1" dir="ltr">
                        <div className="flex justify-between items-end w-full -mt-5 sm:-mt-6 mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[2px] border-white overflow-hidden bg-gray-100 shadow-sm relative z-10 shrink-0 group-hover:scale-105 transition-transform">
                            <img 
                              src={`/images/Profiles/${num}.webp`} 
                              alt={`Profile ${num}`} 
                              className="w-full h-full object-cover"
                              loading="eager"
                            />
                          </div>
                          <div className="flex items-center gap-1 bg-green-50 text-green-700 border border-green-200/80 px-2 py-0.5 rounded-full text-[9px] font-bold">
                            <CheckCircle2 className="w-2.5 h-2.5 text-green-600" />
                            <span>{isRtl ? 'موثق' : 'Verified'}</span>
                          </div>
                        </div>

                        {/* Pure Skeleton Placeholders (No Personal Text) */}
                        <div className="space-y-2 sm:space-y-2.5">
                          <div className="h-2.5 bg-gray-200 rounded-full w-2/3 group-hover:bg-primary/20 transition-colors duration-300"></div>
                          <div className="h-1.5 bg-gray-100 rounded-full w-5/6"></div>
                          <div className="h-1.5 bg-gray-100 rounded-full w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Gallery Link */}
                <div className="mt-12 sm:mt-16 text-center lg:text-start relative z-20">
                  <a 
                    href="#profiles"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-semibold text-xs sm:text-sm bg-white/80 backdrop-blur-sm hover:bg-white py-2 px-5 rounded-full transition-all border border-gray-200 shadow-sm hover:shadow-md"
                  >
                    <span>{t('masarHeroBrowseAll')}</span>
                    <span className="animate-bounce text-primary">↓</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          TARGET AUDIENCE SECTION (Directly follows White Hero, Clean, No Margin-Y)
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-gray-50 relative overflow-hidden m-0 mb-0 !m-0 !mb-0 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
              {isRtl ? 'لمن صُممت هذه الواجهات؟' : 'Who Are These Profiles Designed For?'}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto font-medium text-sm md:text-base">
              {isRtl ? 'برامج مسار مخصصة حصرياً للمستويات الإدارية العليا والقيادات الاستراتيجية' : 'Masar programs are tailored exclusively for senior executives and leaders'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle2 className="w-32 h-32 text-green-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('masarWhoTitle')}</h3>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium relative z-10">
                {t('masarWhoDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <XCircle className="w-32 h-32 text-red-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('masarNotWhoTitle')}</h3>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium relative z-10">
                {t('masarNotWhoDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT YOU GET SECTION (The 3 Core Deliverables)
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden m-0 mb-0 !m-0 !mb-0 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-5">
              {t('masarWhatGetTitle')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow to-yellow/40 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:-translate-y-2 transition-all duration-500">
                  <FileText className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">{t('masarGet1Title')}</h3>
                <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">{t('masarGet1Desc')}</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:-translate-y-2 transition-all duration-500">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{t('masarGet2Title')}</h3>
                <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">{t('masarGet2Desc')}</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow group-hover:-translate-y-2 transition-all duration-500">
                  <Settings className="w-8 h-8 md:w-10 md:h-10 text-yellow-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex flex-col gap-2 group-hover:text-yellow-600 transition-colors">
                  {t('masarGet3Title')}
                  <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full w-fit group-hover:bg-yellow/20 group-hover:text-yellow-800 transition-colors">{t('masarGet3Badge')}</span>
                </h3>
                <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">{t('masarGet3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEPS SECTION (Execution Process)
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-gray-50 relative overflow-hidden m-0 mb-0 !m-0 !mb-0 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-5">
              {t('masarStepsTitle')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/40 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-7 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1.5 before:bg-gradient-to-b before:from-primary/5 before:via-primary/20 before:to-primary/5 before:rounded-full">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-[4px] border-white bg-gradient-to-br from-primary to-blue-600 text-white shadow-[0_0_20px_rgba(28,84,179,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-500">
                <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3.5rem)] bg-white p-7 md:p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-10px_rgba(28,84,179,0.1)] hover:-translate-y-1.5 transition-all duration-500 group-hover:border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-gray-400 font-bold text-sm mb-4 border border-gray-100 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors">01</div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 relative z-10 group-hover:text-primary transition-colors">{t('masarStep1Title')}</h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed relative z-10">{t('masarStep1Desc')}</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-[4px] border-white bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-500">
                <PenTool className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3.5rem)] bg-white p-7 md:p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.1)] hover:-translate-y-1.5 transition-all duration-500 group-hover:border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-gray-400 font-bold text-sm mb-4 border border-gray-100 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 group-hover:border-indigo-500/20 transition-colors">02</div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 relative z-10 group-hover:text-indigo-600 transition-colors">{t('masarStep2Title')}</h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed relative z-10">{t('masarStep2Desc')}</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-[4px] border-white bg-gradient-to-br from-yellow-500 to-orange-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3.5rem)] bg-white p-7 md:p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.1)] hover:-translate-y-1.5 transition-all duration-500 group-hover:border-yellow-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-gray-400 font-bold text-sm mb-4 border border-gray-100 group-hover:bg-yellow-500/10 group-hover:text-yellow-600 group-hover:border-yellow-500/20 transition-colors">03</div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 relative z-10 group-hover:text-yellow-600 transition-colors">{t('masarStep3Title')}</h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed relative z-10">{t('masarStep3Desc')}</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-[4px] border-white bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-500">
                <Rocket className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3.5rem)] bg-white p-7 md:p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.1)] hover:-translate-y-1.5 transition-all duration-500 group-hover:border-green-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-gray-400 font-bold text-sm mb-4 border border-gray-100 group-hover:bg-green-500/10 group-hover:text-green-600 group-hover:border-green-500/20 transition-colors">04</div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 relative z-10 group-hover:text-green-600 transition-colors">{t('masarStep4Title')}</h4>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed relative z-10">{t('masarStep4Desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PROFILES PORTFOLIO SECTION (Full Archive with 46 Profiles)
          ========================================================================= */}
      <section id="profiles" className="py-20 md:py-24 bg-white relative overflow-hidden m-0 mb-0 !m-0 !mb-0 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>{isRtl ? 'أعمال ونماذج معتمدة' : 'Verified Portfolio'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-5">
              {t('masarProfilesTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
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
                  
                  {/* Hover indicator */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs backdrop-blur-xs">
                    <Eye className="w-4 h-4 text-yellow" />
                    <span>{t('masarPreviewClick')}</span>
                  </div>
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
            <div className="text-center mt-14 md:mt-16">
              <button 
                onClick={() => setVisibleProfiles(prev => Math.min(prev + 9, totalProfiles))}
                className="cursor-pointer bg-white border-2 border-primary text-primary font-bold text-lg py-3.5 px-10 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                {t('loadMore')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          PROOF & STATS SECTION (Quantitative Authority)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#0A1A3A] text-white relative overflow-hidden m-0 mb-0 !m-0 !mb-0 border-y border-white/5">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-md">{t('masarStatsTitle')}</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
              {t('masarStatsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[3rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow/20 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700 pointer-events-none"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-[0_20px_40px_rgba(234,179,8,0.4)] relative">
                  <div className="absolute inset-0 bg-white/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Briefcase className="w-10 h-10 md:w-14 md:h-14 text-white relative z-10" />
                </div>
                <h4 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-200 mb-6 drop-shadow-2xl tracking-tighter">{t('masarStats1Title')}</h4>
                <div className="w-12 h-1.5 bg-yellow/50 rounded-full mb-8 group-hover:w-32 transition-all duration-500"></div>
                <h5 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">{t('masarStats1Subtitle')}</h5>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">{t('masarStats1Desc')}</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[3rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700 pointer-events-none"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_20px_40px_rgba(59,130,246,0.4)] relative">
                  <div className="absolute inset-0 bg-white/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-white relative z-10" />
                </div>
                <h4 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-6 drop-shadow-2xl tracking-tighter">{t('masarStats2Title')}</h4>
                <div className="w-12 h-1.5 bg-blue-500/50 rounded-full mb-8 group-hover:w-32 transition-all duration-500"></div>
                <h5 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">{t('masarStats2Subtitle')}</h5>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">{t('masarStats2Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA SECTION (Seamlessly connects to Footer without gaps)
          ========================================================================= */}
      <section className="py-20 md:py-24 pb-28 md:pb-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden m-0 mb-0 !m-0 !mb-0">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-gradient-to-br from-[#12397d] via-primary to-slate-900 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden text-center text-white border border-white/10">
            {/* Decorative BG for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight drop-shadow-lg">
                {t('masarCtaTitle')}
              </h2>
              <p 
                className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('masarCtaDesc') }}
              ></p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a 
                  href="https://wa.me/201141778555?text=مسار" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-8 rounded-2xl font-bold text-lg md:text-xl hover:bg-[#1EBE5D] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] cursor-pointer"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>{t('masarCtaWa')}</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ahmed-nagy-el-dokhmesy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#0A66C2] text-white py-4 px-8 rounded-2xl font-bold text-lg md:text-xl hover:bg-[#004182] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(10,102,194,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(10,102,194,0.6)] cursor-pointer"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>{t('masarCtaLi')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROFILES LIGHTBOX MODAL
          ========================================================================= */}
      {selectedProfile !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={() => setSelectedProfile(null)}>
          <button 
            onClick={() => setSelectedProfile(null)}
            className="cursor-pointer absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2.5 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 z-20"
          >
            <X className="w-7 h-7" />
          </button>
          
          <div className="absolute inset-y-0 left-2 md:left-6 flex items-center z-10 pointer-events-none">
            <button 
              onClick={(e) => { 
                e.preventDefault();
                e.stopPropagation(); 
                setSelectedProfile(prev => prev === 1 ? totalProfiles : prev! - 1); 
              }}
              className="cursor-pointer bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all pointer-events-auto backdrop-blur-md shadow-lg"
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
              className="cursor-pointer bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all pointer-events-auto backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div 
            className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl mx-12 sm:mx-16 animate-on-scroll fade-in-up show"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/1] w-full bg-gray-100">
              <img 
                src={`/images/Profiles/${selectedProfile}_Cover.webp`} 
                alt={`Cover ${selectedProfile}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 sm:px-8 pb-8 sm:pb-10 relative" dir="ltr">
              <div className="flex justify-start w-full">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-[5px] sm:border-[6px] border-white overflow-hidden -mt-14 sm:-mt-18 md:-mt-20 mb-5 sm:mb-6 bg-gray-100 shadow-md relative z-10 shrink-0">
                  <img 
                    src={`/images/Profiles/${selectedProfile}.webp`} 
                    alt={`Profile ${selectedProfile}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3.5 mt-3">
                <div className="h-5 sm:h-6 bg-gray-200 rounded-full w-1/2"></div>
                <div className="h-3 sm:h-4 bg-gray-100 rounded-full w-3/4"></div>
                <div className="h-3 sm:h-4 bg-gray-100 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasarPage;
