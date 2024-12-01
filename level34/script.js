let hitCount = 0;
const hitCountElement = document.getElementById('hitCount');
const ball = document.getElementById('ball');

// Initialize the ball's position
let ballX = 200;
let ballY = 200;
ball.style.left = ballX + 'px';
ball.style.top = ballY + 'px';

// Variables for dragging the ball
let isDragging = false;
let startX, startY, offsetX, offsetY;

// Function to handle the ball drag
function startDrag(e) {
    isDragging = true;
    // Calculate the initial offset
    startX = e.clientX || e.touches[0].clientX;
    startY = e.clientY || e.touches[0].clientY;
    offsetX = ballX - startX;
    offsetY = ballY - startY;
    
    ball.style.cursor = 'grabbing';
}

// Function to move the ball
function dragBall(e) {
    if (!isDragging) return;

    let newX = (e.clientX || e.touches[0].clientX) + offsetX;
    let newY = (e.clientY || e.touches[0].clientY) + offsetY;

    // Constrain the ball within the screen boundaries
    const minX = 0;
    const minY = 0;
    const maxX = window.innerWidth - ball.offsetWidth;
    const maxY = window.innerHeight - ball.offsetHeight;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    ball.style.left = newX + 'px';
    ball.style.top = newY + 'px';
}

// Function to handle the end of dragging
function stopDrag() {
    if (isDragging) {
        isDragging = false;
        ball.style.cursor = 'grab';
        hitCount++; // Increment hit count
        hitCountElement.textContent = hitCount;
    }
}

// Attach events for mouse and touch
ball.addEventListener('mousedown', startDrag);
ball.addEventListener('mousemove', dragBall);
ball.addEventListener('mouseup', stopDrag);
ball.addEventListener('mouseleave', stopDrag);

ball.addEventListener('touchstart', startDrag);
ball.addEventListener('touchmove', dragBall);
ball.addEventListener('touchend', stopDrag);

// Prevent touch drag default behavior
ball.addEventListener('touchmove', function(e) {
    e.preventDefault();
});
