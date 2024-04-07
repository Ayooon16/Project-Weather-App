import createCard from "./modules/createCard";
import "./style.css";

let american = false

createCard("phoenix", american);

function reload(){
    const city = document.getElementById('city').value
    createCard(city, american)

}
document.getElementById('selectCity').addEventListener("submit", (event) => {
    reload()
    event.preventDefault()
});



const buttons =document.querySelectorAll('.selectButton').forEach(element => {
    const usa = document.getElementById('selectUsa')
    const world = document.getElementById('selectWorld')
    element.addEventListener('click', function() { 
                if(this===usa){
                    this.className='selectButton active'
                    world.className='selectButton'
                    american=true
                }
                else {
                    this.className='selectButton active'
                    usa.className='selectButton'
                    american=false
                }
reload()
    })
});