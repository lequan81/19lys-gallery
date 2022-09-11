let tinhBanDieuKy = document.getElementById('tinhBanDieuKy');

window.addEventListener("load", () => {
  document.createElement("img");
  const getImgs = async () => {
    await fetch("https://raw.githubusercontent.com/lequan81/19Lys-Tool/main/data/db.json")
      .then((response) => response.json())
      .then((results) => displayImgs(results.imgs));
  };

  getImgs();

  const playMusic = () => {
    tinhBanDieuKy.play();
    tinhBanDieuKy.volume = 0.2;
  };

  setTimeout(playMusic, 3000);

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

    for (let i = 0; i < imgsResult.length; i++) {

      if (portraitArr[i] !== undefined || landscapeArr[i] !== undefined) {
        let dataPortrait = portraitArr[i];
        document.getElementsByClassName("p-1 w-1/2 md:p-2")[i].innerHTML = `<img src="${dataPortrait}" class="block h-full w-full rounded-lg object-cover object-center aspect-auto" alt="${dataPortrait}">`;

        let dataLandscape = landscapeArr[i];
        document.getElementsByClassName("p-1 w-full md:p-2")[i].innerHTML = `<img src="${dataLandscape}" class="block h-full w-full rounded-lg object-cover object-center aspect-auto" alt="${dataLandscape}">`;
      }
    };
  };
});
