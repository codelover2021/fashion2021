//  // Start Image preview
(function (document, window, index) {
  var inputs = document.querySelectorAll(".inputfile");
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener("change", function (e) {
      var fileName = "";
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
      else fileName = e.target.value.split("\\").pop();

      if (fileName) label.querySelector("span").innerHTML = fileName;
      else label.innerHTML = labelVal;
    });

    // Firefox bug fix
    input.addEventListener("focus", function () {
      input.classList.add("has-focus");
    });
    input.addEventListener("blur", function () {
      input.classList.remove("has-focus");
    });
  });
})(document, window, 0);
// // End Image preview

// // Start Header basket product
let basket = document.querySelector(".basket");
let basketPrd = document.querySelector(".basketPrd");
// if(basket !== null && basketPrd !== null) {
basket.addEventListener("click", function (e) {
  basketPrd.classList.toggle("basketPrd__active");
});
let clsBasket = document.querySelector(".close");
clsBasket.addEventListener("click", function (e) {
  basketPrd.classList.remove("basketPrd__active");
});
// }
// // End Header basket product

// // Start filter div
const filter = document.querySelector(".customSelect__trigger");
if (filter !== null) {
  filter.addEventListener("click", function (e) {
    document.querySelector(".icon").classList.toggle("open");
    if (filterForm.style.left === "150%") {
      document.querySelector(".customSelect__trigger > span").innerHTML =
        "Close Filters";
      document.querySelector("#filterForm").style.left = "0";
    } else if ((filterForm.style.left = "0px")) {
      document.querySelector(".customSelect__trigger > span").innerHTML =
        "Show Filters";
      document.querySelector("#filterForm").style.left = "150%";
      document.querySelector(".icon").className = "icon";
    }
  });
}
// // End filter div

// // Start accardion
let acc = document.getElementsByClassName("accordion");
if (acc !== null) {
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.className !== "panel__desing") {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      } else {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = "400px";
        }
      }
    });
  }
}
// // End accardion

// // Start Price range
(function () {
  function addSeparator(nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "." + "$2");
    }
    return x1 + x2;
  }
  function rangeInputChangeEventHandler(e) {
    var rangeGroup = $(this).attr("name"),
      minBtn = $(this).parent().children(".min"),
      maxBtn = $(this).parent().children(".max"),
      range_min = $(this).parent().children(".range_min"),
      range_max = $(this).parent().children(".range_max"),
      minVal = parseInt($(minBtn).val()),
      maxVal = parseInt($(maxBtn).val()),
      origin = $(this).context.className;

    if (origin === "min" && minVal > maxVal - 5) {
      $(minBtn).val(maxVal - 5);
    }
    var minVal = parseInt($(minBtn).val());
    $(range_min).html(addSeparator(minVal) + " $");

    if (origin === "max" && maxVal - 5 < minVal) {
      $(maxBtn).val(5 + minVal);
    }
    var maxVal = parseInt($(maxBtn).val());
    $(range_max).html(addSeparator(maxVal) + " $");
  }

  if ($('input[type="range"]').length > 0) {
    $('input[type="range"]').on("input", rangeInputChangeEventHandler);
  }
})();
// // End Price range

// // Start Search text
const input = document.querySelector(".search_icon");
if (input !== null) {
  input.addEventListener("keyup", (e) => {
    searchText = e.target.value;
    console.log(e.target.value);
    refresh();
  });
  let id;
  function refresh() {
    if (id !== undefined) {
      clearTimeout(id);
    }
    id = setTimeout(() => {}, 500);
  }
}
// // End Search text

// // Start Tab
function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
// var els = document.getElementsByName("del");
// els.forEach(function (item) {
//   item.addEventListener("click", function () {
//     item.parentNode.parentNode.removeChild(item.parentNode);
//   });
// });
// // End Tab

// // Start Modal Order Detali Account page
const buttons = document.querySelectorAll(".trigger[data-modal-trigger]");
if (buttons.length > 0) {
  for (let button of buttons) {
    modalEvent(button);
  }
  function modalEvent(button) {
    button.addEventListener("click", () => {
      const trigger = button.getAttribute("data-modal-trigger");
      // console.log('trigger', trigger)
      const modal = document.querySelector(`[data-modal=${trigger}]`);
      // console.log("modal", modal);
      const contentWrapper = modal.querySelector(".content-wrapper");
      // console.log(contentWrapper);
      const close = modal.querySelector(".close");
      close.addEventListener("click", () => modal.classList.remove("open"));
      modal.addEventListener("click", () => modal.classList.remove("open"));
      contentWrapper.addEventListener("click", (e) => e.stopPropagation());
      modal.classList.toggle("open");
    });
  }

  function hide() {
    const order = document.getElementById("profilepage__orders");
    const orderDetal = document.getElementById("profilepage__ordersDetalis");
    if (order.style.display == "block") order.style.display = "none";
    if (orderDetal.style.display == "none") orderDetal.style.display = "block";
  }
}
// // End Modal Order Detali Account page

// // Start Select js
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });
}
for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).style = "color:#000;";
    }
  });
}
window.addEventListener("click", function (e) {
  for (const select of document.querySelectorAll(".custom-select")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});
function selectOption(index) {
  let optionOnIdx = document.querySelector(
    ".custom-option:nth-child(" + index + ")"
  );
  let optionSelected = document.querySelector(".custom-option.selected");
  if (optionOnIdx !== optionSelected) {
    optionSelected.parentNode
      .querySelector(".custom-option.selected")
      .classList.remove("selected");
    optionOnIdx.classList.add("selected");
    optionOnIdx
      .closest(".custom-select")
      .querySelector(".custom-select__trigger span").textContent =
      optionOnIdx.textContent;
  }
}
// // End Select js

$(document).ready(function () {
  let current_fs, next_fs, previous_fs; //fieldsets
  let opacity;
  let current = 1;
  let steps = $("fieldset").length;

  setProgressBar(current);

  $(".next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(++current);
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    let percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
});

// // Start Image Slider Product Single
let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");
let slideRight = document.getElementById("slideRight");

if (thumbnails.length > 0) {
  // // Start Left and Right slide show
  let slideIndex = 1;
  showSlides(slideIndex);
  function nextSlide() {
    showSlides((slideIndex += 1));
    document.getElementById("slider").scrollLeft += 180;
  }

  function previousSlide() {
    showSlides((slideIndex -= 1));
    document.getElementById("slider").scrollLeft -= 180;
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    let i;
    if (n > thumbnails.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = thumbnails.length;
    }

    for (let slide of thumbnails) {
      slide.classList.remove("active");
    }
    thumbnails[slideIndex - 1].classList.add("active");
    document.getElementById("featured").src = thumbnails[slideIndex - 1].src;
  }
  // // End Left and Right slide show

  // // Start Click slide Image
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
      if (activeImages.length > 0) {
        console.log(thumbnails[i]);
        activeImages[0].classList.remove("active");
      }
      this.classList.add("active");
      document.getElementById("featured").src = this.src;
    });
  }
  // // End Click slide Image
}

// // Start Size Chart popUp
const sizeChart = document.querySelector(".size-chart__wrraper");
function openSizeChart() {
  if (sizeChart !== null) {
    sizeChart.setAttribute(
      "style",
      "visibility:visible; pointer-events: all; opacity: 1"
    );
  }
}
function closeSizeChart() {
  if (sizeChart !== null) {
    sizeChart.setAttribute(
      "style",
      "visibility:hidden; pointer-events: none; opacity: 0"
    );
  }
}
// // End Size Chart popUp

// // Start login-popUp
let logBtn = document.querySelector(".loginpage2__button");
let logWrrap = document.querySelector(".loginpage2__wrraper");
if (logBtn !== null && logWrrap !== null) {
  logBtn.addEventListener("click", function (e) {
    logWrrap.classList.toggle("open");
  });
  logWrrap.addEventListener("click", function (e) {
    logWrrap.classList.remove("open");
  });
}
// // End login-popUp

function next(elem) {
  do {
    elem = elem.nextSibling;
  } while (elem && elem.nodeType !== 1);
  return elem;
}
function prev(elem) {
  do {
    elem = elem.previousSibling;
  } while (elem && elem.nodeType !== 1);
  return elem;
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var nextElem = next(input);
    reader.onload = function (e) {
      nextElem.src = e.target.result;
      nextElem.style.display = "block";
      var prevElem = prev(input);
      prevElem.style.display = "none";
    };
  }
  reader.readAsDataURL(input.files[0]);
}
