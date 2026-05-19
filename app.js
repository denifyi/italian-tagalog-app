// Lesson Data
const lessonsData = {
    1: { day: 1, week: 1, topic: "Basic Greetings", vocabulary: [
        {italian: "Ciao", tagalog: "Kumusta", english: "Hello/Bye"},
        {italian: "Buongiorno", tagalog: "Magandang umaga", english: "Good morning"},
        {italian: "Buon pomeriggio", tagalog: "Magandang tanghali", english: "Good afternoon"},
        {italian: "Buonasera", tagalog: "Magandang gabi", english: "Good evening"},
        {italian: "Buonanotte", tagalog: "Magandang gabi", english: "Good night"}
    ], practice: "Say each greeting aloud 5 times. Practice at different times of day." },
    
    2: { day: 2, week: 1, topic: "Polite Expressions", vocabulary: [
        {italian: "Per favore", tagalog: "Paki-/Please", english: "Please"},
        {italian: "Grazie", tagalog: "Salamat", english: "Thank you"},
        {italian: "Prego", tagalog: "Walang anuman", english: "You're welcome"},
        {italian: "Scusi", tagalog: "Paumanhin", english: "Excuse me"},
        {italian: "Mi scuso", tagalog: "Pasensya na", english: "I apologize"}
    ], practice: "Create 5 polite conversation scenarios." },
    
    3: { day: 3, week: 1, topic: "Yes/No & Basic Answers", vocabulary: [
        {italian: "Sì", tagalog: "Oo", english: "Yes"},
        {italian: "No", tagalog: "Hindi", english: "No"},
        {italian: "Forse", tagalog: "Baka", english: "Maybe"},
        {italian: "Non capisco", tagalog: "Hindi ko maintindihan", english: "I don't understand"},
        {italian: "Capisco", tagalog: "Naiintindihan ko", english: "I understand"}
    ], practice: "Practice yes/no questions. Create 10 question-answer pairs." },
    
    4: { day: 4, week: 1, topic: "Self Introduction", vocabulary: [
        {italian: "Mi chiamo...", tagalog: "Ako ay si...", english: "My name is..."},
        {italian: "Come ti chiami?", tagalog: "Ano ang pangalan mo?", english: "What's your name?"},
        {italian: "Piacere", tagalog: "Masaya akong makilala ka", english: "Nice to meet you"},
        {italian: "Sono di...", tagalog: "Ako ay galing sa...", english: "I'm from..."}
    ], practice: "Introduce yourself 10 times out loud." },
    
    5: { day: 5, week: 1, topic: "How are you?", vocabulary: [
        {italian: "Come stai?", tagalog: "Kumusta ka?", english: "How are you?"},
        {italian: "Bene, grazie", tagalog: "Mabuti, salamat", english: "Well, thank you"},
        {italian: "Così così", tagalog: "Okay lang", english: "So-so"},
        {italian: "Male", tagalog: "Masama", english: "Bad"},
        {italian: "E tu?", tagalog: "At ikaw?", english: "And you?"}
    ], practice: "Ask and answer wellness questions." },
    
    6: { day: 6, week: 1, topic: "Nationality & Origin", vocabulary: [
        {italian: "Sono italiano/a", tagalog: "Ako ay Italian/Filipino", english: "I'm Italian/Filipino"},
        {italian: "Di dove sei?", tagalog: "Taga-saan ka?", english: "Where are you from?"},
        {italian: "Sono di Milano", tagalog: "Galing ako sa Milan", english: "I'm from Milan"}
    ], practice: "State your nationality and ask others." },
    
    7: { day: 7, week: 1, topic: "Week 1 Review", isReview: true, vocabulary: [], practice: "Review all Week 1 content. Have a full conversation." },
    
    8: { day: 8, week: 2, topic: "Numbers 1-10", vocabulary: [
        {italian: "uno", tagalog: "isa", english: "1"},
        {italian: "due", tagalog: "dalawa", english: "2"},
        {italian: "tre", tagalog: "tatlo", english: "3"},
        {italian: "quattro", tagalog: "apat", english: "4"},
        {italian: "cinque", tagalog: "lima", english: "5"},
        {italian: "sei", tagalog: "anim", english: "6"},
        {italian: "sette", tagalog: "pito", english: "7"},
        {italian: "otto", tagalog: "walo", english: "8"},
        {italian: "nove", tagalog: "siyam", english: "9"},
        {italian: "dieci", tagalog: "sampu", english: "10"}
    ], practice: "Count objects around you in both languages." },
    
    9: { day: 9, week: 2, topic: "Numbers 11-20", vocabulary: [
        {italian: "undici", tagalog: "labing-isa", english: "11"},
        {italian: "dodici", tagalog: "labindalawa", english: "12"},
        {italian: "quindici", tagalog: "labinlima", english: "15"},
        {italian: "venti", tagalog: "dalawampu", english: "20"}
    ], practice: "Count backwards from 20." },
    
    10: { day: 10, week: 2, topic: "Time Expressions", vocabulary: [
        {italian: "Che ora è?", tagalog: "Anong oras na?", english: "What time?"},
        {italian: "Oggi", tagalog: "Ngayon", english: "Today"},
        {italian: "Domani", tagalog: "Bukas", english: "Tomorrow"},
        {italian: "Ieri", tagalog: "Kahapon", english: "Yesterday"}
    ], practice: "Ask and tell time." },
    
    11: { day: 11, week: 2, topic: "Days of the Week", vocabulary: [
        {italian: "Lunedì", tagalog: "Lunes", english: "Monday"},
        {italian: "Martedì", tagalog: "Martes", english: "Tuesday"},
        {italian: "Mercoledì", tagalog: "Miyerkules", english: "Wednesday"},
        {italian: "Giovedì", tagalog: "Huwebes", english: "Thursday"},
        {italian: "Venerdì", tagalog: "Biyernes", english: "Friday"},
        {italian: "Sabato", tagalog: "Sabado", english: "Saturday"},
        {italian: "Domenica", tagalog: "Linggo", english: "Sunday"}
    ], practice: "Say what day it is each morning." },
    
    12: { day: 12, week: 2, topic: "Months (Part 1)", vocabulary: [
        {italian: "Gennaio", tagalog: "Enero", english: "January"},
        {italian: "Febbraio", tagalog: "Pebrero", english: "February"},
        {italian: "Marzo", tagalog: "Marso", english: "March"},
        {italian: "Aprile", tagalog: "Abril", english: "April"},
        {italian: "Maggio", tagalog: "Mayo", english: "May"},
        {italian: "Giugno", tagalog: "Hunyo", english: "June"}
    ], practice: "Say your birth month." },
    
    13: { day: 13, week: 2, topic: "Months (Part 2)", vocabulary: [
        {italian: "Luglio", tagalog: "Hulyo", english: "July"},
        {italian: "Agosto", tagalog: "Agosto", english: "August"},
        {italian: "Settembre", tagalog: "Setyembre", english: "September"},
        {italian: "Ottobre", tagalog: "Oktubre", english: "October"},
        {italian: "Novembre", tagalog: "Nobyembre", english: "November"},
        {italian: "Dicembre", tagalog: "Disyembre", english: "December"}
    ], practice: "Name holidays in different months." },
    
    14: { day: 14, week: 2, topic: "Week 2 Review", isReview: true, vocabulary: [], practice: "Review numbers, time, days, months." },
    
    15: { day: 15, week: 3, topic: "Family Members (Part 1)", vocabulary: [
        {italian: "Madre/Mamma", tagalog: "Ina/Nanay", english: "Mother"},
        {italian: "Padre/Papà", tagalog: "Ama/Tatay", english: "Father"},
        {italian: "Fratello", tagalog: "Kapatid na lalaki", english: "Brother"},
        {italian: "Sorella", tagalog: "Kapatid na babae", english: "Sister"}
    ], practice: "Describe your family." },
    
    16: { day: 16, week: 3, topic: "Family Members (Part 2)", vocabulary: [
        {italian: "Nonno", tagalog: "Lolo", english: "Grandfather"},
        {italian: "Nonna", tagalog: "Lola", english: "Grandmother"},
        {italian: "Figlio", tagalog: "Anak na lalaki", english: "Son"},
        {italian: "Figlia", tagalog: "Anak na babae", english: "Daughter"}
    ], practice: "Talk about extended family." },
    
    17: { day: 17, week: 3, topic: "Basic Colors", vocabulary: [
        {italian: "Rosso", tagalog: "Pula", english: "Red"},
        {italian: "Blu", tagalog: "Asul", english: "Blue"},
        {italian: "Verde", tagalog: "Berde", english: "Green"},
        {italian: "Giallo", tagalog: "Dilaw", english: "Yellow"},
        {italian: "Nero", tagalog: "Itim", english: "Black"},
        {italian: "Bianco", tagalog: "Puti", english: "White"}
    ], practice: "Name colors of objects around you." },
    
    18: { day: 18, week: 3, topic: "Common Adjectives", vocabulary: [
        {italian: "Grande", tagalog: "Malaki", english: "Big"},
        {italian: "Piccolo", tagalog: "Maliit", english: "Small"},
        {italian: "Bello", tagalog: "Maganda", english: "Beautiful"},
        {italian: "Buono", tagalog: "Mabuti", english: "Good"},
        {italian: "Cattivo", tagalog: "Masama", english: "Bad"}
    ], practice: "Describe objects using adjectives." },
    
    19: { day: 19, week: 3, topic: "Essential Verbs (Part 1)", vocabulary: [
        {italian: "Essere (Sono)", tagalog: "Maging (Ako ay)", english: "To be (I am)"},
        {italian: "Avere (Ho)", tagalog: "Magkaroon (Mayroon ako)", english: "To have (I have)"},
        {italian: "Fare (Faccio)", tagalog: "Gawin (Ginagawa ko)", english: "To do (I do)"}
    ], practice: "Create sentences with each verb." },
    
    20: { day: 20, week: 3, topic: "Essential Verbs (Part 2)", vocabulary: [
        {italian: "Mangiare", tagalog: "Kumain", english: "To eat"},
        {italian: "Bere", tagalog: "Uminom", english: "To drink"},
        {italian: "Vedere", tagalog: "Makita", english: "To see"},
        {italian: "Parlare", tagalog: "Magsalita", english: "To speak"}
    ], practice: "Describe daily activities." },
    
    21: { day: 21, week: 3, topic: "Week 3 Review", isReview: true, vocabulary: [], practice: "Review family, colors, adjectives, verbs." },
    
    22: { day: 22, week: 4, topic: "Basic Food Items", vocabulary: [
        {italian: "Pane", tagalog: "Tinapay", english: "Bread"},
        {italian: "Acqua", tagalog: "Tubig", english: "Water"},
        {italian: "Caffè", tagalog: "Kape", english: "Coffee"},
        {italian: "Carne", tagalog: "Karne", english: "Meat"},
        {italian: "Pesce", tagalog: "Isda", english: "Fish"},
        {italian: "Riso", tagalog: "Kanin", english: "Rice"}
    ], practice: "Name foods you ate today." },
    
    23: { day: 23, week: 4, topic: "At the Restaurant", vocabulary: [
        {italian: "Il conto, per favore", tagalog: "Pabili ng bill", english: "The bill, please"},
        {italian: "Vorrei...", tagalog: "Gusto ko ng...", english: "I would like..."},
        {italian: "Buono!", tagalog: "Masarap!", english: "Delicious!"}
    ], practice: "Role-play ordering food." },
    
    24: { day: 24, week: 4, topic: "Common Places", vocabulary: [
        {italian: "Casa", tagalog: "Bahay", english: "House"},
        {italian: "Scuola", tagalog: "Paaralan", english: "School"},
        {italian: "Ospedale", tagalog: "Ospital", english: "Hospital"},
        {italian: "Negozio", tagalog: "Tindahan", english: "Shop"}
    ], practice: "Give directions using these places." },
    
    25: { day: 25, week: 4, topic: "Directions & Location", vocabulary: [
        {italian: "Dove?", tagalog: "Saan?", english: "Where?"},
        {italian: "Qui", tagalog: "Dito", english: "Here"},
        {italian: "Là", tagalog: "Doon", english: "There"},
        {italian: "Destra", tagalog: "Kanan", english: "Right"},
        {italian: "Sinistra", tagalog: "Kaliwa", english: "Left"},
        {italian: "Dritto", tagalog: "Diretso", english: "Straight"}
    ], practice: "Practice giving directions." },
    
    26: { day: 26, week: 4, topic: "Shopping Phrases", vocabulary: [
        {italian: "Quanto costa?", tagalog: "Magkano?", english: "How much?"},
        {italian: "Caro", tagalog: "Mahal", english: "Expensive"},
        {italian: "Economico", tagalog: "Mura", english: "Cheap"}
    ], practice: "Role-play shopping." },
    
    27: { day: 27, week: 4, topic: "Emergency Phrases", vocabulary: [
        {italian: "Aiuto!", tagalog: "Tulong!", english: "Help!"},
        {italian: "Chiamate un medico", tagalog: "Tawagan ang doktor", english: "Call a doctor"},
        {italian: "Non capisco", tagalog: "Hindi ko maintindihan", english: "I don't understand"}
    ], practice: "Memorize emergency phrases." },
    
    28: { day: 28, week: 4, topic: "Weather & Feelings", vocabulary: [
        {italian: "Fa caldo", tagalog: "Mainit", english: "It's hot"},
        {italian: "Fa freddo", tagalog: "Malamig", english: "It's cold"},
        {italian: "Sono felice", tagalog: "Masaya ako", english: "I'm happy"},
        {italian: "Sono stanco", tagalog: "Pagod ako", english: "I'm tired"}
    ], practice: "Describe weather and feelings." },
    
    29: { day: 29, week: 4, topic: "Final Review", isReview: true, vocabulary: [], practice: "Review all Weeks 1-4." },
    
    30: { day: 30, week: 4, topic: "Comprehensive Quiz", isReview: true, isQuizDay: true, vocabulary: [], practice: "Complete the final quiz!" }
};

// App State
let appState = {
    currentDay: 1,
    completedLessons: JSON.parse(localStorage.getItem('completedLessons')) || [],
    currentLesson: null,
    currentFlashcardIndex: 0,
    flashcards: [],
    quizScore: 0,
    totalWords: 0
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    updateProgress();
    renderLessons(1);
    renderCalendar();
    populateFlashcardSelector();
});

function initializeApp() {
    // Calculate total words
    Object.values(lessonsData).forEach(lesson => {
        appState.totalWords += lesson.vocabulary ? lesson.vocabulary.length : 0;
    });
    
    // Set current day
    const lastCompleted = Math.max(...appState.completedLessons, 0);
    appState.currentDay = Math.min(lastCompleted + 1, 30);
}

function setupEventListeners() {
    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.target.dataset.tab);
        });
    });
    
    // Week Selector
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectWeek(e.target.dataset.week);
        });
    });
    
    // Back Button
    document.getElementById('backToLessons').addEventListener('click', () => {
        document.getElementById('lessonsGrid').parentElement.style.display = 'block';
        document.getElementById('lessonDisplay').style.display = 'none';
    });
    
    // Complete Lesson
    document.getElementById('completeLesson').addEventListener('click', completeLesson);
    
    // Flashcard Controls
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('flipCard').addEventListener('click', flipCard);
    document.getElementById('prevCard').addEventListener('click', () => navigateCard(-1));
    document.getElementById('nextCard').addEventListener('click', () => navigateCard(1));
    document.getElementById('shuffleCards').addEventListener('click', shuffleFlashcards);
    document.getElementById('flashcardLesson').addEventListener('change', loadFlashcards);
    document.getElementById('flashcardMode').addEventListener('change', loadFlashcards);
    
    // Quiz
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) btn.classList.add('active');
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Load specific tab content
    if (tabName === 'flashcards') loadFlashcards();
}

function selectWeek(week) {
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.week === week) btn.classList.add('active');
    });
    renderLessons(parseInt(week));
}

function renderLessons(week) {
    const grid = document.getElementById('lessonsGrid');
    grid.innerHTML = '';
    
    Object.values(lessonsData).filter(l => l.week === week).forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        if (appState.completedLessons.includes(lesson.day)) {
            card.classList.add('completed');
        }
        if (lesson.isReview) {
            card.classList.add('review');
        }
        card.innerHTML = `
            <h3>Day ${lesson.day}</h3>
            <p>${lesson.topic}</p>
        `;
        card.addEventListener('click', () => showLesson(lesson.day));
        grid.appendChild(card);
    });
}

function showLesson(day) {
    const lesson = lessonsData[day];
    appState.currentLesson = day;
    
    document.getElementById('lessonsGrid').parentElement.style.display = 'none';
    document.getElementById('lessonDisplay').style.display = 'block';
    
    document.getElementById('lessonTitle').textContent = lesson.topic;
    document.getElementById('lessonDay').textContent = `Day ${lesson.day}`;
    document.getElementById('practiceText').textContent = lesson.practice;
    
    // Render vocabulary table
    const tableContainer = document.getElementById('vocabularyTable');
    if (lesson.vocabulary && lesson.vocabulary.length > 0) {
        let tableHTML = `
            <table class="vocab-table">
                <thead>
                    <tr>
                        <th>Italian</th>
                        <th>Tagalog</th>
                        <th>English</th>
                    </tr>
                </thead>
                <tbody>
        `;
        lesson.vocabulary.forEach(word => {
            tableHTML += `
                <tr>
                    <td>${word.italian}</td>
                    <td>${word.tagalog}</td>
                    <td>${word.english}</td>
                </tr>
            `;
        });
        tableHTML += '</tbody></table>';
        tableContainer.innerHTML = tableHTML;
    } else {
        tableContainer.innerHTML = '<p><em>This is a review day. Practice all previous lessons!</em></p>';
    }
    
    // Update complete button
    const completeBtn = document.getElementById('completeLesson');
    if (appState.completedLessons.includes(day)) {
        completeBtn.textContent = '✓ Completed';
        completeBtn.style.background = '#6c757d';
    } else {
        completeBtn.textContent = '✓ Mark as Complete';
        completeBtn.style.background = '#28a745';
    }
}

function completeLesson() {
    const day = appState.currentLesson;
    if (!appState.completedLessons.includes(day)) {
        appState.completedLessons.push(day);
        localStorage.setItem('completedLessons', JSON.stringify(appState.completedLessons));
        updateProgress();
        renderLessons(lessonsData[day].week);
        renderCalendar();
        
        // Update button
        const btn = document.getElementById('completeLesson');
        btn.textContent = '✓ Completed';
        btn.style.background = '#6c757d';
        
        alert('🎉 Great job! Lesson completed!');
    }
}

function updateProgress() {
    const completed = appState.completedLessons.length;
    const percent = Math.round((completed / 30) * 100);
    const wordsLearned = appState.completedLessons.reduce((total, day) => {
        const lesson = lessonsData[day];
        return total + (lesson.vocabulary ? lesson.vocabulary.length : 0);
    }, 0);
    
    document.getElementById('currentDay').textContent = appState.currentDay;
    document.getElementById('completedLessons').textContent = completed;
    document.getElementById('wordsLearned').textContent = wordsLearned;
    document.getElementById('progressPercent').textContent = percent;
    document.getElementById('progressFill').style.width = percent + '%';
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    
    for (let day = 1; day <= 30; day++) {
        const lesson = lessonsData[day];
        const dayCard = document.createElement('div');
        dayCard.className = 'calendar-day';
        
        if (appState.completedLessons.includes(day)) {
            dayCard.classList.add('completed');
        } else if (day === appState.currentDay) {
            dayCard.classList.add('current');
        }
        if (lesson.isReview) {
            dayCard.classList.add('review');
        }
        
        dayCard.innerHTML = `
            <span class="day-number">Day ${day}</span>
            <span class="day-topic">${lesson.topic}</span>
        `;
        dayCard.addEventListener('click', () => {
            switchTab('lessons');
            selectWeek(lesson.week);
            setTimeout(() => showLesson(day), 100);
        });
        grid.appendChild(dayCard);
    }
}

// Flashcards
function populateFlashcardSelector() {
    const select = document.getElementById('flashcardLesson');
    Object.values(lessonsData).forEach(lesson => {
        if (lesson.vocabulary && lesson.vocabulary.length > 0) {
            const option = document.createElement('option');
            option.value = lesson.day;
            option.textContent = `Day ${lesson.day}: ${lesson.topic}`;
            select.appendChild(option);
        }
    });
}

function loadFlashcards() {
    const lessonDay = parseInt(document.getElementById('flashcardLesson').value);
    const lesson = lessonsData[lessonDay];
    
    if (lesson && lesson.vocabulary) {
        appState.flashcards = [...lesson.vocabulary];
        appState.currentFlashcardIndex = 0;
        showFlashcard();
    }
}

function showFlashcard() {
    if (appState.flashcards.length === 0) return;
    
    const mode = document.getElementById('flashcardMode').value;
    const card = appState.flashcards[appState.currentFlashcardIndex];
    const flashcard = document.getElementById('flashcard');
    
    // Remove flipped class
    flashcard.classList.remove('flipped');
    
    // Set content based on mode
    let frontText, backText, englishText;
    
    if (mode === 'italian-tagalog') {
        frontText = card.italian;
        backText = card.tagalog;
        englishText = card.english;
    } else if (mode === 'tagalog-italian') {
        frontText = card.tagalog;
        backText = card.italian;
        englishText = card.english;
    } else {
        frontText = card.english;
        backText = `${card.italian} / ${card.tagalog}`;
        englishText = '';
    }
    
    document.getElementById('flashcardFront').textContent = frontText;
    document.getElementById('flashcardBack').textContent = backText;
    document.getElementById('flashcardEnglish').textContent = englishText;
    
    // Update counter
    document.getElementById('cardCounter').textContent = 
        `${appState.currentFlashcardIndex + 1} / ${appState.flashcards.length}`;
    
    // Update navigation buttons
    document.getElementById('prevCard').disabled = appState.currentFlashcardIndex === 0;
    document.getElementById('nextCard').disabled = 
        appState.currentFlashcardIndex === appState.flashcards.length - 1;
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function navigateCard(direction) {
    appState.currentFlashcardIndex += direction;
    appState.currentFlashcardIndex = Math.max(0, Math.min(
        appState.currentFlashcardIndex, 
        appState.flashcards.length - 1
    ));
    showFlashcard();
}

function shuffleFlashcards() {
    for (let i = appState.flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [appState.flashcards[i], appState.flashcards[j]] = 
        [appState.flashcards[j], appState.flashcards[i]];
    }
    appState.currentFlashcardIndex = 0;
    showFlashcard();
}

// Quiz Functions
function startQuiz() {
    alert('🎯 Quiz feature coming soon! For now, use flashcards to practice.');
}

// Initialize first flashcard load
setTimeout(() => {
    if (document.getElementById('flashcardLesson').options.length > 0) {
        loadFlashcards();
    }
}, 100);
