(function () {
  "use strict";
  // The page reads fine without JavaScript. This adds the demo and the progress bar.
  document.documentElement.classList.add("js");

  var mock = document.getElementById("mock");
  var toggle = document.getElementById("toggle-notes");
  var status = document.getElementById("mock-status");

  toggle.addEventListener("click", function () {
    var open = mock.classList.toggle("is-revealed");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Hide the questions" : "Show the questions";
  });

  mock.querySelectorAll(".screen button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      status.textContent = "Demo only: \u201C" + btn.textContent.trim() +
        "\u201D isn\u2019t connected to anything here. In a real prototype, someone would design what happens next.";
    });
  });

  var bar = document.getElementById("progress");
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
})();
