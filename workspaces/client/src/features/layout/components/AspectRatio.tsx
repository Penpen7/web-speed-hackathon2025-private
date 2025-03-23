import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  ratioHeight: number;
  ratioWidth: number;
}

export const AspectRatio = ({ children, ratioHeight, ratioWidth }: Props) => {
  const aspectClass = `aspect-${ratioWidth}/${ratioHeight} relative w-full`;
  return <div className={aspectClass}>{children}</div>;
};
