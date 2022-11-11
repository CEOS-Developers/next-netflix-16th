import styled from 'styled-components';
import Image from 'next/image';
import { INavigatorItem } from '../../Interface/interface';

function NavigatorItem({ item, selected }: INavigatorItem) {
  return (
    <>
      <MenuWrapper selected={selected}>
        <Image
          src={selected ? item.Selected : item.notSelected}
          alt=""
          width={17}
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
  font-size: 8px;
  margin-top: 11px;
  margin: 0 auto;
  text-align: center;
`;
