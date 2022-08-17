import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import { CompanyLogo } from '../Header/Header'
import { footerLinks, footerImportantLinks } from '../../dev-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLocationDot, 
  faMobileScreenButton, 
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box>
      <Box
        backgroundColor={"#1D1F24"}
        w={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"flex-start"}
        justifyContent={{ base: "center", md: "space-evenly" }}
        // position="absolute"
        // bottom={"0px"}
        // marginEnd={"0"}
        // left={"0"}
        // right={"0"}
        py={"5"}
        px={{ base: "5", md: "none" }}
        fontFamily={"hind siliguri, Bangla628, sans-serif"}
      >
        <Box
          maxW={{ base: "none", md: "26%" }}
        >
          <CompanyLogo/>
          <Text 
            color={"white"}
            fontSize={"md"}
          >
            PathokPoint is a leading book shop in Bangladesh
            We offer thousands of islamic, general and academic
            books at a discounted price. We provide good
            packaging with low shipping cost all over the
            Bangladesh.
          </Text>
        </Box>
        <Box
          py={{ base: "5", md: "none" }}
        >
          <Stack spacing={3}>
            <Text 
              color={"white"}
              fontWeight={"bold"}
            >
              প্রয়োজনীয় লিংক
            </Text>
            {
              footerLinks.map((link) => (
                <Text
                  color={"gray.400"}
                  fontSize={"sm"}
                  fontWeight={"1.9rem"}
                  _hover={{ color: "white", cursor: "pointer" }}
                >
                  {link.title}
                </Text>
              ))
            }
          </Stack>
        </Box>
        <Box
          py={{ base: "5", md: "none" }}
        >
          <Stack>
            <Text 
              color={"white"}
              fontWeight={"bold"}
            >
              জনপ্রিয়
            </Text>
            {
              footerImportantLinks.map((link) => (
                <Text
                  color={"gray.400"}
                  fontSize={"sm"}
                  fontWeight={"1.9rem"}
                  _hover={{ color: "white", cursor: "pointer" }}
                >
                  {link.title}
                </Text>
              ))
            }
          </Stack>
        </Box>
        <Box
          py={{ base: "5", md: "none" }}
        >
          <Stack spacing={4}>
            <Text 
              color={"white"}
              fontWeight={"bold"}
            >
              যোগাযোগ
            </Text>
            <Box 
              textColor={"#959999"}
              fontSize={"sm"}
            >
              <Box 
                display={"inline-flex"}
                alignItems={"center"}
              >
                <FontAwesomeIcon icon={faLocationDot} color="#959999" />
                <Text ml={"1"}>
                  Head Office:
                </Text>
              </Box>
              <Text>
                House 310, Road 21 Mohakhali DOHS, Dhaka-1206
              </Text>
            </Box>
            <Box 
              textColor={"#959999"}
              fontSize={"sm"}
            >
              <Box 
                display={"inline-flex"}
                alignItems={"center"}
              >
                <FontAwesomeIcon icon={faMobileScreenButton} color="#959999" />
                <Text ml={"1"}>
                  Phone:
                </Text>
              </Box>
              <Text>
                017-9992-5050, 096-7877-1365
              </Text>
            </Box>
            <Box 
              textColor={"#959999"}
              fontSize={"sm"}
              display={"inline-flex"}
              alignItems={"center"}
            >
              <FontAwesomeIcon icon={faEnvelope} color="#959999" />
              <Text ml={"1"}>
                sales@wafilife.com
              </Text>
            </Box>
          </Stack>
          <Box>
            <i class="fa-brands fa-facebook-f" color="#959999"></i>
            <FontAwesomeIcon icon="fa-brands fa-youtube" color="#959999" />
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Footer