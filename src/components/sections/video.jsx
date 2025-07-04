'use client'
import { useRouter } from 'next/navigation'

const WaterAwarenessSection = () => {
  const router = useRouter()

  const handleProjectsClick = () => {
    router.push('/project')
  }

  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-[#fff7f0] to-[#f5eee6] flex flex-col items-center justify-center overflow-hidden shadow-lg">
      {/* دائرة خلف الفيديو/الصورة */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 w-[420px] h-[420px] bg-amber-100 rounded-full blur-2xl opacity-60 z-0" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* الفيديو أو الصورة */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-xl overflow-hidden border-4 border-amber-300 shadow-2xl bg-white flex items-center justify-center">
            {/* يمكنك استبدال الفيديو بصورة أو فيديو فعلي */}
            <video
              src="/videofajer.mp4"
              poster="/125.webp"
              controls
              loop
              className="w-full h-full object-cover"
              style={{ background: '#f5eee6' }}
              suppressHydrationWarning
            />
          </div>
        </div>
        {/* النص */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#B65B1B] mb-4 drop-shadow-lg">لماذا سقيا الماء؟</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-xl">
            قال الله تعالى: {"وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ"} الماء هو شريان الحياة وأساس استمرارها لكل الكائنات.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-4 max-w-xl">
            قال رسول الله ﷺ: <span className="font-bold text-[#B65B1B]">"أفضل الصدقة سقيا الماء"</span> (رواه أحمد وأبو داود وابن ماجه).<br/>
            ولهذا مشاريع حفر الآبار تساهم بشكل كبير في تحسين حياة المجتمعات المحرومة وتحدث تغييرًا دائمًا في حياتهم بصدقتك للماء، تُسهم في إنقاذ الأرواح، وتترك أثرًا دائمًا يمتد حتى بعد وفاتك
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl">
            تبرعك الآن يكون سببًا في توفير المياه النقية للمحتاجين ويترك أثرًا دائمًا.
          </p>
          <button 
            onClick={handleProjectsClick}
            className="bg-[#B65B1B] cursor-pointer hover:bg-amber-700 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all text-lg"
          >
            اطلع على المشاريع
          </button>
        </div>
      </div>
    </section>
  );
};

export default WaterAwarenessSection;
