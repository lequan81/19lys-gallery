let musicIndex = document.getElementById('musicIndex');
let imageContainer = document.querySelector('.imageContainer');

const getImgs = async () => {
  await fetch("https://raw.githubusercontent.com/lequan81/19Lys-Tool/main/data/db.json")
    .then((response) => response.json())
    .then((results) => displayImgs(results.imgs));
};

const displayImgs = (imgsResult) => {

  let portraitArr = imgsResult
    .filter((data) => {
      return data.direction === "portrait";
    })
    .map((data) => {
      return `${data.url}`;
    });
  console.log(portraitArr);

  let landscapeArr = imgsResult
    .filter((data) => {
      return data.direction === "landscape";
    })
    .map((data) => {
      return `${data.url}`;
    });
  console.log(landscapeArr);

  for (let i = 0; i < imgsResult.length / 3; i++) {
    imageContainer.innerHTML += /*html*/`
    <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2"></div>
          <div class="p-1 w-1/2 md:p-2"></div>
          <div class="p-1 w-1/2 md:p-2"></div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="p-1 w-1/2 md:p-2"></div>
          <div class="p-1 w-1/2 md:p-2"></div>
          <div class="w-full p-1 md:p-2"></div>
        </div>
      </div>
    `;
  }

  portraitArr.forEach((img, index) => {
    document.getElementsByClassName("p-1 w-1/2 md:p-2")[index].innerHTML = `<img src="${img}" class="imgs  block h-full w-full rounded-lg object-cover object-center aspect-auto" alt="${index}">`;
  });
  landscapeArr.forEach((img, index) => {
    document.getElementsByClassName("p-1 w-full md:p-2")[index].innerHTML = `<img src="${img}" class="imgs  block h-full w-full rounded-lg object-cover object-center aspect-auto" alt="${index}">`;
  });
};

window.addEventListener("load", async () => {
  await document.createElement("img");
  await getImgs();

  const playMusicIndex = () => {
    musicIndex.play();
    musicIndex.volume = 0.2;
  };

  setTimeout(playMusicIndex, 3000);
});
