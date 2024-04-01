
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







//TRAILING DOTS

 const dotSize = 2.5
 const spacing = dotSize * 8
 const areaOfEffect = 64

 let dots = []

 function setup() {
     let cnv = createCanvas(windowWidth, windowHeight);
     cnv.parent('canvas-container');
     for (let i = 0; i < width; i += spacing) {
         for (let j = 0; j < height; j += spacing) {
             dots.push(new Dot(i + spacing / 2,j + spacing / 2,dotSize))
         }
     }
     noStroke()
 }

 function draw() {
     background(255, 255, 255);
     dots.forEach(dot=>{
         dot.update()
         dot.render()
     }
     )
 }

 let mouseIsMoving = false;

 function mouseMoved() {
     mouseIsMoving = true
     setTimeout(()=>mouseIsMoving = false, 100)
 }

 class Dot {
     constructor(x, y, size) {
         this.x = x;
         this.y = y;
         this.size = size;
         this.transparency = 40
     }

     update() {
         let distance = dist(mouseX, mouseY, this.x, this.y)
         if (mouseIsMoving && distance < areaOfEffect) {
             this.transparency = 255
         } else {
             this.transparency = max(40, this.transparency - 10)
         }
     }

     render() {
         fill(138, 138, 138, this.transparency)

         ellipse(this.x, this.y, this.size)
     }
 }











