import React from 'react';
import './ContactsPage.css';
import { ContactsPlateGroup, ContactsForm } from '../../components';

export const ContactsPage = () => {
  return (
    <section className='contactsPage'>
      <div className='contactsPage__title-container'>
        <h3 className='contactsPage__title'>контакты</h3>
      </div>
      <div className='contactsPage__content'>
        <ContactsPlateGroup />
        <ContactsForm />
      </div>
    </section>
  );
};
