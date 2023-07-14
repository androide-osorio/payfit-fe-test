import { SVGProps, Ref, forwardRef, memo } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 4.858 12.642 7.5l1.175-1.175L10 2.5 6.175 6.325 7.358 7.5 10 4.858Zm0 10.284L7.358 12.5l-1.175 1.175L10 17.5l3.825-3.825-1.183-1.175L10 15.142Z"
    />
  </svg>
);

export const Unfold = memo(forwardRef(Icon));
