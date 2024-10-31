const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレゲゼデベペオコソトノホモヨロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.src = 'imgs/sadako.jpg';
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#00f');
        gradient.addColorStop(1, '#f0f');
        ctx.fillStyle = gradient;
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
            const text = letters[Math.floor(Math.random() * letters.length)];
            const x = index * fontSize;
            ctx.fillText(text, x, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[index] = 0;
            }
            drops[index]++;
        });

        ctx.globalCompositeOperation = 'multiply';
    };
}

setInterval(draw, 33);
