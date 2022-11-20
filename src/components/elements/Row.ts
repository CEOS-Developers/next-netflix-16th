import styled from 'styled-components';
import { IWrapperProps } from '../../interfaces/interface';

export const Row = styled.div<IWrapperProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;
