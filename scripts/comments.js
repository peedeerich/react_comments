
var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
       <h1>Hello, world! I am a CommentBox.</h1>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
});


// now add the next elements - commentlist and comment form which live inside commentBox

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        Hello, how are you? I am commentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Yo. I am commentForm.
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);


