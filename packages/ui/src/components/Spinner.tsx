import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotateAnimation = keyframes`
	100% { transform: rotate(360deg); }
`;

const LineAnimation = keyframes`
	0% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -35;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -124;
	}
`;

const AnimatedSpinner = styled.svg`
  animation: ${RotateAnimation} 2s linear infinite;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const AnimatedPath = styled.circle`
  stroke: currentColor;
  animation: ${LineAnimation} 1.5s ease-in-out infinite;
`;

type SpinnerProps = {
  size?: number;
};
export const Spinner = ({ size = 25 }: SpinnerProps) => {
  const strokeWidth = 3;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - strokeWidth;
  return (
    <AnimatedSpinner width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <AnimatedPath
        className="path"
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        strokeWidth={strokeWidth}
      ></AnimatedPath>
    </AnimatedSpinner>
  );
};
