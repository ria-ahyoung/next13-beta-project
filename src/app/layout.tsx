import Link from "next/link";

type RootLayout = {
  children: React.ReactNode;
};

/** 하위 폴더 경로에서도 별도의 레이아웃 페이지를 생성할 수 있습니다. */
export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Next 13 Practice Project</h1>
          <nav>
            <Link href="/routing">Routing</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
