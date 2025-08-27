"use client"
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const ContactUs = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (lottieContainer.current) {
      console.log('Loading Lottie animation...'); // Debug log
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/data.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
      });

      animation.addEventListener('complete', () => {
        console.log('Lottie animation loaded successfully');
      });

      animation.addEventListener('error', (error) => {
        console.error('Lottie animation error:', error);
      });

      return () => animation.destroy();
    }
  }, []);
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row-reverse items-start justify-center gap-0 bg-gradient-to-b from-gray-100 to-white py-4 px-2 sm:py-6 sm:px-4 md:py-10 md:px-8">
      {/* يسار: نموذج التواصل */}
      <div className="flex-1 max-w-xl bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 mx-auto md:mb-0 self-start w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-amber-900 mb-3 sm:mb-4 text-center leading-tight">نموذج الاتصال</h2>
        <p className="text-gray-600 text-center mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed px-1">اترك لنا رسالتك الآن وأخبرنا إذا كان هناك أي استفسار ونحن سوف نتواصل معك في أسرع وقت ممكن</p>
        <p className="text-center text-gray-500 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base px-1">أو بإمكانك مراسلتنا بالبريد: <a href="mailto:info@fajeralkhair.com" className="text-amber-700 font-bold break-all">info@fajeralkhair.com</a></p>
        <form className="space-y-3 sm:space-y-4 rtl">
          <div className="flex flex-col gap-3 sm:gap-2 sm:flex-row">
            <input type="text" placeholder="الاسم الاول" className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 sm:px-4 py-3 sm:py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base min-h-[44px]" />
            <input type="text" placeholder="اسم العائلة" className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 sm:px-4 py-3 sm:py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base min-h-[44px]" />
          </div>
          <input type="email" placeholder="البريد الالكتروني" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 sm:px-4 py-3 sm:py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base min-h-[44px]" />
          <textarea placeholder="محتوى الرسالة" rows={4} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 sm:px-4 py-3 sm:py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none text-sm sm:text-base min-h-[120px]" />
          <button type="submit" className="w-full bg-[#F37021] hover:bg-[#e05d0f] text-white font-bold text-base sm:text-lg rounded-full py-3 sm:py-4 mt-4 shadow-lg transition-all min-h-[48px] touch-manipulation">ارسل الرسالة</button>
        </form>
      </div>
      {/* خط فاصل رأسي */}
      <div className="hidden md:block h-[80%] border-r border-amber-100 mx-4 md:mx-8 self-start" />
      {/* يمين: معلومات التواصل */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-start mt-6 sm:mt-8 md:mt-0 self-start px-2 sm:px-4 w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-amber-900 mb-4 sm:mb-6 text-center md:text-right leading-tight">تواصل معنا</h2>
        <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
          <div ref={lottieContainer} className="w-32 h-32 sm:w-40 sm:h-40 md:w-36 md:h-36 lg:w-44 lg:h-44">
          </div>
        </div>
        <hr className="w-2/3 sm:w-1/2 md:w-2/3 my-4 sm:my-6 border-amber-200" />
        <div className="w-full max-w-sm sm:max-w-md md:max-w-xs mx-auto md:mx-0">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#F37021] mb-3 sm:mb-4 text-center md:text-right">معلومات الاتصال</h3>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg justify-center md:justify-start">
              <span className="text-lg sm:text-xl">📞</span>
              <span dir="ltr" className="select-all font-medium">00962781607560</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg justify-center md:justify-start">
              <span className="text-lg sm:text-xl">✉️</span>
              <a href="mailto:info@fajeralkhair.com" className="hover:underline font-medium break-all">info@fajeralkhair.com</a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg justify-center md:justify-start">
              <span className="text-lg sm:text-xl">🟢</span>
              <a href="https://wa.me/00962781607560" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">whatsapp</a>
            </div>
          </div>
          <a href="https://wa.me/00962781607560" target="_blank" rel="noopener noreferrer" className="block w-full mt-6 sm:mt-8 bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg rounded-full py-3 sm:py-4 text-center shadow-lg transition-all min-h-[48px] touch-manipulation">تواصل معنا عبر الواتساب</a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
