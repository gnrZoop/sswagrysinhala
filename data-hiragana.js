// ============================================================
//  TRACK 08 EXERCISES - data-hiragana.js
//  ප්‍රශ්න 10 ක් (හිරගන + කතකන)
// ============================================================

const hiraganaData = [
    {
        id: 'track08-all',
        category: 'hiragana',
        title: 'れんしゅうＢ - ひらがな & カタカナ (Track 08)',
        description: 'ただしい ことばを えらびましょう。',
        track: '08',
        type: 'choice',
        image: '08.webp',
        questions: [
            // ========== හිරගන ප්‍රශ්න (1-5) ==========
            { 
                id: 'q1', 
                question: '① ただしい ひらがなは どれですか。', 
                options: ['かも', 'かま', 'がま', 'かよ'], 
                correct: 1 ,
                type: 'radio'
            },
            { 
                id: 'q2', 
                question: '② ただしい ひらがなは どれですか。', 
                options: ['ほきみ', 'さきみ', 'はさみ', 'はきみ'], 
                correct: 2,
                type: 'radio'  // 'はさみ' නිවැරදියි
            },
            { 
                id: 'q3', 
                question: '③ ただしい ひらがなは どれですか。', 
                options: ['ふしち', 'ふくら', 'ふころ', 'ふくろ'], 
                correct: 3 ,
                type: 'radio'
            },
            { 
                id: 'q4', 
                question: '④ ただしい ひらがなは どれですか。', 
                options: ['たまご', 'たまこ', 'なもご', 'たもこ'], 
                correct: 0 ,
                type: 'radio' 
            },
            { 
                id: 'q5', 
                question: '⑤ ただしい ひらがなは どれですか。', 
                options: ['しくった', 'くしった', 'くつした', 'つくした'], 
                correct: 2 ,
                type: 'radio'
            },
            // ========== කතකන ප්‍රශ්න (6-10) ==========
            { 
                id: 'q6', 
                question: '⑥ ただしい カタカナは どれですか。', 
                options: ['パズ', 'パス', 'バス', 'バズ'], 
                correct: 2 ,
                type: 'radio'
            },
            { 
                id: 'q7', 
                question: '⑦ ただしい カタカナは どれですか。', 
                options: ['ハウス', 'ハワス', 'バウス', 'バワス'], 
                correct: 0 ,
                type: 'radio'
            },
            { 
                id: 'q8', 
                question: '⑧ ただしい カタカナは どれですか。', 
                options: ['バカツ', 'バケシ', 'バケツ', 'バカシ'], 
                correct: 2 ,
                type: 'radio'
            },
            { 
                id: 'q9', 
                question: '⑨ ただしい カタカナは どれですか。', 
                options: ['スープン', 'スプーン', 'スプンー', 'スップン'], 
                correct: 1 ,
                type: 'radio'
            },
            { 
                id: 'q10', 
                question: '⑩ ただしい カタカナは どれですか。', 
                options: ['トフッタ', 'トラッタ', 'トフック', 'トラック'], 
                correct: 3 ,
                type: 'radio'
            }
        ]
    }
];

// ============================================================
//  main.js හි registerExercises ශ්‍රිතයට ලියාපදිංචි කරන්න
// ============================================================
if (typeof registerExercises === 'function') {
    registerExercises(hiraganaData);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof registerExercises === 'function') {
            registerExercises(hiraganaData);
        } else {
            console.warn('registerExercises ශ්‍රිතය සොයාගත නොහැක. main.js පූරණය වී ඇත්දැයි පරීක්ෂා කරන්න.');
        }
    });
}

console.log('✅ data-hiragana.js පූරණය විය! (ප්‍රශ්න 10)');
