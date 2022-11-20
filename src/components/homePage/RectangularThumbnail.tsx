import Link from 'next/link';
import styled from 'styled-components';
import { IThumbnailProps } from '../../interfaces/interface';

const RectangularThumbnail = ({ imageSrc, id, title, description, poster_path }: IThumbnailProps) => {
  return (
    <Wrapper>
      <Link
        href={{
          pathname: `/home/${id}`,
          query: {
            title: title,
            description: description,
            poster_path: poster_path,
          },
        }}
        as={`/home/${id}`}
      >
        <img src={imageSrc} width={103} height={161} alt="직사각형 이미지" />
      </Link>
    </Wrapper>
  );
};

export default RectangularThumbnail;

const Wrapper = styled.button`
  width: 103px;
  height: 161px;
  overflow: hidden;
  border: none;
  padding: 0;
  border-radius: 2px;

  cursor: pointer;

  img {
    object-fit: cover;
  }
`;
