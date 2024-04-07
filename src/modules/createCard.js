import fetchData from "./fetchData";
import getUnitTitle from "./getUnitTitle";

export default async function createCard(name, american) {
  try {
    const weather = await fetchData(name, american);
    console.log(weather);
    const card = document.getElementById("card");
    const img = document.createElement("img");
    img.src = weather.icon;
    card.appendChild(img);
    Object.entries(weather).forEach(([key, value]) => {
        if (key!=='icon'){
            const titleUnit =getUnitTitle(american, key)
            const title=titleUnit[0]
            const unit=titleUnit[1]
            const position = document.createElement('div')
            position.className=key
            const positionTitle = document.createElement('p')
            positionTitle.innerText=title
            const positionData = document.createElement('p')
            positionData.innerText=value+unit
            position.appendChild(positionTitle)
            position.appendChild(positionData)
            card.appendChild(position)
        }
    });

  } catch (error) {
    console.error("Error creating card:", error);
  }
}
