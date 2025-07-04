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
    image: "/sarmek_10_11zon.webp",
    priceAED: 1660,
    priceUSD: 450,
    modelGlb: "/model/birkasr.glb"
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
    modelGlb: "/model/birka.glb"
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
    modelGlb: "/model/birst.glb"
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
    modelGlb: "/model/motwada.glb"
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
    modelGlb: "/model/seramek.glb"
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
    modelGlb: "/model/birir.glb"
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
      priceUSD: 500
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
      priceUSD: 200
    }
  ];

  // زر موحد أسفل كل كرت (ستايل عصري)
  const cardButtonStyle = {
    background: "linear-gradient(90deg, #a05a13 0%, #e67c1c 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "0 0 24px 24px",
    padding: "12px 0",
    fontSize: 18,
    cursor: "pointer",
    width: "100%",
    margin: 0,
    fontWeight: 900,
    letterSpacing: 1,
    boxShadow: "0 4px 16px #0002",
    transition: "all 0.18s cubic-bezier(.4,2,.6,1)",
    outline: "none",
    position: "relative",
    zIndex: 2,
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
                  style={{ background: "#e67c1c", color: "#fff", border: 0, borderRadius: 8, padding: "8px 24px", fontSize: 16, cursor: "pointer", marginBottom: 16 }}
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
                  التكلفة: {currency === "AED" ? `${proj.priceAED} د.إ إماراتي` : `$${proj.priceUSD} دولار`}
                </div>
                <button style={cardButtonStyle}>اطلب الان</button>
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
              <div style={{ color: "#555", fontWeight: 700, fontSize: 22, margin: "16px 0 0 0" }}>
                التكلفة: {currency === "AED" ? `${item.priceAED} درهم إماراتي` : `$${item.priceUSD} دولار`}
              </div>
              <button style={cardButtonStyle}>اطلب الان</button>
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
                  التكلفة: {currency === "AED" ? `${priceAED} درهم إماراتي` : `${count === 25 ? '125' : '250'}$ دولار`}
                </div>
                <button style={cardButtonStyle}>اطلب الان</button>
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
            <button style={cardButtonStyle}>اطلب الان</button>
          </div>
        </div>
        <style>{`
          button[style*='linear-gradient'] {
            will-change: transform, box-shadow, background;
          }
          button[style*='linear-gradient']:hover {
            background: linear-gradient(90deg, #e67c1c 0%, #a05a13 100%);
            box-shadow: 0 8px 24px #0003;
            transform: translateY(-2px) scale(1.03);
          }
          button[style*='linear-gradient']:active {
            transform: scale(0.97);
            box-shadow: 0 2px 8px #0002;
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
            button[style*='linear-gradient'] {
              font-size: 16px !important;
              padding: 10px 0 !important;
              border-radius: 12px !important;
              margin-bottom: 0 !important;
              margin-top: 10px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}

