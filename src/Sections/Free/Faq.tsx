// src/components/FaqSection.tsx
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import content from '../../data/en.json'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>('what-is')
  const faqs = content.faqs

  return (
    <section id="faq" className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Answers to Your Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                {openFaq === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openFaq === faq.id && (
                <div className="px-4 pb-3">
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
