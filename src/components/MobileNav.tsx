import { Box, Flex, Text, Image, Show } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { BiSolidCategory } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';

const MobileNav = () => {
  return (
    <Show breakpoint="(max-width: 480px)">
      <Flex
        padding={'.7rem 1rem'}
        justifyContent={'space-around'}
        zIndex={'100'}
        position={'fixed'}
        bottom={'0'}
        bg={'#1A183E'}
        color={'#FFF'}
        width={'100%'}
        height={'65px'}
      >
        <Link to="/dashboard">
          <Box textAlign={'center'}>
            <BiSolidCategory color={'#fff'} fontSize={'25px'} />
            <Text color={'#fff'} fontSize={'1.1rem'} mt={'0px'}>
              Dashboard
            </Text>
          </Box>
        </Link>

        <Link to="/add">
          <Box textAlign={'center'}>
            <BsPeopleFill color={'#fff'} fontSize={'25px'} />
            <Text color={'#fff'} fontSize={'1.1rem'} mt={'0px'}>
              Add Contacts
            </Text>
          </Box>
        </Link>
      </Flex>
    </Show>
  );
};

export default MobileNav;
