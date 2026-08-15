// ============================================================
//  KO-SO-A-DO EXERCISES - data-kosoado.js
//  ට්‍රැක් 34 - කෝ-සෝ-අ-ඩො (れんしゅうＢ පමණක්)
//  සෑම ප්‍රශ්නයකටම Image එකතු කර ඇත
// ============================================================

const kosoadoData = [
    // =========================================================
    //  කෝ-සෝ-අ-ඩො - れんしゅうＢ (ට්‍රැක් 34)
    //  ශ්‍රව්‍යයට සවන් දී නිවැරදි වචනය තෝරන්න
    // =========================================================
    {
        id: 'kosoado-b',
        category: 'kosoado',
        title: 'れんしゅうＢ - こそあど（きく）',
        description: '🎧れんしゅうＢ ශ්‍රව්‍යයට සවන් දී නිවැරදි කෝ-සෝ-අ-ඩො වචනය තෝරන්න.',
        track: '34',
        type: 'choice',
        image: null,
        questions: [
            { 
                id: 'k1', 
                question: '1.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                correct: 2,  // C
                image: '34.webp'
            },
            { 
                id: 'k2', 
                question: '2.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                correct: 7,  // H
                image: '34.webp'
            },
            { 
                id: 'k3', 
                question: '3.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                correct: 11, // L
                image: '34.webp'
            },
            { 
                id: 'k4', 
                question: '4.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                correct: 6,  // G
                image: '34.webp'
            },
            { 
                id: 'k5', 
                question: '5.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                correct: 4,  // E
                image: '34.webp'
            },
            { 
                id: 'k6', 
                question: '6.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
                correct: 10, // K
                image: '34.webp'
            }
        ]
    }
];

// ============================================================
//  main.js හි registerExercises ශ්‍රිතයට ලියාපදිංචි කරන්න
// ============================================================
if (typeof registerExercises === 'function') {
    registerExercises(kosoadoData);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof registerExercises === 'function') {
            registerExercises(kosoadoData);
        } else {
            console.warn('registerExercises ශ්‍රිතය සොයාගත නොහැක. main.js පූරණය වී ඇත්දැයි පරීක්ෂා කරන්න.');
        }
    });
}

console.log('✅ data-kosoado.js පූරණය විය! (ට්‍රැක් 34 - කෝ-සෝ-අ-ඩො අභ්‍යාස)');