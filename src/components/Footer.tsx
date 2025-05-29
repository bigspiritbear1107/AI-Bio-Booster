export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} AI Bio Booster. All rights reserved.
        </p>
        <p>
          Developed by{" "}
          <span className="text-purple-400 font-semibold">Mid@s</span>
        </p>
      </div>
    </footer>
  );
}
