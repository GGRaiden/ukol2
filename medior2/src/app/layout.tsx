import { ReactElement } from 'react';
import { Metadata } from 'next';
import { UserProvider } from '@/types/user';
import '@/styles/index.scss';

interface IProps {
  children: ReactElement
}

export const metadata: Metadata = {
  title: 'Medior Page',
  icons: {
    icon: '/favicons/favicon.svg',
  },
};

const RootLayout = ({
  children,
}: IProps): ReactElement => (
  <html lang="en">
    <body className="page-layout">
      <UserProvider>
        {children}
      </UserProvider>
    </body>
  </html>
);

export default RootLayout;
