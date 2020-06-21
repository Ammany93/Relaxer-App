const container = document.querySelector(".container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const intake = new Howl({
    src: ["sounds/in.m4a"],
    volume: 0.2
});

const output = new Howl({
    src: ["sounds/out.m4a"],
    volume: 0.2
});

const heartbeat = new Howl({
    src: ["sounds/heartbeat.mp3"],
    loop: true,
    volume: 1.5
});

heartbeat.play();


breatheAnimation();

function breatheAnimation () {
    text.innerHTML = "Breathe In!";
    container.className = "container grow";
    intake.play();

    setTimeout(() => {
        text.innerText = "Hold";

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.className = "container shrink";
            output.play();
        }, holdTime);
    }, breatheTime);
};

setInterval(breatheAnimation, totalTime);





