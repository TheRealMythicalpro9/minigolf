document.addEventListener('DOMContentLoaded', function() {
    const levelButtonsContainer = document.getElementById('levelButtons');

    // Generate buttons for each level from 1 to 50
    for (let i = 1; i <= 50; i++) {
        const button = document.createElement('button');
        button.textContent = `Level${i}`;
        button.id = `level${i}`;
        
        // Check if the previous level is completed to enable the button
        if (i === 1 || localStorage.getItem(`level${i - 1}-completed`)) {
            button.disabled = false;
            button.addEventListener('click', () => {
                window.location.href = `level${i}/index.html`;
            });
        } else {
            button.disabled = true;
        }

        // Append button to the container
        levelButtonsContainer.appendChild(button);
    }
});
