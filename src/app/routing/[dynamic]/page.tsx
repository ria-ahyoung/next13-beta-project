import { DynamicRoutingProps } from "./type";

export default async function DynamicRouting({ params }: DynamicRoutingProps) {
  return (
    <main>
      <h2>This page is operates with Dynamic Route!</h2>
      <p>👷‍♀️ Dynamiclly Passed props : {params.dynamic}</p>
    </main>
  );
}
