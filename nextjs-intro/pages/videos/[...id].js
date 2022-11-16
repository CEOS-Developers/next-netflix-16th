import styled from 'styled-components';

const play = ({ data }) => {
  return (
    <Iframe
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${data.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${data.videos.results[0].key}`}
      title="YouTube video player"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></Iframe>
  );
};

const API_KEY = process.env.API_KEY;

export async function getServerSideProps({ params: { id } }) {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    )
  ).json();

  return { props: { data } };
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default play;
