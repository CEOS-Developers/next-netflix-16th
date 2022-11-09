import api from '../../asset/api'
import apiKey from '../../asset/apiKey'
import imgPath from '../../asset/imgPath'

export function showMovieList(){
  return fetch(`${api}/movie/now_playing?api_key=${apiKey}`)
    .then(res=>res.json())
  // const res = await fetch(`${api}/movie/now_playing?api_key=${apiKey}`)
  // console.log(res);
  // return await res.json()
}