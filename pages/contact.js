import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'

const Contact = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <h1>Contato</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Contact