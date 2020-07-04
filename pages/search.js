import React, { useState } from 'react'
import InputMask from 'react-input-mask'

import PageTitle from '../components/pageTitle'

const Search = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    grade: 5
  })
  const grades = [0, 1, 2, 3, 4, 5]
  const[sucess, setSucess] = useState(false)
  const[retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const res = await fetch('/api/save', {
        method: 'post',
        body: JSON.stringify(form)
      })

      const data = await res.json()

      setSucess(true)
      setRetorno(data)

    } catch (error) {
      console.log(error)
      res.end('error')
    }
  }

  const onChange = event => {
    const newValue = event.target.value
    const key = event.target.name

    setForm(old => ({
      ...old,
      [key]: newValue
    }))

    console.log(form)
  }

  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa'/>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>

      <p className='mt-8 mb-8 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      {!sucess &&
      <div className='flex flex-col justify-center mx-auto w-1/2 md:w-2/5'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-3 rounded' placeholder='Nome'
          onChange={onChange} name='name' value={form.name} />
        <label className='font-bold'>E-mail:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-3 rounded' placeholder='E-mail'
          onChange={onChange} name='email' value={form.email} />
        <label className='font-bold'>Whatsapp:</label>
        <InputMask mask="(99) 99999 9999" type='text' className='p-4 block shadow bg-blue-100 my-3 rounded' placeholder='Whatsapp'
          onChange={onChange} name='whatsapp' value={form.whatsapp} />
        
        <label className='font-bold'>Nota:</label>
        {/* inputs radio de mesmo nome podem selecionar apenas um */}
        <div className='flex justify-center py-6'>
          {grades.map(grade => {
            return (
              <label key={grade} className='block w-12 text-center'>
                {grade}<br />
                <input type='radio' name='grade'value={grade} onChange={onChange} />
              </label>
            )})
          }
        </div>
        <button className='bg-teal-500 mt-8 my-16 px-6 py-4 text-lg font-bold text-white rounded-lg shadow-lg hover:shadow' onClick={save}>Enviar</button>
      </div>
      }
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>
          Obrigado por sua contribuição!
        </p>
        {
          retorno.showCoupon && <div className='text-center border p-4'>
            Seu cupom: <br />
            <span className='font-bold text-xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-10'>
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <i>Tire um print ou uma foto desta tela e apresente ao garçom</i>
          </div>
        }
        </div>}
    </div>
  )
}

export default Search