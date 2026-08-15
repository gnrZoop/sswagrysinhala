// ============================================================
//  VERBS EXERCISES - data-verbs.js
//  ට්‍රැක් 46 - ක්‍රියාපද (ප්‍රශ්න 16)
//  සෑම ප්‍රශ්නයකටම එකම Image එක (46.webp)
// ============================================================

const verbsData = [
    // =========================================================
    //  ක්‍රියාපද - ට්‍රැක් 46
    // =========================================================
    {
        id: 'verbs-track46',
        category: 'verbs',
        title: 'れんしゅうＢ - どうし（きく）',
        description: '🎧 ශ්‍රව්‍යයට සවන් දී නිවැරදි ක්‍රියාපදය තෝරන්න.',
        track: '46',
        type: 'choice',
        image: null,  // Main image එක නැත
        questions: [
            { 
                id: 'v1', 
                question: '1 කොටස - 1.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 7,  // H
                image: '46.webp'  // සෑම ප්‍රශ්නයකටම එකම Image එක
            },
            { 
                id: 'v2', 
                question: '1 කොටස - 2.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 8,  // I
                image: '46.webp'
            },
            { 
                id: 'v3', 
                question: '1 කොටස - 3.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 5,  // F
                image: '46.webp'
            },
            { 
                id: 'v4', 
                question: '1 කොටස - 4.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 6,  // G
                image: '46.webp'
            },
            { 
                id: 'v5', 
                question: '1 කොටස - 5.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 10, // K
                image: '46.webp'
            },
            { 
                id: 'v6', 
                question: '1 කොටස - 6.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 4,  // E
                image: '46.webp'
            },
            { 
                id: 'v7', 
                question: '1 කොටස - 7.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 13, // N
                image: '46.webp'
            },
            { 
                id: 'v8', 
                question: '1 කොටස - 8.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 16, // Q
                image: '46.webp'
            },
            { 
                id: 'v9', 
                question: '1 කොටස - 9.', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 19, // T
                image: '46.webp'
            },
            { 
                id: 'v10', 
                question: '1 කොටස - 10 ', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 15, // P
                image: '46.webp'
            },
            { 
                id: 'v11', 
                question: '2 කොටස - 1', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 4,  // E
                image: '46.webp'
            },
            { 
                id: 'v12', 
                question: '2 කොටස - 2', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 7,  // H
                image: '46.webp'
            },
            { 
                id: 'v13', 
                question: '2 කොටස - 3', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 5,  // F
                image: '46.webp'
            },
            { 
                id: 'v14', 
                question: '2 කොටස - 4', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 2,  // C
                image: '46.webp'
            },
            { 
                id: 'v15', 
                question: '2 කොටස - 5', 
                options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
                correct: 6,  // G
                image: '46.webp'
            }
            
        ]
    }
];

// ============================================================
//  main.js හි registerExercises ශ්‍රිතයට ලියාපදිංචි කරන්න
// ============================================================
if (typeof registerExercises === 'function') {
    registerExercises(verbsData);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof registerExercises === 'function') {
            registerExercises(verbsData);
        } else {
            console.warn('registerExercises ශ්‍රිතය සොයාගත නොහැක. main.js පූරණය වී ඇත්දැයි පරීක්ෂා කරන්න.');
        }
    });
}

console.log('✅ data-verbs.js පූරණය විය! (ට්‍රැක් 46 - ක්‍රියාපද අභ්‍යාස)');