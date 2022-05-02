import React from 'react';
import './ContactsPage.css';
import { ContactsPlateGroup, ContactsForm, PageTitle, ScrollToTopBtn } from '../../components';

export const ContactsPage = () => {
  return (
    <section className='contactsPage'>
      <PageTitle>Контакты</PageTitle>
      <div className='contactsPage__content'>
        <ContactsPlateGroup />
        <ContactsForm />
      </div>
      <ScrollToTopBtn />
    </section>
  );
};
