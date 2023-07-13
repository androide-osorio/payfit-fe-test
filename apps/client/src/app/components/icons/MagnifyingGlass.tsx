import { SVGProps, Ref, forwardRef, memo } from 'react';

const Icon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M12.917 11.667h-.659l-.233-.225a5.393 5.393 0 0 0 1.308-3.525 5.417 5.417 0 1 0-5.416 5.416 5.393 5.393 0 0 0 3.525-1.308l.225.233v.659l4.166 4.158 1.242-1.242-4.158-4.166Zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75Z"
    />
  </svg>
);

export const MagnifyingGlass = memo(forwardRef(Icon));
