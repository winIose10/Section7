import React from "react";

export const IncompleteTodos = (props) => {
  //propsを引数として受け取る。exportするのを忘れずに
  const { todos, onClickComplete, onClickDelete } = props; //propsの中身を分割代入
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          //各々の変数名を分割代入された変数名に書き換える。未完了エリアや完了エリアもほぼ同じ
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
