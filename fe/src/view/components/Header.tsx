import { Flex, Text, Input, Icon, Image } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1280}
      h="20"
      marginX="auto"
      mt="4"
      px="6"
      align="center"
      border="1px solid red"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        admsa
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex flex="1" border="1px solid red">
        <Image
          borderRadius="full"
          boxSize="50px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Flex ml="30px" flexDirection="column">
          <Text fontWeight="bold" letterSpacing="wide" as="span">
            Vittor
          </Text>
          <Text as="span">Secretário</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
