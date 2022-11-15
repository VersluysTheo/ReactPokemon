import { useState,useEffect } from "react"
import './Fetch.css';

export default function Fetch(){
    const [data,setData] = useState();

useEffect(() => {
    for (let id = 1; id < 42; id++) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(response => response.json())
    .then(data => {
        let card = document.createElement('div')
        card.className = 'card text-center m-3'
        card.style = 'width: 18rem;'
        card.id = 'card' + data.id
    document.getElementById('cardContainer').appendChild(card)

    let img = document.createElement('img')
        img.src = data.sprites.other.dream_world.front_default
        img.className = 'card-img-top'
        img.alt = 'image du personnage'
    document.getElementById('card'+data.id).appendChild(img)

    let divCardBody = document.createElement('div')
        divCardBody.className = 'card-body'
        divCardBody.id = 'card-body'+data.id
    document.getElementById('card'+data.id).appendChild(divCardBody)

    let nameCharacter = document.createElement('h5')
        nameCharacter.className = 'card-title'
        nameCharacter.innerText = data.name
    document.getElementById('card-body'+data.id).appendChild(nameCharacter)

    let idCharacter = document.createElement('p')
        idCharacter.innerText = data.id
    document.getElementById('card-body'+data.id).appendChild(idCharacter)
    
})
}})

return(
    <div className="testcon">
        <div className="testcard" id="cardContainer"></div>
    </div>

)

}
