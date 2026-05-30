 

const Footer = () => {
  return (
 
    <footer className="mt-20 border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col items-center justify-center text-center gap-3">

          <p className="text-sm text-zinc-500">
            ساخته شده توسط
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2 text-sm">

            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-700">
               فرزاد خراسانی
              </span>

              <a
                href="mailto:farzadkh900@gmail.com"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                farzadkh900@gmail.com
              </a>
            </div>

            <span className="hidden md:block text-zinc-300">•</span>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-700">
               سیاوش مفیدی
              </span>

              <a
                href="mailto:siavashmofidi90@gmail.com"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                siavashmofidi90@gmail.com
              </a>
            </div>

          </div>

          <p className="text-xs text-zinc-400 mt-2">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است
          </p>

        </div>
      </div>
    </footer>
  );
  
}

export default Footer