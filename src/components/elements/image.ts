import styled from 'styled-components';
import { ImageProps } from '../../types/types';

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: ${(props: ImageProps) => props.maxWidth}px;
`;

export default Image;
