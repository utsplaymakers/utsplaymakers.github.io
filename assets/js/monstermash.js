let weekButtons = ["#week1", "#week2", "#week3", "#week4"];
let activatedButtons = new Set();
let menuVideoOpacity = 0.28;


$(document).ready(function() {

    // $("#main-video").get(0).currentTime = 36;
    
    $("#main-video").on("ended", animateMenu);

    for (let btn of weekButtons) {
        setupButtonAnimation(btn);
    }
        
});

function animateButton(btn, hovering) {
    if (!activatedButtons.has(btn)) return;

    let toScale = hovering ? 1.4 : 1;

    anime.remove(btn);
    anime({
        targets: btn,
        scale: toScale,
        opacity: 1,
        duration: 1200,
        // easing: "linear"
    });
}

function setupButtonAnimation(btn) {
    $(btn).hover(() => animateButton(btn, true));
    $(btn).mouseleave(() => animateButton(btn, false));
}

function activateButton(btn) {
    activatedButtons.add(btn);

    if ($(btn + ":hover").length != 0) {
        animateButton(btn, true);
    }
}

function animateMenu() {
    
    var tl = anime.timeline({
        easing: "easeOutCubic",
        duration: 800
    });

    tl.add({
        targets: "#main-video",
        opacity: 0
    })

    tl.add({
        targets: "#menu-video",
        opacity: [0, menuVideoOpacity],
        duration: 1600,
        easing: "easeInOutBounce"
    }, 0);

    tl.add({
        targets: "#menu-title",
        scale: [1.8, 1],
        duration: 2100
    }, 0);

    tl.add({
        targets: "#menu-title",
        opacity: ["0%", "100%"],
        duration: 900,
        easing: "easeInOutBounce"
    }, 0);

    // Buttons
    for (let btn of weekButtons) {

        tl.add({
            targets: btn,
            scale: [1.2, 1],
            opacity: ["0%", "100%"],
            begin: (anim) => activateButton(btn),
        }, "+=400");
    }

    setTimeout(flickerMenu, 6200);
    setInterval(flickerMenu, 9600);
}

function flickerMenu() {
    let tl = anime.timeline({
        easing: "easeInOutBounce",
        duration: 50
    });

    tl.add({
        targets: "#menu-video",
        opacity: [menuVideoOpacity, 0.7]
    });

    for (let i = 0; i < 2; i++) {
        tl.add({
            targets: "#menu-video-container",
            translateX: () => anime.random(-80, 80),
            translateY: () => anime.random(-80, 80)
        });

        tl.add({
            targets: "#menu-video-container",
            translateX: 0,
            translateY: 0
        });
    }

    tl.add({
        targets: "#menu-video",
        opacity: [0.7, menuVideoOpacity]
    });
}