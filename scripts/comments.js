// change commentBox so that comments are loaded dynamically without refresh - using POLLING
// basically = ajax is pushed to another function (loadCommentsFromServer)
// this function is then called repeatedly


var CommentBox = React.createClass({
  getInitialState: function () {
    return {data: []};
  },

  loadCommentsFromServer: function() {
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


  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    setInterval(console.log('polling comments'), this.props.pollInterval);
  },

  render: function () {
    return (
      <div className="commentBox">
       <h1>Hello, world! I am a CommentBox.</h1>
        <CommentForm />
        <CommentList data={this.state.data} />
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
    }).reverse();
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

// add form to commentForm
// have to do some munging with the DOM... see "Controlled components" in the tutorial

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  render: function () {

    return (
      <form className="commentForm">
        <input
          type="text"
          placeholder="Yo name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input type="text"
               placeholder="Say something"
               value={this.state.text}
               onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
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

// add pollInterval to control the time between refreshes

ReactDOM.render(
  <CommentBox url="https://northcoders-comment-box-server.herokuapp.com/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);


