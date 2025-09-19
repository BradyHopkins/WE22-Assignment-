// =========================
// CHATBOT FUNCTIONALITY
// =========================
document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Function to add a message to the chat window
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = text;
        chatWindow.appendChild(messageDiv);

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Function to handle bot responses (simple logic)
    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        let botResponse = "I'm sorry, I don't understand. Please ask me about CBT, mindfulness, or stress.";

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            botResponse = "Hello! It's great to connect. How are you feeling today?";
        } else if (lowerCaseMessage.includes('cbt')) {
            botResponse = "CBT stands for Cognitive Behavioral Therapy. It's a type of talk therapy that helps you become aware of inaccurate or negative thinking so you can view challenging situations more clearly.";
        } else if (lowerCaseMessage.includes('stress')) {
            botResponse = "Stress can be tough. Try a simple breathing exercise: Inhale slowly for four seconds, hold for four, and exhale for four. Repeat a few times. Hopefully that will help you";
        } else if (lowerCaseMessage.includes('mindfulness')) {
            botResponse = "Mindfulness is the practice of being present in the moment. You can try focusing on your breath or the sensations in your body for a few minutes to start.";
        } else if (lowerCaseMessage.includes('how are you')) {
            botResponse = "I am an AI, so I don't have feelings, but I'm here and ready to help you on your mental wellness journey!";
        } else if (lowerCaseMessage.includes('help')) {
            botResponse = "I can offer guidance on topics like managing stress, understanding CBT principles, or providing simple mindfulness exercises. What's on your mind?";
        }
        

        return botResponse;
    }

    // Event listener for the send button
    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            userInput.value = ''; // Clear input field

            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                addMessage(botResponse, 'bot');
            }, 500); // Simulate a brief delay for a more natural feel
        }
    });

    // Event listener for the Enter key in the input field
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});

// =========================
// MOOD TRACKER FUNCTIONALITY
// =========================
document.addEventListener('DOMContentLoaded', () => {
    const moodOptions = document.querySelectorAll('.mood-option');
    const moodLog = document.getElementById('mood-log');

    // Function to log the selected mood
    function logMood(mood) {
        const timestamp = new Date().toLocaleTimeString();
        const listItem = document.createElement('li');
        listItem.textContent = `[${timestamp}] Mood logged: ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
        moodLog.prepend(listItem); // Add new entries to the top
    }

    // Event listener for each mood emoji
    moodOptions.forEach(emoji => {
        emoji.addEventListener('click', (event) => {
            // Remove 'selected' class from all emojis
            moodOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add 'selected' class to the clicked emoji
            event.target.classList.add('selected');

            const selectedMood = event.target.getAttribute('data-mood');
            logMood(selectedMood);
        });
    });
});

 // Get DOM elements
        const signupBtn = document.getElementById('signupBtn');
        const signupModal = document.getElementById('signupModal');
        const closeModal = document.getElementById('closeModal');
        const signupForm = document.getElementById('signupForm');
        
        const premiumBtn = document.getElementById('premiumBtn');
        const premiumModal = document.getElementById('premiumModal');
        const closePremiumModal = document.getElementById('closePremiumModal');
        const premiumForm = document.getElementById('premiumForm');
        
        const freemiumBtn = document.getElementById('freemiumBtn');
        const notification = document.getElementById('notification');

        // Open signup modal
        signupBtn.addEventListener('click', () => {
            signupModal.style.display = 'flex';
        });

        // Open premium modal
        premiumBtn.addEventListener('click', () => {
            premiumModal.style.display = 'flex';
        });

        // Open freemium signup (direct to form)
        freemiumBtn.addEventListener('click', () => {
            signupModal.style.display = 'flex';
        });

        // Close modals
        closeModal.addEventListener('click', () => {
            signupModal.style.display = 'none';
        });

        closePremiumModal.addEventListener('click', () => {
            premiumModal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === signupModal) {
                signupModal.style.display = 'none';
            }
            if (e.target === premiumModal) {
                premiumModal.style.display = 'none';
            }
        });

        // Handle form submissions
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            signupModal.style.display = 'none';
            // No notification for general sign-up
            signupForm.reset();
        });

        premiumForm.addEventListener('submit', (e) => {
            e.preventDefault();
            premiumModal.style.display = 'none';
            showNotification();
            premiumForm.reset();
        });

        // Show notification function (only for premium)
        function showNotification() {
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 4000);
        }
    