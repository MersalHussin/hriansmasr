import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  support?: string
  faqItems?: FAQItem[]
  contactButtonText?: string
  onContactClick?: () => void
}

export function FAQ({
  onContactClick = () => {},
}: FAQSectionProps) {
  const { t } = useTranslation()
  const [openId, setOpenId] = useState<string>("2")

  const faqItems = [
    { id: "1", question: t('faq1Q'), answer: t('faq1A') },
    { id: "2", question: t('faq2Q'), answer: t('faq2A') },
    { id: "3", question: t('faq3Q'), answer: t('faq3A') },
    { id: "4", question: t('faq4Q'), answer: t('faq4A') },
    { id: "5", question: t('faq5Q'), answer: t('faq5A') },
  ]

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id)
  }

  return (
    <section dir="rtl" className="faq-section w-full bg-white py-12 px-4 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Right Section - Title and CTA */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start lg:pl-4">
            <div className="w-full lg:w-auto text-center lg:text-right mb-8 lg:mb-12">
              <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-4 leading-tight">{t('faqTitle')}</h2>
              <p className="text-gray-600 text-xl md:text-2xl font-extrabold leading-relaxed whitespace-pre-line">{t('faqSubtitle')}</p>
              <p className="text-gray-600 text-xl md:text-2xl font-semibold leading-relaxed whitespace-pre-line">{t('faqSupport')}</p>
            </div>

            {/* Contact Button */}
            <Link to="/contact"
              onClick={onContactClick}
              className="cursor-pointer text-center w-full lg:w-100 bg-yellow hover:bg-yellow-v2 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg md:text-xl shadow-md hover:shadow-lg"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Left Section - FAQs */}
          <div className="order-2 lg:order-2">
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border  border-gray-200 rounded-lg bg-gray-50 overflow-hidden hover:border-gray transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full cursor-pointer px-6 py-4 flex items-center justify-between hover:bg-gray-100/80 transition-colors text-right"
                  >
                    <span className="text-gray-700 font-medium text-sm md:text-base">{item.question}</span>
                    <span className="shrink-0 mr-4">
                      {openId === item.id ? (
                        <i className="fas fa-minus text-gray-500 text-xl"></i>
                      ) : (
                        <i className="fas fa-plus text-gray-500 text-xl"></i>
                      )}
                    </span>
                  </button>

                  {/* Expanded Content */}
                  {openId === item.id && (
                    <div className="px-6 py-4 bg-white border-t border-gray-500/20 text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ