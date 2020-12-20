import React from "react";
import Header from './Header';
import Link from './Link'
import Menu from './Memu'
import './css/Top.css'
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
        <div className="article-main-box">
          {/* ここをループする */}
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
        </div>
      </div>
    );
  }
}

export default Top;
