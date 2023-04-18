import { FC, memo } from 'react';

type Props = {};

const Poll: FC<Props> = memo((props) => {
  return <h1>投票画面です。</h1>;
});

export default Poll;
