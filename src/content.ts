import { company, hajjOperation } from "./data/company"
export type Lang = "en" | "ms"

const en = {
  nav: {
    home: "Home",
    services: "Services",
    howItWorks: "Cargo Process",
    about: "About",
    faq: "FAQ",
    cta: "Chat on WhatsApp",
    menu: "Menu",
    close: "Close menu",
    navigation: "Navigation",
    contact: "Contact",
    skip: "Skip to main content",
  },
  hero: {
    eyebrow: "Aman Cargo · International Logistics",
    headline: "Trusted Solutions\nBetween Saudi Arabia\n& Malaysia",
    copy: "Your belongings. Your business. Handled with care, from the first conversation to arrival.",
    secondaryCta: "Explore Services",
  },
  latest: {
    label: "Latest Info",
    shipment: {
      label: "Next Shipment",
      route: "Saudi Arabia → Malaysia",
      date: "15 October 2026",
      cta: "Check Availability",
    },
    offer: {
      label: "Current Offer",
      title: "Special Cargo Rate",
      route: "Saudi Arabia → Malaysia",
      rate: "From SAR 18 / kg",
      scope: "Personal & Commercial Cargo",
    },
  },
  trust: [
    {
      value: String(company.establishedYear),
      label: "Established in Malaysia",
    },
    { value: company.registrationNumber, label: "Company Registration" },
    { value: "SA ↔ MY", label: "International Cargo" },
    { value: "End-to-End", label: "Support & Coordination" },
  ],
  about: {
    eyebrow: "About Aman Tree",
    headline: "Built on Amanah. Driven by Care.",
    copy: `${company.name} grew from a first-hand understanding of the Malaysian community in Saudi Arabia. That connection shapes how we work: practical support, careful handling and a commitment to the people behind every shipment.`,
    tagline: "Dari Amanah Terbina, Untuk Masa Depan Bersama",
    missionLabel: "Our Mission",
    mission:
      "To deliver reliable, safe and customer-focused logistics, storage and modular solutions that simplify everyday needs.",
    visionLabel: "Our Vision",
    vision:
      "To become a trusted Malaysian provider of international logistics, storage and innovative modular solutions by 2030.",
  },
  services: {
    eyebrow: "Our Services",
    headline: "Cargo, and Everything Around It",
    featured: {
      label: "Our Flagship Service",
      title: "Saudi Arabia – Malaysia Cargo",
      desc: "Sea container shipping for personal belongings, furniture, commercial goods and Hajj or Umrah-related personal cargo.",
      audience:
        "Collection on arrival or optional final delivery in Malaysia, arranged to suit your shipment.",
      cta: "Discuss Your Cargo",
    },
    items: [
      {
        id: "moving",
        label: "Relocation",
        title: "Home & Office Relocation",
        desc: "Organised moves for homes and offices, covering packing, transport, loading, unloading and careful repositioning.",
        highlights: [
          "Packing materials",
          "Experienced moving crew",
          "Small & large moves",
        ],
        cta: "Ask About Relocation",
      },
      {
        id: "storage",
        label: "Self Storage",
        title: "Secure & Flexible Storage",
        desc: "Storage for personal belongings, business inventory, documents, furniture and equipment in a clean, organised environment.",
        highlights: [
          "CCTV monitoring",
          "Controlled access",
          "Flexible sizes & rental periods",
        ],
        cta: "Ask About Storage",
      },
      {
        id: "modular",
        label: "Modular Spaces",
        title: "Modular Container Solutions",
        desc: "Flexible container-based spaces for homes, homestays, cafés, commercial spaces, mini warehouses and temporary facilities.",
        highlights: [
          "Residential & hospitality",
          "Commercial & storage",
          "NGO & government facilities",
        ],
        cta: "Ask About Modular Spaces",
      },
    ],
  },
  why: {
    eyebrow: "Why Aman Tree",
    headline: "Care at Every Stage",
    storiesCta: "View Success Stories",
    evidence: {
      label: "Cargo in pictures",
      alts: [
        "A person opening the doors of a shipping container",
        "People handling cartons beside an open shipping container",
        "A person standing beside wrapped parcels at a doorway",
        "A person handling a wrapped carton at the back of a truck",
        "A truck carrying wrapped cargo at night",
        "People handling wrapped cartons inside a shipping container",
      ],
    },
    benefits: [
      {
        title: "Amanah in Practice",
        desc: "Responsibility, commitment and care for the community guide how we handle your cargo.",
      },
      {
        title: "Experience on the Ground",
        desc: "Hands-on cargo experience, including the Hajj operation featured below.",
      },
      {
        title: "Careful Coordination",
        desc: "Support with the documents and customs requirements that need attention along the way.",
      },
      {
        title: "A Conversation First",
        desc: "Discuss your items and destination with our team so the arrangements reflect what you need.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "The Cargo Process",
    headline: "From Collection to Delivery",
    steps: [
      {
        num: "01",
        title: "Collection",
        desc: "Arrange cargo collection, handling and temporary storage.",
      },
      {
        num: "02",
        title: "Documentation",
        desc: "Prepare the export and import documents for your shipment.",
      },
      {
        num: "03",
        title: "Shipping",
        desc: "Coordinate sea container shipping with the available schedule.",
      },
      {
        num: "04",
        title: "Customs",
        desc: "Coordinate customs requirements for your cargo.",
      },
      {
        num: "05",
        title: "Delivery",
        desc: "Arrange collection on arrival or optional final delivery in Malaysia.",
      },
    ],
  },
  route: {
    eyebrow: "Our Connection",
    headline: "Two Countries. One Connected Route.",
    copy: "Sea cargo connects collection in Saudi Arabia with arrival in Malaysia. Collection points and onward delivery are coordinated around your shipment; departure timing is confirmed with the team.",
    origin: "Saudi Arabia",
    destination: "Malaysia",
  },
  achievement: {
    eyebrow: `${hajjOperation.year} Hajj Cargo Operation`,
    headline: "Experience That Matters",
    imageAlt:
      "Illustration of stacked containers displaying Aman Cargo Services branding",
    note: "Figures reported in the company profile for the 2018 Hajj cargo operation. Approximate volumes relate to this project, not a delivery guarantee.",
    items: [
      {
        value: hajjOperation.pilgrims,
        unit: "",
        label: "Malaysian Hajj Pilgrims Served",
      },
      { value: hajjOperation.volume, unit: " CBM", label: "Cargo Managed" },
      { value: hajjOperation.containers, unit: " FT", label: "Containers" },
      {
        value: hajjOperation.months,
        unit: " month",
        label: "Operation Completed",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Before You Make Arrangements",
    items: [
      {
        q: "What cargo can I enquire about?",
        a: "Personal belongings, furniture, commercial cargo and Hajj or Umrah-related personal cargo. Share an item list and your destination so the team can confirm suitability and requirements.",
      },
      {
        q: "Can Aman Tree help with documentation and customs?",
        a: "The service includes export/import documentation and customs coordination. Requirements depend on your goods and destination.",
      },
      {
        q: "Is final delivery in Malaysia included?",
        a: "Final-mile delivery in Malaysia is optional. Confirm the delivery address and scope with the team when requesting a quotation.",
      },
      {
        q: "Can I store belongings for a short or long period?",
        a: "Self storage offers flexible unit sizes and rental periods for personal and business needs. Contact the team to check availability.",
      },
      {
        q: "What can modular containers be used for?",
        a: "Homes, homestays, cafés, commercial spaces, mini warehouses, storage and temporary facilities. Discuss your intended use and site requirements with the team.",
      },
      {
        q: "How do I request a quotation or shipment estimate?",
        a: "Message the team on WhatsApp with your service needs, item details, locations and preferred dates. Shipment schedules, costs and delivery estimates are confirmed for each enquiry.",
      },
    ],
  },
  finalCta: {
    headline: "Let’s Plan Your Next Move",
    copy: "Share your item details and destination. We’ll help you plan the next step.",
    cta: "Chat on WhatsApp",
  },
  footer: {
    malaysia: "Malaysia",
    saudi: "Saudi Arabia",
    rights: "All rights reserved.",
  },
  whatsappMsg: {
    availability:
      "Hi Aman Tree, please share the next Saudi Arabia to Malaysia departure and booking availability.",
    rate: "Hi Aman Tree, I would like today's cargo rate from Saudi Arabia to Malaysia.",
    general:
      "Hi Aman Tree, I would like to discuss your cargo, relocation, storage or modular services.",
    cargo:
      "Hi Aman Tree, I would like to enquire about Saudi Arabia–Malaysia cargo.",
    moving:
      "Hi Aman Tree, I would like to enquire about home or office relocation.",
    storage: "Hi Aman Tree, I would like to enquire about self storage.",
    modular:
      "Hi Aman Tree, I would like to enquire about modular container solutions.",
  },
}

const ms: typeof en = {
  nav: {
    home: "Utama",
    services: "Perkhidmatan",
    howItWorks: "Proses Kargo",
    about: "Tentang Kami",
    faq: "Soalan Lazim",
    cta: "Hubungi di WhatsApp",
    menu: "Menu",
    close: "Tutup menu",
    navigation: "Navigasi",
    contact: "Hubungi Kami",
    skip: "Langkau ke kandungan utama",
  },
  hero: {
    eyebrow: "Aman Cargo · Logistik Antarabangsa",
    headline: "Penyelesaian\nDipercayai\nAntara Arab Saudi\n& Malaysia",
    copy: "Barangan anda. Perniagaan anda. Diurus dengan teliti, dari perbincangan pertama hingga ketibaan.",
    secondaryCta: "Lihat Perkhidmatan",
  },
  latest: {
    label: "Info Terkini",
    shipment: {
      label: "Penghantaran Seterusnya",
      route: "Arab Saudi → Malaysia",
      date: "15 October 2026",
      cta: "Semak Ketersediaan",
    },
    offer: {
      label: "Tawaran Semasa",
      title: "Kadar Khas Kargo",
      route: "Arab Saudi → Malaysia",
      rate: "Dari SAR 18 / kg",
      scope: "Kargo Peribadi & Komersial",
    },
  },
  trust: [
    { value: String(company.establishedYear), label: "Ditubuhkan di Malaysia" },
    { value: company.registrationNumber, label: "Pendaftaran Syarikat" },
    { value: "SA ↔ MY", label: "Kargo Antarabangsa" },
    { value: "Awal hingga Akhir", label: "Sokongan & Penyelarasan" },
  ],
  about: {
    eyebrow: "Tentang Aman Tree",
    headline: "Berteraskan Amanah. Mengutamakan Anda.",
    copy: `${company.name} berkembang daripada pemahaman langsung tentang komuniti Malaysia di Arab Saudi. Hubungan ini membentuk cara kami bekerja: sokongan praktikal, pengendalian teliti dan komitmen kepada setiap pelanggan.`,
    tagline: en.about.tagline,
    missionLabel: "Misi Kami",
    mission:
      "Menyediakan perkhidmatan logistik, storan dan penyelesaian modular yang boleh dipercayai, selamat serta mengutamakan pelanggan untuk memudahkan urusan harian.",
    visionLabel: "Visi Kami",
    vision:
      "Menjadi penyedia logistik antarabangsa, storan dan penyelesaian modular inovatif yang dipercayai di Malaysia menjelang 2030.",
  },
  services: {
    eyebrow: "Perkhidmatan Kami",
    headline: "Kargo dan Keperluan Anda",
    featured: {
      label: "Perkhidmatan Utama",
      title: "Kargo Arab Saudi – Malaysia",
      desc: "Penghantaran kontena laut untuk barangan peribadi, perabot, barangan komersial serta kargo peribadi berkaitan haji atau umrah.",
      audience:
        "Pengambilan selepas ketibaan atau pilihan penghantaran akhir di Malaysia, diatur mengikut keperluan kargo anda.",
      cta: "Bincangkan Kargo Anda",
    },
    items: [
      {
        id: "moving",
        label: "Pemindahan",
        title: "Pemindahan Rumah & Pejabat",
        desc: "Pemindahan rumah dan pejabat yang teratur, meliputi pembungkusan, pengangkutan, kerja memuat dan memunggah serta penyusunan semula dengan teliti.",
        highlights: [
          "Bahan pembungkusan",
          "Kru pemindahan berpengalaman",
          "Pemindahan kecil & besar",
        ],
        cta: "Tanya Tentang Pemindahan",
      },
      {
        id: "storage",
        label: "Storan Kendiri",
        title: "Storan Selamat & Fleksibel",
        desc: "Simpanan untuk barangan peribadi, inventori perniagaan, dokumen, perabot dan peralatan dalam persekitaran yang bersih dan teratur.",
        highlights: [
          "Pemantauan CCTV",
          "Akses terkawal",
          "Saiz & tempoh sewaan fleksibel",
        ],
        cta: "Tanya Tentang Storan",
      },
      {
        id: "modular",
        label: "Ruang Modular",
        title: "Penyelesaian Kontena Modular",
        desc: "Ruang berasaskan kontena yang fleksibel untuk kediaman, homestay, kafe, ruang komersial, gudang mini dan kemudahan sementara.",
        highlights: [
          "Kediaman & penginapan",
          "Komersial & simpanan",
          "Kemudahan NGO & kerajaan",
        ],
        cta: "Tanya Tentang Ruang Modular",
      },
    ],
  },
  why: {
    eyebrow: "Mengapa Aman Tree",
    headline: "Teliti pada Setiap Langkah",
    storiesCta: "Lihat Kisah Kejayaan",
    evidence: {
      label: "Kargo dalam gambar",
      alts: [
        "Seseorang membuka pintu kontena perkapalan",
        "Beberapa orang mengendalikan kotak di sebelah kontena terbuka",
        "Seseorang berdiri di sebelah bungkusan berbalut di pintu rumah",
        "Seseorang mengendalikan kotak berbalut di belakang lori",
        "Lori membawa kargo berbalut pada waktu malam",
        "Beberapa orang mengendalikan kotak berbalut di dalam kontena perkapalan",
      ],
    },
    benefits: [
      {
        title: "Amanah dalam Tindakan",
        desc: "Tanggungjawab, komitmen dan keprihatinan terhadap komuniti memandu cara kami mengendalikan kargo anda.",
      },
      {
        title: "Pengalaman di Lapangan",
        desc: "Pengalaman mengendalikan kargo secara langsung, termasuk operasi haji yang dipaparkan di bawah.",
      },
      {
        title: "Penyelarasan Teliti",
        desc: "Sokongan untuk dokumen dan keperluan kastam yang memerlukan perhatian sepanjang urusan penghantaran.",
      },
      {
        title: "Bermula dengan Perbincangan",
        desc: "Bincangkan barangan dan destinasi dengan pasukan kami supaya urusan sesuai dengan keperluan anda.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Proses Kargo",
    headline: "Dari Pengambilan hingga Penghantaran",
    steps: [
      {
        num: "01",
        title: "Pengambilan",
        desc: "Atur pengambilan, pengendalian dan simpanan sementara kargo.",
      },
      {
        num: "02",
        title: "Dokumentasi",
        desc: "Sediakan dokumen eksport dan import untuk penghantaran anda.",
      },
      {
        num: "03",
        title: "Perkapalan",
        desc: "Selaraskan penghantaran kontena laut mengikut jadual yang tersedia.",
      },
      {
        num: "04",
        title: "Kastam",
        desc: "Selaraskan keperluan kastam bagi kargo anda.",
      },
      {
        num: "05",
        title: "Penghantaran",
        desc: "Atur pengambilan selepas ketibaan atau pilihan penghantaran akhir di Malaysia.",
      },
    ],
  },
  route: {
    eyebrow: "Hubungan Kami",
    headline: "Dua Negara. Satu Laluan.",
    copy: "Kargo laut menghubungkan pengambilan di Arab Saudi dengan ketibaan di Malaysia. Lokasi pengambilan dan penghantaran seterusnya diselaraskan mengikut kargo anda; jadual pelepasan disahkan bersama pasukan kami.",
    origin: "Arab Saudi",
    destination: "Malaysia",
  },
  achievement: {
    eyebrow: `Operasi Kargo Haji ${hajjOperation.year}`,
    headline: "Pengalaman yang Bermakna",
    imageAlt:
      "Ilustrasi kontena bertindan dengan penjenamaan Aman Cargo Services",
    note: "Angka dalam profil syarikat bagi operasi kargo haji 2018. Anggaran ini merujuk kepada projek tersebut dan bukan jaminan tempoh penghantaran.",
    items: [
      {
        value: hajjOperation.pilgrims,
        unit: "",
        label: "Jemaah Haji Malaysia Dibantu",
      },
      { value: hajjOperation.volume, unit: " CBM", label: "Kargo Diuruskan" },
      { value: hajjOperation.containers, unit: " kaki", label: "Kontena" },
      {
        value: hajjOperation.months,
        unit: " bulan",
        label: "Operasi Diselesaikan",
      },
    ],
  },
  faq: {
    eyebrow: "Soalan Lazim",
    headline: "Sebelum Membuat Urusan",
    items: [
      {
        q: "Apakah jenis kargo yang boleh saya tanyakan?",
        a: "Barangan peribadi, perabot, kargo komersial serta barangan peribadi berkaitan haji atau umrah. Kongsikan senarai barangan dan destinasi supaya pasukan kami dapat mengesahkan kesesuaian dan keperluannya.",
      },
      {
        q: "Adakah Aman Tree membantu urusan dokumentasi dan kastam?",
        a: "Perkhidmatan merangkumi dokumentasi eksport/import dan penyelarasan kastam. Keperluan bergantung pada barangan dan destinasi anda.",
      },
      {
        q: "Adakah penghantaran akhir di Malaysia termasuk dalam perkhidmatan?",
        a: "Penghantaran akhir di Malaysia ialah perkhidmatan pilihan. Sahkan alamat dan skop penghantaran dengan pasukan kami semasa meminta sebut harga.",
      },
      {
        q: "Bolehkah saya menyimpan barangan untuk tempoh pendek atau panjang?",
        a: "Storan kendiri menawarkan saiz unit dan tempoh sewaan fleksibel untuk keperluan peribadi serta perniagaan. Hubungi pasukan kami untuk menyemak ketersediaan.",
      },
      {
        q: "Apakah kegunaan kontena modular?",
        a: "Kediaman, homestay, kafe, ruang komersial, gudang mini, simpanan dan kemudahan sementara. Bincangkan kegunaan yang dirancang serta keperluan tapak dengan pasukan kami.",
      },
      {
        q: "Bagaimana untuk mendapatkan sebut harga atau anggaran penghantaran?",
        a: "Hubungi pasukan kami di WhatsApp dengan keperluan perkhidmatan, butiran barangan, lokasi dan tarikh pilihan. Jadual, kos dan anggaran penghantaran disahkan bagi setiap pertanyaan.",
      },
    ],
  },
  finalCta: {
    headline: "Mari Rancang Langkah Seterusnya",
    copy: "Kongsikan butiran barangan dan destinasi. Kami akan bantu merancang langkah seterusnya.",
    cta: "Hubungi Kami di WhatsApp",
  },
  footer: {
    malaysia: "Malaysia",
    saudi: "Arab Saudi",
    rights: "Hak cipta terpelihara.",
  },
  whatsappMsg: {
    availability:
      "Hai Aman Tree, boleh kongsikan jadual pelepasan Arab Saudi ke Malaysia dan ketersediaan tempahan?",
    rate: "Hai Aman Tree, saya ingin mendapatkan kadar kargo hari ini dari Arab Saudi ke Malaysia.",
    general:
      "Hai Aman Tree, saya ingin berbincang tentang perkhidmatan kargo, pemindahan, storan atau modular.",
    cargo:
      "Hai Aman Tree, saya ingin bertanya tentang kargo Arab Saudi–Malaysia.",
    moving:
      "Hai Aman Tree, saya ingin bertanya tentang pemindahan rumah atau pejabat.",
    storage: "Hai Aman Tree, saya ingin bertanya tentang storan kendiri.",
    modular:
      "Hai Aman Tree, saya ingin bertanya tentang penyelesaian kontena modular.",
  },
}
export const content = { en, ms }
export type Content = typeof en
