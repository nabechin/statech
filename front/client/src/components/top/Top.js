import React from "react";
import Header from '../Header';
import Menu from '../Memu'
import '../css/Top.css'
import '../css/Common.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Top extends React.Component {
  getLinks() {
    const links = [
      { linkName: "Sign Up", href: "/signup" },
      { linkName: "Log In", href: "/login" },
    ];
    return links;
  }
  render() {
    return (
      <div>
        <Header>
          {/* <Link links={this.getLinks()} /> */}
          <Menu></Menu>
        </Header>
        <span className="top-box">
          <span className="left-box">
            <form>
              <span className="search-box">
              <input className="search"></input>
              <FontAwesomeIcon icon={["fa", "search"]} className="search-icon" />
              </span>
            </form>
            <p><a href="/aaa" className="left-box-menu">WEBアプリ</a></p>
            <p><a href="/aaa" className="left-box-menu">インフラ</a></p>
            <p><a href="/aaa" className="left-box-menu">機械学習</a></p>
            <p><a href="/aaa" className="left-box-menu">QA</a></p>
            <p><a href="/aaa" className="left-box-menu">営業</a></p>
            <p><a href="/aaa" className="left-box-menu">内勤</a></p>
            <hr className="left-box-menu-line"></hr>
            <p><a href="/aaa" className="left-box-menu">質問</a></p>
          </span>
          <span className="article-main-box">
            {/* ここをループする */}
            <a href="/article/detail" className="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
            <a href="/article/detail" class="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
            <a href="/aaa" className="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
            <a href="/aaa" className="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
            <a href="/aaa" className="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
            <a href="/aaa" className="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
            <a href="/aaa" className="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
            <a href="/aaa" className="article-sub-box-href">
              <div className="article-sub-box">
                <span className="user-info-box">
                  <div className="user-circle">
                    <FontAwesomeIcon icon={["far", "user"]} className="user-icon" />
                  </div>
                  <span className="user-name">ユーザー名</span>
                  <span className="post-date">2020 / 12/ 20</span>
                </span>
                <div className="main-title">Reactでなに作ろうかアイウエオカキクケコ</div>
                <span className="icon-box">
                  <FontAwesomeIcon icon={["far", "heart"]} className="heart-icon"/> <span className="heart-count">10</span>
                  <FontAwesomeIcon icon={["far", "comment"]} className="comment-icon"/> <span className="comment-count">0</span>
                </span>
              </div>
            </a>
          </span>
        </span>
      </div>
    );
  }
}

export default Top;
