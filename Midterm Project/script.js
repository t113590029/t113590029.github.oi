// ===== Table Styler Functions =====
const originalStyles = {
    width: '600px',
    borderWidth: '3px',
    cellSpacing: '3',
    backgroundColor: '#ecf0f1'
};

function changeWidth(width) {
    const table = document.getElementById('myTable');
    if (table) {
        table.style.width = width;
        console.log('Width changed to:', width);
    } else {
        console.error('Table not found!');
    }
}

function changeBorderSpacing(spacing) {
    const table = document.getElementById('myTable');
    if (table) {
        table.style.borderWidth = spacing;
        table.setAttribute('cellspacing', parseInt(spacing));
        
        const cells = table.querySelectorAll('th, td');
        cells.forEach(cell => {
            cell.style.borderWidth = spacing;
        });
        console.log('Border spacing changed to:', spacing);
    } else {
        console.error('Table not found!');
    }
}

function changeColor(color) {
    const table = document.getElementById('myTable');
    if (table) {
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            cell.style.backgroundColor = color;
        });
        console.log('Color changed to:', color);
    } else {
        console.error('Table not found!');
    }
}

function resetTable() {
    const table = document.getElementById('myTable');
    if (table) {
        table.style.width = originalStyles.width;
        table.style.borderWidth = originalStyles.borderWidth;
        table.setAttribute('cellspacing', originalStyles.cellSpacing);
        
        const cells = table.querySelectorAll('th, td');
        cells.forEach(cell => {
            cell.style.borderWidth = '2px';
        });
        
        const tdCells = table.querySelectorAll('td');
        tdCells.forEach(cell => {
            cell.style.backgroundColor = originalStyles.backgroundColor;
        });
        console.log('Table reset!');
    } else {
        console.error('Table not found!');
    }
}

// ===== Polaroid Image Switcher =====
const images = [
    'anh1.jpg',
    'anh2.jpg',
    'anh3.jpeg',
    'anh4.jpg',
    'anh5.jpeg'
];

let currentIndex = 0;

function showImage() {
    const imageContainer = document.getElementById('imageContainer');
    const counter = document.getElementById('counter');
    
    if (imageContainer && counter) {
        imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">`;
        counter.textContent = `Image ${currentIndex + 1} of ${images.length}`;
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

// ===== Canvas Drawing - Dream Space Explorer =====
function drawDreamSpace() {
    const canvas = document.getElementById('spaceCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 1. Deep space background
    const spaceGradient = ctx.createLinearGradient(0, 0, 680, 400);
    spaceGradient.addColorStop(0, "#1a0933");
    spaceGradient.addColorStop(0.5, "#0f1a3d");
    spaceGradient.addColorStop(1, "#1a0933");
    ctx.fillStyle = spaceGradient;
    ctx.fillRect(0, 0, 680, 400);
    
    // 2. Stars
    ctx.fillStyle = "white";
    for (let i = 0; i < 60; i++) {
        const x = Math.random() * 680;
        const y = Math.random() * 400;
        const size = Math.random() * 2 + 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // 3. Main planet
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "#4a90e2";
    ctx.fill();
    
    // Planet stripes
    ctx.strokeStyle = "#357abd";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0.2, Math.PI - 0.2);
    ctx.stroke();
    
    ctx.strokeStyle = "#5fa3e8";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(340, 200, 100, Math.PI + 0.5, 2 * Math.PI - 0.3);
    ctx.stroke();
    
    // Planet highlight
    ctx.beginPath();
    ctx.arc(310, 170, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fill();
    
    // 4. Planet ring
    ctx.strokeStyle = "#d4a574";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.ellipse(340, 200, 140, 40, 0, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "#c9935a";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.ellipse(340, 200, 140, 40, 0, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Redraw planet to cover back part of ring
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "#4a90e2";
    ctx.fill();
    
    // Redraw planet details
    ctx.strokeStyle = "#357abd";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0.2, Math.PI - 0.2);
    ctx.stroke();
    
    ctx.strokeStyle = "#5fa3e8";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(340, 200, 100, Math.PI + 0.5, 2 * Math.PI - 0.3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(310, 170, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fill();
    
    // 5. Small moon
    ctx.beginPath();
    ctx.arc(120, 80, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#8b7355";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(115, 75, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#6b5940";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(130, 85, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // 6. Asteroid
    ctx.beginPath();
    ctx.arc(580, 320, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "#5a4a3a";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(575, 315, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#3a2a1a";
    ctx.fill();
    
    // 7. Spaceship
    ctx.fillStyle = "#e0e0e0";
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(140, 300);
    ctx.lineTo(130, 320);
    ctx.lineTo(110, 320);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#ff6b6b";
    ctx.beginPath();
    ctx.moveTo(110, 320);
    ctx.lineTo(130, 320);
    ctx.lineTo(120, 335);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(120, 310, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#6eb5ff";
    ctx.fill();
    
    // Flame
    ctx.fillStyle = "#ffa500";
    ctx.beginPath();
    ctx.moveTo(115, 335);
    ctx.lineTo(125, 335);
    ctx.lineTo(120, 350);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#ffff00";
    ctx.beginPath();
    ctx.moveTo(117, 335);
    ctx.lineTo(123, 335);
    ctx.lineTo(120, 345);
    ctx.closePath();
    ctx.fill();
    
    // 8. Comet
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(550, 60);
    ctx.lineTo(500, 90);
    ctx.stroke();
    
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(550, 60);
    ctx.lineTo(520, 100);
    ctx.stroke();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(550, 60, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // 9. Title
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.font = "bold 30px Arial";
    ctx.fillText("DREAM SPACE EXPLORER", 22, 52);
    
    ctx.fillStyle = "#6eb5ff";
    ctx.font = "bold 30px Arial";
    ctx.fillText("DREAM SPACE EXPLORER", 20, 50);
    
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.font = "14px Arial";
    ctx.fillText("Journey to the Unknown Planet", 20, 72);
    
    console.log('Dream Space Explorer rendered!');
}

// ===== Canvas Drawing for Index Page =====
function drawDreamSpaceIndex() {
    const canvas = document.getElementById('dreamCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    // Deep space background with gradient
    const spaceGradient = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
    spaceGradient.addColorStop(0, "#1a0933");
    spaceGradient.addColorStop(0.5, "#0f1a3d");
    spaceGradient.addColorStop(1, "#000814");
    ctx.fillStyle = spaceGradient;
    ctx.fillRect(0, 0, w, h);
    
    // Stars
    ctx.fillStyle = "white";
    for (let i = 0; i < 150; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const size = Math.random() * 2.5 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Large central planet
    const centerX = w/2;
    const centerY = h/2;
    const planetRadius = 120;
    
    // Planet body
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius, 0, 2 * Math.PI);
    const planetGrad = ctx.createRadialGradient(centerX - 30, centerY - 30, 20, centerX, centerY, planetRadius);
    planetGrad.addColorStop(0, "#5fa3e8");
    planetGrad.addColorStop(0.7, "#4a90e2");
    planetGrad.addColorStop(1, "#357abd");
    ctx.fillStyle = planetGrad;
    ctx.fill();
    
    // Planet atmosphere glow
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius + 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(79, 172, 254, 0.3)";
    ctx.lineWidth = 20;
    ctx.stroke();
    
    // Planet surface details
    ctx.strokeStyle = "rgba(53, 122, 189, 0.6)";
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius, 0.3, Math.PI - 0.3);
    ctx.stroke();
    
    ctx.strokeStyle = "rgba(95, 163, 232, 0.4)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius, Math.PI + 0.5, 2 * Math.PI - 0.3);
    ctx.stroke();
    
    // Highlight on planet
    ctx.beginPath();
    ctx.arc(centerX - 30, centerY - 30, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
    ctx.fill();
    
    // Planetary rings
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(-0.3);
    
    // Back ring (before planet)
    ctx.strokeStyle = "rgba(212, 165, 116, 0.3)";
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.ellipse(0, 0, 180, 50, 0, Math.PI, 2 * Math.PI);
    ctx.stroke();
    
    ctx.restore();
    
    // Redraw front of planet to cover back rings
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius, 0, 2 * Math.PI);
    ctx.fillStyle = planetGrad;
    ctx.fill();
    
    // Redraw planet details
    ctx.strokeStyle = "rgba(53, 122, 189, 0.6)";
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(centerX, centerY, planetRadius, 0.3, Math.PI - 0.3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(centerX - 30, centerY - 30, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
    ctx.fill();
    
    // Front rings
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(-0.3);
    
    ctx.strokeStyle = "#d4a574";
    ctx.lineWidth = 25;
    ctx.beginPath();
    ctx.ellipse(0, 0, 180, 50, 0, 0, Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "#c9935a";
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.ellipse(0, 0, 180, 50, 0, 0, Math.PI);
    ctx.stroke();
    
    ctx.restore();
    
    // Small moon top-left
    ctx.beginPath();
    ctx.arc(150, 100, 40, 0, 2 * Math.PI);
    const moonGrad = ctx.createRadialGradient(145, 95, 5, 150, 100, 40);
    moonGrad.addColorStop(0, "#9b8670");
    moonGrad.addColorStop(1, "#6b5940");
    ctx.fillStyle = moonGrad;
    ctx.fill();
    
    // Moon craters
    ctx.fillStyle = "rgba(50, 40, 30, 0.3)";
    ctx.beginPath();
    ctx.arc(145, 95, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(160, 105, 5, 0, 2 * Math.PI);
    ctx.fill();
    
    // Distant asteroid
    ctx.beginPath();
    ctx.arc(w - 120, h - 100, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#5a4a3a";
    ctx.fill();
    
    // Comet trail
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w - 80, 80);
    ctx.lineTo(w - 150, 120);
    ctx.stroke();
    
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w - 80, 80);
    ctx.lineTo(w - 130, 135);
    ctx.stroke();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(w - 80, 80, 5, 0, 2 * Math.PI);
    ctx.fill();
    
    // Spaceship
    ctx.fillStyle = "#d0d0d0";
    ctx.beginPath();
    ctx.moveTo(100, h - 200);
    ctx.lineTo(145, h - 200);
    ctx.lineTo(135, h - 175);
    ctx.lineTo(110, h - 175);
    ctx.closePath();
    ctx.fill();
    
    // Spaceship window
    ctx.beginPath();
    ctx.arc(122, h - 187, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#6eb5ff";
    ctx.fill();
    
    // Engine flames
    ctx.fillStyle = "#ffa500";
    ctx.beginPath();
    ctx.moveTo(115, h - 175);
    ctx.lineTo(130, h - 175);
    ctx.lineTo(122, h - 155);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#ffff00";
    ctx.beginPath();
    ctx.moveTo(118, h - 175);
    ctx.lineTo(127, h - 175);
    ctx.lineTo(122, h - 163);
    ctx.closePath();
    ctx.fill();
    
    // Title
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    ctx.fillStyle = "#6eb5ff";
    ctx.font = "bold 48px Arial";
    ctx.fillText("SPACE WORLD", 40, 70);
    
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.font = "20px Arial";
    ctx.fillText("Journey Beyond the Stars", 40, 100);
    
    console.log('Index canvas rendered!');
}

// ===== Page Load Handler =====
window.addEventListener('load', function() {
    console.log('Page loaded!');
    
    // Auto-highlight navigation based on current page
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage) {
        const navLinks = document.querySelectorAll('.navbar a[data-link]');
        navLinks.forEach(link => {
            if (link.getAttribute('data-link') === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize image viewer if on showcase page
    if (document.getElementById('imageContainer')) {
        console.log('Initializing image viewer...');
        showImage();
    }
    
    // Draw canvas if on contact page
    if (document.getElementById('spaceCanvas')) {
        console.log('Drawing canvas...');
        drawDreamSpace();
    }
    
    // Draw canvas on index page
    if (document.getElementById('dreamCanvas')) {
        console.log('Drawing dream canvas...');
        drawDreamSpaceIndex();
    }
    
    // Check if table exists
    const table = document.getElementById('myTable');
    if (table) {
        console.log('Table found:', table);
    }
});

// ===== Form Handler =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message!');
        this.reset();
    });
}