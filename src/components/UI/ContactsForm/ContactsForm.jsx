/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './ContactsForm.css';
import { FormInput } from '../FormInput/FormInput';
import '../FormInput/FormInput.css';
import { ContactsBtn } from '../ContactsBtn/ContactsBtn';

export const ContactsForm = () => {
  return (
    <form className='contactsForm'>
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
