export const metadata = {
  title: 'Uns',
  description: 'A resting place for tired hearts.'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
