import * as React from 'react';
import type { IconProps } from './types';
const ChevronUp = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={9}
    fill="inherit"
    {...props}
  >
    <path d="M15.653 8.656a1.188 1.188 0 0 1-1.674 0L8.118 2.837 2.257 8.656a1.189 1.189 0 0 1-1.66-.014 1.171 1.171 0 0 1-.015-1.648L7.281.344a1.188 1.188 0 0 1 1.674 0l6.698 6.65a1.171 1.171 0 0 1 0 1.662Z" />
  </svg>
);
export default ChevronUp;
