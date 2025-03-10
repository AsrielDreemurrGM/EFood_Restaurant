declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const value: string;
  export { ReactComponent };
  export default value;
}
