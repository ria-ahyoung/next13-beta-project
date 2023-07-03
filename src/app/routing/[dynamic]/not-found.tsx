/**
 * 폴더 경로별로 not found 페이지를 지정할 수 있습니다. -> 함수 호출 통해 not found 페이지 표기 가능
 * 사용자가 매칭되지 않은 URL을 입력할 경우 app/not-found.tsx 파일이 렌더링됩니다.
 */

export default function PathNotFound() {
  return (
    <>
      <h1>
        It's a <mark>Custom Not-Found Page</mark> shown by Intentional function
        call.
      </h1>
      <img
        width="500"
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
      />
    </>
  );
}
