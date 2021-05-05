const offer = document.querySelector(".offer");
const cdBtn = document.querySelector(".offer_text i");

cdBtn.addEventListener("click", () => {
  offer.classList.toggle("active");
});

// COLOR THREOREM
const linearGrd = () => {
  const page = document.querySelector(".bag");
  const icons = document.querySelectorAll(".fas");
  const price = document.querySelector(".price");
  page.addEventListener("click", (e) => {
    if (e.target.classList.contains("blue")) {
      color("rgb(0, 153, 173)", "rgb(2, 120, 136)");
      iconClr("rgb(2, 120, 136)");
      priceClr("rgb(2, 120, 136)");
      offerClr("rgb(0, 153, 173)", "rgb(2, 120, 136)");
    } else if (e.target.classList.contains("red")) {
      color("rgb(220, 20, 60)", "rgb(189, 18, 52)");
      iconClr("rgb(189, 18, 52)");
      priceClr("rgb(189, 18, 52)");
      offerClr("rgb(220, 20, 60)", "rgb(189, 18, 52)");
    } else if (e.target.classList.contains("green")) {
      color("rgb(7, 160, 109)", "rgb(6, 126, 86)");
      iconClr("rgb(6, 126, 86)");
      priceClr("rgb(6, 126, 86)");
      offerClr("rgb(7, 160, 109)", "rgb(6, 126, 86)");
    } else if (e.target.classList.contains("pink")) {
      color("rgb(219, 111, 129)", "rgb(190, 78, 97)");
      iconClr("rgb(190, 78, 97)");
      priceClr("rgb(190, 78, 97)");
      offerClr("rgb(219, 111, 129)", "rgb(190, 78, 97)");
    }
  });

  function color(clr, grd) {
    page.style.background = `linear-gradient(to bottom right, ${clr} 50%, ${grd} 50%)`;
  }
  function iconClr(clr) {
    icons.forEach((icon) => {
      icon.style.color = clr;
    });
  }
  function priceClr(clr) {
    price.style.background = clr;
    price.style.opacity = 0.6;
  }
  function offerClr(clr1, clr2) {
    offer.style.background = `linear-gradient(45deg , ${clr1} 50%, ${clr2} 50%)`;
  }
};

linearGrd();

// const curr

/*const carousel = () => {
  const page = document.querySelector(".bags");
  const container = document.querySelectorAll(".container");
  // btn
  const prevBtn = document.querySelector(".fa-caret-left");
  const nxtBtn = document.querySelector(".fa-caret-right");
  //
  let counter = 0;
  const size = container[0].clientWidth;

  nxtBtn.addEventListener("click", () => {
    if (container.id === "first") {
      console.log("static");
    } else {
      page.style.transition = "transform 0.5s ease-in-out";
      counter++;
      page.style.transform = `translateX(${-size * counter}px)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    if (container.id === "last") {
      console.log("static");
    } else {
      page.style.transition = "transform 0.5s ease-in-out";
      counter--;
      page.style.transform = `translateX(${-size * counter}px)`;
    }
  });
};

carousel();*/
