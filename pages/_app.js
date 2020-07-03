import React from 'react'

import '../css/styles.css'

import Layout from '../components/Layout'

// pageProps: renderiza propriedades da página atual
const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='h-screen'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp