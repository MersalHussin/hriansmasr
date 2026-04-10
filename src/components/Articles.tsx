import { useTranslation } from 'react-i18next';

const Articles = () => {
  const { t } = useTranslation();
  const articles = [
    { id: 1, link: 'https://www.linkedin.com/posts/the-egypt-lens_egypt-theegyptlens-linkedin-activity-7375114051280003072-Mwvf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABcf5S4ByufKRGt6weH3J6BpFiFr4s1AuGM', format: 'jfif' },
    { id: 2, link: 'https://www.facebook.com/AhmedNagyEldokhmesy/posts/pfbid02ZhhZTE2Uf3HDYbcZcx7eqhZe4zHApT1SpKpynfAGNBcGHNPvTUcNXJHtcb6RSDLjl?rdid=Hn0NILMD2HgIwGO7#', format: 'webp' },
    { id: 3, link: 'https://www.facebook.com/groups/hregy/permalink/1413897325627811/?rdid=VZM0mFKKgSjGTBcx#', format: 'webp' },
    { id: 4, link: 'https://www.dostor.org/3248370?fbclid=IwY2xjawPeJspleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeh-ZT2pWrLQzLZ3wFCm2N_7EwILbEqtCNDYPhDbO2Z2ItjqQbAKIaaYCLaaM_aem_oFD16vD9ihe5BEvxEmlDDw', format: 'webp' },
    { id: 5, link: 'https://www.facebook.com/100079924998056/posts/346672534333636/', format: 'webp' },
    { id: 7, link: 'https://gulfmagazine.co/why-ahmed-nagi-el-dakhmesy-is-becoming/', format: 'webp' },
    { id: 8, link: 'https://startuphub.today/ar/%D8%AA%D8%AD%D9%84%D9%8A%D9%84%D8%A7%D8%AA/%D8%A3%D8%AD%D9%85%D8%AF-%D9%86%D8%A7%D8%AC%D9%8A-%D8%A7%D9%84%D8%AF%D8%AE%D9%85%D9%8A%D8%B3%D9%8A-%D8%B1%D9%8A%D8%A7%D8%AF%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B1%D8%AF-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9-%D9%8A%D9%85%D8%B2%D8%AC-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%B9%D8%A7%D8%B7%D9%81%D9%8A-%D9%88%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A-%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%87%D8%A8-%D9%88%D8%A7%D9%84%D9%81%D8%B1%D9%82-%D8%A7%D9%84%D9%86%D8%A7%D8%AC%D8%AD%D8%A9-657?fbclid=IwdGRzaAQ_f5pjbGNrBD9_jWV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHlaOGFe3cH9JLY--Fn0WR_YFHXXtdQ3Z423r2xfoaYgCOHNk5UiIdx1GCuUr_aem_MmiSgzsUoLssFzOcd6Ev1Q', format: 'webp' },
  ];

  return (
    <section className="articles py-16">
      <h1 className="title text-primary">{t('articlesTitle')}</h1>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">  
          {articles.map((article) => (
            <a key={article.id} href={article.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full group relative break-inside-avoid mb-6">
              <div className="relative overflow-hidden rounded-lg border-primary border-5 shadow-lg">
                <img 
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110" 
                  src={`/images/Article/${article.id}.${article.format}`} 
                  alt={`مقالة ${article.id}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-primary text-white px-6 py-3 rounded-full font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    {t('readArticle')}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
