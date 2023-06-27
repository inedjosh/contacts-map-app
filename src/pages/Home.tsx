import { Box, Flex, Image, Icon, Text, Show, Hide } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import AddContact from './AddContact';
import Dashboard from './Dashboard';
import { BiSolidCategory } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';

function Home() {
  const { page } = useParams();

  const navigate = useNavigate();

  const sideNav = [
    {
      id: 1,
      name: 'Dashboard',
      link: 'dashboard',
      icon: BiSolidCategory,
    },
    {
      id: 2,
      name: 'Add Contacts',
      link: 'add',
      icon: BsPeopleFill,
    },
  ];

  return (
    <Flex flexDirection={['column', 'column', 'row']} h={'100vh'} w={'100vw'}>
      <Hide breakpoint="(max-width: 480px)">
        <Box
          h={'100vh'}
          flexDirection={'column'}
          w={['100vw', '100vw', '20vw']}
          borderRight={['1px solid #ccc']}
          bg={'#1A183E'}
          py={'5px'}
          px={'10px'}
        >
          <Text fontSize={'30px'} mb={'40px'} color={'#fff'}>
            Logo
          </Text>
          {sideNav.map((item) => (
            <Flex
              bg={item.link === page ? '#28255A' : ''}
              onClick={() => navigate('/' + item.link)}
              cursor={'pointer'}
              my={'10px'}
              borderRadius={item.link === page ? '30px' : '0'}
              pl={'10px'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              key={item.id}
            >
              <Icon as={item.icon} color={'#fff'} />
              <Text color={'#fff'} pl={'10px'}>
                {item.name}
              </Text>
            </Flex>
          ))}
        </Box>
      </Hide>
      <Box
        overflow={'scroll'}
        scrollBehavior={'smooth'}
        h={'100vh'}
        w={['100vw', '100vw']}
          >
              
        {page === 'dashboard' && <Dashboard />}
        {page === 'add' && <AddContact />}
      </Box>
    </Flex>
  );
}

export default Home;
