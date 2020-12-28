import React from "react";
import Header from '../../Header';
import Memu from '../../Memu'
import '../../css/ArticleDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ArticleDetail extends React.Component {
  render() {
    return(
      <div>
        <Header>
          <Memu></Memu>
        </Header>
        <span class="article-detail-main-box">
          <div class="box">
              <div class="hert-icon-detail-circle">
                <FontAwesomeIcon icon={["far", "heart"]} class="heart-detail-icon"/>
              </div> 
              <div class="comment-icon-detail-circle">
                <FontAwesomeIcon icon={["far", "comment"]} class="comment-detail-icon"/>
              </div>
            <div class="user-info-detail-box">
              <div class="user-icon-detail-circle">
                <FontAwesomeIcon icon={["far", "user"]} class="user-detail-icon" />
              </div>
              <div class="user-detail-info-word">平野　祐介</div>
              <div class="user-detail-info-word">WEBエンジニア</div>
              <div class="user-detail-info-word">2010年12月 入社</div>
            </div>
          </div>
          <div class="article-box">
            <div class="user-icon-article-circle">
              <FontAwesomeIcon icon={["far", "user"]} class="user-icon-article-icon" />
            </div>
            <span class="article-user-name">ユーザー名</span>
            <span class="article-post-date">2020 / 12 / 20 投稿</span>
            <div class="article-detail-title">Reactでなに作ろうアイウエオ</div>
            {/* 多分ここをループすると思う */}
            <span class="tag-box">
              <div class="article-detail-tag">#java</div>
              <div class="article-detail-tag">#HTML</div>
              <div class="article-detail-tag">#CSS</div>
            </span>
            <div class="article-content">
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
      </div>
    )
  }
}

export default ArticleDetail;
