import api from "./asset/api";
import apiKey from "./asset/apiKey";

// // app/page.js
// async function getData() {
//   return fetch(`${api}/movie/now_playing?api_key=${apiKey}`)
//   .then(res=>res.json())
// }

// export default async function setData() {
//   const name = await getData();
//   // console.log(name);
//   return name;
// }

function Page({ data }) {
  console.log(this.props.data);
  //res.json()이 찍힙니다
}

export async function getServerSideProps() {
  const res = await fetch(`${api}/now_playing?api_key=${apiKey}`);
  const data = await res.json();

  return { props: { data: data } };
}

export default Page;
