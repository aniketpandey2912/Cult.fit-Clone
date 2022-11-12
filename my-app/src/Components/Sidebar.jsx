import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import {
  MdOutlineManageAccounts,
  MdSupportAgent,
  MdLogout,
} from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";

function Sidebar(props) {
  const { avatar, name } = props;
  const { token } = useContext(AuthContext);

  return (
    <Box h="100%" border="0px solid black">
      {/* Avatar view */}
      <Box py="50px" border="0px solid red" bg="blackAlpha.900">
        <Grid templateColumns="repeat(2, 30% 70%)" gap={0} alignItems="center">
          <GridItem h="auto">
            <Avatar
              size="xl"
              name="Aniket Pandey"
              src="https://avatars.githubusercontent.com/u/107461782?v=4"
            >
              <AvatarBadge boxSize="30px" bg="green.500" />
            </Avatar>
          </GridItem>
          <GridItem h="auto">
            <Text
              fontSize="22px"
              fontWeight="bold"
              color="blue.400"
              textAlign="center"
            >
              {name || "Aniket Pandey (Admin)"}
            </Text>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="green"
              textAlign="center"
            >
              Role : Fullstack Developer
            </Text>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="yellow"
              textAlign="center"
            >
              {"Token : " + token}
            </Text>
          </GridItem>
        </Grid>
      </Box>

      {/* details */}
      <Box py="48px" border="0px solid green" bg="blackAlpha.700">
        {details.map((el) => (
          <NavLink
            key={el.id}
            to={el.to}
            style={({ isActive }) => (isActive ? activeStyle : _hover)}
            end
          >
            <Flex py="10px" px="10px" alignItems="center">
              <Box p="4">{el.title}</Box>
              <Spacer />
              <Box p="4">
                <Icon as={el.icon} boxSize="20px" />
              </Box>
            </Flex>
          </NavLink>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;

const details = [
  {
    id: 1,
    title: "Orders",
    icon: BsCart3,
    to: "https://www.cult.fit/me/orders",
  },
  {
    id: 2,
    title: "Medical Records",
    icon: FaHeartbeat,
    to: "https://www.cult.fit/me/orders",
  },
  {
    id: 3,
    title: "Active Packs & Subscription",
    icon: GoPackage,
    to: "https://www.cult.fit/me/orders",
  },
  {
    id: 4,
    title: "Redeem Voucher",
    icon: HiOutlineReceiptPercent,
    to: "https://www.cult.fit/me/orders",
  },
  {
    id: 5,
    title: "Account",
    icon: MdOutlineManageAccounts,
    to: "https://www.cult.fit/me/orders",
  },
  {
    id: 6,
    title: "Support",
    icon: MdSupportAgent,
    to: "https://www.cult.fit/me/orders",
  },
  {
    id: 7,
    title: "Logout",
    icon: MdLogout,
    to: "/",
  },
];

const activeStyle = {
  color: "red",
};
const _hover = {
  color: "black",
};
