document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
      // Close mobile menu after clicking a link
      const menuToggle = document.getElementById("menu-toggle")
      if (menuToggle && menuToggle.checked) {
        menuToggle.checked = false
      }
    })
  })

  // Smooth scrolling for hero section scroll indicator
  const scrollIndicator = document.querySelector(".scroll-indicator")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  }

  // Canvas for Space Background (Stars and Nebulae)
  const canvas = document.getElementById("space-background")
  if (canvas) {
    const ctx = canvas.getContext("2d")
    let stars = []
    let nebulae = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars() // Reinitialize stars on resize
      initNebulae() // Reinitialize nebulae on resize
    }

    const initStars = () => {
      stars = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * 0.02 + 0.01,
        })
      }
    }

    const initNebulae = () => {
      nebulae = [
        {
          x: canvas.width * 0.25,
          y: canvas.height * 0.3,
          radius: 200,
          color: "rgba(139, 92, 246, 0.1)",
          speedX: 0.05,
          speedY: 0.03,
        }, // purple-500/10
        {
          x: canvas.width * 0.75,
          y: canvas.height * 0.7,
          radius: 180,
          color: "rgba(0, 255, 255, 0.1)",
          speedX: -0.04,
          speedY: -0.02,
        }, // cyan-400/10
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.8,
          radius: 150,
          color: "rgba(96, 165, 250, 0.1)",
          speedX: 0.02,
          speedY: 0.04,
        }, // blue-400/10
      ]
    }

    const drawStars = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)" // Faint trail for stars
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = -star.size
          star.x = Math.random() * canvas.width
        }

        star.opacity += star.twinkle
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkle = -star.twinkle
        }
      })
    }

    const drawNebulae = () => {
      nebulae.forEach((nebula) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)
        gradient.addColorStop(0, nebula.color)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()

        // Move nebulae slowly
        nebula.x += nebula.speedX
        nebula.y += nebula.speedY

        // Wrap around if they go off screen
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius
        if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius
        if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius
        if (nebula.y < -nebula.radius) nebula.y = canvas.height + nebula.radius
      })
    }

    const animateBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear canvas completely
      drawNebulae() // Draw nebulae first
      drawStars() // Draw stars on top
      requestAnimationFrame(animateBackground)
    }

    // Initial setup
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animateBackground()
  }
})
