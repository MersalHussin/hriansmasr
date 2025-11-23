import { useState } from "react"

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
  title = "الأسئلة الشائعة",
  subtitle = "ابحث عن إجابات للأسئلة المتكررة هنا.",
  support = "إذا كنت تحتاج مزيد من الدعم",
  faqItems = [
    {
      id: "1",
      question: "ما الخدمات التي تقدمها آسر لأرجية مصر؟",
      answer: "نقدم مجموعة شاملة من الخدمات في مجال التطوير والاستشارة للشركات.",
    },
    {
      id: "2",
      question: "كيف نساعدك الشركات على تحسين بنائها؟",
      answer:
        "نساعد الشركات على تحسين بنائها من خلال تحليل طبيعة عملياتك، وتصميم حلول مخصصة بخطوة بخطوة تحقيق نتائج فعّالة قابلة للقياس.",
    },
    {
      id: "3",
      question: "هل خدماتنا مناسبة للشركات الصغيرة والمتوسطة؟",
      answer: "نعم، خدماتنا مصممة خصيصاً للشركات من جميع الأحجام.",
    },
    {
      id: "4",
      question: "كم يستغرق تنفيذ خطة التطوير أو الاستشارة؟",
      answer: "يعتمد الوقت على طبيعة المشروع والمتطلبات المحددة.",
    },
    {
      id: "5",
      question: "كيف يمكن البدء معكم؟",
      answer: "يمكنك التواصل معنا اليوم لمناقشة احتياجاتك والبدء في رحلة النجاح.",
    },
  ],
  contactButtonText = "تواصل معنا",
  onContactClick = () => {},
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string>("2")

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id)
  }

  return (
    <section dir="rtl" className="w-full bg-white py-12 px-4 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Right Section - Title and CTA */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start lg:pl-4">
            <div className="w-full lg:w-auto text-center lg:text-right mb-8 lg:mb-12">
              <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-4 leading-tight">{title}</h2>
              <p className="text-gray-600 text-xl md:text-2xl font-extrabold leading-relaxed whitespace-pre-line">{subtitle}</p>
              <p className="text-gray-600 text-xl md:text-2xl font-semibold leading-relaxed whitespace-pre-line">{support}</p>
            </div>

            {/* Contact Button */}
            <button
              onClick={onContactClick}
              className="cursor-pointer w-full lg:w-100 bg-yellow hover:bg-yellow-v2 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg md:text-xl shadow-md hover:shadow-lg"
            >
              {contactButtonText}
            </button>
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