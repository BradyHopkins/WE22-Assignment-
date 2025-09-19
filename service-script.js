// =========================
// AI COACH FUNCTIONALITY
// =========================
document.addEventListener('DOMContentLoaded', () => {
    const coachButton = document.getElementById('coach-guide-button');
    const coachResponse = document.getElementById('coach-response');

    // Simple AI Coach responses
    const responses = [
        "Welcome! To start, try the AI Chatbot on the Product page. Just type in your question, and I'll guide you through it.",
        "Feeling stressed? Head to the Product page and use the Daily Mood Tracker to log your feelings. It's the first step to understanding your emotional patterns.",
        "To get the most out of our tools, set a self-care goal on this page. For example, add 'Practice a 5-minute meditation' to your routine list.",
        "Remember to use the daily mood tracker. Consistency is key to gaining valuable insights into your mental wellness.",
        "Our AI chatbot is trained in CBT. Try asking it about cognitive distortions like 'all-or-nothing thinking' to learn more.",
        "Make use of the Daily Meditation to feel at peace if you are feeling stressed."
    ];

    coachButton.addEventListener('click', () => {
        // Get a random response from the array
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        // Update the content and show the response box
        coachResponse.textContent = randomResponse;
        coachResponse.style.display = 'block';
    });
});

// =========================
// SELF-CARE ROUTINES FUNCTIONALITY
// =========================
document.addEventListener('DOMContentLoaded', () => {
    const routinesList = document.getElementById('routines-list');
    const addRoutineButton = document.querySelector('.add-routine-button');

    addRoutineButton.addEventListener('click', () => {
        const newRoutineText = prompt("Enter a new self-care routine:");
        
        if (newRoutineText) {
            // Create a new list item
            const newRoutineItem = document.createElement('li');
            
            // Create a new checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            // Add the checkbox and text to the list item
            newRoutineItem.appendChild(checkbox);
            newRoutineItem.appendChild(document.createTextNode(newRoutineText));
            
            // Append the new item to the list
            routinesList.appendChild(newRoutineItem);
        }
    });

    // Add event listener to the list to handle checkbox changes
    routinesList.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            const listItem = event.target.closest('li');
            if (event.target.checked) {
                listItem.style.textDecoration = 'line-through';
                listItem.style.color = '#999';
            } else {
                listItem.style.textDecoration = 'none';
                listItem.style.color = '#333';
            }
        }
    });
});