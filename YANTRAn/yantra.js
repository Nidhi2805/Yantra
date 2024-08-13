var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    var parent = document.createElement("span");
    var child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const requestData = {
      teamName: form.elements.teamName.value,
      leaderNum: form.elements.leaderNum.value,
      leaderName: form.elements.leaderName.value,
      memNum: form.elements.memNum.value,
      memName: form.elements.memName.value
    };

    try {
      const response = await fetch('https://codejuncture-backend.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        showError(errorData.error || 'Failed to register');
      } else {
        const responseData = await response.json();
        showMessage('Registration successful');
      }
    } catch (error) {
      console.error('Error registering:', error.message);
      showError('Internal server error');
    }
  });

  function showMessage(message) {
    messageDiv.innerText = message;
    messageDiv.classList.remove('error');
    messageDiv.style.display = 'block';
  }

  function showError(message) {
    messageDiv.innerText = message;
    messageDiv.classList.add('error');
    messageDiv.style.display = 'block';
  }
});



function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from(".child span", {
    x: "15%",
    duration: 1.4,
    stagger: 0.2,
    ease: Circ.easeInOut,
  })
    .to(".parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: 0,
      top: 0,
      delay: -0.2,
      duration: 1,
      ease: Circ.easeInOut,
    });
}
revealToSpan();
loaderAnimation();



document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #fff";
    crsr.style.backgroundColor = "#fff";
  });
});
// Detect when the user scrolls to page 3
window.addEventListener('scroll', function() {
  var regulationsHeading = document.getElementById('regulations-heading');
  var rect = regulationsHeading.getBoundingClientRect();
  var isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
  
  if (isVisible) {
      gsap.to(regulationsHeading, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" });
  }
});

gsap.to("#nav", {
  backgroundColor:"black",
  duration: "infinite",
  height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
 // Get the page 4 element
 var page4 = document.querySelector('.page3');

 // Add event listener to detect when page 4 is entered
 page4.addEventListener('mouseenter', function() {
     // Remove cursor and cursor blur styles
     document.getElementById('cursor').style.display = 'none';
     document.getElementById('cursor-blur').style.display = 'none';
 });
 const inputs = document.querySelectorAll(".input, .name-input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
var page5 = document.querySelector('.page4');
 page5.addEventListener('mouseenter', function() {

     document.getElementById('cursor').style.display = 'none';
     document.getElementById('cursor-blur').style.display = 'none';
 });

 var page5 = document.querySelector('.footer');
 page5.addEventListener('mouseenter', function() {
   
     document.getElementById('cursor').style.display = 'none';
     document.getElementById('cursor-blur').style.display = 'none';
 });

 var page1 = document.querySelector('.page1');
 var page2 = document.querySelector('.page2');
 
 // Add event listeners to detect when the mouse enters these pages
 page1.addEventListener('mouseenter', function() {
     document.getElementById('cursor').style.display = 'block';
     document.getElementById('cursor-blur').style.display = 'block';
 });
 
 page2.addEventListener('mouseenter', function() {
     document.getElementById('cursor').style.display = 'block';
     document.getElementById('cursor-blur').style.display = 'block';
 });
 

 
