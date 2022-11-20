import { IWrapperProps } from './../../interfaces/interface';
import styled from 'styled-components';

export const Column = styled.div.attrs<IWrapperProps>((props) => ({
  marginTop: props.marginTop || 0,
  marginBottom: props.marginBottom || 0,
  justifyContent: props.justifyContent || '',
  alignItems: props.alignItems || 'flex-start',
  gap: props.gap || 0,
}))<IWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  gap: ${(props) => props.gap};
`;
