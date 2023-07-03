import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";

import type { Metadata } from "next";

/**
 * 레이아웃에서 metadata를 작성할 경우 자식 라우트 경로에서도 메타 데이터가 재사용됩니다.
 * 프로젝트 공통으로 사용되는 기본 사항은 최상위경로의 레이아웃 파일에 작성하되,
 * 페이지에 선언이 필요한 개별적 항목은 페이지내에서 선언이 필요합니다. (ex. home)
 * 이때 반드시 'metadata' 이름으로 export 해야 header에 적용됩니다.
 */

export const metadata: Metadata = {
  title: "Next 13 Practice Site",
  description:
    "This is a site where you can check the functionality of the new Next 13 version.",
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayout = {
  children: React.ReactNode;
};

/** 하위 폴더 경로에서도 별도의 레이아웃 페이지를 생성할 수 있습니다. */
export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <header className={style.header}>
          <h1>Next 13 Practice Project</h1>
          <nav>
            <Link href="/routing">Routing</Link>
          </nav>
        </header>
        <main className={style.childrenWrapper}>{children}</main>
      </body>
    </html>
  );
}
