
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const progressDots = document.getElementById("progress-dots");

const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];

let idx = 0;

testimonials.forEach((testimonial) => {
  const dot = document.createElement("div");
  dot.classList.add("progress-dot");
  progressDots.appendChild(dot);
});

function displayTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  updateProgressDots();
}

function updateProgressDots() {
  const dots = progressDots.children;
  [...dots].forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[idx].classList.add("active");
}

btnNext.addEventListener("click", () => {
  idx === testimonials.length - 1 ? (idx = 0) : idx++;
  console.log(idx);

  displayTestimonial();
});

btnPrev.addEventListener("click", () => {
  idx === 0 ? (idx = testimonials.length - 1) : idx--;
  console.log(idx);

  displayTestimonial();
});

displayTestimonial();



// canvas // 


function getDocumentWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

function getDocumentHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
};

var canvas = document.getElementById('dotCanvas');
var context = canvas.getContext('2d');

var vw = getDocumentWidth(),
    vh = getDocumentHeight();

// resize the canvas to fill the browser window
window.addEventListener('resize', onResize, false);
function onResize() {
  vw = getDocumentWidth();
  vh = getDocumentHeight();
  resizeCanvas();
}

function resizeCanvas() {
  canvas.width = vw;
  canvas.height = vh;
  drawDots();
}
resizeCanvas();


// grid
function drawGrid(){
  var cellW = 10,
      cellH = 10;
  
  // vertical lines
  for (var x = 0; x <= vw; x += cellW) {
      context.moveTo(x, 0); // x, y
      context.lineTo(x, vh);
  }
  
  // horizontal lines
  for (var y = 0; y <= vh; y += cellH) {
      context.moveTo(0, y); // x, y
      context.lineTo(vw, y);
  }

  context.strokeStyle = "#cccccc";
  context.stroke();
}
// drawGrid();

// dots
function drawDots() {
  var r = 1,
      cw = 20,
      ch = 20;
  
  for (var x = 15; x < vw; x+=cw) {
    for (var y = 15; y < vh; y+=ch) {
        context.fillStyle = '#000000';   
        context.fillRect(x-r/2,y-r/2,r,r);
      }
  }
}
drawDots();























// let container = document.querySelector(".main-wrapper");
// let section = container.querySelectorAll("section");

// let tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: container,
//       scrub: 1,
//       pin: true,
//       start: "top top",
//       end: "+=3300",
//     },
//   })
//   .to(container, {
//     x: () =>
//       -(container.scrollWidth - document.documentElement.clientWidth - 95) +
//       "px",
//     ease: "none",
//     duration: 1,
//   })
//   .to(".side-bar", {
//     x: 70,
//     opacity: 1,
//     scrollTrigger: {
//       trigger: ".side-bar",
//       start: "center+=2500 center",
//       scrub: 2.5,
//     },
//   })
//   .to({}, { duration: 1 / (section.length + 1) });

// gsap.to(".col-1", {
//   y: -250,
//   ease: "none",
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".image-gallery",
//     start: "top center",
//     end: "+=3000",
//     scrub: true,
//   },
// });
// gsap.to(".col-2", {
//   y: 250,
//   ease: "none",
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".image-gallery",
//     start: "top center",
//     end: "+=3000",
//     scrub: true,
//   },
// });
// gsap.to(".col-3", {
//   y: -250,
//   ease: "none",
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".image-gallery",
//     start: "top center",
//     end: "+=3000",
//     scrub: true,
//   },
// });

// gsap.from(".row-2", {
//   height: "0%",
//   duration: 1,
//   delay: 0.5,
//   scrollTrigger: {
//     trigger: ".section-3",
//     start: "40% center",
//     toggleActions: "play pause reverse reverse",
//   },
// });

// gsap.from(".row li", {
//   y: 200,
//   opacity: 0,
//   ease: "none",
//   delay: 2,
//   duration: 2,
//   stagger: {
//     amount: 1,
//   },
//   scrollTrigger: {
//     trigger: ".row li",
//     toggleActions: "play pause reverse reverse",
//   },
// });

// gsap.to(".num", {
//   x: 600,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".num",
//     start: "right left",
//   },
// });








// const aa = document.getElementById('homeLink');

// aa.style.color = 'red';






















