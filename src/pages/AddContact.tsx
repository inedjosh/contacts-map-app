import React, { useContext, useEffect, useState } from 'react';
import { Contact, ContactContext } from '../context';
import getLatAndLong from '../helpers/getLatAndLong';
import TextInput from '../components/TextInput';
import validateForm, { FormValidationErrors } from '../helpers/validateForm';
import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import AddressField from '../components/AddressInput';
import { useNavigate } from 'react-router-dom';
import ButtonDiv from '../components/ButtonDiv';

function AddContact() {
  const contactContext = useContext(ContactContext);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [addresses, setAddresses] = useState([
    {
      address: '',
      longitude: getLatAndLong().long,
      latitude: getLatAndLong().lat,
    },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState<FormValidationErrors>({});

  const navigate = useNavigate();

  const handleAddressChange = (
    index: number,
    field: keyof (typeof addresses)[0],
    value: string | number
  ) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = {
      ...updatedAddresses[index],
      [field]: value,
    };
    setAddresses(updatedAddresses);
  };

  const addAddress = () => {
    if (addresses.length < 5) {
      setAddresses([
        ...addresses,
        {
          address: '',
          longitude: getLatAndLong().long,
          latitude: getLatAndLong().lat,
        },
      ]);
    }
  };

  const removeAddress = (index: number) => {
    if (addresses.length > 1) {
      const updatedAddresses = [...addresses];
      updatedAddresses.splice(index, 1);
      setAddresses(updatedAddresses);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm(email, phoneNumber, name, addresses);

    // Set the errors state
    setErrors(formErrors);

    // Check if there are any errors
    if (Object.keys(formErrors).length === 0) {
      const newContact: Contact = {
        name,
        phoneNumber,
        email,
        addresses,
      };

      contactContext?.addContact(newContact);

      // Reset form fields
      setName('');
      setPhoneNumber('');
      setEmail('');
      setAddresses([{ address: '', longitude: 0, latitude: 0 }]);
        setIsSubmitted(true);
        navigate('/dashboard');
    }
  };

  useEffect(() => {
    setInterval(() => {
      setIsSubmitted(false);
    }, 7000);
  }, []);

  return (
    <Box px={['10px', '10px', '25px']} py={'20px'}>
      <Text mt={'10px'} fontSize={'30px'} fontWeight={'500'}>
        Add Contact
      </Text>
      <Box>
        {Object.keys(errors).length > 0 && (
          <>
            {errors.fullName && (
              <Text fontSize={'14px'} mt={'-10px'} color={'red'}>
                {errors.fullName}
              </Text>
            )}
            {errors.phoneNumber && (
              <Text fontSize={'14px'} mt={'-10px'} color={'red'}>
                {errors.phoneNumber}
              </Text>
            )}
            {errors.email && (
              <Text fontSize={'14px'} mt={'-10px'} color={'red'}>
                {errors.email}
              </Text>
            )}

            {errors.addresses?.length && (
              <Text fontSize={'13px'} mt={'-10px'} color={'red'}>
                Input all the addresses
              </Text>
            )}
          </>
        )}
        {isSubmitted && <Text color={'green'}>Form submitted</Text>}
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid
          templateColumns={['1fr', '1fr', '1fr 1fr']}
          gap={4}
          justifyContent="flex-start"
        >
          <GridItem>
            <TextInput
              title={'Name'}
              type={'text'}
              value={name}
              setValue={setName}
              placeholder={'Your full name'}
            />
          </GridItem>
          <GridItem>
            <TextInput
              title={'Phone number'}
              type={'tel'}
              value={phoneNumber}
              setValue={setPhoneNumber}
              placeholder={'08100000000'}
            />
          </GridItem>
          <GridItem>
            <TextInput
              title={'Email'}
              type={'email'}
              value={email}
              setValue={setEmail}
              placeholder={'email@email.com'}
            />
          </GridItem>

          {addresses.map((address, index) => (
            <div key={index}>
              <GridItem>
                <AddressField
                  key={index}
                  title={`Address  ${index + 1}`}
                  value={address.address}
                  setValue={(value) =>
                    handleAddressChange(index, 'address', value)
                  }
                  placeholder="Enter address"
                  onAddressChange={handleAddressChange}
                  index={index}
                  field="address"
                />
              </GridItem>

              {index > 0 && (
                <button type="button" onClick={() => removeAddress(index)}>
                  Remove Address
                </button>
              )}
            </div>
          ))}
        </Grid>
        <Flex
          mt={'50px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={'100%'}
        >
          <Box w={'50%'}>
            <ButtonDiv type="submit" text="Submit" />
          </Box>
          {addresses.length < 5 && (
            <Box w={'40%'}>
              <ButtonDiv
                type="button"
                onClick={addAddress}
                text={'    Add Address'}
              />
            </Box>
          )}
        </Flex>
      </form>
    </Box>
  );
}

export default AddContact;
