import { useSelector, useDispatch } from 'umi'

const ShowDoubleCount: React.FC = () => {
  const { count } = useSelector((state: any) => state.global);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Double Count: {count * 2}</h1>
      <button onClick={() => dispatch({ type: 'global/addValue', payload: 2 })}>+2</button>
      <button className='ml-2' onClick={() => dispatch({ type: 'global/addAsync' })}>addAsync</button>
    </div>
  );
};

export default ShowDoubleCount;
