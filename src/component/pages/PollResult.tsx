import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const PollResult: FC<Props> = memo((props) => {
  const { id } = useParams();

  return (
    <>
      <h1>投票結果画面です。</h1>
      <p>対象の投票は{id}です。</p>
    </>
  );
});

export default PollResult;
