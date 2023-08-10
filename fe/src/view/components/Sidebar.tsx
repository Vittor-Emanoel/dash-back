import { Box, Stack, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  RiContactsLine,
  RiDashboardLine,
  RiInboxArchiveLine,
  RiMegaphoneLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
            <Stack spacing="4" mt="8" align="stretch">
              <ChakraLink
                display="flex"
                alignItems="center"
                as={ReactRouterLink}
                to="/dashboard"
              >
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Dashboard
                </Text>
              </ChakraLink>

              <ChakraLink
                display="flex"
                alignItems="center"
                as={ReactRouterLink}
                to="/members"
              >
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Membros
                </Text>
              </ChakraLink>
            </Stack>
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            ADMINISTRATIVO
            <Stack spacing="4" mt="8" align="stretch">
              <ChakraLink
                display="flex"
                alignItems="center"
                as={ReactRouterLink}
                to="/members"
              >
                <Icon as={RiMegaphoneLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Chamada
                </Text>
              </ChakraLink>

              <ChakraLink
                display="flex"
                alignItems="center"
                as={ReactRouterLink}
                to="/members"
              >
                <Icon as={RiInboxArchiveLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Requerimentos
                </Text>
              </ChakraLink>
            </Stack>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
