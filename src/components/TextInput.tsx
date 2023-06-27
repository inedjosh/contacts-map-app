import { Box, Input, InputGroup, Text } from '@chakra-ui/react';

interface PlainInputProps {
  title: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

function TextInput(props: PlainInputProps) {
  const { title, type, value, setValue, placeholder } = props;

  return (
    <Box>
      <Text color="#000" mb={2} fontSize=".9rem" pl={'5px'}>
        {title}
      </Text>
      <InputGroup>
        <Input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          _focus={{ boxShadow: 'none', borderColor: '#4C4C4C' }}
          _hover={{ boxShadow: 'none', borderColor: '#4C4C4C' }}
          border="1px solid #4C4C4C"
          borderColor={'#4C4C4C'}
          borderRadius={'0'}
          placeholder={placeholder}
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

export default TextInput;
