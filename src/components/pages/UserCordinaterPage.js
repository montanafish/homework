import React, { Component } from "react";

const testArray = [1, 2, 3, 4, 5];
const listItems = testArray.map(number => <li>{number}</li>);

export default class UserCordinaterPage extends Component {
  render() {
    return (
      <div>
        {listItems}
        <h1>ユーザー</h1>
        ユーザーのコーディネートページです
      </div>
    );
  }
}
