let weekButtons = [
    { target: "#week1", unlockDate: new Date(2020, 11, 1) }, 
    { target: "#week2", unlockDate: new Date(2020, 11, 4) }, 
    { target: "#week3", unlockDate: new Date(2020, 11, 21) },
    { target: "#week4", unlockDate: new Date(2020, 11, 26) }
];
let activatedButtons = new Set();
let unlockedButtons = new Set();
let menuVideoOpacity = 0.28;
let skipIntroKey = "skip_intro";
let skipOverReplay = false;


$(document).ready(function() {
    let shouldSkipIntro = localStorage.getItem(skipIntroKey);

    if (shouldSkipIntro) {
        skipIntro();
    }
    
    $("#replay-intro").click(() => {
        if (!skipOverReplay) {
            skipIntro();
        }
        else {
            localStorage.removeItem(skipIntroKey);
            location.reload();
        }
    });
    
    $("#main-video").on("ended", animateMenu);


    // Unlock required buttons
    // unlockedButtons.add(weekButtons[0]);
    // unlockedButtons.add(weekButtons[1]);
    // unlockedButtons.add(weekButtons[2]);
    // unlockedButtons.add(weekButtons[3]);

    // Setup all the buttons
    for (let btn of weekButtons) {
        let btnEl = $(btn.target);

        if (!unlockedButtons.has(btn)) {
            let endingString = btn.unlockDate ? ` ${btn.unlockDate.getDate()}/${btn.unlockDate.getMonth()}` : "...";
            let comingSoonEl = `<div class="coming-soon">Coming soon${endingString}</div>`;
            btnEl.append(comingSoonEl)
        } else {
            btnEl.toggleClass("btn-weeks-unlocked");
        }
        
        setButton(btn.target, false);
        setupButtonAnimation(btn);
    }   
});

function skipIntro() {
    $("#main-video").get(0).currentTime = 37;
}

function animateButton(btn, hovering) {
    if (!activatedButtons.has(btn)) return;

    anime.remove(btn.target);

    if (unlockedButtons.has(btn)) {
        let toScale = hovering ? 1.1 : 1;

        anime({
            targets: btn.target,
            scale: toScale,
            opacity: 1,
            duration: 900,
        });
    } else {
        let toColor = hovering ? "#ffc1cb" : "#8b4d57";

        anime({
            targets: btn.target,
            scale: 1,
            opacity: 1,
            duration: 900,
        });

        anime({
            targets: `${btn.target} > .coming-soon`,
            color: toColor,
            duration: 900,
        });
    }
}

function setupButtonAnimation(btn) {
    $(btn.target).hover(() => animateButton(btn, true));
    $(btn.target).mouseleave(() => animateButton(btn, false));
}

function activateButton(btn) {
    activatedButtons.add(btn);
    setButton(btn.target, true);

    if ($(btn.target + ":hover").length != 0) {
        animateButton(btn, true);
    }
}

function setButton(target, isEnabled) {
    let el = $(target);
    el.disabled = !isEnabled;

    if (isEnabled) {
        el.removeClass("btn-disabled");
    } else {
        el.addClass("btn-disabled");
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
        opacity: [0, 0.9],
        duration: 900,
        easing: "easeInOutBounce"
    }, 0);

    tl.add({
        targets: "#replay-intro",
        opacity: [0, 1],
        duration: 200,
        easing: "linear",
        begin: (anim) => {
            $("#replay-intro").text("Replay Intro");
            skipOverReplay = true;
        }
    });

    // Buttons
    for (let btn of weekButtons) {
        tl.add({
            targets: btn.target,
            scale: [1.2, 1],
            opacity: [0, 1],
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