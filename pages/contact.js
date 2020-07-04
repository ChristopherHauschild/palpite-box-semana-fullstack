import React from 'react'

import PageTitle from '../components/pageTitle'
import ContactCard from '../components/contactCard'

const Contact = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <h1 className='text-center mt-8 mb-8 text-2xl font-normal'>Contate-me</h1>
      <div className='flex flex-wrap justify-center items-center'>
      <ContactCard
        imageSrc='/logo_git.png'
        imageAlt='GitHub'
        link='https://github.com/ChristopherHauschild'
        title='GitHub'
        content='Encontre outros códigos e projetos por mim desenvolvidos.'
        />

      <ContactCard
        imageSrc='/portfolio.png'
        imageAlt='Portfolio'
        link='https://christopher-hauschild.netlify.app/'
        title='Portfolio'
        content='Saiba tudo que precisa saber sobre mim nesta aplicação de minha autoria =)'
        />

      <ContactCard
        imageSrc='/logo_lkd.png'
        imageAlt='LinkedIn'
        link='https://www.linkedin.com/in/christopher-hauschild-a091871a4/'
        title='LinkedIn'
        content='Conheça a minha trajetória profissional e acadêmica.'
        />
      </div>
    </div>
  )
}

export default Contact