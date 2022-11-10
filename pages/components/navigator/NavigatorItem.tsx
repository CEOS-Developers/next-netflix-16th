import styled from 'styled-components';
import Image from 'next/image';

function NavigatorItem({ item, selected }: any) {
  return (
    <>
      <MenuWrapper selected={selected}>
        <Image
          src={selected ? item.Selected : item.notSelected}
          alt=""
          width={20}
          height={17}
        />
        <div>{item.name}</div>
      </MenuWrapper>
    </>
  );
}

export default NavigatorItem;

const MenuWrapper = styled.div<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? 'white' : 'grey')};
  text-decoration: none;
  text-decortion-line: none;
  cursor: pointer;
`;
