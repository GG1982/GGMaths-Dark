const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } 
    })
})

const fadeIn = document.querySelectorAll('.fade-in')
const fadeInLeft = document.querySelectorAll('.fade-in-left')
const fadeInRight = document.querySelectorAll('.fade-in-right')
fadeIn.forEach((el) => observer.observe(el))
fadeInLeft.forEach((el) => observer.observe(el))
fadeInRight.forEach((el) => observer.observe(el))
