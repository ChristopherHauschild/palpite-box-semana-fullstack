import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <p className='mt-10 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      <div className='my-10 text-center'>
        <Link href='/search'>
          <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>

      <p className='my-10 text-center'>
        Mensagem.
      </p>
    </div>
  )
}

export default Index