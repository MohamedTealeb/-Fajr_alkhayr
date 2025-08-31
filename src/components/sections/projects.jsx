'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const projectsData = [
  {
    title: "بئر كهربي (سيراميك)",
    description: [
      "بمضخة كهربائية+مضخة يدوية +حنفيتين",
      "مدة الاستخدام 20 سنة",
      "العمق 15-20 متر",
      "ينتفع به من 6 لـ 10 عائلات يومياً على الأقل"
    ],
    image: "/birkasr.webp",
    priceAED: 1660,
    priceUSD: 450,
    modelGlb: "/model/birkasr.glb",
    orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/byr-khrbyy-syrmyk"
    
  },
  {
    title: "بئر كهربي",
    description: [
      "بمضخة كهربائية+مضخة يدوية +حنفيتين",
      "مدة الاستخدام 20 سنة",
      "العمق 15-20 متر",
      "ينتفع به من 6 لـ 10 عائلات يومياً على الأقل"
    ],
    image: "/birka_7_11zon.webp",
    priceAED: 1450,
    priceUSD: 390,
    modelGlb: "/model/birka.glb",
    orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/byr-sthy-khrbyy-739635"
  },
  {
    title: "بئر سطحي",
    description: [
      "بمضخة يدوية",
      "مدة الاستخدام 15 سنة",
      "العمق 12-15 متر",
      "ينتفع به من 4 لـ 5 عائلات يومياً على الأقل"
    ],
    image: "/birst_8_11zon.webp",
    priceAED: 900,
    priceUSD: 240,
    modelGlb: "/model/birst.glb",
    orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/byr-sthy-bmdkh-ydwy-739632"
  },
  {
    title: "بئر ارتوازي مع مقوضاً (سيراميك)",
    description: [
      "يأتي مع مضخة كهربائية، خزان، 11 مقعد و11 حنفية",
      "مدة الاستدامة مدى الحياة بإذن الله",
      "حفر الي عمق 50-55 متر",
      "يوضع بجانب مسجد أو على باب قرية"
    ],
    image: "/motwada_9_11zon.webp",
    priceAED: 6250,
    priceUSD: 1700,
    modelGlb: "/model/motwada.glb",
    orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/mtwd-md-lhy-bjnb-msjd-w-mdrs"
  },
  {
    title: "بئر ارتوازي (سيراميك)",
    description: [
      "بمضخة كهربائية+مضخة يدوية+6حنفيات+خزان",
      "مدة الاستدامة مدى الحياة بإذن الله",
      "العمق 35-40 متر",
      "ينتفع به سكان القرية بالكامل"
    ],
    image: "/sarmek_10_11zon.webp",
    priceAED: 3125,
    priceUSD: 850,
    modelGlb: "/model/seramek.glb",
    orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/byr-rtwzy-md-lhy-739640"
  },
  {
    title: "بئر ارتوازي",
    description: [
      "بمضخة كهربائية+مضخة يدوية+3حنفيات+خزان",
      "مدة الاستدامة 30 سنة",
      "العمق 25-30 متر",
      "ينتفع به من 150 لـ 200 شخص يوميا"
    ],
    image: "/birirt_6_11zon.webp",
    priceAED: 1835,
    priceUSD: 500,
    modelGlb: "/model/birir.glb",
    orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/byr-bmdkhh-khrbyy-myq-bhnfytyn-wkhzn"
  },
];

const currencyOptions = [
  { label: "الدرهم - AE AED", value: "AED", symbol: "د.إ" },
  { label: "الدولار - US USD", value: "USD", symbol: "$" }
];

export default function ProjectsSection() {
  const [currency, setCurrency] = useState("AED");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalModel, setModalModel] = useState("");

  // تحميل سكريبت model-viewer مرة واحدة
  useEffect(() => {
    if (!window.customElements?.get('model-viewer')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, []);

  const openModal = (modelGlb) => {
    setModalModel(modelGlb);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // بيانات الأضاحي والعقائق
  const sacrifices = [
    {
      title: "عجل (بقرة)",
      image: "/model/caw.webp",
      description: [
        "ابقار تذبح وتوزع",
        "تبدأ الاوزان من 80 كيلو",
        "لحم صافي بعد السلخ والتقطيع"
      ],
      priceAED: 1850,
      priceUSD: 500,
      orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/bqr-jl"
    },
    {
      title: "خروف",
      image: "/model/sheep.webp",
      description: [
        "خواريف تذبح وتوزع في العيد",
        "توزع على المحتاجين حسب المنطقة",
        "لحم صافي من 10-15 كيلو"
      ],
      priceAED: 735,
      priceUSD: 200,
      orderUrl: "https://fajer-alkhair-us.zbooni.com/ar/products/khrwf-qyqh"
    }
  ];

  // زر موحد أسفل كل كرت (ستايل عصري)
  const cardButtonStyle = {
    background: "linear-gradient(135deg, #B65B1B 0%, #9d4c17 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "14px 24px",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
    margin: "16px 0 0 0",
    fontWeight: "700",
    letterSpacing: "0.5px",
    boxShadow: "0 4px 20px rgba(182, 91, 27, 0.3)",
    transition: "all 0.3s ease",
    outline: "none",
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    minHeight: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    touchAction: "manipulation"
  };

  const viewModelButtonStyle = {
    background: "linear-gradient(135deg, #B65B1B 0%, #9d4c17 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 2px 10px rgba(182, 91, 27, 0.3)",
    transition: "all 0.3s ease",
    outline: "none",
    marginBottom: "16px",
    touchAction: "manipulation"
  };

  return (
    <>
      {/* قسم المشاريع (الآبار) */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ color: "#a05a13", fontWeight: 700, fontSize: 40 }}>الابار</h2>
          <div style={{ margin: "16px auto", display: "inline-block" }}>
            <select
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              style={{ padding: 8, borderRadius: 8, fontSize: 16 }}
            >
              <option value="AED">الدرهم - AE AED</option>
              <option value="USD">الدولار - US USD</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto"
          }}
        >
          {projectsData.map((proj, idx) => (
            <div key={idx} style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px #0001",
              width: 340,
              minHeight: 540,
              padding: 24,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ width: "100%" }}>
                <img src={proj.image} alt={proj.title} style={{ width: "100%", height: 200, objectFit: "contain", marginBottom: 16 }} />
                <button
                  style={viewModelButtonStyle}
                  onClick={() => openModal(proj.modelGlb)}
                >
                  عرض النموذج
                </button>
                <h3 style={{ color: "#e67c1c", fontWeight: 700, fontSize: 28, minHeight: 40, margin: 0 }}>{proj.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0 0", color: "#444", fontSize: 18, textAlign: "right", minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {proj.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
              <div style={{ width: "100%" }}>
                <div style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "16px 0 12px 0" }}>
                  التكلفة: {currency === "AED" ? `${proj.priceAED} درهم إماراتي` : `$${proj.priceUSD} دولار`}
                </div>
                <button style={cardButtonStyle} onClick={() => window.open(proj.orderUrl, '_blank')}>اطلب الآن</button>
              </div>
            </div>
          ))}
        </div>
        {/* مودال عرض النموذج ثلاثي الأبعاد ... (نفس الكود السابق) */}
        {modalOpen && (
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#0008", zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, minWidth: "60vw", minHeight: "60vh", width: "90vw", height: "90vh", position: "relative", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <button onClick={closeModal} style={{ position: "absolute", top: 12, left: 12, background: "#e67c1c", color: "#fff", border: 0, borderRadius: "50%", width: 32, height: 32, fontSize: 20, cursor: "pointer", zIndex: 2 }}>×</button>
              <model-viewer
                src={modalModel}
                alt="نموذج ثلاثي الأبعاد"
                auto-rotate
                camera-controls
                ar
                style={{ width: "80vw", height: "80vh", maxWidth: "100%", maxHeight: "100%" }}
                loading="eager"
                ar-status="not-presenting"
              ></model-viewer>
            </div>
          </div>
        )}
      </section>

      {/* قسم الأضاحي والعقائق */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ color: "#6d3b13", fontWeight: 700, fontSize: 48, marginBottom: 8 }}>الأضاحي والعقائق</h2>
          <div style={{ margin: "0 auto 32px auto", width: 48 }}>
            <Image src="/model/shap-logo.png" width={48} height={48} alt="زخرفة" />
          </div>
          
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {sacrifices.map((item, idx) => (
            <div key={idx} style={{
              background: "#fcf8f3",
              borderRadius: 24,
              boxShadow: "0 2px 12px #0001",
              width: 400,
              padding: 32,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <Image src={item.image} width={300} height={220} alt={item.title} style={{ objectFit: "contain", marginBottom: 16 }} />
              <h3 style={{ color: "#a05a13", fontWeight: 700, fontSize: 36, margin: 0 }}>{item.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0 0", color: "#444", fontSize: 20, textAlign: "center" }}>
                {item.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="mt-3" style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "16px 0 0 0" }}>
                التكلفة: {currency === "AED" ? `${item.priceAED} درهم إماراتي` : `$${item.priceUSD} دولار`}
              </div>
              <button style={cardButtonStyle} onClick={() => window.open(item.orderUrl, '_blank')}>اطلب الآن</button>
            </div>
          ))}
        </div>
      </section>

      {/* قسم توزيع المصاحف */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ color: "#6d3b13", fontWeight: 700, fontSize: 48, marginBottom: 8 }}>توزيع المصاحف</h2>
          <div style={{ margin: "0 auto 32px auto", width: 48 }}>
            <Image src="/model/shap-logo.png" width={48} height={48} alt="زخرفة" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[25, 50].map((count, idx) => {
            const priceAED = count === 25 ? 500 : 1000;
            const imgSrc = count === 25 ? "/model/25quran.webp" : "/model/50quran.webp";
            const orderUrl = count === 25 ? "https://fajer-alkhair-us.zbooni.com/ar/products/twzy-100-mshf-1011334" : "https://fajer-alkhair-us.zbooni.com/ar/products/twzy-50-mshf-1023726";
            return (
              <div key={count} style={{
                background: "#fcf8f3",
                borderRadius: 24,
                boxShadow: "0 2px 12px #0001",
                width: 400,
                padding: 32,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <div style={{ position: "relative", width: "100%", height: 260, marginBottom: 16, background: "#f7f3ec", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={imgSrc} width={300} height={360} alt="مصحف" style={{ zIndex: 2, marginBottom: 16 }} />
                  <div style={{ position: "absolute", top: 16, left: 32, color: "#e67c1c", fontWeight: 700, fontSize: 48 }}>{count}</div>
                  <div style={{ position: "absolute", top: 16, right: 32, color: "#a05a13", fontWeight: 700, fontSize: 32 }}>مصحف</div>
                </div>
                <h3 style={{ color: "#e67c1c", fontWeight: 700, fontSize: 28, margin: "0 0 12px 0" }}>توزيع {count} مصحف</h3>
                <div style={{ color: "#444", fontSize: 18, margin: "0 0 0 0" }}>
                  قال رسول الله ﷺ "خيركم من تعلم القرآن وعلمه" ومن هذا المنطلق نسعى إلى طباعة المصحف الشريف، وتوزيعه، في المدارس والمساجد ودور تحفيظ القرأن
                </div>
                <div style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "20px 0 0 0" }}>
                  التكلفة: {currency === "AED" ? `${priceAED} درهم إماراتي` : `${count === 25 ? '125' : '200'}$ دولار`}
                </div>
                <button style={cardButtonStyle} onClick={() => window.open(orderUrl, '_blank')}>اطلب الآن</button>
              </div>
            );
          })}
        </div>
      </section>

      {/* قسم السلال الغذائية */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ color: "#6d3b13", fontWeight: 700, fontSize: 48, marginBottom: 8 }}>السلال الغذائية</h2>
          <div style={{ margin: "0 auto 32px auto", width: 48 }}>
            <Image src="/model/shap-logo.png" width={48} height={48} alt="زخرفة" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            flexWrap: "wrap",
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto"
          }}
        >
          <div
            style={{
              background: "#fcf8f3",
              borderRadius: 24,
              boxShadow: "0 2px 12px #0001",
              width: 400,
              maxWidth: "95vw",
              padding: 32,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto"
            }}
          >
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Image src="/rate/food.webp" width={340} height={260} alt="سلة غذائية" style={{ objectFit: "contain", borderRadius: 16, marginBottom: 16, width: "100%", maxWidth: 340 }} />
            </div>
            <h3 style={{ color: "#e67c1c", fontWeight: 700, fontSize: 28, margin: "24px 0 12px 0" }}>سلة غذائية لـ6 أفراد</h3>
            <div style={{ color: "#444", fontSize: 18, margin: "0 0 0 0" }}>
              السلة الغذائية تكفي العائلة لمدة شهر تحتوي على العديد من الأصناف الغذائية والضرورية للعائلة
            </div>
            <div style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "20px 0 0 0" }}>
              التكلفة: {currency === "AED" ? `300 درهم إماراتي` : `75$ دولار`}
            </div>
            <button style={cardButtonStyle} onClick={() => window.open('https://fajer-alkhair-us.zbooni.com/ar/products/sl-gdhyy-1007385', '_blank')}>اطلب الآن</button>
          </div>
        </div>
        <style>{`
          /* تأثيرات الأزرار الرئيسية والثانوية */
          button[style*='#B65B1B'] {
            will-change: transform, box-shadow, background;
          }
          button[style*='#B65B1B']:hover {
            background: linear-gradient(135deg, #9d4c17 0%, #8a4215 100%) !important;
            box-shadow: 0 6px 25px rgba(182, 91, 27, 0.4) !important;
            transform: translateY(-2px) !important;
          }
          button[style*='#B65B1B']:active {
            transform: translateY(0px) scale(0.98) !important;
            box-shadow: 0 2px 10px rgba(182, 91, 27, 0.3) !important;
          }
          @media (max-width: 900px) {
            section > div[style*='display: flex'], section > div[style*='display: grid'] {
              gap: 18px !important;
              flex-direction: column !important;
              align-items: center !important;
              grid-template-columns: 1fr !important;
              overflow: hidden !important;
            }
            section > div[style*='display: flex'] > div, section > div[style*='display: grid'] > div {
              width: 98vw !important;
              max-width: 99vw !important;
              min-width: unset !important;
              padding: 12px !important;
              overflow: hidden !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
          }
          @media (max-width: 600px) {
            /* المشاريع (الآبار) grid: عمود واحد فقط */
            section > div[style*='grid-template-columns'] {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
              overflow: hidden !important;
            }
            section > div[style*='grid-template-columns'] > div {
              width: 98vw !important;
              max-width: 99vw !important;
              min-width: unset !important;
              margin: 0 auto 12px auto !important;
              padding: 10px 4px 14px 4px !important;
              border-radius: 18px !important;
              box-shadow: 0 2px 12px #0001 !important;
              text-align: center !important;
              display: block !important;
              overflow: hidden !important;
            }
            h2 { font-size: 20px !important; }
            h3 { font-size: 16px !important; }
            ul, div, p { font-size: 15px !important; }
            img, .next-image, .next-image img {
              max-width: 90vw !important;
              height: auto !important;
              margin: 0 auto 10px auto !important;
              display: block !important;
            }
            /* تحسين الأزرار للهواتف المحمولة */
            button[style*='#B65B1B'] {
              font-size: 16px !important;
              padding: 16px 20px !important;
              border-radius: 12px !important;
              margin: 16px auto 0 auto !important;
              min-height: 50px !important;
              touch-action: manipulation !important;
              width: 100% !important;
              display: block !important;
              text-align: center !important;
            }
            /* أزرار عرض النموذج على المحمول */
            button[style*='#B65B1B'][style*='14px'] {
              font-size: 14px !important;
              padding: 12px 18px !important;
              border-radius: 8px !important;
              margin-bottom: 16px !important;
              min-height: 44px !important;
              width: auto !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}

