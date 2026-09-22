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
    eyebrow: "Saudi Arabia ↔ Malaysia",
    headline: "Trusted Solutions Between Saudi Arabia & Malaysia",
    copy: "International cargo, relocation, secure storage and modular solutions, handled with care from start to finish.",
    primaryCta: "Talk to Us on WhatsApp",
    secondaryCta: "Explore Our Services",
    proof: [
      `Since ${company.establishedYear}`,
      "Registered in Malaysia",
      "Saudi–Malaysia Experience",
    ],
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
    headline: "Rooted in Malaysia, Connected to Saudi Arabia",
    copy: `${company.name} was established on 21 March ${company.establishedYear}. Built with first-hand understanding of the Malaysian community in Saudi Arabia, we connect people and businesses through practical services.`,
    copy2:
      "Our Saudi–Malaysia cargo service is supported by home and office relocation, flexible storage and modular container solutions.",
    tagline: "Dari Amanah Terbina, Untuk Masa Depan Bersama",
    missionLabel: "Our Mission",
    mission:
      "To deliver reliable, safe and customer-focused logistics, storage and modular solutions that simplify everyday needs.",
    visionLabel: "Our Vision",
    vision:
      "To become a trusted Malaysian provider of international logistics, storage and innovative modular solutions by 2030.",
    imageAlt: "Shipping containers at a port, illustrative photograph",
    imageCaption: "Illustrative cargo photography",
    companyImageAlt:
      "Truck displaying Aman Cargo Services branding outside a warehouse",
    companyImageCaption: "Aman Cargo Services",
  },
  services: {
    eyebrow: "Our Services",
    headline: "Connected Services, Thoughtfully Handled",
    featured: {
      label: "Our Flagship Service",
      title: "Saudi Arabia – Malaysia Cargo",
      desc: "Reliable cargo handling between Saudi Arabia and Malaysia, supported from collection and documentation through shipping, customs coordination and final delivery.",
      scope: [
        "Collection & temporary storage",
        "Export/import documentation",
        "Scheduled sea container shipping",
        "Customs coordination",
        "Optional delivery in Malaysia",
      ],
      audience:
        "For personal belongings, furniture, commercial cargo and Hajj or Umrah-related personal cargo.",
      cta: "Ask About Saudi–Malaysia Cargo",
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
        title: `Trusted Since ${company.establishedYear}`,
        desc: "A registered Malaysian company built on amanah, commitment and care for the community.",
      },
      {
        title: "Saudi–Malaysia Experience",
        desc: "First-hand understanding of the cargo needs of Malaysians living in Saudi Arabia.",
      },
      {
        title: "End-to-End Support",
        desc: "Help with collection, documentation, shipping and customs coordination, with optional final delivery.",
      },
      {
        title: "Flexible Solutions",
        desc: "Cargo, relocation, storage and modular spaces shaped around your personal or business needs.",
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
    cta: "Discuss Your Shipment",
  },
  route: {
    eyebrow: "Our Connection",
    headline: "Saudi Arabia ↔ Malaysia",
    copy: "Supporting Malaysians in Saudi Arabia, families and businesses with personal and commercial cargo. Talk to us about your collection point, destination and the next available shipment.",
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
  credentials: {
    eyebrow: "Credentials & Recognition",
    headline: "A Registered Malaysian Company",
    items: [
      {
        title: "SSM Incorporation",
        desc: `${company.name}, registration ${company.registrationNumber}. Established on 21 March ${company.establishedYear}.`,
      },
      {
        title: "Saudi Logistics Appointment",
        desc: "The company profile includes an appointment letter from Ocean Express Logistics Service EST in Saudi Arabia.",
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
    copy: "Cargo, relocation, storage or a modular space. Tell us what you need and we’ll help you work through the details.",
    cta: "Talk to Us on WhatsApp",
  },
  footer: {
    tagline: "Trusted solutions between Saudi Arabia and Malaysia.",
    malaysia: "Malaysia",
    saudi: "Saudi Arabia",
    registration: "Registration",
    rights: "All rights reserved.",
  },
  whatsappMsg: {
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
    eyebrow: "Arab Saudi ↔ Malaysia",
    headline: "Penyelesaian Dipercayai Antara Arab Saudi & Malaysia",
    copy: "Perkhidmatan kargo antarabangsa, pemindahan, storan dan penyelesaian modular yang diurus dengan teliti dari awal hingga akhir.",
    primaryCta: "Hubungi Kami di WhatsApp",
    secondaryCta: "Lihat Perkhidmatan Kami",
    proof: [
      `Sejak ${company.establishedYear}`,
      "Berdaftar di Malaysia",
      "Pengalaman Arab Saudi–Malaysia",
    ],
  },
  trust: [
    { value: String(company.establishedYear), label: "Ditubuhkan di Malaysia" },
    { value: company.registrationNumber, label: "Pendaftaran Syarikat" },
    { value: "SA ↔ MY", label: "Kargo Antarabangsa" },
    { value: "Awal hingga Akhir", label: "Sokongan & Penyelarasan" },
  ],
  about: {
    eyebrow: "Tentang Aman Tree",
    headline: "Berakar di Malaysia, Terhubung ke Arab Saudi",
    copy: `${company.name} ditubuhkan pada 21 Mac ${company.establishedYear}. Berbekalkan pemahaman langsung tentang komuniti Malaysia di Arab Saudi, kami menghubungkan individu dan perniagaan melalui perkhidmatan yang memenuhi keperluan mereka.`,
    copy2:
      "Selain kargo Arab Saudi–Malaysia, kami menyediakan pemindahan rumah dan pejabat, storan fleksibel serta penyelesaian kontena modular.",
    tagline: en.about.tagline,
    missionLabel: "Misi Kami",
    mission:
      "Menyediakan perkhidmatan logistik, storan dan penyelesaian modular yang boleh dipercayai, selamat serta mengutamakan pelanggan untuk memudahkan urusan harian.",
    visionLabel: "Visi Kami",
    vision:
      "Menjadi penyedia logistik antarabangsa, storan dan penyelesaian modular inovatif yang dipercayai di Malaysia menjelang 2030.",
    imageAlt: "Kontena perkapalan di pelabuhan, gambar ilustrasi",
    imageCaption: "Gambar ilustrasi kargo",
    companyImageAlt:
      "Lori dengan penjenamaan Aman Cargo Services di luar gudang",
    companyImageCaption: "Aman Cargo Services",
  },
  services: {
    eyebrow: "Perkhidmatan Kami",
    headline: "Perkhidmatan Bersepadu, Diurus dengan Teliti",
    featured: {
      label: "Perkhidmatan Utama",
      title: "Kargo Arab Saudi – Malaysia",
      desc: "Pengendalian kargo yang boleh dipercayai antara Arab Saudi dan Malaysia, daripada pengambilan dan dokumentasi hingga perkapalan, penyelarasan kastam dan penghantaran akhir.",
      scope: [
        "Pengambilan & simpanan sementara",
        "Dokumentasi eksport/import",
        "Penghantaran kontena laut berjadual",
        "Penyelarasan kastam",
        "Pilihan penghantaran di Malaysia",
      ],
      audience:
        "Untuk barangan peribadi, perabot, kargo komersial serta barangan peribadi berkaitan haji atau umrah.",
      cta: "Tanya Tentang Kargo Arab Saudi–Malaysia",
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
        title: `Dipercayai Sejak ${company.establishedYear}`,
        desc: "Syarikat Malaysia berdaftar yang berpegang pada amanah, komitmen dan keprihatinan terhadap komuniti.",
      },
      {
        title: "Pengalaman Arab Saudi–Malaysia",
        desc: "Memahami sendiri keperluan kargo rakyat Malaysia yang menetap di Arab Saudi.",
      },
      {
        title: "Sokongan Awal hingga Akhir",
        desc: "Bantuan pengambilan, dokumentasi, perkapalan dan penyelarasan kastam, dengan pilihan penghantaran akhir.",
      },
      {
        title: "Penyelesaian Fleksibel",
        desc: "Kargo, pemindahan, storan dan ruang modular yang disesuaikan dengan keperluan peribadi atau perniagaan anda.",
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
    cta: "Bincangkan Penghantaran Anda",
  },
  route: {
    eyebrow: "Hubungan Kami",
    headline: "Arab Saudi ↔ Malaysia",
    copy: "Membantu rakyat Malaysia di Arab Saudi, keluarga dan perniagaan mengurus kargo peribadi serta komersial. Hubungi kami untuk membincangkan lokasi pengambilan, destinasi dan jadual penghantaran seterusnya.",
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
  credentials: {
    eyebrow: "Dokumen & Pengiktirafan",
    headline: "Syarikat Malaysia Berdaftar",
    items: [
      {
        title: "Pemerbadanan SSM",
        desc: `${company.name}, nombor pendaftaran ${company.registrationNumber}. Ditubuhkan pada 21 Mac ${company.establishedYear}.`,
      },
      {
        title: "Pelantikan Logistik di Arab Saudi",
        desc: "Profil syarikat menyertakan surat pelantikan daripada Ocean Express Logistics Service EST di Arab Saudi.",
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
    copy: "Kargo, pemindahan, storan atau ruang modular. Beritahu kami keperluan anda dan kami akan bantu menguruskan butirannya.",
    cta: "Hubungi Kami di WhatsApp",
  },
  footer: {
    tagline: "Penyelesaian dipercayai antara Arab Saudi dan Malaysia.",
    malaysia: "Malaysia",
    saudi: "Arab Saudi",
    registration: "Pendaftaran",
    rights: "Hak cipta terpelihara.",
  },
  whatsappMsg: {
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
