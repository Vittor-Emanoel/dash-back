import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
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
              <Link display="flex" alignItems="center">
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Dashboard
                </Text>
              </Link>

              <Link display="flex" alignItems="center">
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Membros
                </Text>
              </Link>
            </Stack>
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            ADMINISTRATIVO
            <Stack spacing="4" mt="8" align="stretch">
              <Link display="flex" alignItems="center">
                <Icon as={RiMegaphoneLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Chamada
                </Text>
              </Link>

              <Link display="flex" alignItems="center">
                <Icon as={RiInboxArchiveLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Requerimentos
                </Text>
              </Link>
            </Stack>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
