import React, { createContext, useState, ReactNode, useEffect } from 'react';

export type Address = {
  address: string;
  longitude: number;
  latitude: number;
};

// Define the Contact interface
export interface Contact {
  name: string;
  phoneNumber: string;
  email: string;
  addresses: Address[];
}

interface ContactContextType {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
}

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined
);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  const contextValue: ContactContextType = {
    contacts,
    addContact,
  };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};
