
/* ==========================================
   ANNIVERSARY DATE
   11 OCTOBER 2026
========================================== */

const anniversaryDate =
    new Date("2026-10-11T00:00:00");


/* ==========================================
   COUNTDOWN
========================================== */

function updateCountdown() {

    const now = new Date();

    const difference =
        anniversaryDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "000";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(
            totalSeconds / (24 * 60 * 60)
        );


    const hours =
        Math.floor(
            (totalSeconds % (24 * 60 * 60))
            / (60 * 60)
        );


    const minutes =
        Math.floor(
            (totalSeconds % (60 * 60))
            / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("days").textContent =
        String(days).padStart(3, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();



/* ==========================================
   BEGIN OUR STORY BUTTON
========================================== */

function showMemory() {

    document
        .getElementById("story")
        .scrollIntoView({
            behavior: "smooth"
        });


    createHeartBurst();

}



/* ==========================================
   LOVE LETTER
========================================== */

const modal =
    document.getElementById("letterModal");


function openLetter() {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeLetter() {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

}


/* Click outside */

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            closeLetter();

        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeLetter();

        }

    }
);



/* ==========================================
   FLOATING HEARTS
========================================== */

const heartContainer =
    document.querySelector(".floating-hearts");


function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.innerHTML =
        Math.random() > 0.5
        ? "♥"
        : "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        Math.random() * 16 + 12 + "px";


    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";


    heartContainer.appendChild(heart);


    setTimeout(
        () => heart.remove(),
        10000
    );

}


setInterval(createHeart, 800);



/* ==========================================
   HEART BURST
========================================== */

function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}
