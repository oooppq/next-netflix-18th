export const useDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
) => {
  // timeout 함수가 closure 환경에 저장됨. timeout interval 사이에 fn이 호출된다면
  // 기존의 timeout 스케줄이 삭제되고, 새로운 timeout 스케줄이 할당됨.
  // 덕분에 지정한 delay 시간동안 fn이 한 번만 호출될 수 있음.

  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    if (timeout) clearTimeout(timeout); // 기존의 timeout 삭제
    timeout = setTimeout(() => {
      // 새로운 timeout 할당
      result = fn(...args);
    }, delay);
    return result;
  };
};
