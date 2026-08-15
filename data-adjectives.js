// ============================================================
//  ADJECTIVES EXERCISES - data-adjectives.js
//  ට්‍රැක් 51 - නාම විශේෂණ (れんしゅうＡ + れんしゅうＢ එකම කාඩ්පත)
//  Image එක හයිඩ් කර ඇත
//  れんしゅうＡ - Radio buttons (හිරගන වලින්, අහඹු ලෙස)
//  れんしゅうＢ - Dropdown menu (ඉංග්‍රීසි අකුරු)
// ============================================================

const adjectivesData = [
    // =========================================================
    //  නාම විශේෂණ - ට්‍රැක් 51 (れんしゅうＡ + れんしゅうＢ)
    // =========================================================
    {
        id: 'adjectives-track51',
        category: 'adjectives',
        title: 'れんしゅう - けいようし (Track 51)',
        description: `📖 **れんしゅうＡ** - ひらがなを みて、おおごえで よんでみましょう。

📝 れい:
   むずかしいです

🎧 きいて、ただしい こたえを えらびましょう.

📝 **れんしゅう** - きいて、ただしい けいようしを えらびましょう。`,
        track: '51',
        type: 'choice',  // ← 'mixed' වෙනුවට 'choice' ලෙස වෙනස් කරන්න
        image: null,
        questions: [
            // =============================================
            // れんしゅうＡ - Radio buttons (හිරගන වලින්)
            // shuffleArray() මගින් අහඹු ලෙස වෙනස් වේ
            // =============================================
            { 
                id: 'a1', 
                question: 'れんしゅう A - ප්‍රශ්න 1', 
                options: ['いたいです', 'ながいです', 'あぶないです', 'すきです'],
                correct: 0,
                type: 'radio'
            },
            { 
                id: 'a2', 
                question: 'れんしゅう A - ප්‍රශ්න 2', 
                options: ['いたいです', 'ながいです', 'あぶないです', 'すきです'],
                correct: 1,
                type: 'radio'
            },
            { 
                id: 'a3', 
                question: 'れんしゅう A - ප්‍රශ්න 3', 
                options: ['いたいです', 'ながいです', 'あぶないです', 'すきです'],
                correct: 2,
                type: 'radio'
            },
            { 
                id: 'a4', 
                question: 'れんしゅう A - ප්‍රශ්න 4', 
                options: ['いたいです', 'ながいです', 'あぶないです', 'すきです'],
                correct: 3,
                type: 'radio'
            },
            // =============================================
            // れんしゅうＢ - Dropdown menu (ඉංග්‍රීසි අකුරු)
            // =============================================
            { 
                id: 'adj1', 
                question: 'れんしゅう B - ප්‍රශ්න 1.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 3,
                type: 'dropdown',
                image: '51.webp'
            },
            { 
                id: 'adj2', 
                question: 'れんしゅう B - ප්‍රශ්න 2.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 1,
                type: 'dropdown',
                image: '51.webp'
            },
            { 
                id: 'adj3', 
                question: 'れんしゅう B - ප්‍රශ්න 3.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 2,
                type: 'dropdown',
                image: '51.webp'
            },
            { 
                id: 'adj4', 
                question: 'れんしゅう B - ප්‍රශ්න 4.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 6,
                type: 'dropdown',
                image: '51.webp'
            },
            { 
                id: 'adj5', 
                question: 'れんしゅう B - ප්‍රශ්න 5.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 0,
                type: 'dropdown',
                image: '51.webp'
            },
            { 
                id: 'adj6', 
                question: 'れんしゅう B - ප්‍රශ්න 6.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 5,
                type: 'dropdown',
                image: '51.webp'  
            }
        ]
    }
];

// ============================================================
//  main.js හි registerExercises ශ්‍රිතයට ලියාපදිංචි කරන්න
// ============================================================
if (typeof registerExercises === 'function') {
    registerExercises(adjectivesData);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof registerExercises === 'function') {
            registerExercises(adjectivesData);
        } else {
            console.warn('registerExercises ශ්‍රිතය සොයාගත නොහැක. main.js පූරණය වී ඇත්දැයි පරීක්ෂා කරන්න.');
        }
    });
}

console.log('✅ data-adjectives.js පූරණය විය! (ට්‍රැක් 51 - නාම විශේෂණ අභ්‍යාස)');