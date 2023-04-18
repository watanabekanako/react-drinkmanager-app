import { useParams } from 'react-router-dom';
import { FC, memo } from 'react';

type Props = {};

const ItemEdit: FC<Props> = memo((props) => {
  const { id } = useParams();
  return (
    <>
      <h1>商品編集画面です。</h1>
      <p>編集対象の商品IDは{id}です。</p>
    </>
  );
});

export default ItemEdit;
