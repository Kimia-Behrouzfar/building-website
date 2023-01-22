const getApi = async () => {
  const dataa = fetch(" https://fakestoreapi.com/products");
  const finalData = await dataa.then((result) => result.json());

  ourData(finalData);
  searchSection();
};
getApi();

function ourData(finalData) {
  console.log(finalData);
  for (let data of finalData) {
    const { title, price, description, image, rate } = data;
    const section = document.querySelector(".data");

    const h3 = document.createElement("h3");
    h3.className = "h";
    h3.textContent = title;

    const myImage = document.createElement("img");
    myImage.className = "image";
    myImage.setAttribute("src", image.medium);

    const divPrice = document.createElement("div");
    divPrice.className = "price";
    divPrice.textContent = `$ ${price}`;

    const divRate = document.createElement("div");
    divRate.className = "rate";
    divRate.textContent = rate;

    const spanDescription = document.createElement("span");
    spanDescription.className = "des";
    spanDescription.innerHTML = ` ${description}  <br /> <hr/> <br />`;

    const ul = document.createElement("ul");
    ul.className = "ul";
    const li = document.createElement("li");
    li.className = "li";
    li.id = h3;

    ul.append(li);
    section.append(h3, myImage, divPrice, divRate, spanDescription, ul);
  }
}

const searchSection = () => {
  const section = document.querySelector(".data");
  const list = document.querySelectorAll(".li");
  section.addEventListener("change", () => {
    for (let li of list) {
      if (li.class === section.value) {
        li.style.display = "initial";
      } else if (section.value === "all") {
        li.style.display = "initial";
      } else {
        li.style.display = "none";
      }
    }
  });
};
