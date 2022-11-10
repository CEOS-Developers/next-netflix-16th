import MyHead from '../components/MyHead';

export default function home({ data, data2, data3 }) {
  console.log(data3);
  return (
    <div className="container">
      <MyHead title="Home" />
      <div className="movies-section">
        <div className="movies-name">Popular</div>
        <div className="movies-wrapper">
          {data3.results.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="movies-section">
        <div className="movies-name">Now Playing</div>
        <div className="movies-wrapper">
          {data2.results.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .movies-section {
          width: 100%;
          padding: 0.5rem 0 0.5rem;

          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .movies-name {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 700;
          font-size: 20.9212px;
          color: white;
        }

        .movies-wrapper {
          width: 100%;
          display: flex;
          gap: 7px;

          overflow: auto;
        }

        img {
          width: 103px;
          height: 161px;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();
  const data2 = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();
  const data3 = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();

  return {
    props: {
      data,
      data2,
      data3,
    },
  };
}
