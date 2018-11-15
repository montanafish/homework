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
              <a href="/">ALL</a>
            </li>
            <li class="men ">
              <a href="/men">MEN</a>
            </li>
            <li class="women ">
              <a href="/women">WOMEN</a>
            </li>
            <li class="kids ">
              <a href="/kids">KIDS</a>
            </li>
            <li class="world ">
              <a href="/world">WORLD</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
