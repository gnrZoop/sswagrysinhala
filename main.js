// ============================================================
//  MAIN CONTROLLER - main.js (කොටස 1)
//  අනුපිළිවෙල: Audio → Image (විකල්ප) → Questions
// ============================================================

const allExerciseData = [];
let currentCategory = 'all';

function registerExercises(categoryData) {
    allExerciseData.push(...categoryData);
}

// ============================================================
//  HELPER FUNCTIONS
// ============================================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function normalizeInput(value) {
    return value.trim().toLowerCase();
}

// ============================================================
//  EXERCISE ENGINE
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('exercises-container');
    const allAudioElements = [];

    function renderExercises(category = 'all') {
        container.innerHTML = '';
        allAudioElements.length = 0;

        const filtered = category === 'all' 
            ? allExerciseData 
            : allExerciseData.filter(ex => ex.category === category);

        if (filtered.length === 0) {
            container.innerHTML = `<p style="text-align:center;color:var(--text-secondary);padding:40px;">මෙම කාණ්ඩය සඳහා තවම අභ්‍යාස සකසා නොමැත.</p>`;
            return;
        }

        filtered.forEach((exercise, index) => {
            const card = createExerciseCard(exercise, index);
            container.appendChild(card);
        });

        setupAudioController();
    }

    function createExerciseCard(exercise, index) {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.dataset.exerciseId = exercise.id;
        card.style.animationDelay = `${index * 0.05}s`;

        // =========================================================
        // 1. පළමුව AUDIO PLAYER
        // =========================================================
        const audioWrapper = document.createElement('div');
        audioWrapper.style.cssText = `
            background: var(--inner-box-bg);
            border-radius: 10px;
            padding: 8px 12px;
            margin-bottom: 14px;
            border: 0.5px solid var(--accent-color);
        `;

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.preload = 'none';
        audio.style.cssText = `
            width: 100%;
            height: 36px;
            filter: invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2) !important;
        `;
        const trackNum = String(exercise.track).padStart(2, '0');
        audio.src = `https://asat-nca.jp/jp/mp3/${trackNum}.mp3`;
        audioWrapper.appendChild(audio);
        card.appendChild(audioWrapper);

        allAudioElements.push(audio);

        // =========================================================
        // 2. IMAGE (exercise.image එක null නම් නොපෙන්වයි)
        // =========================================================
        if (exercise.image !== null && exercise.image !== false && exercise.image !== undefined) {
            const imgWrapper = document.createElement('div');
            imgWrapper.style.cssText = `
                margin-bottom: 14px;
                border-radius: 10px;
                overflow: hidden;
                background: var(--inner-box-bg);
                border: 0.5px solid var(--accent-color);
            `;

            const img = document.createElement('img');
            img.className = 'lesson-img';
            img.src = exercise.image;
            img.alt = `Track ${exercise.track} රූපය`;
            img.loading = 'lazy';
            img.style.cssText = `
                width: 100%;
                height: auto;
                display: block;
                filter: brightness(0.75) contrast(1.05) !important;
            `;
            imgWrapper.appendChild(img);
            card.appendChild(imgWrapper);
        }

        // =========================================================
        // 3. HEADER
        // =========================================================
        const header = document.createElement('div');
        header.className = 'exercise-header';
        header.innerHTML = `
            <span class="exercise-title">${exercise.title}</span>
            <span class="exercise-badge">📝 ${exercise.questions.length} ප්‍රශ්න</span>
        `;
        card.appendChild(header);

        // =========================================================
        // 4. DESCRIPTION (පේළි බිඳීම සඳහා pre-wrap)
        // =========================================================
        const desc = document.createElement('div');
        desc.className = 'exercise-desc';
        desc.style.whiteSpace = 'pre-wrap';
        desc.textContent = exercise.description;
        card.appendChild(desc);

        // =========================================================
        // 5. QUESTIONS
        // =========================================================
        const isChoice = exercise.type === 'choice';
        const questionContainer = document.createElement('div');
        questionContainer.className = 'questions-container';

        exercise.questions.forEach((q, qIndex) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'question-item grid-item';
            qDiv.dataset.questionId = q.id;

            const qText = document.createElement('div');
            qText.className = 'question-text';
            qText.textContent = `${qIndex + 1}. ${q.question}`;
            qDiv.appendChild(qText);

            if (isChoice) {
                // Dropdown select element
                const select = document.createElement('select');
                select.className = 'answer-select';
                select.name = q.id;
                select.style.cssText = `
                    width: 100%;
                    padding: 6px 8px;
                    font-size: 13px;
                    background: var(--bg-color);
                    border: 0.5px solid var(--accent-color);
                    border-radius: 6px;
                    color: var(--text-color);
                    outline: none;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                    font-family: inherit;
                    cursor: pointer;
                    appearance: auto;
                `;

                // Default option
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = '-- තෝරන්න --';
                defaultOption.disabled = true;
                defaultOption.selected = true;
                select.appendChild(defaultOption);

                q.options.forEach((opt, optIndex) => {
                    const option = document.createElement('option');
                    option.value = optIndex;
                    option.textContent = opt;
                    if (optIndex === q.correct) {
                        option.dataset.correct = 'true';
                    }
                    select.appendChild(option);
                });

                select.addEventListener('focus', function() {
                    this.style.borderColor = 'var(--gold-accent)';
                });
                select.addEventListener('blur', function() {
                    this.style.borderColor = 'var(--accent-color)';
                });

                qDiv.appendChild(select);

                // Result div for feedback
                const resultDiv = document.createElement('div');
                resultDiv.className = 'result-message';
                resultDiv.dataset.resultId = q.id;
                qDiv.appendChild(resultDiv);

            } else {
                if (q.example) {
                    const exampleDiv = document.createElement('div');
                    exampleDiv.style.cssText = `
                        font-size: 13px;
                        color: var(--text-secondary);
                        margin-bottom: 8px;
                        background: var(--bg-color);
                        padding: 4px 10px;
                        border-radius: 6px;
                        display: inline-block;
                    `;
                    exampleDiv.textContent = `💡 ${q.example}`;
                    qDiv.appendChild(exampleDiv);
                }

                const input = document.createElement('input');
                
                // =============================================
                // TIME කාණ්ඩය සඳහා ස්වයංක්‍රීය ':'
                // =============================================
                if (exercise.category === 'time') {
                    input.type = 'text';
                    input.inputMode = 'numeric';
                    input.maxLength = 5;
                    input.placeholder = '例: 06:00';
                    
                    input.addEventListener('input', function() {
                        let numbers = this.value.replace(/[^0-9]/g, '');
                        if (numbers.length > 4) numbers = numbers.slice(0, 4);
                        if (numbers.length >= 3) {
                            this.value = numbers.slice(0, 2) + ':' + numbers.slice(2);
                        } else {
                            this.value = numbers;
                        }
                    });
                    
                    input.addEventListener('blur', function() {
                        if (this.value.endsWith(':')) {
                            this.value = this.value.slice(0, -1);
                        }
                    });
                } 
                // =============================================
                // CALENDAR කාණ්ඩය සඳහා ස්වයංක්‍රීය '/'
                // =============================================
                else if (exercise.category === 'calendar') {
                    input.type = 'text';
                    input.inputMode = 'numeric';
                    input.maxLength = 5;
                    input.placeholder = '例: 01/03';
                    
                    input.addEventListener('input', function() {
                        let numbers = this.value.replace(/[^0-9]/g, '');
                        if (numbers.length > 4) numbers = numbers.slice(0, 4);
                        if (numbers.length >= 3) {
                            this.value = numbers.slice(0, 2) + '/' + numbers.slice(2);
                        } else {
                            this.value = numbers;
                        }
                    });
                    
                    input.addEventListener('blur', function() {
                        if (this.value.endsWith('/')) {
                            this.value = this.value.slice(0, -1);
                        }
                    });
                } 
                // =============================================
                // අනෙක් කාණ්ඩ සඳහා සාමාන්‍ය input
                // =============================================
                else {
                    input.type = 'number';
                    input.inputMode = 'numeric';
                    input.pattern = '[0-9]*';
                    input.placeholder = 'කරුණාකර මෙහි ලියන්න...';
                    
                    input.addEventListener('input', function() {
                        this.value = this.value.replace(/[^0-9]/g, '');
                    });
                }
                
                input.className = 'answer-input';
                input.dataset.questionId = q.id;
                input.style.cssText = `
                    width: 100%;
                    padding: 10px 14px;
                    font-size: 16px;
                    background: var(--bg-color);
                    border: 0.5px solid var(--accent-color);
                    border-radius: 8px;
                    color: var(--text-color);
                    outline: none;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                    font-family: inherit;
                `;

                input.addEventListener('focus', function() {
                    this.style.borderColor = 'var(--gold-accent)';
                });
                input.addEventListener('blur', function() {
                    this.style.borderColor = 'var(--accent-color)';
                });

                qDiv.appendChild(input);

                const resultDiv = document.createElement('div');
                resultDiv.className = 'result-message';
                resultDiv.dataset.resultId = q.id;
                qDiv.appendChild(resultDiv);
            }

            questionContainer.appendChild(qDiv);
        });

        card.appendChild(questionContainer);

        // =========================================================
        // 6. SUBMIT BUTTON + CLEAR BUTTON
        // =========================================================
        const submitWrapper = document.createElement('div');
        submitWrapper.style.cssText = `
            margin-top: 16px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
            border-top: 0.5px solid var(--accent-color);
            padding-top: 14px;
        `;

        // ----- CLEAR BUTTON -----
        const clearBtn = document.createElement('button');
        clearBtn.className = 'submit-btn';
        clearBtn.textContent = '🔄 Clear All';
        clearBtn.style.background = 'var(--accent-color)';
        clearBtn.style.color = 'var(--text-secondary)';
        clearBtn.style.marginRight = 'auto';
        clearBtn.dataset.exerciseId = exercise.id;
        
        clearBtn.addEventListener('click', function() {
            // සියලුම input fields හිස් කරන්න
            const allInputs = questionContainer.querySelectorAll('input[type="text"], input[type="number"]');
            allInputs.forEach(input => input.value = '');
            
            // සියලුම select dropdown reset කරන්න
            const allSelects = questionContainer.querySelectorAll('select');
            allSelects.forEach(select => {
                select.selectedIndex = 0;
            });
            
            // පෙර ප්‍රතිඵල පණිවිඩ ඉවත් කරන්න
            const allResults = questionContainer.querySelectorAll('.result-message');
            allResults.forEach(result => {
                result.classList.remove('show', 'pass', 'fail');
                result.textContent = '';
            });
            
            // කාඩ්පතේ border ඉවත් කරන්න
            const allItems = questionContainer.querySelectorAll('.question-item');
            allItems.forEach(item => item.classList.remove('correct', 'wrong'));
            
            // සමස්ත ප්‍රතිඵලය ඉවත් කරන්න
            const overallDiv = submitWrapper.querySelector('.result-message');
            if (overallDiv) {
                overallDiv.classList.remove('show', 'pass', 'fail');
                overallDiv.textContent = '';
            }
        });
        
        submitWrapper.appendChild(clearBtn);

        // ----- SUBMIT BUTTON -----
        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = '✅ すべての こたえを みる';
        submitBtn.dataset.exerciseId = exercise.id;
        submitWrapper.appendChild(submitBtn);

        const overallResult = document.createElement('div');
        overallResult.className = 'result-message';
        overallResult.dataset.overall = exercise.id;
        overallResult.style.marginTop = '0';
        submitWrapper.appendChild(overallResult);

        card.appendChild(submitWrapper);
            // --- Submit Logic ---
    submitBtn.addEventListener('click', function() {
        const isChoiceEx = exercise.type === 'choice';
        let correctCount = 0;
        let totalCount = exercise.questions.length;
        let allAnswered = true;

        exercise.questions.forEach((q) => {
            const qDiv = questionContainer.querySelector(`[data-question-id="${q.id}"]`);
            if (!qDiv) return;

            if (isChoiceEx) {
                const select = qDiv.querySelector(`select[name="${q.id}"]`);
                const resultDiv = qDiv.querySelector('.result-message');
                
                // පෙර ප්‍රතිඵල ඉවත් කරන්න
                if (resultDiv) {
                    resultDiv.classList.remove('show', 'pass', 'fail');
                }

                if (!select || select.value === '') {
                    allAnswered = false;
                    if (resultDiv) {
                        resultDiv.textContent = '⚠️ කරුණාකර පිළිතුරක් තෝරන්න.';
                        resultDiv.className = 'result-message show fail';
                    }
                    return;
                }

                const selectedValue = parseInt(select.value);
                const correctOption = select.querySelector('option[data-correct="true"]');
                const isCorrect = correctOption && selectedValue === parseInt(correctOption.value);
                
                qDiv.classList.remove('correct', 'wrong');
                qDiv.classList.add(isCorrect ? 'correct' : 'wrong');

                if (isCorrect) correctCount++;
                if (resultDiv) {
                    if (isCorrect) {
                        resultDiv.textContent = '✅ නිවැරදියි!';
                        resultDiv.className = 'result-message show pass';
                    } else {
                        // Numbers, Counting, Calendar, Nouns කාණ්ඩ සඳහා නිවැරදි පිළිතුරු නොපෙන්වයි
                        if (exercise.category === 'numbers' || exercise.category === 'counting' || exercise.category === 'calendar' || exercise.category === 'nouns') {
                            resultDiv.textContent = '❌ වැරදියි. නැවත උත්සාහ කරන්න.';
                        } else {
                            const correctText = correctOption ? correctOption.textContent : '';
                            resultDiv.textContent = `❌ වැරදියි. නිවැරදි පිළිතුර: ${correctText}`;
                        }
                        resultDiv.className = 'result-message show fail';
                    }
                }

            } else {
                const input = qDiv.querySelector('input[type="text"], input[type="number"]');
                const resultDiv = qDiv.querySelector('.result-message');
                if (!input || !resultDiv) return;

                const userAnswer = normalizeInput(input.value);
                const correctAnswer = String(q.correct).trim().toLowerCase();

                if (userAnswer === '') {
                    allAnswered = false;
                    resultDiv.textContent = '⚠️ කරුණාකර පිළිතුරක් ඇතුළත් කරන්න.';
                    resultDiv.className = 'result-message show fail';
                    return;
                }

                const isCorrect = userAnswer === correctAnswer;
                qDiv.classList.remove('correct', 'wrong');
                qDiv.classList.add(isCorrect ? 'correct' : 'wrong');

                if (isCorrect) correctCount++;
                if (resultDiv) {
                    if (isCorrect) {
                        resultDiv.textContent = '✅ නිවැරදියි!';
                        resultDiv.className = 'result-message show pass';
                    } else {
                        // Numbers, Counting, Calendar කාණ්ඩ සඳහා නිවැරදි පිළිතුරු නොපෙන්වයි
                        if (exercise.category === 'numbers' || exercise.category === 'counting' || exercise.category === 'calendar') {
                            resultDiv.textContent = '❌ වැරදියි. නැවත උත්සාහ කරන්න.';
                        } else {
                            resultDiv.textContent = `❌ වැරදියි. නිවැරදි පිළිතුර: ${q.correct}`;
                        }
                        resultDiv.className = 'result-message show fail';
                    }
                }
            }
        });

        const overallDiv = submitWrapper.querySelector('.result-message');
        if (overallDiv) {
            if (!allAnswered) {
                overallDiv.textContent = '⚠️ කරුණාකර සියලු ප්‍රශ්නවලට පිළිතුරු දෙන්න.';
                overallDiv.className = 'result-message show fail';
            } else {
                const percentage = Math.round((correctCount / totalCount) * 100);
                overallDiv.textContent = `📊 ප්‍රතිඵලය: ${correctCount}/${totalCount} (${percentage}%)`;
                overallDiv.className = `result-message show ${percentage >= 70 ? 'pass' : 'fail'}`;
            }
        }
    });

    return card;
}

// --- Audio Controller ---
function setupAudioController() {
    if (allAudioElements.length === 0) return;

    allAudioElements.forEach(function(currentAudio) {
        currentAudio.removeEventListener('play', handlePlay);
        currentAudio.addEventListener('play', handlePlay);
    });
}

function handlePlay(event) {
    const current = event.target;
    allAudioElements.forEach(function(other) {
        if (other !== current && !other.paused) {
            other.pause();
            other.currentTime = 0;
        }
    });
}
        // --- Navigation Buttons ---
    const navBtns = document.querySelectorAll('.ex-nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            navBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.ex;
            renderExercises(currentCategory);
        });
    });

    // --- Initial render ---
    setTimeout(() => {
        renderExercises('all');
    }, 100);
});