import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Lauri Jokinen`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          <strong>Lauri Jokinen</strong> <br> <i>
            Welcome to my personal blog. I'm a geek, so there will be bunch of tech and math stuff here. I try to make even complex topics understandable and useful for everybody.
            This blog is also for myself. It's good verbal excercise and forces me to form a better understanding of the topic.
            You may contact me and leave comments <a href="https://laurijokinen.com"> here</a>.
              </i>
          <br>
          <a href="https://laurijokinen.com">
            CV
          </a>
          , <a href="https://github.com/lapamatoz/">
            GitHub
          </a>
          .
        </p>
      </div>
    )
  }
}

export default Bio
