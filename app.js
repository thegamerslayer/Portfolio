const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];


//sidebar
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');


videoList.forEach(function (video) {
    video.addEventListener('mouseover', function () {
        video.play();
        hoverSign.classList.add('active');
    })

    video.addEventListener('mouseout', function () {
        video.pause();
        hoverSign.classList.remove('active');
    })
})





//sidebar elements

menu.addEventListener("click", function () {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
})


close.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
})



// "Lets talk" part


  const form = document.querySelector(
    'form[action="https://formspree.io/f/xkogyyjk"]'
  );

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop normal submit

    // get inputs by order / placeholder
    const inputs = form.querySelectorAll("input");
    const messageInput = form.querySelector(".input-message");

    const data = {
      name: inputs[0].value,
      email: inputs[1].value,
      message: messageInput.value
    };

    try {
      const response = await fetch("https://formspree.io/f/xkogyyjk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Message sent successfully ✅");
        form.reset();
      } else {
        alert("Failed to send message ❌");
      }

    } catch (error) {
      alert("Something went wrong ❌");
    }
  });

