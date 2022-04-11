// import { Text, Box, Button, Flex, Grid, Image, Table, TableCaption, Tbody, Tr, Td, Thead, Th, Container, List, ListItem, ListIcon, Divider, } from "@chakra-ui/react";
// import React from "react";
// import PriceHolder from "../PriceHolder/priceHolder";
// // import "../../CartAndCheckout/ProductCart";
// // import { Slider } from "infinite-react-carousel/lib";

// export default function BookDetailsTemplate(props) {
//   return (
//     <Box w="100%">
//       <Box mx={{ base: "30px", lg: "60px", xl: "90px" }}>
//         <Box
//           className="Shadow"
//           mt={{ base: '25px', md: "40px" }}
//           p="19"
//           display={{ base: "div", md: "flex" }}
//           justifyContent={"space-between"}
//           alignContent={"center"}
//         >
//           <Flex
//             display="flex"
//             flexDirection={{ base: "column-reverse", sm: "row" }}
//             w={{ base: "initial", md: "30%" }}
//           >

//             <Box
//               display="flex"
//               flexDirection={{ base: "row", sm: "column" }}
//               justifyContent={{ base: "center", sm: 'space-between' }}
//               alignItems="center"
//               p={{ base: '5px', sm: '5px' }}
//             >
//               <Box p="1" m='1' border="2px solid #888">
//                 <Image maxW={{ base: '40px', sm: '55px' }} src="../../Books/book1.jpg" />
//               </Box>
//               <Box p="1" m='1' border="2px solid #ccc">
//                 <Image maxW={{ base: '40px', sm: '55px' }} src="../../Books/book1.jpg" />
//               </Box>
//               <Box p="1" m='1' border="2px solid #ccc">
//                 <Image maxW={{ base: '40px', sm: '55px' }} src="../../Books/book1.jpg" />
//               </Box>
//               <Box p="1" m='1' border="2px solid #ccc">
//                 <Image maxW={{ base: '40px', sm: '55px' }} src="../../Books/book1.jpg" />
//               </Box>
//               <Box p="1" m='1' border="2px solid #ccc" display={{ base: 'none', sm: 'initial' }} >
//                 <Image maxW={{ base: '40px', sm: '55px' }} src="../../Books/book1.jpg" />
//               </Box>

//             </Box>

//             <Box
//               p='40px'
//               className="Shadow"
//               display={"flex"}
//               justifyContent={"center"}
//               alignContent={"center"}
//               bgImage={"url(../../frame.png)"}
//             >
//               <Image
//                 className="Shadow"
//                 w="initial"
//                 maxH={"280"}
//                 m="auto"
//                 src="../../Books/book.jpg"
//                 alt="Image"
//               />
//             </Box>

//           </Flex>

//           <Box
//             mt={{ base: "5", md: 'initial' }}
//             w={{ base: "initial", md: "45%" }}
//             ml={{ base: "initial", md: "10" }}
//             pl={{ base: "3", md: "10" }}
//             display={"flex"}
//             className="Shadow"
//           >
//             <Table variant={'unstyled'} m="5px" size={{ base: "sm", md: "lg" }}>
//               <Thead>
//                 <Tr>
//                   <Th
//                     colSpan={"2"}
//                     textAlign={{ base: "center", sm: "left" }}
//                     fontSize={"md"}
//                   >
//                     {props.selectedBook[0].bookName}
//                   </Th>
//                 </Tr>
//               </Thead>

//               <Tbody>
//                 <Tr>
//                   <Td>Author</Td>
//                   <Td>{props.selectedBook[0].Author}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Publisher</Td>
//                   <Td>{props.selectedBook[0].Publisher}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Edition</Td>
//                   <Td>{props.selectedBook[0].Edition}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Language</Td>
//                   <Td>{props.selectedBook[0].Language}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>No of Page</Td>
//                   <Td>{props.selectedBook[0].NoOfPages}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Condition</Td>
//                   <Td>{props.selectedBook[0].Condition}</Td>
//                 </Tr>
//               </Tbody>
//             </Table>
//           </Box>

//           <Flex
//             border={"2px solid yellow"}
//             borderRadius={"7px"}
//             color={"black"}
//             w={{ base: "100%", md: "20%" }}
//             flexDirection={{ base: "row", md: "column" }}
//             pt={{ base: "initial", md: "2%" }}
//             justifyContent={"center"}
//             alignItems={"center"}
//             mt={{ base: "10px", md: "initial" }}
//             py={{ base: "4px", md: "initial" }}
//           >
//             <PriceHolder
//               id={props.selectedBook[0].id}
//               name={props.selectedBook[0].bookName}
//               publisher={props.selectedBook[0].Publisher}
//               price={props.selectedBook[0].priceNew}
//               cover={props.selectedBook[0].Cover}
//               condition={props.selectedBook[0].Condition} />
//             <PriceHolder
//               id={props.selectedBook[0].id}
//               name={props.selectedBook[0].bookName}
//               publisher={props.selectedBook[0].Publisher}
//               price={props.selectedBook[0].priceOld}
//               cover="Paperback"
//               condition="Old" />
//           </Flex>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
