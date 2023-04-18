import { FC, memo } from "react";
import ModalWindow from "../ModalWindow";

type Props = {};

const Timeline: FC<Props> = memo((props) => {
  return (
    <div>
      <h1>タイムライン画面です。</h1>
      <ModalWindow
        title="test modal"
        content="test modal description"
        modalOpenButton="open"
        completeButtonName="test"
        completeAction={() => {
          console.log("test");
        }}
      />
    </div>
  );
});

export default Timeline;
