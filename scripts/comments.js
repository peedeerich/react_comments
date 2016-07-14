
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

// Adding some comments to the comment lisr

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        <Comment author="Mike Hunt">comment 1</Comment>
        <Comment author="Ivor Biggen">commen 2</Comment>
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

//Now add a comment React class which is used within comment list to display comments with their author

var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);


