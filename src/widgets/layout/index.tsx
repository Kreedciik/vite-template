import Navbar from '@widgets/layout/ui/navbar';
import React, { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
