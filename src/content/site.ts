import type {
  FaqItem,
  Feature,
  FooterLinkGroup,
  HeroStat,
  NavigationLink,
  PricingPlan,
  Service,
  Testimonial,
} from "@/types/site";
import type { Language } from "@/types/language";

interface SiteInfo {
  name: string;
  description: string;
  url: string;
  phoneDisplay: string;
  phoneHref: string;
  address: string;
}

interface SiteContent {
  site: SiteInfo;
  navigationLinks: NavigationLink[];
  heroStats: HeroStat[];
  features: Feature[];
  services: Service[];
  testimonials: Testimonial[];
  pricingPlans: PricingPlan[];
  faqs: FaqItem[];
  footerGroups: FooterLinkGroup[];
}

interface SectionTextContent {
  navbar: {
    subtitle: string;
    viewServices: string;
    bookNow: string;
    call: string;
  };
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    call: string;
    explore: string;
    walkInChip: string;
    reserveChip: string;
    open: string;
    ratingLabel: string;
  };
  features: {
    heading: string;
    title: string;
    description: string;
    explore: string;
    photoLabels: [string, string, string];
  };
  services: {
    heading: string;
    title: string;
    description: string;
    why: string;
    bullets: [string, string, string];
    book: string;
    popular: string;
  };
  testimonials: {
    heading: string;
    title: string;
    reviews: string;
    callToBook: string;
    map: string;
    pin: string;
  };
  pricing: {
    heading: string;
    title: string;
    description: string;
    mostBooked: string;
    startingAt: string;
    book: string;
  };
  faq: {
    heading: string;
    title: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    desc: string;
    callNow: string;
    phoneMainLabel: string;
    openHours: string;
    callNowShort: string;
    bullets: [string, string, string];
  };
  footer: {
    desc: string;
    call: string;
    rights: string;
  };
}

const sharedSite: SiteInfo = {
  name: "Luxe & Layer Salon",
  description:
    "A premium salon landing page for bookings, hair services, and trusted local reviews.",
  url: "https://luxeandlayer.example",
  phoneDisplay: "(+66) 555-0147",
  phoneHref: "tel:+665550147",
  address: "128 Market Street, San Francisco, CA",
};

const content: Record<Language, SiteContent> = {
  en: {
    site: sharedSite,
    navigationLinks: [
      { label: "Features", href: "#features" },
      { label: "Services", href: "#services" },
      { label: "Google Reviews", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    heroStats: [
      { value: "4.9★", label: "average Google rating" },
      { value: "8+", label: "years styling experience" },
      { value: "1,200+", label: "happy salon clients" },
    ],
    features: [
      {
        icon: "spark",
        title: "Signature salon styling",
        description:
          "From precision cuts to modern color work, every service is tailored to your style and lifestyle.",
      },
      {
        icon: "workflow",
        title: "Easy appointment flow",
        description:
          "Call to book quickly, choose your preferred stylist, and enjoy a smooth in-salon experience.",
      },
      {
        icon: "shield",
        title: "Clean, comfortable studio",
        description:
          "A premium salon space with top-tier products and careful attention to hygiene and client comfort.",
      },
      {
        icon: "analytics",
        title: "Personalized consultation",
        description:
          "Every appointment begins with a consultation so your final look matches your goals exactly.",
      },
      {
        icon: "support",
        title: "Friendly local team",
        description:
          "Our stylists are known for clear communication, practical aftercare tips, and great results.",
      },
      {
        icon: "layers",
        title: "Premium finishing details",
        description:
          "Blowouts, gloss, and finishing products are chosen to help your style last beautifully.",
      },
    ],
    services: [
      {
        title: "Precision Haircut",
        description:
          "Custom haircut with wash, consultation, and polished styling tailored to your face shape.",
        highlights: ["Women & men cuts", "Wash & style", "Style consultation"],
      },
      {
        title: "Color & Balayage",
        description:
          "Dimensional color, root touch-up, or balayage with protective treatment for healthy shine.",
        highlights: ["Custom tones", "Balayage", "Gloss finish"],
      },
      {
        title: "Treatments & Blowout",
        description:
          "Hydration masks and smoothing treatments finished with a long-lasting blowout.",
        highlights: ["Deep repair", "Keratin-friendly", "Event-ready finish"],
      },
    ],
    testimonials: [
      {
        name: "Sofia Martin",
        role: "Google Reviewer",
        company: "Local Guide",
        quote:
          "Best salon experience I’ve had in years. The stylist listened carefully and the balayage turned out perfect.",
      },
      {
        name: "Rachel Kim",
        role: "Google Reviewer",
        company: "Verified Client",
        quote:
          "Clean studio, welcoming team, and amazing haircut. Booking by phone was quick and easy.",
      },
      {
        name: "Naomi Carter",
        role: "Google Reviewer",
        company: "Regular Client",
        quote:
          "I always leave feeling confident. Great attention to detail and my blowout lasted all weekend.",
      },
    ],
    pricingPlans: [
      {
        name: "Essential",
        price: "$65",
        description: "A clean cut and finish for everyday confidence.",
        features: [
          { label: "Consultation + wash" },
          { label: "Precision haircut" },
          { label: "Blow-dry finish" },
        ],
      },
      {
        name: "Signature",
        price: "$140",
        description: "Most booked package for color refresh and shine.",
        featured: true,
        features: [
          { label: "Everything in Essential" },
          { label: "Custom color or balayage" },
          { label: "Tone + gloss treatment" },
          { label: "Signature style finish" },
        ],
      },
      {
        name: "Luxury Care",
        price: "$220",
        description: "A complete transformation with restorative treatment.",
        features: [
          { label: "Everything in Signature" },
          { label: "Deep repair treatment" },
          { label: "Extended styling session" },
          { label: "Aftercare recommendation" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to book in advance?",
        answer:
          "Walk-ins are welcome when available, but we recommend calling ahead to reserve your preferred date and stylist.",
      },
      {
        question: "How long does a color appointment take?",
        answer:
          "Most color services take 2 to 3 hours depending on hair length, starting tone, and the target look.",
      },
      {
        question: "Which products do you use?",
        answer:
          "We use premium salon-grade products and can recommend options based on your hair type and maintenance goals.",
      },
      {
        question: "Can I call to discuss a style before booking?",
        answer:
          "Absolutely. Call us and we’ll guide you to the right service and estimated session time.",
      },
    ],
    footerGroups: [
      {
        title: "Salon",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Visit",
        links: [
          { label: "Services", href: "#services" },
          { label: "Google Reviews", href: "#testimonials" },
          { label: "Book / Call", href: "#cta" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Call Us", href: "#cta" },
          { label: "Location", href: "#testimonials" },
          { label: "Hours", href: "#faq" },
        ],
      },
    ],
  },
  th: {
    site: {
      ...sharedSite,
      description:
        "แลนดิ้งเพจสำหรับซาลอนระดับพรีเมียม รองรับการจองคิวออนไลน์ บริการทำผมครบวงจร และรีวิวจากลูกค้าจริง",
    },
    navigationLinks: [
      { label: "จุดเด่น", href: "#features" },
      { label: "บริการ", href: "#services" },
      { label: "รีวิว", href: "#testimonials" },
      { label: "แพ็กเกจ", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    heroStats: [
      { value: "4.9★", label: "คะแนนรีวิวบน Google" },
      { value: "8+", label: "ปีประสบการณ์ทีมช่าง" },
      { value: "1,200+", label: "ลูกค้าที่ไว้วางใจ" },
    ],
    features: [
      {
        icon: "spark",
        title: "Signature Hair Design",
        description:
          "ออกแบบทรงผมและสีผมให้เข้ากับลุค บุคลิก และสไตล์เฉพาะตัวของคุณ",
      },
      {
        icon: "workflow",
        title: "จองคิวง่าย รวดเร็ว",
        description:
          "เลือกวัน เวลา และช่างที่ต้องการได้สะดวก พร้อมเข้ารับบริการแบบไร้รอยต่อ",
      },
      {
        icon: "shield",
        title: "Premium Salon Experience",
        description:
          "บรรยากาศอบอุ่น สะอาด และเป็นส่วนตัว เพื่อประสบการณ์ที่ผ่อนคลายทุกครั้ง",
      },
      {
        icon: "analytics",
        title: "Hair Consultation",
        description:
          "วิเคราะห์สภาพเส้นผมและให้คำแนะนำก่อนทำ เพื่อผลลัพธ์ที่ตรงกับความต้องการ",
      },
      {
        icon: "support",
        title: "ทีมช่างมืออาชีพ",
        description:
          "พร้อมแนะนำการดูแลเส้นผมและเทคนิคจัดทรงให้สวยอยู่ได้นานหลังเข้ารับบริการ",
      },
      {
        icon: "layers",
        title: "เก็บดีเทลทุกขั้นตอน",
        description:
          "ปิดลุคด้วยการไดร์ จัดทรง และเลือกผลิตภัณฑ์ที่เหมาะกับเส้นผมของคุณโดยเฉพาะ",
      },
    ],
    services: [
      {
        title: "Haircut & Styling",
        description:
          "ตัดผมพร้อมสระและเซ็ตทรง โดยออกแบบให้เหมาะกับรูปหน้าและสไตล์ของคุณ",
        highlights: ["ตัดผมหญิง/ชาย", "สระ + ไดร์", "ปรึกษาทรงผม"],
      },
      {
        title: "Hair Color & Balayage",
        description:
          "ทำสี เติมโคน หรือบาลายาจ พร้อมดูแลเส้นผมให้เงางามและสุขภาพดี",
        highlights: ["Custom Color", "Balayage", "Gloss Treatment"],
      },
      {
        title: "Treatment & Blow Dry",
        description: "ฟื้นฟูผมเสีย ลดชี้ฟู พร้อมจัดทรงให้อยู่สวยตลอดวัน",
        highlights: ["บำรุงลึก", "ดูแลผมทำเคมี", "พร้อมออกงาน"],
      },
    ],
    testimonials: [
      {
        name: "Sofia Martin",
        role: "Google Reviewer",
        company: "Local Guide",
        quote:
          "หนึ่งในประสบการณ์ทำผมที่ดีที่สุด ช่างเข้าใจลุคที่ต้องการและบาลายาจออกมาสวยมาก",
      },
      {
        name: "Rachel Kim",
        role: "Verified Customer",
        company: "Google Review",
        quote: "ร้านสะอาด บริการดี ทีมงานเป็นกันเอง และจองคิวง่ายมาก",
      },
      {
        name: "Naomi Carter",
        role: "Regular Customer",
        company: "Member Client",
        quote:
          "ทุกครั้งที่ออกจากร้านคือมั่นใจมาก ช่างละเอียดและจัดทรงสวยติดทนนาน",
      },
    ],
    pricingPlans: [
      {
        name: "Essential",
        price: "990 บาท",
        description: "บริการตัดและจัดทรง สำหรับลุคดูดีในทุกวัน",
        features: [
          { label: "ปรึกษาทรง + สระผม" },
          { label: "ตัดผมโดยทีมช่างมืออาชีพ" },
          { label: "ไดร์และจัดทรง" },
        ],
      },
      {
        name: "Signature",
        price: "3,990 บาท",
        description: "แพ็กเกจยอดนิยมสำหรับรีเฟรชลุคและเพิ่มมิติให้เส้นผม",
        featured: true,
        features: [
          { label: "ทุกอย่างใน Essential" },
          { label: "ทำสีหรือบาลายาจ" },
          { label: "Gloss & Tone Design" },
          { label: "Signature Styling" },
        ],
      },
      {
        name: "Luxury Care",
        price: "8,990 บาท",
        description: "ดูแลครบจบทั้งลุค พร้อมฟื้นฟูเส้นผมแบบพรีเมียม",
        features: [
          { label: "ทุกอย่างใน Signature" },
          { label: "Deep Repair Treatment" },
          { label: "Full Styling Session" },
          { label: "คำแนะนำดูแลผมเฉพาะบุคคล" },
        ],
      },
    ],
    faqs: [
      {
        question: "ต้องจองคิวล่วงหน้าหรือไม่?",
        answer:
          "สามารถ Walk-in ได้ตามคิวว่าง แต่แนะนำให้จองล่วงหน้าเพื่อเลือกวัน เวลา และช่างที่ต้องการ",
      },
      {
        question: "บริการทำสีใช้เวลานานแค่ไหน?",
        answer:
          "โดยทั่วไปประมาณ 2–3 ชั่วโมง ขึ้นอยู่กับความยาวผม สีพื้นเดิม และลุคที่ต้องการ",
      },
      {
        question: "ใช้ผลิตภัณฑ์อะไรในการดูแลเส้นผม?",
        answer:
          "เราเลือกใช้ผลิตภัณฑ์ซาลอนเกรดพรีเมียมที่เหมาะกับสภาพเส้นผมของลูกค้าแต่ละคน",
      },
      {
        question: "สามารถปรึกษาทรงผมก่อนจองได้ไหม?",
        answer:
          "ได้เลย ทีมงานพร้อมให้คำแนะนำเกี่ยวกับทรงผม สีผม และบริการที่เหมาะกับคุณ",
      },
    ],
    footerGroups: [
      {
        title: "Salon",
        links: [
          { label: "จุดเด่น", href: "#features" },
          { label: "แพ็กเกจ", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "บริการ", href: "#services" },
          { label: "รีวิวลูกค้า", href: "#testimonials" },
          { label: "จองคิว", href: "#cta" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "ติดต่อเรา", href: "#cta" },
          { label: "ตำแหน่งร้าน", href: "#testimonials" },
          { label: "เวลาทำการ", href: "#faq" },
        ],
      },
    ],
  },
};

const sectionText: Record<Language, SectionTextContent> = {
  en: {
    navbar: {
      subtitle: "Premium hair salon",
      viewServices: "View services",
      bookNow: "Book now",
      call: "Call",
    },
    hero: {
      badge: "Premium salon experience in your neighborhood",
      heading: `Hair color, cuts, and styling crafted at ${sharedSite.name}.`,
      subtitle: "Modern looks, warm atmosphere, and easy booking by phone.",
      call: "Call",
      explore: "Explore salon services",
      walkInChip: "Walk-ins welcome when available",
      reserveChip: "Call to reserve your preferred time",
      open: "Open until 8:00 PM",
      ratingLabel: "Google reviews",
    },
    features: {
      heading: "Why Choose Us",
      title: "Salon quality, comfort, and care in every appointment.",
      description:
        "We combine trend-aware styling with practical maintenance advice so your look stays fresh between visits.",
      explore: "Explore",
      photoLabels: [
        "Salon chair setup",
        "Color and balayage service",
        "Final styled hair look",
      ],
    },
    services: {
      heading: "Services",
      title: "Professional salon services tailored to you.",
      description:
        "Whether you want a subtle refresh or a full transformation, our team helps you choose the right service confidently.",
      why: "Why clients return",
      bullets: [
        "Consultations focused on your face shape and routine",
        "Transparent recommendations and pricing",
        "Relaxed premium environment and attentive service",
      ],
      book: "Book your visit",
      popular: "Popular",
    },
    testimonials: {
      heading: "Google Reviews",
      title: "What clients are saying on Google Maps.",
      reviews: "★★★★☆ 4.9 · 312 Google reviews",
      callToBook: `Call to book: ${sharedSite.phoneDisplay}`,
      map: "Mock Google Map Preview",
      pin: `Pin: ${sharedSite.name} · Nearby parking available`,
    },
    pricing: {
      heading: "Pricing",
      title: "Salon packages for every style goal.",
      description:
        "Choose the service package that fits your needs and call us to reserve your preferred date and stylist.",
      mostBooked: "Most booked",
      startingAt: "starting at",
      book: "Book",
    },
    faq: {
      heading: "FAQ",
      title: "Questions teams usually ask before launching.",
    },
    cta: {
      eyebrow: "Ready for your next look?",
      title: "Book your salon visit in minutes.",
      desc: "Call us directly for availability, stylist matching, and service recommendations tailored to your hair goals.",
      callNow: `Call now: ${sharedSite.phoneDisplay}`,
      phoneMainLabel: "Book by phone",
      openHours: "Open daily 10:00 AM - 8:00 PM",
      callNowShort: "Call now",
      bullets: [
        "Quick phone booking and consultation",
        "Friendly stylists and premium products",
        "Comfortable studio in a central location",
      ],
    },
    footer: {
      desc: "Premium neighborhood salon for precision cuts, color, and styling. Call us anytime to reserve your next appointment.",
      call: `Call: ${sharedSite.phoneDisplay}`,
      rights: `© 2026 ${sharedSite.name}. All rights reserved.`,
    },
  },
  th: {
    navbar: {
      subtitle: "ซาลอนทำผมระดับพรีเมียม",
      viewServices: "ดูบริการ",
      bookNow: "จองเลย",
      call: "โทร",
    },
    hero: {
      badge: "ประสบการณ์ซาลอนพรีเมียมใกล้คุณ",
      heading: `${sharedSite.name}`,
      subtitle: "โฟโต้ลุคทันสมัยในบรรยากาศอบอุ่น จองคิวง่าย โทรได้ทันที",
      call: "โทร",
      explore: "สำรวจบริการซาลอน",
      walkInChip: "วอล์กอินได้เมื่อมีคิวว่าง",
      reserveChip: "โทรจองเวลาที่สะดวกได้ทันที",
      open: "เปิดถึง 20:00 น.",
      ratingLabel: "รีวิวบน Google",
    },
    features: {
      heading: "จุดเด่นของเรา",
      title: "คุณภาพระดับซาลอน ใส่ใจทุกขั้นตอน",
      description:
        "เราผสานเทรนด์ที่ทันสมัยเข้ากับคำแนะนำการดูแลผม เพื่อให้ลุคของคุณดูดีได้ยาวนาน",
      explore: "ดูเพิ่มเติม",
      photoLabels: [
        "โซนเก้าอี้ทำผม",
        "บริการทำสีและบาลายาจ",
        "ผลงานจัดทรงเสร็จสมบูรณ์",
      ],
    },
    services: {
      heading: "บริการ",
      title: "บริการทำผมระดับมืออาชีพที่ออกแบบเพื่อคุณ",
      description:
        "ไม่ว่าคุณต้องการปรับลุคเล็กน้อยหรือเปลี่ยนลุคเต็มรูปแบบ ทีมงานของเราช่วยแนะนำบริการที่เหมาะกับคุณ",
      why: "เหตุผลที่ลูกค้ากลับมาใช้บริการ",
      bullets: [
        "ปรึกษาทรงให้เหมาะกับรูปหน้าและการดูแลประจำวัน",
        "แนะนำบริการและราคาอย่างชัดเจน",
        "บรรยากาศผ่อนคลาย พร้อมการดูแลอย่างใส่ใจ",
      ],
      book: "จองคิวตอนนี้",
      popular: "ยอดนิยม",
    },
    testimonials: {
      heading: "รีวิว Google",
      title: "เสียงจากลูกค้าจริงบน Google Maps",
      reviews: "★★★★☆ 4.9 · รีวิวบน Google 312 รีวิว",
      callToBook: `โทรจองคิว: ${sharedSite.phoneDisplay}`,
      map: "ตัวอย่างแผนที่ Google (จำลอง)",
      pin: `หมุด: ${sharedSite.name} · มีที่จอดรถใกล้ร้าน`,
    },
    pricing: {
      heading: "ราคา",
      title: "แพ็กเกจบริการสำหรับทุกเป้าหมายทรงผม",
      description:
        "เลือกแพ็กเกจที่เหมาะกับคุณ แล้วโทรจองวันเวลาและช่างที่ต้องการ",
      mostBooked: "ยอดจองสูงสุด",
      startingAt: "เริ่มต้นที่",
      book: "จอง",
    },
    faq: {
      heading: "คำถามที่พบบ่อย",
      title: "คำถามที่ลูกค้ามักถามก่อนเข้ารับบริการ",
    },
    cta: {
      eyebrow: "พร้อมเปลี่ยนลุคแล้วหรือยัง",
      title: "จองคิวซาลอนของคุณได้ในไม่กี่นาที",
      desc: "โทรหาเราเพื่อเช็กคิว เลือกช่างที่เหมาะกับคุณ และรับคำแนะนำบริการที่ตรงกับความต้องการ",
      callNow: `โทรเลย: ${sharedSite.phoneDisplay}`,
      phoneMainLabel: "โทรจองคิว",
      openHours: "เปิดทุกวัน 10:00 - 20:00",
      callNowShort: "โทรตอนนี้",
      bullets: [
        "จองคิวและปรึกษาได้อย่างรวดเร็ว",
        "ทีมช่างเป็นกันเอง พร้อมผลิตภัณฑ์คุณภาพ",
        "ร้านบรรยากาศสบาย เดินทางสะดวก",
      ],
    },
    footer: {
      desc: "ซาลอนคุณภาพสำหรับตัดผม ทำสี และจัดทรง โทรหาเราเพื่อจองคิวได้ทุกวัน",
      call: `โทร: ${sharedSite.phoneDisplay}`,
      rights: `© 2026 ${sharedSite.name}. สงวนลิขสิทธิ์`,
    },
  },
};

export function getSiteContent(language: Language) {
  return content[language];
}

export function getSectionText(language: Language) {
  return sectionText[language];
}

export const site = content.en.site;
export const navigationLinks = content.en.navigationLinks;
export const heroStats = content.en.heroStats;
export const features = content.en.features;
export const services = content.en.services;
export const testimonials = content.en.testimonials;
export const pricingPlans = content.en.pricingPlans;
export const faqs = content.en.faqs;
export const footerGroups = content.en.footerGroups;
