import { Button } from '@chakra-ui/button';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type: 'button' | 'submit';
};
function ButtonDiv({ text, onClick, type }: ButtonProps) {
  return (
    <Button
      w={'100%'}
      padding=".8rem 0"
      bg={'#1A183E'}
      fontWeight={'500'}
      fontSize="1rem"
      color={'#fff'}
      border={'none'}
      _hover={{ bg: '#1A183E', color: '#fff' }}
      borderRadius={'none'}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  );
}

export default ButtonDiv;
