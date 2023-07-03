import style from "./layout.module.css";

type RootLayout = {
  children: React.ReactNode;
};

// 하위 폴더 내에서도 중첩된 레이아웃 페이지를 생성할 수 있습니다.
export default function RootLayout({ children }: RootLayout) {
  return (
    <main>
      <h3>🔖 &nbsp;Learn about Routing !</h3>
      <nav>
        <a href="/routing/dynamic-routing-pass-anything-you-want">
          1. Dynamic Routing
        </a>
        &nbsp;
        <a href="/routing/static">2. Static Routing</a>&nbsp;
        <a href="/routing/nothing">3. Custom Not Found Page</a>&nbsp;
      </nav>
      <section className={style.childrenWrapper}>{children}</section>
    </main>
  );
}
