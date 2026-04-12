const translations = {
    en: {
        collegeName: "Rahmaniyya Arabic College",
        home: "Home",
        about: "About Us",
        courses: "Courses",
        faculty: "Faculty",
        admissions: "Admissions",
        gallery: "Gallery",
        contact: "Contact Us",
        heroTitle: "Excellence in Arabic & Islamic Studies",
        heroSubtitle: "Empowering the next generation of scholars with traditional values and modern insights.",
        applyNow: "Apply Now",
        exploreCourses: "Explore Courses",
        ourCourses: "Our Courses",
        alimCourse: "Alim Course",
        muthawwalCourse: "Muthawwal Course",
        hifzCourse: "Hifz Quran",
        alimDesc: "A comprehensive program focusing on Islamic jurisprudence, theology, and Arabic literature.",
        muthawwalDesc: "Advanced level studies in Islamic sciences and linguistic mastery.",
        hifzDesc: "Dedicated program for memorization of the Holy Quran with Tajweed.",
        locationTitle: "Location",
        locationDesc: "Attassery, Trikkadeeri, Palakkad, Kerala, India",
        footerAbout: "Rahmaniyya Arabic College is a premier institution dedicated to preserving and spreading Islamic knowledge.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info"
    },
    ml: {
        collegeName: "റഹ്മാനിയ്യ അറബിക് കോളേജ്",
        home: "ഹോം",
        about: "ഞങ്ങളെക്കുറിച്ച്",
        courses: "കോഴ്സുകൾ",
        faculty: "ഫാക്കൽറ്റി",
        admissions: "അഡ്മിഷൻ",
        gallery: "ഗാലറി",
        contact: "ബന്ധപ്പെടുക",
        heroTitle: "അറബിക്, ഇസ്ലാമിക് പഠനത്തിൽ ഉന്നതനിലവാരം",
        heroSubtitle: "പരമ്പരാഗത മൂല്യങ്ങളും ആധുനിക കാഴ്ചപ്പാടുകളും സമന്വയിപ്പിച്ച് നവതലമുറയെ ശാക്തീകരിക്കുന്നു.",
        applyNow: "അപേക്ഷിക്കുക",
        exploreCourses: "കോഴ്സുകൾ കാണുക",
        ourCourses: "ഞങ്ങളുടെ കോഴ്സുകൾ",
        alimCourse: "ആലിം കോഴ്സ്",
        muthawwalCourse: "മുത്തവ്വൽ കോഴ്സ്",
        hifzCourse: "ഹിഫ്സുൽ ഖുർആൻ",
        alimDesc: "ഇസ്‌ലാമിക് നിയമശാസ്ത്രം, ദൈവശാസ്ത്രം, അറബിക് സാഹിത്യം എന്നിവയിൽ സമഗ്രമായ പഠനം.",
        muthawwalDesc: "ഇസ്‌ലാമിക് വിജ്ഞാനീയങ്ങളിലും ഭാഷാ വൈദഗ്ധ്യത്തിലും ഉന്നതതല പഠനം.",
        hifzDesc: "തജ്‌വീദോടെ വിശുദ്ധ ഖുർആൻ മനഃപാഠമാക്കുന്നതിനുള്ള പ്രത്യേക വിഭാഗം.",
        locationTitle: "സ്ഥലം",
        locationDesc: "അറ്റാശ്ശേരി, തൃക്കടീരി, പാലക്കാട്, കേരളം, ഇന്ത്യ",
        footerAbout: "ഇസ്ലാമിക അറിവ് സംരക്ഷിക്കുന്നതിനും പ്രചരിപ്പിക്കുന്നതിനുമായി സമർപ്പിക്കപ്പെട്ട ഒരു പ്രമുഖ വിദ്യാഭ്യാസ സ്ഥാപനമാണ് റഹ്മാനിയ്യ അറബിക് കോളേജ്.",
        quickLinks: "ദ്രുത ലിങ്കുകൾ",
        contactInfo: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ"
    }
};

function switchLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
    });

    // Handle RTL if language was Arabic, but here it's English/Malayalam, both are LTR.
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    switchLanguage(savedLang);
});
