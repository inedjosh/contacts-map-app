import React, { useContext } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Flex,
  TableContainer,
} from '@chakra-ui/react';
import { ContactContext } from '../context';
import { useNavigate } from 'react-router-dom';

import ButtonDiv from '../components/ButtonDiv';
import MapDiv from '../components/MapDiv';
import MobileNav from '../components/MobileNav';

type DashboardProps = {
  hideMap: boolean
}

function Dashboard({hideMap}:DashboardProps ) {
  const contactContext = useContext(ContactContext);
  const navigate = useNavigate();

  const getRandomIndex = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  console.log(contactContext?.contacts);

  return (
    <Box  px={['10px', '10px', '25px']} py={'5px'}>
      <Box>
        <Text fontWeight="500" fontSize={['20px', '20px', '28px']}>
          Dashboard
        </Text>
        <Text fontWeight="300" fontSize="20px" mt="-15px">
          Welcome back, User
        </Text>
      </Box>
      <Box mt="40px">
        {!contactContext?.contacts.length ? (
          <Text opacity=".5">
            You do not have any users on your contact list
          </Text>
        ) : (
          
          <TableContainer
            w={['100%']}
            border="1px solid #555"
            mt="20px"
          >
            <Table variant="simple">
              <Thead w={'100%'} >
                <Tr
                  p={['10px', '10px', '30px']}
                    h="60px"
                    w={'100%'}
                  borderBottom="1px solid #4C4C4C"
                >
                  <Th textAlign={'start'}  pl={'5px'} w={'25%'} borderRight="1px solid #4C4C4C" color="#000">
                    Name
                  </Th>
                  <Th  w={'25%'}  textAlign={'start'}  pl={'5px'} borderRight="1px solid #4C4C4C" color="#000">
                    Phone number
                  </Th>
                  <Th  w={'25%'} textAlign={'start'}  pl={'5px'} borderRight="1px solid #4C4C4C" color="#000">
                    Email
                  </Th>
                  <Th  w={'25%'} textAlign={'start'}  pl={'5px'}  borderRight="none" color="#000">
                    <Flex alignItems="center">Address</Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody border="1px solid #4C4C4C">
                {contactContext?.contacts.map((contact, index) => (
                  <Tr key={index} cursor="pointer"  height="87px">
                    <Td
                      fontWeight={'300'}
                      color="#000"
                      borderRight="1px solid #4C4C4C"
                      borderTop="1px solid #4C4C4C"
                      fontSize=".9rem"
                    >
                      {contact.name}
                    </Td>
                    <Td
                      fontWeight={'300'}
                      borderLeft="none"
                      borderRight="1px solid #4C4C4C"
                      borderTop="1px solid #4C4C4C"
                      color={'green'}
                    >
                      {contact.phoneNumber}
                    </Td>
                    <Td
                      fontWeight={'300'}
                      borderLeft="none"
                      borderRight="1px solid #4C4C4C"
                      borderTop="1px solid #4C4C4C"
                      color={'green'}
                    >
                      {contact.email}
                    </Td>
                    <Td
                      fontWeight={'300'}
                      borderLeft="none"
                      borderRight="none"
                      borderTop="1px solid #4C4C4C"
                    >
                      {contact.addresses.length > 0 &&
                        contact.addresses[
                          getRandomIndex(contact.addresses.length)
                        ].address}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Box w="50%" mt={'20px'}>
        <ButtonDiv
          type="button"
          onClick={() => navigate('/add')}
          text="Add Contact"
        />
      </Box>
      {contactContext?.contacts.length ? (
        <Box zIndex={'1'} >
          <Text>View users address on map</Text>
          <Box w={['100%' ]} h={'500px'}>
          {!hideMap && <MapDiv />}  
          </Box>
  
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default Dashboard;
