import React, { Component } from "react";

class RecentPosts extends Component {
  render() {
    return (
      <div>
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent Posts</div>

          <ul className="recents-posts-posts">
            <li>recent post 0</li>
            <li>recent post 1</li>
            <li>recent post 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RecentPosts;
