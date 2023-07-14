import styled, { keyframes } from 'styled-components';
import { Theme } from '../themes';

const skeletonAnimation = ({ theme }: { theme: Theme }) => keyframes`
	0% {
    background-color: ${theme.colors.silver[20]};
  }
  100% {
    background-color: ${theme.colors.silver[100]};
  }
`;

const SkeletonText = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 100%;
  height: 0.7rem;
  margin-block-end: 0.5rem;
  border-radius: 0.25rem;
`;

const SkeletonBox = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 100%;
  border-radius: 0.25rem;
`;

const SkeletonIcon = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
`;

export const Skeleton = {
  Text: SkeletonText,
  Box: SkeletonBox,
  Icon: SkeletonIcon,
};
