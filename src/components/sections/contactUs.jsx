"use client"

const ContactUs = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row-reverse items-start justify-center gap-0 bg-gradient-to-b from-gray-100 to-white py-6 px-1 md:py-10 md:px-8">
      {/* يسار: نموذج التواصل */}
      <div className="flex-1 max-w-xl bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 mx-auto md:mb-0 self-start w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-900 mb-2 text-center">نموذج الاتصال</h2>
        <p className="text-gray-600 text-center mb-2 text-base sm:text-lg">اترك لنا رسالتك الآن وأخبرنا إذا كان هناك أي استفسار ونحن سوف نتواصل معك في أسرع وقت ممكن</p>
        <p className="text-center text-gray-500 mb-4 text-sm sm:text-base">أو بإمكانك مراسلتنا بالبريد: <a href="mailto:info@fajeralkhair.com" className="text-amber-700 font-bold">info@fajeralkhair.com</a></p>
        <form className="space-y-3 rtl">
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="text" placeholder="الاسم الاول" className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
            <input type="text" placeholder="اسم العائلة" className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
          </div>
          <input type="email" placeholder="البريد الالكتروني" className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" />
          <textarea placeholder="محتوى الرسالة" rows={5} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-right focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none text-sm" />
          <button type="submit" className="w-full bg-[#F37021] hover:bg-[#e05d0f] text-white font-bold text-base sm:text-lg rounded-full py-3 mt-2 shadow-lg transition-all">ارسل الرسالة</button>
        </form>
      </div>
      {/* خط فاصل رأسي */}
      <div className="hidden md:block h-[80%] border-r border-amber-100 mx-4 md:mx-8 self-start" />
      {/* يمين: معلومات التواصل */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-start mt-8 md:mt-0 self-start px-1 sm:px-2 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-900 mb-4 text-center md:text-right">تواصل معنا</h2>
        <img src="/download (2).png" alt="فجر الخير" className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain mx-auto md:mx-0 mb-4" />
        <hr className="w-2/3 my-4 border-amber-200" />
        <div className="w-full max-w-xs mx-auto md:mx-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#F37021] mb-2">معلومات الاتصال</h3>
          <div className="flex items-center gap-2 text-gray-700 mb-1 text-sm sm:text-base">
            <span className="text-lg">📞</span>
            <span dir="ltr" className="select-all">00962781607560</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 mb-1 text-sm sm:text-base">
            <span className="text-lg">✉️</span>
            <a href="mailto:info@fajeralkhair.com" className="hover:underline">info@fajeralkhair.com</a>
          </div>
          <div className="flex items-center gap-2 text-gray-700 mb-1 text-sm sm:text-base">
            <span className="text-lg">🟢</span>
            <a href="https://wa.me/00962781607560" target="_blank" rel="noopener noreferrer" className="hover:underline">whatsapp</a>
          </div>
          <a href="https://wa.me/00962781607560" target="_blank" rel="noopener noreferrer" className="block w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg rounded-full py-3 text-center shadow-lg transition-all">تواصل معنا عبر الواتساب</a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
