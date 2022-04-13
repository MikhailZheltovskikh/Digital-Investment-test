// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(".dropdown__list-item");
  const dropDownInput = dropDownWrapper.querySelector(".dropdown__input-hidden");

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener("click", function (e) {
    dropDownList.classList.toggle("dropdown__list--visible");
    this.classList.add("dropdown__button--active");
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove("dropdown__list--visible");
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});
//start burger-menu

document.querySelectorAll(".menu__btn-inner").forEach(function (menuBtn) {
  const iconMenu = document.querySelector(".menu__btn-inner");
  const mobileMenu = document.querySelector(".mibile__menu");
  const mobilebody = document.querySelector("body");
  const fone = document.querySelector(".mibile__menu-wrapper");

  menuBtn.addEventListener("click", function (e) {
    mobileMenu.classList.toggle("active");
    fone.classList.toggle("active");
    mobilebody.classList.toggle("lock");
  });
  document.addEventListener("click", function (e) {
   foneClose = document.querySelector(".mibile__menu-wrapper.active")
      if (e.target == foneClose ) {
        mobileMenu.classList.remove("active");
        fone.classList.remove("active");
        mobilebody.classList.remove("lock");
      }
    });
});
// end burger-menu
