import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

const MainNav = () => (
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

const CordinateNav = () => (
  <div id="switch_sex_type">
    <nav>
      <ul>
        <li class="all current">
          <a href="/">コーディネイト</a>
        </li>
        <li class="men ">
          <a href="/men">ユーザー</a>
        </li>
        <li class="women ">
          <a href="/women">アイテム</a>
        </li>
        <li class="kids ">
          <a href="/kids">ショップ</a>
        </li>
      </ul>
    </nav>
  </div>
)

class MainMenuBar extends Component {
  render() {
    const path = _.get(this.props, ['location', 'pathname'], '')
    console.log(path)
    return <div>{path === '/CordinatePageMenuBar' ? <CordinateNav /> : <MainNav />}</div>
  }
}

export default withRouter(MainMenuBar)
