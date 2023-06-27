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

function Dashboard() {
  const contactContext = useContext(ContactContext);
  const navigate = useNavigate();

  const getRandomIndex = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  console.log(contactContext?.contacts);

  return (
    <Box w={'100vw'} p="10px">
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
            w={['93vw']}
            border="1px solid #555"
            mt="20px"
          >
            <Table variant="simple">
              <Thead>
                <Tr
                  p={['10px', '10px', '30px']}
                  h="60px"
                  borderBottom="1px solid #4C4C4C"
                >
                  <Th borderRight="1px solid #4C4C4C" color="#000">
                    Name
                  </Th>
                  <Th borderRight="1px solid #4C4C4C" color="#000">
                    Phone number
                  </Th>
                  <Th borderRight="1px solid #4C4C4C" color="#000">
                    Email
                  </Th>
                  <Th borderRight="none" color="#000">
                    <Flex alignItems="center">Address</Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody border="1px solid #4C4C4C">
                {contactContext?.contacts.map((contact, index) => (
                  <Tr key={index} cursor="pointer" h="60px" height="87px">
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
        <Box zIndex={'10'} position={'relative'}>
          <Text>View users address on map</Text>
          <Box position={'absolute'} top={'0'} w={'93vw'} h={'500px'}>
            <MapDiv />
          </Box>
          <MobileNav />
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default Dashboard;
