// comments.js
// Comment box contains comment form and Comment list which contains comments

// step 1. display comment box 

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        Hello, its me. I am commentBox
      </div>
    );
  }
});








// Need to add ReactDOM.render to actually render the code

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);


/*ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);*/

