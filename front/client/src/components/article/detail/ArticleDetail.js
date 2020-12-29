import React from "react"
import Header from '../../Header'
import Memu from '../../Memu'
import '../../css/ArticleDetail.css'
import DisplayCommentModal from './DisplayCommentModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ArticleDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hertColor: "",
      isHertColor: false,
      isShowModal: false
    };
  }

  //  ハートのアイコンをクリックした時に発火
  //  isHertColor = true　ならハートは黒色
  //  isHertColor = false　ならハートは赤色の状態にする
  // 　ここでaxiosで非同期にuser_articleテーブルを更新すること。
  clickGoodButton = e => {
    if(!this.state.isHertColor) {
      this.setState({
        hertColor: "red",
        isHertColor: true,
        isShowModal: false
      });
    } else {
      this.setState({
        hertColor: "",
        isHertColor: false
      })
    }
  };

  displayCommentModal = () => {
    this.setState({
      isShowModal: true
    })
  }

  closeCommentModal = () => {
    this.setState({
      isShowModal: false
    })
  }

  render() {
    return(
      <div>
        <Header>
          <Memu></Memu>
        </Header>
        <span className="article-detail-main-box">
          <div className="box">
              <div className="hert-icon-detail-circle" onClick={this.clickGoodButton}>
                <FontAwesomeIcon icon={["far", "heart"]} className="heart-detail-icon" style={{ 'color': this.state.hertColor }}/>
              </div> 
              <div className="comment-icon-detail-circle" onClick={this.displayCommentModal}>
                <FontAwesomeIcon icon={["far", "comment"]} className="comment-detail-icon"/>
              </div>
            <a href="/users/me">
              <div className="user-info-detail-box">
                <div className="user-icon-detail-circle">
                  <FontAwesomeIcon icon={["far", "user"]} className="user-detail-icon" />
                </div>
                <div className="user-detail-info-word">平野　祐介</div>
                <div className="user-detail-info-word">WEBエンジニア</div>
                <div className="user-detail-info-word">2010年12月 入社</div>
              </div>
            </a>
          </div>
          <div className="article-box">
            <div className="user-icon-article-circle">
              <FontAwesomeIcon icon={["far", "user"]} className="user-icon-article-icon" />
            </div>
            <span className="article-user-name">ユーザー名</span>
            <span className="article-post-date">2020 / 12 / 20 投稿</span>
            <div className="article-detail-title">Reactでなに作ろうアイウエオ</div>
            {/* 多分ここをループすると思う */}
            <span className="tag-box">
              <div className="article-detail-tag">#java</div>
              <div className="article-detail-tag">#HTML</div>
              <div className="article-detail-tag">#CSS</div>
            </span>
            <div className="article-content">
              {`
              ああああああああ
              いいいいいいいいいいrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
              っっっっっっっっっw
              青々青々あsっfgrgrgr
              gr絵gr絵grエレgrgrg
              げrげrgr絵げrげr
              げrげっrgr絵rgr絵grえ
              っっっっっg
              えっっっっr
              っっっっっっっっっっr
              っっっっっっっっっr
              っっっっっっっr
              
              っっっっっっっっっっっd
              ああああああああ
              いいいいいいいいいいrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
              っっっっっっっっっw
              青々青々あsっfgrgrgr
              gr絵gr絵grエレgrgrg
              げrげrgr絵げrげr
              げrげっrgr絵rgr絵grえ
              っっっっっg
              えっっっっr
              っっっっっっっっっっr
              っっっっっっっっっr
              っっっっっっっr
              
              っっっっっっっっっっっd
              `}
            </div>
          </div>
        </span>
        { this.state.isShowModal? <DisplayCommentModal closeCommentModal={this.closeCommentModal} /> : "" }
      </div>
    )
  }
}

export default ArticleDetail;
