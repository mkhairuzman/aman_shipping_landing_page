export const company = {
  name: "Aman Tree Sdn Bhd",
  registrationNumber: "1272996-T",
  establishedDate: "2018-03-21",
  establishedYear: 2018,
  phoneMalaysia: "+60 13-939 5190",
  phoneSaudi: "+966 53 049 9112",
  whatsapp: "60139395190",
  successStories: "https://www.facebook.com/share/1CSBfniD5h/",
  address: [
    "No 6 Jalan 4/7A",
    "Seksyen 4 Bandar Baru Bangi",
    "43650 Kajang, Selangor",
    "Malaysia",
  ],
  // General company email and official domain await client confirmation.
} as const

export function whatsappUrl(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`
}

export const hajjOperation = {
  year: 2018,
  pilgrims: "~200",
  volume: "~80",
  containers: "2 × 20",
  months: "<1",
} as const
