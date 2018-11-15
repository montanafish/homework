import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

export default class MainMenuBar extends Component {
  render() {
    return (
      <div id="switch_sex_type">
        <nav>
          <ul>
            <li class="all current">
              <a href="?c=SwitchTabType">ALL</a>
            </li>
            <li class="men ">
              <a href="?c=SwitchTabType&amp;sex_id=1">MEN</a>
            </li>
            <li class="women ">
              <a href="?c=SwitchTabType&amp;sex_id=2">WOMEN</a>
            </li>
            <li class="kids ">
              <a href="?c=SwitchTabType&amp;sex_id=3">KIDS</a>
            </li>
            <li class="world ">
              <a href="?c=SwitchTabType&amp;sex_id=4">WORLD</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
