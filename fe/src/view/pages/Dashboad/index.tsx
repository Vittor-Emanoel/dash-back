import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2023-08-11T00:00:00.000Z",
      "2023-08-12T00:00:00.000Z",
      "2023-08-13T00:00:00.000Z",
      "2023-08-14T00:00:00.000Z",
      "2023-08-15T00:00:00.000Z",
      "2023-08-16T00:00:00.000Z",
      "2023-08-17T00:00:00.000Z",
    ],
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 50, 80, 18, 30] }];

export function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Taxa de membros
            </Text>
            <Chart options={options} series={series} type="area" height={168} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Taxa de presença
            </Text>
            <Chart options={options} series={series} type="area" height={168} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
