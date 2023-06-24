import { DynamicRoutingProps } from "./type";

export default async function DynamicRouting({ params }: DynamicRoutingProps) {
  return (
    <main>
      <h2>
        This page is operates with <mark>Dynamic Route!</mark>
      </h2>
      <p>👷‍♀️ Dynamiclly Passed props : {params.dynamic}</p>
      <span>
        ⚙️ params 값이 동적으로 결정
        <br />
        <br />
        <dd> → pre-rendering 된 HTMl 골격과 SSR 조합으로 동작합니다.</dd>
      </span>

      <br />

      <span>
        💡 다이나믹 경로를 사용하는 페이지 중 원하는 특정 경로의 페이지를 미리
        정적으로 생성할 수 있습니다.
      </span>
    </main>
  );
}

// dynamic_with_static_params
export function generateStaticParams() {
  const params = ["you", "can", "generate", "static", "parmas"];
  return params.map((param) => ({
    // 컴포넌트에 전달되는 params 형태로 동일하게 작성
    dynamic: param,
  }));
}
