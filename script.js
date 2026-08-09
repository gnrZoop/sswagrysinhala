// සියලුම පාඩම් කාණ්ඩ සහ ඒවාට අදාළ ශ්‍රව්‍ය/රූප දත්ත වගුව
const lessonData = [
    {
        id: "intro",
        title: "📖 හැඳින්වීම (Introduction)",
        desc: "කෘෂිකාර්මික කුසලතා ඇගයීම් පරීක්ෂණයේ මූලික උපදෙස් සහ පෙළපොත භාවිතය.",
        items: []
    },
    {
        id: "hiragana",
        title: "🔤 1. අක්ෂර: හිරගන",
        desc: "හිරගන මූලික ශබ්ද, ද්විත්ව ශබ්ද සහ විශේෂ උච්චාරණ පුහුණුව.",
        items: [
            { track: "01", title: "මූලික අක්ෂර (Basic Letters)" },
            { track: "02", title: "ඩකුඔන් ශබ්ද (Dakuon)" },
            { track: "03", title: "විශේෂ අක්ෂර (Special Sounds)" }
        ]
    },
    {
        id: "katakana",
        title: "🔤 2. අක්ෂර: කතකන",
        desc: "විදේශීය වචන සහ උපකරණ ලිවීමට භාවිතා කරන කතකන අක්ෂර මාලාව.",
        items: [
            { track: "04", title: "මූලික කතකන (Basic Katakana)" },
            { track: "05", title: "ඩකුඔන් ශබ්ද (Dakuon)" },
            { track: "06", title: "දීර්ඝ ශබ්ද (Long Vowels)" },
            { track: "07", title: "අභ්‍යාස A (れんしゅう A)" },
            { track: "08", title: "අභ්‍යාස B (れんしゅう B)" }
        ]
    },
    {
        id: "numbers",
        title: "🔢 2. ඉලක්කම් සහ මිල ගණන්",
        desc: "ජපන් භාෂාවෙන් සංඛ්‍යා සහ මුදල් වර්ග (Yen) ප්‍රකාශ කරන ආකාරය.",
        items: [
            { track: "09", title: "මූලික ඉලක්කම් වගුව" },
            { track: "10", title: "මිල ගණන් සහ අභ්‍යාස" }
        ]
    },
    {
        id: "time",
        title: "🕒 වේලාව (Time)",
        desc: "පැය සහ මිනිත්තු (～じ / ～ふん) නිවැරදිව පවසන ආකාරය.",
        items: [
            { track: "11", title: "වේලාව ප්‍රකාශ කිරීම" },
            { track: "12", title: "වේලාව සම්බන්ධ අභ්‍යාස" }
        ]
    },
    {
        id: "calendar",
        title: "📅 දින දර්ශනය (Calendar)",
        desc: "මාස (～がつ) සහ දින (～にち) විශේෂ උච්චාරණ ක්‍රම.",
        items: [
            { track: "13", title: "මාස සහ දින වගුව" },
            { track: "14", title: "දිනදර්ශන ප්‍රායෝගික අභ්‍යාස" }
        ]
    },
    {
        id: "time-words",
        title: "💬 කාලයට සම්බන්ධ වචන",
        desc: "ඊයේ, අද, හෙට, සෑමදිනකම වැනි එදිනෙදා වැඩබිමේදී යොදාගන්නා කාලීන පද.",
        items: [
            { track: "15", title: "කාලීන පද කාණ්ඩය 1" },
            { track: "16", title: "කාලීන පද කාණ්ඩය 2" }
        ]
    },
    {
        id: "counting",
        title: "📊 ගණන් කරන ආකාරය",
        desc: "විවිධ ද්‍රව්‍ය, ඇඳුම් සහ මෙවලම් ගණන් කරන ප්‍රත්‍යයන් (～つ / ～ほん / ～まい).",
        items: [
            { track: "17", title: "ගණන් කිරීමේ ක්‍රමවේද 1" },
            { track: "18", title: "ගණන් කිරීමේ ක්‍රමවේද 2" }
        ]
    },
    {
        id: "nouns",
        title: "🍎 3. නාමපද (Nouns)",
        desc: "කෘෂිකාර්මික ක්ෂේත්‍රය, උපකරණ, ඇඳුම් සහ ශරීර කොටස් වලට අදාළ නාමපද.",
        items: [
            { track: "19", title: "ආහාර පාන (Food & Drinks)" },
            { track: "20", title: "නිවස සහ එදිනෙදා ද්‍රව්‍ය" },
            { track: "21", title: "එදිනෙදා ක්‍රියාකාරකම්" },
            { track: "22", title: "ඇඳුම් පැළඳුම් (Clothes)" },
            { track: "23", title: "කෘෂිකාර්මික මෙවලම් (Agri-Tools)" },
            { track: "24", title: "වෙනත්" },
            { track: "25", title: "කාර්යාලීය සහ ලිපිද්‍රව්‍ය" },
            { track: "26", title: "වාහන සහ පොදු ස්ථාන" },
            { track: "27", title: "ශරීර කොටස් (Body Parts)" }
        ]
    },
    {
        id: "ko-so-a-do",
        title: "📍 කෝ - සෝ - අ - ඩො (Demonstratives)",
        desc: "ද්‍රව්‍යයන් සහ ස්ථාන පෙන්වීමේදී භාවිතා කරන නිදර්ශක පද රටා.",
        items: [
            { track: "28", title: "මූලික භාවිතය (これ/それ/あれ/どれ)" },
            { track: "29", title: "අභ්‍යාස රටා A" },
            { track: "30", title: "අභ්‍යාස රටා B" }
        ]
    },
    {
        id: "places",
        title: "🏢 ස්ථාන සහ පිහිටීම්",
        desc: "උඩ, යට, ඇතුළත, පිටත (うえ / した / なか) වැනි ස්ථානීය පිහිටීම් ප්‍රකාශ කිරීම.",
        items: [
            { track: "31", title: "පිහිටීම් හැඳින්වීම" },
            { track: "32", title: "ස්ථානීය අභ්‍යාස A" },
            { track: "33", title: "ස්ථානීය අභ්‍යාස B" }
        ]
    },
    {
        id: "verbs",
        title: "🏃‍♂️ 4. ක්‍රියා පද (Verbs)",
        desc: "කෘෂිකාර්මික වැඩබිමට සහ දෛනික රාජකාරි වලට අත්‍යවශ්‍ය වන ක්‍රියාපද (ます ආකාරය).",
        items: [
            { track: "34", title: "මූලික ක්‍රියාපද - කාණ්ඩය 1" },
            { track: "35", title: "මූලික ක්‍රියාපද - කාණ්ඩය 2" },
            { track: "36", title: "වැඩබිම් ක්‍රියාපද - කාණ්ඩය 3" },
            { track: "37", title: "වැඩබිම් ක්‍රියාපද - කාණ්ඩය 4" },
            { track: "38", title: "දෛනික ජීවිතයේ ක්‍රියාපද 5" },
            { track: "39", title: "ආරක්ෂිත උපදෙස් ක්‍රියාපද 6" },
            { track: "40", title: "ක්‍රියාපද වගු පුහුණුව 7" },
            { track: "41", title: "ක්‍රියාපද අභ්‍යාස රටා 8" }
        ]
    },
    {
        id: "adjectives",
        title: "🎨 5. නාම විශේෂණ (Adjectives)",
        desc: "ද්‍රව්‍ය සහ තත්ත්වයන් ඒවිස්තර කිරීමට යොදාගන්නා い සහ な නාම විශේෂණ.",
        items: [
            { track: "42", title: "い (I) නාම විශේෂණ - කාණ්ඩය 1" },
            { track: "43", title: "い (I) නාම විශේෂණ - කාණ්ඩය 2" },
            { track: "44", title: "な (Na) නාම විශේෂණ - කාණ්ඩය 1" },
            { track: "45", title: "な (Na) නාම විශේෂණ - කාණ්ඩය 2" },
            { track: "46", title: "විශේෂණ පද සම්බන්ධ අභ්‍යාස" },
            { track: "47", title: "වර්ණ හැඳින්වීම (Colors)" }
        ]
    },
    {
        id: "questions",
        title: "❓ 6. ප්‍රශ්න කිරීම් සහ ආචාර සමාචාර",
        desc: "වැඩබිමේදී ප්‍රශ්න අසන ආකාරය සහ මූලික ආචාර සමාචාර විධි (Greetings).",
        items: [
            { track: "48", title: "ප්‍රශ්න පද සහ විමසීම් (Questions)" },
            { track: "49", title: "එදිනෙදා ආචාර සමාචාර (Greetings)" }
        ]
    },
    {
        id: "exercises",
        title: "📝 පුළුල් අභ්‍යාස සහ සවන්දීම (Listening Practice)",
        desc: "විභාගය සඳහාම සකස් කරන ලද විශේෂ සවන්දීමේ (Listening Test) ප්‍රශ්නාවලිය.",
        items: [
            { track: "50", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 01" },
            { track: "51", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 02" },
            { track: "52", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 03" },
            { track: "53", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 04" },
            { track: "54", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 05" },
            { track: "55", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 06" },
            { track: "56", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 07" },
            { track: "57", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 08" },
            { track: "58", title: "සවන්දීමේ පරීක්ෂණය - ප්‍රශ්නය 09 (අවසන් කොටස)" }
        ]
    }
];

// පිටුව Load වන විට HTML එක ස්වයංක්‍රීයව නිර්මාණය කිරීම
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("lessons-container");
    
    lessonData.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "lesson-section";
        sectionDiv.id = section.id;
        
        let sectionHTML = `
            <h3>${section.title}</h3>
            <div class="lesson-desc">${section.desc}</div>
        `;
        
        if (section.items.length > 0) {
            section.items.forEach(item => {
                sectionHTML += `
                    <div class="audio-item">
                        <span class="audio-title">${item.title}</span>
                        <audio controls preload="none">
                            <source src="https://asat-nca.jp/jp/mp3/${item.track}.mp3" type="audio/mpeg">
                        </audio>
                        <img class="lesson-img" src="${item.track}.webp" alt="පින්තූරය ${item.track}" loading="lazy">
                    </div>
                `;
            });
        } else {
            sectionHTML += `<p style="font-size:13px; color:#a0aec0;">මෙම කොටස සඳහා වෙන වෙනම ශ්‍රව්‍ය දෘශ්‍ය ගොනු නොමැත. පෙළපොත පරිශීලනය කරන්න.</p>`;
        }
        
        sectionHTML += `
            <div class="btn-container">
                <a href="#top" class="top-btn">⬆️ පටුනට</a>
            </div>
        `;
        
        sectionDiv.innerHTML = sectionHTML;
        container.appendChild(sectionDiv);
    });
});
