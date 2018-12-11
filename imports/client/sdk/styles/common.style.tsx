import styled from 'styled-components';

export const JRow = styled.div`
  display: flex;
  justify-content: ${ props => props.justify || 'flex-start' };
  align-items: ${ props => props.align || 'center' };
  width: ${ props => props.width || '100%' };
  height: ${ props => props.height || '100%' };
  padding: ${ props => props.padding || '5px' };
  font-size: ${ props => props.fontSize || '14px' };
`;