let weekButtons = ["#week1", "#week2", "#week3", "#week4"];
let activatedButtons = new Set();
let unlockedButtons = new Set();
let menuVideoOpacity = 0.28;
let skipIntroKey = "skip_intro";


$(document).ready(function() {
    let shouldSkipIntro = localStorage.getItem(skipIntroKey);

    if (shouldSkipIntro) {
        $("#main-video").get(0).currentTime = 37;
    }
    
    $("#replay-intro").click(() => {
        localStorage.removeItem(skipIntroKey);
        location.reload();
    });
    
    $("#main-video").on("ended", animateMenu);


    // Unlock required buttons
    unlockedButtons.add(weekButtons[0]);


    
    // Setup all the buttons
    for (let btn of weekButtons) {
        let btnEl = $(btn);

        if (!unlockedButtons.has(btn)) {
            let comingSoonEl = '<div class="coming-soon">Coming soon...</div>';
            btnEl.append(comingSoonEl)
        } else {
            btnEl.toggleClass("btn-weeks-unlocked");
        }
        
        setupButtonAnimation(btn);
    }   
});

function animateButton(btn, hovering) {
    if (!activatedButtons.has(btn)) return;

    anime.remove(btn);

    if (unlockedButtons.has(btn)) {
        let toScale = hovering ? 1.1 : 1;

        anime({
            targets: btn,
            scale: toScale,
            opacity: 1,
            duration: 900,
        });
    } else {
        let toColor = hovering ? "#d17d8b" : "#8b4d57";

        anime({
            targets: btn,
            scale: 1,
            opacity: 1,
            duration: 900,
        });

        anime({
            targets: `${btn} > .coming-soon`,
            color: toColor,
            duration: 900,
        });
    }
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
    localStorage.setItem(skipIntroKey, true);
    
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

    tl.add({
        targets: "#replay-intro",
        opacity: [0, 1],
        duration: 200,
        easing: "linear"
    });

    // Buttons
    for (let btn of weekButtons) {

        tl.add({
            targets: btn,
            scale: [1.2, 1],
            opacity: ["0%", "100%"],
            duration: 600,
            begin: (anim) => activateButton(btn),
        }, "+=100");
    }

    setTimeout(flickerMenu, 5200);
    setInterval(flickerMenu, 12000);
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