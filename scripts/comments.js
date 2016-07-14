// data array has been removed now


// add an initial state to the CommentBox, this is just an empty array because there are no comments



var CommentBox = React.createClass({
  getInitialState: function () {
    return {data: []};
  },

  // add componentDidMount. This is called once the commentBox is successfully rendered for first time

  componentDidMount: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="commentBox">
       <h1>Hello, world! I am a CommentBox.</h1>
        <CommentForm />
        <CommentList data={this.state.data} /> /*this.state.data is dynamic + can change, replaces props*/
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    });
    return (
      <div className="commentList">
        {commentNodes}
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

// tell commentBox to get its data from a server

ReactDOM.render(
  <CommentBox url="https://northcoders-comment-box-server.herokuapp.com/api/comments" />,
  document.getElementById('content')
);


