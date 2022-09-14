import React, {useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'
import * as S from './style'

export default function Index (){

  let Api = 'https://hp-api.herokuapp.com/api/characters'

  const [personagem, setPersonagem] = useState([])

  useEffect(() =>{
    axios.get(Api).then(response => {
      console.log(response.data.slice(0.25))
      setPersonagem(response.data.slice(0.25))
    })
  }, [] )

  return(
    <div>
      <ul>{personagem.map(item =>(
        <li>
          <img src={item.image} alt={item.image} />
        </li>
      ))}
      </ul>
    </div>
  )
}