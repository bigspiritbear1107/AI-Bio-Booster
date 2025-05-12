
export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto rounded-[80px] border border-gray-200 shadow-md px-8 py-10 flex flex-col md:flex-row items-center gap-10 bg-white/70 backdrop-blur">
        {/* Left: Avatar */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="AI Bio Booster"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow"
          />
        </div>

        {/* Right: Content */}
        <div className="text-left space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-semibold italic text-gray-900">
              Hi! I'm AI Bio Booster
            </h2>
            <span className="bg-purple-500/20 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              Expert <span role="img" aria-label="badge">🎖️</span>
            </span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed italic max-w-2xl">
            AI Social Booster analyzes your profile in seconds and shows you exactly how to
            gain more visibility, trust, and leads – with customized text suggestions and
            concrete optimization tips.
          </p>

          <p className="text-sm">Go to the social media to copy your bio</p>
          <div className="mt-10 flex gap-6 text-gray-700 text-xl">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icon/linkedin.png" className="w-6 h-6" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icon/instagram.jpg" className="w-6 h-6" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
