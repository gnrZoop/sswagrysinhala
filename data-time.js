// ============================================================
//  TIME EXERCISES - data-time.js
//  ට්‍රැක් 12 - වේලාව අභ්‍යාස (れんしゅうＢ පමණක්)
// ============================================================

const timeData = [
    // =========================================================
    //  වේලාව - れんしゅうＢ (ට්‍රැක් 12)
    // =========================================================
    {
        id: 'time-b',
        category: 'time',
        title: 'れんしゅうＢ - じかん（きく）',
        description: 'ශ්‍රව්‍යයට සවන් දී වේලාව සටහන් කරන්න.\nඋදා: ６：００ → 06:00',
        track: '12',
        type: 'input',
        image: '12.webp',
        questions: [
            { 
                id: 't1', 
                question: '① ශ්‍රව්‍යයේ කියවෙන වේලාව සටහන් කරන්න.', 
                correct: '12:15',
                example: 'れい： ６：００ → 06:00'
            },
            { 
                id: 't2', 
                question: '② ශ්‍රව්‍යයේ කියවෙන වේලාව සටහන් කරන්න.', 
                correct: '09:10',
                example: 'れい： ６：００ → 06:00'
            },
            { 
                id: 't3', 
                question: '③ ශ්‍රව්‍යයේ කියවෙන වේලාව සටහන් කරන්න.', 
                correct: '05:30',
                example: 'れい： ６：００ → 06:00'
            },
            { 
                id: 't4', 
                question: '④ ශ්‍රව්‍යයේ කියවෙන වේලාව සටහන් කරන්න.', 
                correct: '04:20',
                example: 'れい： ６：００ → 06:00'
            },
            { 
                id: 't5', 
                question: '⑤ ශ්‍රව්‍යයේ කියවෙන වේලාව සටහන් කරන්න.', 
                correct: '08:30',
                example: 'れい： ６：００ → 06:00'
            },
            { 
                id: 't6', 
                question: '⑥ ශ්‍රව්‍යයේ කියවෙන වේලාව සටහන් කරන්න.', 
                correct: '11:45',
                example: 'れい： ６：００ → 06:00'
            }
        ]
    }
];

// ============================================================
//  main.js හි registerExercises ශ්‍රිතයට ලියාපදිංචි කරන්න
// ============================================================
if (typeof registerExercises === 'function') {
    registerExercises(timeData);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof registerExercises === 'function') {
            registerExercises(timeData);
        } else {
            console.warn('registerExercises ශ්‍රිතය සොයාගත නොහැක. main.js පූරණය වී ඇත්දැයි පරීක්ෂා කරන්න.');
        }
    });
}

console.log('✅ data-time.js පූරණය විය! (ට්‍රැක් 12 - වේලාව අභ්‍යාස ' + timeData.length + ' කාණ්ඩ)');