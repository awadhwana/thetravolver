function slowConfetti() {
    const duration = 15 * 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      const particleCount = 50 * (timeLeft / duration);
      
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffb7c5', '#ffd700', '#00ff00', '#00ffff', '#ff69b4'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      }));
      
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffb7c5', '#ffd700', '#00ff00', '#00ffff', '#ff69b4'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      }));
    }, 250);
  }
  
  // Start the confetti animation
  slowConfetti();
  
  // Restart the animation every 20 seconds
  setInterval(slowConfetti, 20000);
  
  console.log("Confetti animation started!");