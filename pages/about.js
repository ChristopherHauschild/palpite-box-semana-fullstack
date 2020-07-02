import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default About