document.addEventListener("DOMContentLoaded", () => {
    // Matrix Rain Effect
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%アカサタナハマヤラワンアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン亜井運' +
                   '한글의' +
                   '中文汉字' +
                   'ภาษาไทยภาษา' +
                   'TiếngViệtTiếng';  // Adding characters from Vietnamese, Thai, Japanese, Korean, and Chinese

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#4b0082'); // Dark purple
        gradient.addColorStop(1, '#0000ff'); // Blue

        ctx.fillStyle = gradient;
        ctx.font = fontSize + 'px Roboto';

        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);

    // Audio Player Controls
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("play-pause");
    const progressContainer = document.getElementById("progress-container");
    const progressBar = document.getElementById("progress-bar");

    playPauseButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = "Pause";
        } else {
            audio.pause();
            playPauseButton.textContent = "Play";
        }
    });

    audio.addEventListener("timeupdate", () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    });

    progressContainer.addEventListener("click", (event) => {
        const offsetX = event.offsetX;
        const totalWidth = progressContainer.offsetWidth;
        const percentage = offsetX / totalWidth;
        audio.currentTime = percentage * audio.duration;
    });
});
