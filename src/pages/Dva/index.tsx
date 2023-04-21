import { connect, useDispatch } from "umi";
import type { Loading } from 'umi';
import type { GlobalModelState } from '@/models/connect';
import { Button } from 'antd';
import ShowDoubleCount from './ShowDoubleCount';

interface PageProps {
  global: GlobalModelState;
  loading: boolean;
}
const Dva: React.FC<PageProps> = ({ global }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>状态管理dva</h1>
      <div className="flex">
        <Button onClick={() => dispatch({ type: 'global/add' })}>+</Button>
        <div className="mx-2">{ global.count }</div>
        <Button onClick={() => dispatch({ type: 'global/minus' })}>-</Button>
      </div>
      <div className="mt-2">
        <ShowDoubleCount />
      </div>
    </div>
  );
}

export default connect(
  ({ global, loading }: { global: GlobalModelState, loading: Loading }) => ({
    global,
    loading: loading.models.global,
  })
)(Dva);
