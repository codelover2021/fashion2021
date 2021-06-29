// "use-strict";
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

// // Start filter div
const filter = document.querySelector(".customSelect__trigger");
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
// // End filter div

// // Start accardion
let acc = document.getElementsByClassName("accordion");
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
  $('input[type="range"]').on("input", rangeInputChangeEventHandler);
})();
// // End Price range

// // Start Search text
const input = document.querySelector(".search_icon");
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
// // End Search text

// // Start Tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
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
