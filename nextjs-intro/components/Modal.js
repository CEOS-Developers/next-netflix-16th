import styled from 'styled-components';

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  return (
    <Presentation>
      <Wrapper_modal>
        <Modal>
          <Modal_close onClick={() => setModalOpen(false)}>X</Modal_close>
          <Modal_poster
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          <Modal__content>
            <Modal__details>
              {release_date ? release_date : first_air_date}
            </Modal__details>
            <Modal_title>{title ? title : name}</Modal_title>
            <Modal_overview>Rating:{vote_average}</Modal_overview>
            <Modal_overview>{overview}</Modal_overview>
          </Modal__content>
        </Modal>
      </Wrapper_modal>
    </Presentation>
  );
}

const Modal = styled.div`
  position: relative;
  max-width: 500px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #111;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  ::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;
const Modal_poster = styled.img`
  width: 100%;
  height: auto;
`;

const Modal__content = styled.div`
  padding: 40px;
  color: white;
`;
const Modal_title = styled.h2`
  padding: 0;
  font-size: 40px;
  margin: 16px 0;
`;

const Modal__details = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

const Modal_overview = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const Modal_close = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 1000;
  color: white;
`;

const Presentation = styled.div`
  z-index: 500;
  position: absolute;
`;

const Wrapper_modal = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
`;
