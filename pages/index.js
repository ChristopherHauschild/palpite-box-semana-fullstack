import React from 'react'
import Link from 'next/link'

import useSWR from 'swr'
import PageTitle from '../components/pageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <PageTitle title='Home' />
      <p className='mt-16 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      <div className='mt-16 mb-20 text-center'>
        <Link href='/search'>
          <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>

      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='mt-8 text-center'>
          {data.message}
        </p>
}
    </div>
  )
}

export default Index