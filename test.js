window.addEventListener("load", () => {
  const getImgs = async () => {
    await fetch("https://raw.githubusercontent.com/lequan81/19Lys-Tool/main/data/db.json")
      .then((response) => response.json())
      .then((results) => displayImgs(results.imgs));
  };

  getImgs();

  const displayImgs = (imgsResult) => {
    const img = document.createElement("img");

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

    let i = 0;
    portraitArr.forEach((data) => {
      let portraitContainer = `<img src="${data}" class="block h-full w-full rounded-lg object-cover object-center" alt="${data}">`;
      document.getElementsByClassName("p-1 w-1/2 md:p-2")[i].innerHTML =
        portraitContainer;
      i++;
    });

    let x = 0;
    landscapeArr.forEach((data) => {
      let landscapeContainer = `<img src="${data}" class="block h-full w-full rounded-lg object-cover object-center" alt="${data}">`;
      document.getElementsByClassName("p-1 w-full md:p-2")[x].innerHTML =
        landscapeContainer;
      x++;
    });
  };
});
