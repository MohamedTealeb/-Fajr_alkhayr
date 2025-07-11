'use client'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok, FaCcVisa, FaCcMastercard, FaCcApplePay, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

const socials = [
  { icon: <FaFacebookF />, link: 'https://www.facebook.com/fajer.al5er' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/fajer__alkhair' },
  { icon: <FaYoutube />, link: 'https://www.youtube.com/@fajer.alkhair' },
  { icon: <FaWhatsapp />, link: 'https://wa.me/962781607560' },
  { icon: <FaTiktok />, link: 'https://www.tiktok.com/@fajer.alkhair?_t=8k0sba26uUp&_r=1' },
];

const Footer = () => (
  <footer className="bg-[#88451e] text-white pt-12 pb-0 px-4 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* شعار واسم */}
      <div className="flex flex-col items-center md:items-end gap-2">
        <Image src="/logohedar.webp" alt="فجر الخير" width={120} height={80} className="mb-2" />
      </div>
      {/* سوشيال ميديا */}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl font-bold text-amber-400 mb-2">تجدونا على</h3>
        <div className="flex flex-row gap-4 text-2xl">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-all">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      {/* معلومات الاتصال */}
      <div className="flex flex-col items-center md:items-start gap-3">
        <h3 className="text-2xl font-bold text-amber-400 mb-2">معلومات الاتصال</h3>
        <a href="tel:+962781607560" className="flex items-center gap-2 hover:underline">
          <FaPhoneAlt className="text-lg" /> 00962781607560
        </a>
        <a href="tel:+971502919085" className="flex items-center gap-2 hover:underline">
          <FaPhoneAlt className="text-lg" /> 00971502919085
        </a>
        <a href="mailto:info@fajeralkhair.com" className="flex items-center gap-2 hover:underline">
          <FaEnvelope className="text-lg" /> info@fajeralkhair.com
        </a>
      </div>
    </div>
    {/* خط فاصل */}
    <div className="border-t border-amber-200/30 my-6"></div>
    {/* معلومات الدفع وحقوق النشر */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pb-4">
      <div className="flex items-center gap-2 text-2xl">
        <img src="/rate/visa-card.png" alt="Visa" className="bg-white rounded p-1 w-10 h-8 object-contain" />
        <img src="/rate/card.png" alt="Mastercard" className="bg-white rounded p-1 w-10 h-8 object-contain" />
        <img src="/rate/apple-pay.png" alt="Apple Pay" className="bg-white rounded p-1 w-10 h-8 object-contain" />
      </div>
      <div className="text-sm text-white/80">© 2024 جميع الحقوق محفوظة لفجر الخير</div>
    </div>
  </footer>
);

export default Footer;
