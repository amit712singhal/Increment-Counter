const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;
    let c = +counter.innerText;
    if (c < target) {
      counter.innerText = Math.ceil(c + increment);
      setTimeout(updateCounter, 100);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
