let noClickCount = 0;

function changeImage(newSrc) {
  document.getElementById("mainImage").src = newSrc;
}

function resetImage() {
  document.getElementById("mainImage").src = "doyou.png";
}
// จำนวนปุ่มไม่ลิมิตที่เท่าไหร่ใส่ตรงนี้
function handleNoClick() {
  noClickCount++;
  if (noClickCount < 3) {
    shrinkNoButton();
    moveNoButton();
  } else {
    showPage("noPage");
  }
}

function shrinkNoButton() {
  const noButton = document.getElementById("noButton");
  const currentPadding = parseFloat(getComputedStyle(noButton).padding);
  const currentFontSize = parseFloat(getComputedStyle(noButton).fontSize);

  noButton.style.padding = `${currentPadding * 0.9}px`;
  noButton.style.fontSize = `${currentFontSize * 0.9}px`;
}

function moveNoButton() {
  const noButton = document.getElementById("noButton");
  const container = noButton.parentElement;
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxLeft = containerRect.width - buttonRect.width;
  const maxTop = containerRect.height - buttonRect.height;

  const randomLeft = Math.random() * maxLeft;
  const randomTop = Math.random() * maxTop;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomLeft}px`;
  noButton.style.top = `${randomTop}px`;
}

function showPage(pageId) {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("lovePage").classList.add("hidden");
  document.getElementById("noPage").classList.add("hidden");
  document.getElementById(pageId).classList.remove("hidden");
}

const images = [
    "loveu.png",
    "lovelove.jpg",
    "lovecard.jpg"
  ];

  let currentIndex = 0;
  const imgElement = document.querySelector(".flip-image");

  function showNextImage() {
    imgElement.style.transform = "scaleX(-1)";

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imgElement.src = images[currentIndex];

      // ลบคลาส animation เพื่อให้สามารถเล่นใหม่ได้รอบหน้า
      imgElement.style.transform = "scaleX(1)";
    }, 500);
  }

  // เปลี่ยนภาพทุก 3 วินาที
  setInterval(showNextImage, 1500);
