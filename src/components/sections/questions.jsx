"use client"
import { useState } from "react";

const faqs = [
  {
    q: "ما هي الاجراءات لطلب المشاريع؟",
    a: `بداية ممكن أن تختار مشروعك من خلال صفحة المشاريع <span class='bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold'>مشاريعنا</span>، من بعد الدفع يقوم أحد موظفينا بالتواصل معك عبر الواتس اب أو الايميل لأخذ منك المعلومات لتجهيز عقد تنفيذ المشروع وسند القبض والمعلومات التي تريد كتابتها على اللوحة التي توجد في جميع مراحل الحفر وتشاهد الحجر ثابت على البئر.`
  },
  {
    q: "ما هي الدولة الأكثر احتياجًا؟",
    a: "دول آسيا وأفريقيا وأندونيسيا (تحديدًا في القرى المسلمة)"
  },
  {
    q: "كم المدة التي يستغرقها حفر البئر؟",
    a: `تتراوح مدة الحفر من 10-30 يوم
وتختلف المدة لتنفيذ المشاريع حسب موقع المنطقة الأكثر احتياجاَ وقد تزيد مدة التنفيذ بناءً عليه`
  },
  {
    q: "ما هي الضمانات؟",
    a:`
    ـــ نرسل لكم عقد توكيل للمشروع + سند قبض بقيمة المبلغ
ـــ يتم توثيق مراحل الحفر بالصور والفيديو مع وجود لوحة بالأسماء المراد كتابتها على البئر بشكل يومي من بداية الحفر حتى الانتهاء من البئر
ـــ يتم عمل جولة تفقدية للابار كل 6 اشهر وتصويرهم للمتبرع لضمان استمرارية عمل البئر
ـــ نرسل لكم موقع البئر GPS
    
    `
  },
  {
    q: "هل يوجد صيانة؟",
    a: `هناك ضمان صيانة اول خمس سنوات يتم خلالها صيانة دورية كل ستة اشهر.`
  },
  {
    q: "هل أستطيع زيارة المشروع؟",
    a:`نعم ، يمكنك الذهاب إلى موقع المشروع في أي وقت. سنقدم لك العنوان ونرسل معك مندوبنا للوصول الى الموقع ويسعدنا مساعدتك في الوصول إليه.`
  },
];

const Questions = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="relative w-full min-h-screen py-8 px-2 md:px-0 flex flex-col items-center justify-start bg-[#F37021] overflow-x-hidden">
      {/* مربع أبيض كبير */}
     
      <div className="max-w-3xl w-full mx-auto rounded-2xl bg-white shadow-2xl p-8 mt-4 mb-10 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-amber-600 drop-shadow-lg tracking-tight">الأسئلة الشائعة</h1>
        <p className="text-lg text-gray-700 font-medium mb-2">
          مرحبًا بكم في قسم الأسئلة الشائعة! هنا نجمع لكم الإجابات على الأسئلة التي تتكرر كثيرًا وتثير الفضول لمعرفتها. سواء كنت تبحث عن معلومات حول مشاريعنا، أو تود معرفة المزيد عن إجراءات الحفر والضمانات، ستجد كل ما تحتاجه هنا. إذا كان لديك سؤال آخر لا تجد إجابته، لا تتردد في التواصل معنا.
        </p>
        <span className="text-amber-700/80 text-base font-semibold mt-2">نحرص على تقديم معلومات واضحة ودقيقة لتسهيل عليكم تجربة التبرع والمشاركة في مشاريعنا الإنسانية.</span>
      </div>
      <img src="/rate/fqa.png" alt="" />
      {/* Accordion */}
      <div className="max-w-2xl w-full mx-auto bg-[#F37021] rounded-2xl shadow-xl overflow-hidden divide-y divide-white/80 border border-white/30">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <button
              className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-lg text-white font-bold hover:bg-white/10 transition cursor-pointer rtl flex-row-reverse focus:outline-none`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              <span className="flex-1 text-right">{item.q}</span>
              <span className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/20">
                <img src="/rate/fqa.png" alt="FAQ" className="w-6 h-6 object-contain" />
              </span>
              <span className={`transition-transform duration-300 text-2xl ${openIdx === idx ? "rotate-180" : "rotate-0"}`}>⌃</span>
            </button>
            <div
              className={`px-8 pb-5 text-white text-base text-right leading-relaxed transition-all duration-300 ${openIdx === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              style={{ direction: "rtl" }}
            >
              <span dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;