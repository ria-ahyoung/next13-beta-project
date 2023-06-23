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
    </main>
  );
}
