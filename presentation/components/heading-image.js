import styled from '@emotion/styled';
import { Image } from 'spectacle';

export const HeadingImage = styled(Image)`
  width: 1em;
  display: inline-block !important;
  margin: 0.1em 0.3em 0 !important;
  transform: scale(1.3) translateY(10%);

  @keyframes bounce {
    0% {
      transform: scale(1.3) translateY(-10%);
    }
    50% {
      transform: scale(1.3) translateY(20%);
    }
    100% {
      transform: scale(1.3) translateY(-10%);
    }
  }

  animation: ${props => (props.bounce ? 'bounce 0.9s infinite' : 'none')};
`;
