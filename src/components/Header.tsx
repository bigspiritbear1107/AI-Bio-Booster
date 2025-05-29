export default function Header() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center px-6 py-4 
                    bg-gray-200/50 backdrop-blur-lg rounded-[15px] shadow-md"
        >
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="AI Bio Booster"
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900 italic">
                AI-Bio-Booster
              </span>
            </a>
          </div>

          {/* Language Selector
          <div className="flex items-center space-x-2 font-medium text-sm text-gray-800">
            <button className="hover:text-black">EN</button>
            <span className="text-gray-500">|</span>
            <button className="hover:text-black">DE</button>
          </div> */}
          {/* Section Navbar */}
          <div className="flex space-x-6 items-center text-sm font-medium">
            <a href="#home" className="text-black hover:underline">
              Home
            </a>
            <a href="#about" className="text-black hover:underline">
              About
            </a>
            <a href="#faq" className="text-black hover:underline">
              FAQ
            </a>
            <a href="#comments" className="text-black hover:underline">
              Comments
            </a>
            <a href="#analysis" className="text-black hover:underline">
              Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
