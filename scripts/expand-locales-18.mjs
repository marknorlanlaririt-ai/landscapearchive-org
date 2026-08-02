/**
 * Expand Foundation chrome locales to the shared 18-code set.
 * Idempotent. Handles CRLF on Windows.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const target = path.join(here, '../src/i18n/locales.js')
let src = fs.readFileSync(target, 'utf8').replace(/\r\n/g, '\n')

const localeBlock = `export const SUPPORTED_LOCALES = Object.freeze([
  { code: 'en', nativeLabel: 'English', htmlLang: 'en-AU' },
  { code: 'es', nativeLabel: 'Español', htmlLang: 'es' },
  { code: 'fr', nativeLabel: 'Français', htmlLang: 'fr' },
  { code: 'de', nativeLabel: 'Deutsch', htmlLang: 'de' },
  { code: 'pt', nativeLabel: 'Português', htmlLang: 'pt' },
  { code: 'zh', nativeLabel: '中文', htmlLang: 'zh-Hans' },
  { code: 'ja', nativeLabel: '日本語', htmlLang: 'ja' },
  { code: 'ko', nativeLabel: '한국어', htmlLang: 'ko' },
  { code: 'ms', nativeLabel: 'Bahasa Melayu', htmlLang: 'ms' },
  { code: 'it', nativeLabel: 'Italiano', htmlLang: 'it' },
  { code: 'ar', nativeLabel: 'العربية', htmlLang: 'ar', dir: 'rtl' },
  { code: 'hi', nativeLabel: 'हिन्दी', htmlLang: 'hi' },
  { code: 'id', nativeLabel: 'Bahasa Indonesia', htmlLang: 'id' },
  { code: 'nl', nativeLabel: 'Nederlands', htmlLang: 'nl' },
  { code: 'ru', nativeLabel: 'Русский', htmlLang: 'ru' },
  { code: 'tr', nativeLabel: 'Türkçe', htmlLang: 'tr' },
  { code: 'th', nativeLabel: 'ไทย', htmlLang: 'th' },
  { code: 'vi', nativeLabel: 'Tiếng Việt', htmlLang: 'vi' }
])`

src = src.replace(/export const SUPPORTED_LOCALES = Object\.freeze\(\[[\s\S]*?\]\)/, localeBlock)

const msgs = {
  it: {
    'lang.label': 'Lingua',
    'lang.note': 'L’interfaccia è tradotta. Pagine lunghe e avvisi legali restano in inglese.',
    skip: 'Vai al contenuto',
    'nav.aria': 'Navigazione Foundation',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'Home — The Landscape Archive Foundation',
    'nav.overview': 'Panoramica',
    'nav.governance': 'Governance',
    'nav.registry': 'Registro',
    'nav.adopt': 'Adotta',
    'nav.industry-practice': 'Pratica',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'Licenza',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'Premi',
    'nav.volunteers': 'Volontari',
    'nav.articles': 'Field Notes',
    'nav.contact': 'Contatto',
    'session.signIn': 'Accedi',
    'session.signOut': 'Esci',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'Standard aperto',
    'footer.tools': 'Strumenti Foundation',
    'footer.commercial': 'Archive commerciale'
  },
  ar: {
    'lang.label': 'اللغة',
    'lang.note': 'واجهة الموقع مترجمة. الصفحات الطويلة والإشعارات القانونية تبقى بالإنجليزية.',
    skip: 'تخطي إلى المحتوى',
    'nav.aria': 'تنقل Foundation',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'الصفحة الرئيسية — The Landscape Archive Foundation',
    'nav.overview': 'نظرة عامة',
    'nav.governance': 'الحوكمة',
    'nav.registry': 'السجل',
    'nav.adopt': 'اعتمد',
    'nav.industry-practice': 'الممارسة',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'الترخيص',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'الجوائز',
    'nav.volunteers': 'المتطوعون',
    'nav.articles': 'Field Notes',
    'nav.contact': 'اتصل',
    'session.signIn': 'تسجيل الدخول',
    'session.signOut': 'تسجيل الخروج',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'معيار مفتوح',
    'footer.tools': 'أدوات Foundation',
    'footer.commercial': 'Archive التجاري'
  },
  hi: {
    'lang.label': 'भाषा',
    'lang.note': 'इंटरफ़ेस अनुवादित है। लंबे पृष्ठ और कानूनी सूचनाएँ अंग्रेज़ी में रहती हैं।',
    skip: 'सामग्री पर जाएँ',
    'nav.aria': 'Foundation नेविगेशन',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'होम — The Landscape Archive Foundation',
    'nav.overview': 'अवलोकन',
    'nav.governance': 'शासन',
    'nav.registry': 'रजिस्ट्री',
    'nav.adopt': 'अपनाएँ',
    'nav.industry-practice': 'अभ्यास',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'लाइसेंस',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'पुरस्कार',
    'nav.volunteers': 'स्वयंसेवक',
    'nav.articles': 'Field Notes',
    'nav.contact': 'संपर्क',
    'session.signIn': 'साइन इन',
    'session.signOut': 'साइन आउट',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'खुला मानक',
    'footer.tools': 'Foundation उपकरण',
    'footer.commercial': 'वाणिज्यिक Archive'
  },
  id: {
    'lang.label': 'Bahasa',
    'lang.note': 'Antarmuka diterjemahkan. Halaman panjang dan pemberitahuan hukum tetap berbahasa Inggris.',
    skip: 'Lewati ke konten',
    'nav.aria': 'Navigasi Foundation',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'Beranda — The Landscape Archive Foundation',
    'nav.overview': 'Ikhtisar',
    'nav.governance': 'Tata kelola',
    'nav.registry': 'Registri',
    'nav.adopt': 'Adopsi',
    'nav.industry-practice': 'Praktik',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'Lisensi',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'Penghargaan',
    'nav.volunteers': 'Relawan',
    'nav.articles': 'Field Notes',
    'nav.contact': 'Kontak',
    'session.signIn': 'Masuk',
    'session.signOut': 'Keluar',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'Standar terbuka',
    'footer.tools': 'Alat Foundation',
    'footer.commercial': 'Archive komersial'
  },
  nl: {
    'lang.label': 'Taal',
    'lang.note': 'De interface is vertaald. Lange pagina’s en juridische teksten blijven Engels.',
    skip: 'Naar inhoud',
    'nav.aria': 'Foundation-navigatie',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'Home — The Landscape Archive Foundation',
    'nav.overview': 'Overzicht',
    'nav.governance': 'Bestuur',
    'nav.registry': 'Register',
    'nav.adopt': 'Adopteren',
    'nav.industry-practice': 'Praktijk',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'Licentie',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'Prijzen',
    'nav.volunteers': 'Vrijwilligers',
    'nav.articles': 'Field Notes',
    'nav.contact': 'Contact',
    'session.signIn': 'Inloggen',
    'session.signOut': 'Uitloggen',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'Open standaard',
    'footer.tools': 'Foundation-tools',
    'footer.commercial': 'Commercieel Archive'
  },
  ru: {
    'lang.label': 'Язык',
    'lang.note': 'Интерфейс переведён. Длинные страницы и правовые уведомления остаются на английском.',
    skip: 'К содержанию',
    'nav.aria': 'Навигация Foundation',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'Главная — The Landscape Archive Foundation',
    'nav.overview': 'Обзор',
    'nav.governance': 'Управление',
    'nav.registry': 'Реестр',
    'nav.adopt': 'Принять',
    'nav.industry-practice': 'Практика',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'Лицензия',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'Награды',
    'nav.volunteers': 'Волонтёры',
    'nav.articles': 'Field Notes',
    'nav.contact': 'Контакты',
    'session.signIn': 'Войти',
    'session.signOut': 'Выйти',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'Открытый стандарт',
    'footer.tools': 'Инструменты Foundation',
    'footer.commercial': 'Коммерческий Archive'
  },
  tr: {
    'lang.label': 'Dil',
    'lang.note': 'Arayüz çevrilidir. Uzun sayfalar ve yasal bildirimler İngilizce kalır.',
    skip: 'İçeriğe geç',
    'nav.aria': 'Foundation navigasyonu',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'Ana sayfa — The Landscape Archive Foundation',
    'nav.overview': 'Genel bakış',
    'nav.governance': 'Yönetişim',
    'nav.registry': 'Kayıt',
    'nav.adopt': 'Benimse',
    'nav.industry-practice': 'Uygulama',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'Lisans',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'Ödüller',
    'nav.volunteers': 'Gönüllüler',
    'nav.articles': 'Field Notes',
    'nav.contact': 'İletişim',
    'session.signIn': 'Oturum aç',
    'session.signOut': 'Çıkış',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'Açık standart',
    'footer.tools': 'Foundation araçları',
    'footer.commercial': 'Ticari Archive'
  },
  th: {
    'lang.label': 'ภาษา',
    'lang.note': 'ส่วนติดต่อผู้ใช้แปลแล้ว หน้ายาวและประกาศทางกฎหมายยังเป็นภาษาอังกฤษ',
    skip: 'ข้ามไปยังเนื้อหา',
    'nav.aria': 'การนำทาง Foundation',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'หน้าแรก — The Landscape Archive Foundation',
    'nav.overview': 'ภาพรวม',
    'nav.governance': 'ธรรมาภิบาล',
    'nav.registry': 'ทะเบียน',
    'nav.adopt': 'นำไปใช้',
    'nav.industry-practice': 'การปฏิบัติ',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'ใบอนุญาต',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'รางวัล',
    'nav.volunteers': 'อาสาสมัคร',
    'nav.articles': 'Field Notes',
    'nav.contact': 'ติดต่อ',
    'session.signIn': 'เข้าสู่ระบบ',
    'session.signOut': 'ออกจากระบบ',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'มาตรฐานเปิด',
    'footer.tools': 'เครื่องมือ Foundation',
    'footer.commercial': 'Archive เชิงพาณิชย์'
  },
  vi: {
    'lang.label': 'Ngôn ngữ',
    'lang.note': 'Giao diện đã được dịch. Trang dài và thông báo pháp lý vẫn bằng tiếng Anh.',
    skip: 'Bỏ qua đến nội dung',
    'nav.aria': 'Điều hướng Foundation',
    'brand.archive': 'The Landscape Archive',
    'brand.foundation': 'Foundation',
    'brand.homeAria': 'Trang chủ — The Landscape Archive Foundation',
    'nav.overview': 'Tổng quan',
    'nav.governance': 'Quản trị',
    'nav.registry': 'Sổ đăng ký',
    'nav.adopt': 'Áp dụng',
    'nav.industry-practice': 'Thực hành',
    'nav.seal-verifier': 'Archive Seal',
    'nav.foundation-approved': 'Foundation Approved',
    'nav.licence': 'Giấy phép',
    'nav.truth-tellers': 'Truth-tellers',
    'nav.awards': 'Giải thưởng',
    'nav.volunteers': 'Tình nguyện viên',
    'nav.articles': 'Field Notes',
    'nav.contact': 'Liên hệ',
    'session.signIn': 'Đăng nhập',
    'session.signOut': 'Đăng xuất',
    'footer.foundation': 'Foundation',
    'footer.openStandard': 'Tiêu chuẩn mở',
    'footer.tools': 'Công cụ Foundation',
    'footer.commercial': 'Archive thương mại'
  }
}

function fmt(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `    '${k}': ${JSON.stringify(v)}`)
    .join(',\n')
}

const messagesClose = src.lastIndexOf('\n}\n\nexport function isSupportedLocale')
if (messagesClose === -1) {
  throw new Error('Could not find MESSAGES closing before isSupportedLocale')
}

let insert = ''
for (const [code, obj] of Object.entries(msgs)) {
  const marker = `\n  ${code}: {`
  if (src.includes(marker)) continue
  insert += `,\n  ${code}: {\n${fmt(obj)}\n  }`
}

if (insert) {
  src = src.slice(0, messagesClose) + insert + src.slice(messagesClose)
}

if (!src.includes('export function isRtlLocale')) {
  src = src.replace(
    `export function htmlLangFor(code) {
  return SUPPORTED_LOCALES.find((entry) => entry.code === code)?.htmlLang || 'en-AU'
}`,
    `export function htmlLangFor(code) {
  return SUPPORTED_LOCALES.find((entry) => entry.code === code)?.htmlLang || 'en-AU'
}

export function isRtlLocale(code) {
  return SUPPORTED_LOCALES.find((entry) => entry.code === code)?.dir === 'rtl'
}`
  )
}

fs.writeFileSync(target, src)
const codes = [...src.matchAll(/^\s{2}([a-z]{2}): \{/gm)].map((m) => m[1])
console.log('[expand-locales-18] message locales:', codes.join(','))
console.log('[expand-locales-18] isRtlLocale:', src.includes('isRtlLocale'))
