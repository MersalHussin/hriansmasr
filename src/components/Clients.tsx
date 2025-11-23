import React from 'react';
import { useTranslation } from 'react-i18next';

const ClientsSection: React.FC = () => {
  const { t } = useTranslation();
  const clients = [
    { id: 1, name: 'ITCAN', image: '/public/images/Clients/1.png' },
    { id: 2, name: 'ITCAN', image: '/public/images/Clients/2.png' },
    { id: 3, name: 'ITCAN', image: '/public/images/Clients/3.png' },
    { id: 4, name: 'ITCAN', image: '/public/images/Clients/4.png' },
    { id: 5, name: 'ITCAN', image: '/public/images/Clients/5.png' },
    { id: 6, name: 'ITCAN', image: '/public/images/Clients/6.png' },
    { id: 7, name: 'ITCAN', image: '/public/images/Clients/7.png' },
    { id: 8, name: 'ITCAN', image: '/public/images/Clients/8.png' },

  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className='title text-primary text-2xl'>{t('clientsTitle')}</h1>
        </div>

        {/* شبكة الشعارات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-auto max-h-30 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;