"use strict";

// Slider

{
  const sliderContent = document.querySelector(".slider-content");
  const arrows = document.querySelector(".arrow");
  const tabs = [...document.querySelector(".tabs").children];
  let count = 0;

  arrows.addEventListener("click", (e) => {
    switch (e.target.className) {
      case "arrow-up": {
        count === 0
          ? ((count = 3),
            tabs.forEach((i) => i.classList.remove("active")),
            tabs[count].classList.add("active"))
          : (count--,
            tabs.forEach((i) => i.classList.remove("active")),
            tabs[count].classList.add("active"));
        break;
      }
      case "arrow-down": {
        count === 3
          ? ((count = 0),
            tabs.forEach((i) => i.classList.remove("active")),
            tabs[count].classList.add("active"))
          : (count++,
            tabs.forEach((i) => i.classList.remove("active")),
            tabs[count].classList.add("active"));
        break;
      }
      default:
        break;
    }

    switch (count) {
      case 0: {
        sliderContent.innerHTML = `<h2>Валерий Логинов</h2>
          <p>
            Ваш персональный менеджер по марке <span class="upper">volkswagen</span> . О
            ремонте автомобилей <span class="upper">volkswagen</span> я знаю все! <br /><span
              class="bold"
              >Позвоните мне сейчас и я сделаю вам <span class="upper">скидку</span> 10% на
              все работы и материалы!</span
            >
          </p>
          <a href="tel:+79885179112">+7 (988) 517-91-12</a>`;
        break;
      }
      case 1: {
        sliderContent.innerHTML = `<h2>Сервисное то</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Illo aspernatur officia quia facere ad amet eum nulla quasi maxime. Ipsam!
          </p>
          <a href="tel:+79885179112">+7 (988) 517-91-12</a>`;
        break;
      }
      case 2: {
        sliderContent.innerHTML = `<h2>Сервис</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Illo aspernatur officia quia facere ad amet eum nulla quasi maxime. Ipsam!
          </p>
          <a href="tel:+79885179112">+7 (988) 517-91-12</a>`;
        break;
      }
      case 3: {
        sliderContent.innerHTML = `<h2>Запчасти</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Illo aspernatur officia quia facere ad amet eum nulla quasi maxime. Ipsam!
          </p>
          <a href="tel:+79885179112">+7 (988) 517-91-12</a>`;
        break;
      }
      default:
        break;
    }
  });
}
