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
        alimDesc: "A comprehensive program focusing on Islamic jurisprudence, theology, and Arabic literature.",
        muthawwalDesc: "Advanced level studies in Islamic sciences and linguistic mastery.",
        locationTitle: "Location",
        locationDesc: "Attassery, Trikkadeeri, Palakkad, Kerala, India",
        historyText: "Rahmaniyya Arabic Collage is established at Attassery in Trikkaderi Panchayath, Ottapalam Taluk, Palakkad District, Kerala. The chairman of this institution is well-known Sufi Scholar and Principal of Rahmaniyya Arabic Collage Adirampattinam, Thanjavoor District of Tamil Nadu. This institution is following the footsteps of Shamsul Ulama, Bani Baaquiyath, and our Spiritual mentor Sheikh Aboobacker Musliyar Kakkidipuram [R.A]. By blending ‘thasavvuf’ and ‘shareeah’, it has been undertaking special ‘thazkiyah’ classes for Muthallims, Religious Scholars and Common People of the area by the grace of Almighty Allah. In order to attain blessings in ‘dunniyah’ and hereafter, the ‘aakhiram’, all are solicited to extend their help and support to run this citadel of learning. May Almighty Allah accept all our virtues and be pleased with us always! Ameen...."
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
        alimDesc: "ഇസ്‌ലാമിക് നിയമശാസ്ത്രം, ദൈവശാസ്ത്രം, അറബിക് സാഹിത്യം എന്നിവയിൽ സമഗ്രമായ പഠനം.",
        muthawwalDesc: "ഇസ്‌ലാമിക് വിജ്ഞാനീയങ്ങളിലും ഭാഷാ വൈദഗ്ധ്യത്തിലും ഉന്നതതല പഠനം.",
        locationTitle: "സ്ഥലം",
        locationDesc: "അറ്റാശ്ശേരി, തൃക്കടീരി, പാലക്കാട്, കേരളം, ഇന്ത്യ",
        historyText: "ഒറ്റപ്പാലം താലൂക്കിൽ തൃക്കടീരി പഞ്ചായത്തിലെ ആറ്റാശ്ശേരിയിൽ സ്ഥാപിതമായ ദീനീ കേന്ദ്രമാണ് റഹ്മാനിയ്യ അറബിക് കോളേജ്.സൂഫിവര്യനും പണ്ഡിത ശ്രേഷ്ഠനുമായ ശൈഖുനാ അൽ ഉസ്താദ് K.T മുഹമ്മദ് കുട്ടി ഹസ്രത്ത് (പ്രിൻ: റഹ്മാനിയ്യ കോളേജ്, അതിരാംപട്ടണം) അവർകളാണ് ചെയർമാൻ, ആദരണീയരായ ശംസുൽഉലമാ ബാനി ബാഖിയാത്ത് (റ) ശൈഖുനാ കക്കിടിപ്പുറം ഉസ്താദ് (റ) തുടങ്ങിയ മഹാന്മാരുടെ പാത പിന്തുടർന്ന് ശരീഅത്തും തസ്വവ്വുഫും കോർത്തിണക്കി മുതഅല്ലിമീങ്ങൾക്കും ഉലമാക്കൾക്കും പ്രത്യേക ക്ലാസുകളും തദ്ദേശീയരായ ബഹു ജനങ്ങൾക്ക് തസ്കിയത്ത് ക്ലാസുകളും നടന്നു വരുന്നു.ഇരുലോകത്തും നന്മ ലഭിക്കുന്ന ഈ മഹത്തായ സ്ഥാപനത്തിന്റെ പ്രവർത്തനങ്ങളിൽ ഭാഗവാക്കാകാൻ താൽപര്യപ്പെടുന്നു. അല്ലാഹു നമ്മുടെ എല്ലാ പ്രവർത്തനങ്ങളും സ്വീകരിക്കുമാറാകട്ടെ... ആമീൻ"
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

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
