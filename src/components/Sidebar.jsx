import { NavLink } from "react-router-dom";
import { Box, HStack, List, ListIcon, ListItem, Spacer, Text } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { useState } from "react";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large")

  return (
      <Box
        w={navSize == "small" ? "60px" : "130px"}
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5"
        borderRadius={navSize =="small" ? "15px" : "30px" }
      >
        <List color="blue.500" fontSize="1.2em" spacing={4}>
          <ListItem>
            <ListIcon as={AiOutlineMenu}
              background="none"
              _hover={{background: 'none'}}
              onClick={() => {
                if(navSize == "small") {
                  changeNavSize("large")
                }
                else {
                  changeNavSize("small")
                }
              }}
            />
          </ListItem>
          <ListItem _activeLink={{ fontWeight: "bold" }} >
            <NavLink to="/">
              <HStack spacing="5px">
                <ListIcon as={AiOutlineHome} /><Text color="blue.500" display={navSize == "small" ? "none" : "large"}>Home</Text>
              </HStack>
            </NavLink>
          </ListItem>
          <ListItem _activeLink={{ fontWeight: "bold" }} >
            <NavLink to="/dashboard">
              <HStack spacing="5px">
                <ListIcon as={RiDashboardLine} /><Text color="blue.500" display={navSize == "small" ? "none" : "large"}>Dashboard</Text>
              </HStack>
            </NavLink>
          </ListItem>
          <ListItem _activeLink={{ fontWeight: "bold" }} >
            <NavLink to="/profile">
              <HStack spacing="5px">
                <ListIcon as={AtSignIcon} /><Text color="blue.500" display={navSize == "small" ? "none" : "large"}>Profile</Text>
              </HStack>
            </NavLink>
          </ListItem>
        </List>
      </Box>
  )
}