// ============================================================
//  COUNTING EXERCISES - data-counting.js
//  ට්‍රැක් 18 - ගණන් කිරීම (れんしゅうＢ පමණක්)
// ============================================================

const countingData = [
    // =========================================================
    //  ගණන් කිරීම - れんしゅうＢ (ට්‍රැක් 18)
    //  ශ්‍රව්‍යයට සවන් දී ඉලක්කම සටහන් කරන්න
    // =========================================================
    {
        id: 'counting-b',
        category: 'counting',
        title: 'れんしゅうＢ - かぞえかた（きく）',
        description: `🎧 れんしゅうＢ ශ්‍රව්‍යයට සවන් දී ඇසෙන සංඛ්‍යාව ඉලක්කම් වලින් සටහන් කරන්න.

📝 උදාහරණ:
   ඇසෙන්නේ >> ෂර්ට් හතරක් තියෙනවා --> 4
   ඇසෙන්නේ >> පෑන් 3 ක් තියෙනවා --> 3`,
        track: '18',
        type: 'input',
        image: '18.webp',  // Image එක ලෝඩ් වේ
        questions: [
            { 
                id: 'c1', 
                question: '① ඇසෙන සංඛ්‍යාව ඉලක්කම් වලින් සටහන් කරන්න.', 
                correct: '1',
                example: 'れい： ෂර්ට් හතරක් → 4'
            },
            { 
                id: 'c2', 
                question: '② ඇසෙන සංඛ්‍යාව ඉලක්කම් වලින් සටහන් කරන්න.', 
                correct: '1',
                example: 'れい： ෂර්ට් හතරක් → 4'
            },
            { 
                id: 'c3', 
                question: '③ ඇසෙන සංඛ්‍යාව ඉලක්කම් වලින් සටහන් කරන්න.', 
                correct: '3',
                example: 'れい： ෂර්ට් හතරක් → 4'
            },
            { 
                id: 'c4', 
                question: '④ ඇසෙන සංඛ්‍යාව ඉලක්කම් වලින් සටහන් කරන්න.', 
                correct: '2',
                example: 'れい： ෂර්ට් හතරක් → 4'
            }
        ]
    }
];

// ============================================================
//  main.js හි registerExercises ශ්‍රිතයට ලියාපදිංචි කරන්න
// ============================================================
if (typeof registerExercises === 'function') {
    registerExercises(countingData);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof registerExercises === 'function') {
            registerExercises(countingData);
        } else {
            console.warn('registerExercises ශ්‍රිතය සොයාගත නොහැක. main.js පූරණය වී ඇත්දැයි පරීක්ෂා කරන්න.');
        }
    });
}

console.log('✅ data-counting.js පූරණය විය! (ට්‍රැක් 18 - ගණන් කිරීම අභ්‍යාස)');