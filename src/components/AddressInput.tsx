import React from 'react';
import { Address } from '../context';
import { Box, Input, InputGroup, Text } from '@chakra-ui/react';

type AddressFieldProps = {
  title: string;
  value: string | number;
  setValue: (value: string | number) => void;
  placeholder: string;
  onAddressChange: (
    index: number,
    field: keyof Address,
    value: string | number
  ) => void;
  index: number;
  field: keyof Address;
};

function AddressField(props: AddressFieldProps) {
  const { title, value, setValue, placeholder, onAddressChange, index, field } =
    props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAddressChange(index, field, e.target.value);
  };

  return (
    <Box>
      <Text color="#000" mb={2} fontSize=".9rem" pl={'5px'}>
        {title}
      </Text>
      <InputGroup>
        <Input
          value={value}
          onChange={handleInputChange}
          onBlur={handleAddressChange}
          placeholder={placeholder}
          type={'text'}
          border="1px solid #4C4C4C"
          borderColor={'#4C4C4C'}
          borderRadius={'0'}
          bg="#fff"
          zIndex={'0'}
          padding={'.8rem 1.5rem'}
          w={'100%'}
          _placeholder={{ fontSize: '.9rem' }}
          color={'#000'}
          _autofill={{
            WebkitBoxShadow: '0 0 0 1000px white inset',
            WebkitTextFillColor: '#0D0D0D',
          }}
          outline={'none'}
          appearance={'none'}
          autoComplete="off"
        />
      </InputGroup>
    </Box>
  );
}

export default AddressField;
