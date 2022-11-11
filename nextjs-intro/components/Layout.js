import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="content">{children}</div>
      <NavBar />
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .content {
          width: 95%;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
