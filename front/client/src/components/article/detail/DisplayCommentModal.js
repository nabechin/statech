import React from "react";
import Button from '@material-ui/core/Button';
import '../../css/DisplayCommentModal.css';


class DisplayCommentModal extends React.Component {
  render () {
    return (
      <div className="overlay">
        <div className="content">
          <p className="comment-word">コメント</p>
          <form>
            <textarea className="comment-area"></textarea>
          </form>
          <span className="comment-button-box">
          <Button variant="outlined" style={{ color: "#e0f2f1", backgroundColor: "black", marginRight: "20px" }}>
            コメントする
          </Button>
          <Button variant="outlined" onClick={this.props.closeCommentModal} color="secondary">閉じる</Button>
          </span>
        </div>
      </div>
    )
  }
}

export default DisplayCommentModal;
