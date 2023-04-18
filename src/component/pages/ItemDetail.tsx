import { useParams } from 'react-router-dom';
import { FC, memo } from 'react';

type Props = {};

const ItemDetail: FC<Props> = memo((props) => {
  const { id } = useParams();
  return (
    <>
      <h1>商品詳細画面です。</h1>
      <p>対象商品のIDは{id}です。</p>
    </>
  );
});

export default ItemDetail;
