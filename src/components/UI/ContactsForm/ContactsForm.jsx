/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './ContactsForm.css';
import emailjs from 'emailjs-com';
import { FormInput } from '../FormInput/FormInput';
import { ContactsBtn } from '../ContactsBtn/ContactsBtn';
import { useAnimations } from '../../../hooks/useAnimations';

import '../FormInput/FormInput.css';

export const ContactsForm = () => {
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_838807h', 'test_template', e.target, 'D6H0XXwH7duHuQiDE')
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }

  useAnimations();

  return (
    <form data-aos='fade-left' className='contactsForm' onSubmit={handleSubmit}>
      <h3 className='contactsForm__title'>Отправьте сообщение, и наши менеджеры Вам перезвонят</h3>
      <FormInput label='ФИО' type='text' name='user_name' />
      <FormInput label='Email' type='email' name='user_email' />
      <FormInput label='Телефон' type='text' name='user_phone' />
      <label className='formInput__label'>Сообщение</label>
      <textarea
        name='message'
        id='message'
        cols='30'
        rows='5'
        className='formInput__input'
        style={{ height: '130px' }}
      />
      <div style={{ marginLeft: '-20px' }}>
        <ContactsBtn type='submit' text='Отправтиь' />
      </div>
    </form>
  );
};
