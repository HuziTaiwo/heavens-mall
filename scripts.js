const DROPDOWN = () => {
  const offerDropdown = document.querySelector(".offer");
  const dropdownBtn = document.querySelector(".offer_text i");

  dropdownBtn.addEventListener("click", () => {
    offerDropdown.classList.toggle("active");
  });
  return;
};

DROPDOWN();

const GRDCOLOR = () => {
  const page = document.querySelector(".bag");
  const icons = document.querySelectorAll(".fas");
  const price = document.querySelector(".price");

  page.addEventListener("click", (e) => {
    let blue = "rgb(0, 153, 173)";
    let dBlue = "rgb(2, 120, 136)";
    let red = "rgb(201, 47,78)";
    let dRed = "rgb(189, 18, 52)";
    let green = "rgb(7, 160, 109)";
    let dGreen = "rgb(6, 126, 86)";
    let pink = "rgb(219, 111, 129)";
    let dPink = "rgb(190, 78, 97)";
    if (e.target.classList.contains("blue")) {
      color(blue, dBlue);
      iconClr(dBlue);
      priceClr(dBlue);
      offerClr(blue, dBlue);
    } else if (e.target.classList.contains("red")) {
      color(red, dRed);
      iconClr(dRed);
      priceClr(dRed);
      offerClr(red, dRed);
    } else if (e.target.classList.contains("green")) {
      color(green, dGreen);
      iconClr(dGreen);
      priceClr(dGreen);
      offerClr(green, dGreen);
    } else if (e.target.classList.contains("pink")) {
      color(pink, dPink);
      iconClr(dPink);
      priceClr(dPink);
      offerClr(pink, dPink);
    }

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
      const offerDropdown = document.querySelector(".offer");
      offerDropdown.style.background = `linear-gradient(45deg , ${clr1} 50%, ${clr2} 50%)`;
    }
  });
};

GRDCOLOR();
