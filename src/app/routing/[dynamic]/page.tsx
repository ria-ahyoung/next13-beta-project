import { notFound } from "next/navigation";

import type { DynamicRoutingProps } from "./types";

// 페이지 별로 dynamic metadata 생성할 수 있습니다.
export function generateMetadata({ params }: DynamicRoutingProps) {
  return {
    title: `페이지 경로 : ${params.dynamic}`,
    description: `다이나믹 라우팅 동작에 의한 ${params.dynamic} 경로의 페이지입니다.`,
  };
}

export default async function DynamicRouting({ params }: DynamicRoutingProps) {
  if (params.dynamic === "nothing") {
    // 의도적으로 호출할 경우 폴더와 가장 가까운 not-found 페이지가 표시됩니다.
    notFound();
  }
  return (
    <main>
      <h2>
        This page is operates with <mark>Dynamic Routing!</mark>
      </h2>
      <p>
        👷‍♀️ <em>Dynamiclly Passed props</em> : {params.dynamic}
      </p>

      <span>
        ⚙️ <em>페이지 동작</em> : 전달된 params 값이 동적으로 결정되며,
        pre-rendering 된 HTML 골격과 SSR 조합으로 동작합니다.
      </span>
      <br />
      <br />

      <span>
        💡 <em>SSG 지원</em> : 다이나믹 경로를 사용하는 페이지 중 원하는 특정
        경로의 페이지를 미리 정적으로 생성할 수 있습니다. ==={" "}
        <em>Static Routing</em>&nbsp; 처럼 동작 가능
      </span>
    </main>
  );
}

/* dynamic_with_static_params */
export function generateStaticParams() {
  const params = ["you", "can", "generate", "static", "params"];
  return params.map((param) => ({
    // 컴포넌트에 전달되는 params 형태로 동일하게 작성
    dynamic: param,
  }));
}
