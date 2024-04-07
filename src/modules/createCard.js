import fetchData from "./fetchData";
import getUnitTitle from "./getUnitTitle";

export default async function createCard(name, american) {
  try {
    const weather = await fetchData(name, american);
    const location = weather.details
    const date = new Date(location.localtime_epoch*1000)
    const card = document.getElementById("card")
    const details = document.createElement('div')
details.className='details'
    card.innerHTML = "";
    const cardHeader=document.createElement('div')
    cardHeader.className='cardHeader'
    const locationName=document.createElement('p')
    locationName.className='cardName'
    locationName.innerText=`${location.name}, ${location.country}`
    const locationDetails = document.createElement('p')
    locationDetails.className='cardDetails'
    locationDetails.innerText=`${date.toLocaleString('default', { weekday: 'long' })} ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`
    cardHeader.appendChild(locationName)
    cardHeader.appendChild(locationDetails)
    card.appendChild(cardHeader)
    const img = document.createElement("img");
    img.src = weather.icon;
    details.appendChild(img);
    const data = document.createElement('div')
    data.className='data'
    Object.entries(weather).forEach(([key, value]) => {
      if (key !== "icon"&& key!=='details') {
        const titleUnit = getUnitTitle(american, key);
        const title = titleUnit[0];
        const unit = titleUnit[1];
        const position = document.createElement("div");
        position.className = "position";
        const positionTitle = document.createElement("p");
        positionTitle.innerText = title;
        const positionData = document.createElement("p");
        positionData.innerText = value + unit;
        position.appendChild(positionTitle);
        position.appendChild(positionData);
        data.appendChild(position);
      }
    })
    details.appendChild(data)
    card.appendChild(details)
    ;
  } catch (error) {
    console.error("Error creating card:", error);
  }
}
