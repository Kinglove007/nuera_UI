const textarea = document.querySelector('.input');
const microphoneBtn = document.querySelector('.microphone');
const sendBtn = document.querySelector('.send');
const modeBtn = document.querySelector('.mode');
const html = document.documentElement;

modeBtn.addEventListener('click', function() {
    html.classList.toggle('dark-mode');
    const img = this.querySelector('img');
    if (html.classList.contains('dark-mode')) {
        img.src = 'assets/sun.svg';
        img.alt = 'Light mode';
    } else {
        img.src = 'assets/moon.svg';
        img.alt = 'Dark mode';
    }
});

textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
    if (this.scrollHeight > 80) {
        this.style.height = '80px';
        this.style.overflowY = 'auto';
    } else {
        this.style.overflowY = 'hidden';
    }

    // Count words
    const text = this.value.trim();
    const wordCount = text ? text.split(/\s+/).length : 0;

    // React based on word count
    if (wordCount > 0) {
        microphoneBtn.style.display = 'none';
        sendBtn.style.display = 'flex'; // Changed to flex to match button styling
    } else {
        microphoneBtn.style.display = 'flex';
        sendBtn.style.display = 'none';
    }
});