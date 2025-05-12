// src/components/CommentsSection.tsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import content from '../../data/en.json'

export default function CommentsSection() {
  const testimonials = content.testimonials
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="comments" className="py-20 px-4 bg-indigo-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          Kind Words from Users
        </h2>

        {/* 3-Aligned Cards */}
        <div className="flex justify-center items-center gap-6 overflow-hidden">
          {[...Array(3)].map((_, i) => {
            const index = (current - 1 + i + testimonials.length) % testimonials.length
            const isCenter = i === 1
            const card = testimonials[index]

            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out rounded-lg p-6 shadow-md text-center w-full max-w-xs
                  ${isCenter
                  ? 'bg-white scale-100 opacity-100 z-10'
                  : 'bg-white/30 scale-95 opacity-60 z-0'
                  }`}
              >
                <p className="text-gray-700 italic mb-4">{card.text}</p>
                <div className="font-medium">
                  <p className="text-gray-900">{card.name}</p>
                  <p className="text-gray-500 italic">{card.role}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white text-purple-700 hover:bg-purple-200 shadow transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full bg-white text-purple-700 hover:bg-purple-200 shadow transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
