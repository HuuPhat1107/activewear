//toggle menu

const toggle = () => {
  const menu = document.querySelector('.bar');
  const nav = document.querySelector('.menu');

  menu.addEventListener('click', () => {
    menu.classList.toggle('bar-active');
    nav.classList.toggle('nav-active');
  });
}
toggle();

//menu
(function () {
  let menu = document.querySelector(".menu");
  let menuItems = menu.querySelectorAll("a");

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      for (let j = 0; j < menuItems.length; j++) {
        menuItems[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}());

//tab
(function () {
  let tabs = document.querySelector(".tabs");
  let tabHeader = tabs.querySelector(".tab-header");
  let tabBody = tabs.querySelector(".tab-body");
  let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
  let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

  for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", function () {
      tabHeader.querySelector(".active").classList.remove("active");
      tabHeaderNodes[i].classList.add("active");
      let activeTabBody = tabBody.querySelector(".active");
      activeTabBody.style.display = "none";
      activeTabBody.classList.remove("active");
      let newActiveTabBody = tabBodyNodes[i];
      newActiveTabBody.style.display = "block";
      newActiveTabBody.classList.add("active");
    });
  }
}());

//card
(function () {
  let loadMoreBtn = document.querySelector('#load-more');
  let hideBtn = document.querySelector('#hide-more');

  let boxes = [...document.querySelectorAll('.container .box-container .box')];
  let totalItemCount = boxes.length;
  let initialItemCount = 18;
  let currentItem = initialItemCount;

  // Ẩn các box còn lại khi load trang
  for (let i = initialItemCount; i < totalItemCount; i++) {
    boxes[i].style.display = 'none';
  }

  if (totalItemCount > initialItemCount) {
    loadMoreBtn.style.display = 'inline-block';
  }

  loadMoreBtn.onclick = () => {
    for (let i = currentItem; i < totalItemCount; i++) {
      boxes[i].style.display = 'inline-block';
    }

    currentItem = totalItemCount;
    loadMoreBtn.style.display = 'none';
    hideBtn.style.display = 'inline-block';
  };

  hideBtn.onclick = () => {
    for (let i = initialItemCount; i < totalItemCount; i++) {
      boxes[i].style.display = 'none';
    }

    currentItem = initialItemCount;
    hideBtn.style.display = 'none';
    loadMoreBtn.style.display = 'inline-block';
  };

}());

//carousel 
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  pageDots: false
});



var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  document.querySelectorAll(".ytplayer").forEach((item) => {
    new YT.Player(item, {
      events: {
        onReady: (event) => {
          event.target.playVideo();
          event.target.mute();
        },
      },
    });
  });
}
