type RootLayout = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
