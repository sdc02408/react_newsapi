import {useState, useEffect} from 'react';

//다양한 곳에서 사용할 수 잇는 util함수..
//usePromise의 의존 배열 deps를 파라미터로 받아온다.
//deps 배열은 usePromise 내부에서 사용한 useEffect 의 의존배열로 설정되는데 이 배열을 설정 하는 부분에 eslint 오류가 떠서 주석처리해야해

export default function usePromise(promiseCreator, deps) {
  //대기 중/ 완료/실패에 대한 상태관리
  const [loading,setLoading] = useState(false);
  const [resolved,setResolved] = useState(null);
  const [error,setError] = useState(null);
  
  useEffect( () => {
    const process = async () => {
      setLoading(true);
      try{
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    //eslint-disable-next-line react-hooks/exhaustive-deps
    
  },deps);
  
  return [loading,resolved,error]
}
