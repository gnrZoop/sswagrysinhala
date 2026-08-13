// ============================================================
//  NOUNS EXERCISES - data-nouns.js
//  ට්‍රැක් 32 - නාමපද (කොටස් 2, එකම කාඩ්පත)
//  Dropdown එකෙන් A-H තෝරන්න
// ============================================================

const nounsData = [
    // =========================================================
    //  නාමපද - ට්‍රැක් 32 (කොටස 1 + කොටස 2)
    // =========================================================
    {
        id: 'nouns-track32',
        category: 'nouns',
        title: 'れんしゅう - めいし (Track 32)',
        description: ``,
        track: '32',
        type: 'choice',
        image: '32.webp',
        questions: [
            // =============================================
            // කොටස 1 - ප්‍රශ්න 1-6 (A-H)
            // =============================================
            { 
                id: 'n1', 
                question: 'කොටස 1 - ප්‍රශ්න 1.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 5
            },
            { 
                id: 'n2', 
                question: 'කොටස 1 - ප්‍රශ්න 2.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 3
            },
            { 
                id: 'n3', 
                question: 'කොටස 1 - ප්‍රශ්න 3.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 0
            },
            { 
                id: 'n4', 
                question: 'කොටස 1 - ප්‍රශ්න 4.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 6
            },
            { 
                id: 'n5', 
                question: 'කොටස 1 - ප්‍රශ්න 5.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 7
            },
            { 
                id: 'n6', 
                question: 'කොටස 1 - ප්‍රශ්න 6.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 1
            },
            // =============================================
            // කොටස 2 - ප්‍රශ්න 1-6 (A-H)
            // =============================================
            { 
                id: 'n7', 
                question: 'කොටස 2 - ප්‍රශ්න 1.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 1
            },
            { 
                id: 'n8', 
                question: 'කොටස 2 - ප්‍රශ්න 2.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 6
            },
            { 
                id: 'n9', 
                question: 'කොටස 2 - ප්‍රශ්න 3.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 0
            },
            { 
                id: 'n10', 
                question: 'කොටස 2 - ප්‍රශ්න 4.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 3
            },
            { 
                id: 'n11', 
                question: 'කොටස 2 - ප්‍රශ්න 5.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 5
            },
            { 
                id: 'n12', 
                question: 'කොටස 2 - ප්‍රශ්න 6.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                correct: 4
            }
        ]
    }
];

// ============================================================
//  main.js හි registerExercises ශ්‍රිතයට ලියාපදිංචි කරන්න
// ============================================================
if (typeof registerExercises === 'function') {
    registerExercises(nounsData);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof registerExercises === 'function') {
            registerExercises(nounsData);
        } else {
            console.warn('registerExercises ශ්‍රිතය සොයාගත නොහැක. main.js පූරණය වී ඇත්දැයි පරීක්ෂා කරන්න.');
        }
    });
}

console.log('✅ data-nouns.js පූරණය විය! (ට්‍රැක් 32 - නාමපද අභ්‍යාස)');