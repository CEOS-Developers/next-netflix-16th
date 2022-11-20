import styled from 'styled-components';
import { IThumbnailProps } from '../../interfaces/interface';
import Link from 'next/link';
import Image from 'next/image';

const CircularThumbnail = ({ imageSrc, id, title, description, poster_path }: IThumbnailProps) => {
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
        <img src={imageSrc} width={102} height={102} alt="원형 이미지" />
      </Link>
    </Wrapper>
  );
};

export default CircularThumbnail;

const Wrapper = styled.button`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  padding: 0;

  cursor: pointer;

  img {
    object-fit: cover;
  }
`;
