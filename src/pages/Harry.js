import React, {useEffect} from 'react'
import axios from 'axios'

export default function Harry (){

  let Api = 'https://hp-api.herokuapp.com/api/characters'

  const [personagem, setPersonagem] = useState([])

  useEffect(() =>{
    axios.get(Api).then(response => {
      console.log(response.data.slice(0.25))
      setPersonagem(response.data.slice(0.25))
    })
  }, [] )

  return(
    <S.Container>
      <ul>{personagem.map(item =>(
        <li>
          <S.Img src={item.image} alt={item.image} />
        </li>
      ))}
      </ul>
    </S.Container>
  )
}