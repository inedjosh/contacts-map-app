import { Box, Flex, Image, Icon, Text, Show, Hide, Button, useDisclosure } from '@chakra-ui/react';
import { useNavigate, useParams, } from 'react-router-dom';
import AddContact from './AddContact';
import Dashboard from './Dashboard';
import { BiSolidCategory } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react';
import {TfiClose} from 'react-icons/tfi'

function Home() {
  const { page } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    if (page === '' || page === undefined) {
      console.log('hit')
      navigate('/dashboard')
    }
  },[page, navigate])


   const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null);

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
      <Show breakpoint="(max-width: 480px)">
      <Box position={'fixed'}  top='15' right={'15'} left={'85%'} bg={'#31A183E'} h={'40px'} w={'100vw'} >
 <Flex  bg={'#fff'} justifyContent={'center'} alignItems={'center'} w={'35px'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} h={'35px'} borderRadius={'100%'} outline={'none'}  ref={btnRef} cursor={'pointer'} onClick={onOpen}>
        <AiOutlineMenu fontSize={'20px'} />
      </Flex>
        </Box>
        
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
          finalFocusRef={btnRef}
          size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent zIndex={'10'} bg={'#fff'}>
            {/* <DrawerCloseButton  /> */}
            <Box cursor={'pointer'} px={'20px'} mt={'30px'} onClick={() => onClose()}>
              <TfiClose fontSize={'20px'} />
              
              </Box>
            <Box px={'20px'} mt={'10px'}>
              <DrawerHeader>
                <Text fontSize={'20px'}>Logo</Text>
               </DrawerHeader>
         </Box>
          <DrawerBody >
              <Box p={'10px'}>
                 {sideNav.map((item) => (
            <Flex
              bg={item.link === page ? '#28255A' : ''}
                     onClick={() => { navigate('/' + item.link); onClose() }}
              cursor={'pointer'}
              my={'10px'}
              borderRadius={item.link === page ? '30px' : '0'}
              pl={'10px'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              key={item.id}
            >
              <Icon  as={item.icon} color={ item.link === page ?'#fff': '#000'} />
              <Text color={ item.link === page ?'#fff':'#000'} pl={'10px'}>
                {item.name}
              </Text>
            </Flex>
          ))}
         </Box>
          </DrawerBody>

         
        </DrawerContent>
        </Drawer>
        </Show>
      <Hide breakpoint="(max-width: 480px)">
        <Box
          h={'100vh'}
          flexDirection={'column'}
          w={['100vw', '100vw', '30vw']}
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
