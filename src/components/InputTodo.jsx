import React from "react";

const style = {
  //style.cssの.input-area内の記述をstyleという変数名でInputTodo.jsx内に新たに定義（CSS内の.input-areaは削除してOK）
  backgroundColor: "#c1ffff", //background-colorをbackgroundColorとキャメルケースで書いて、#c1ffffの部分を'#c1ffff'書く。最後の;は,に変更
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px" //ここの;は消すだけでＯＫ
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props; //propsにdisabledを追加
  return (
    <div style={style}>
      <input
        disabled={disabled} //propsのdisabledがtrueの時、disabledの機能が作動してテキストボックスが不活性になる
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
