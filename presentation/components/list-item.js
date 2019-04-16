import styled from '@emotion/styled';
import { ListItem } from 'spectacle';

/**
 * styled list item element
 */
export const ListItemWithEmphasis = styled(ListItem)`
  position: relative;
  margin-bottom: 3rem;

  &:before {
    content: '\\2022';
    color: #865cd6;
    font-size: 1.1em;
    position: absolute;
    top: 0em;
    left: -0.7em;
  }
`;
