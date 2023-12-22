import confetti from "canvas-confetti";

const scalar = 2.5;
const burger = confetti.shapeFromText({ text: "🍔", scalar });

const defaults = {
  spread: 360,
  ticks: 60,
  gravity: 0,
  decay: 0.96,
  startVelocity: 15,
  shapes: [burger],
  scalar,
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 30,
  });

  confetti({
    ...defaults,
    particleCount: 5,
  });

  confetti({
    ...defaults,
    particleCount: 15,
    scalar: scalar / 2,
    shapes: ["circle"],
  });
}

export const confettiBurger = () => {
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};
