import { Box, Container, Heading, Text, Stack, Image, SimpleGrid, Link, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaRegNewspaper, FaRegCalendarAlt } from "react-icons/fa";

const NewsCard = ({ title, summary, imageUrl, date }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg={useColorModeValue("white", "gray.800")}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{summary}</Text>
      <Image borderRadius="md" mt={4} src={imageUrl} alt={`Image for ${title}`} />
      <Stack mt={2} direction="row" spacing={4} align="center">
        <FaRegCalendarAlt />
        <Text>{date}</Text>
      </Stack>
    </Box>
  );
};

const Index = () => {
  // News data could be fetched from an API, but here is hardcoded for simplicity
  const newsData = [
    {
      title: "Local Park Renovation Begins Next Week",
      summary: "The much awaited renovation of the Greenfield Park is set to begin next Monday...",
      imageUrl: "https://images.unsplash.com/photo-1649233843692-0653f80aeedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHBhcmt8ZW58MHx8fHwxNzEwMzI5MjUyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      date: "Apr 5, 2023",
    },
    {
      title: "High School Robotics Team Wins National Championship",
      summary: "The champions from our local high school have done it again...",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwcm9ib3RpY3MlMjB0ZWFtfGVufDB8fHx8MTcxMDMyOTI1Mnww&ixlib=rb-4.0.3&q=80&w=1080",
      date: "Apr 3, 2023",
    },
    {
      title: "New Art Exhibit at the City Museum",
      summary: "A new exhibit showcasing modern art opens this weekend at the City Museum...",
      imageUrl: "https://images.unsplash.com/photo-1513316007827-07bc006fed39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0fGVufDB8fHx8MTcxMDMyOTI1M3ww&ixlib=rb-4.0.3&q=80&w=1080",
      date: "Apr 1, 2023",
    },
  ];

  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Heading>
          <FaRegNewspaper /> The Local Newsroom
        </Heading>
        <Text mt={4}>Your daily source of local news</Text>
      </Box>
      <Divider my={10} />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {newsData.map((news, index) => (
          <NewsCard key={index} title={news.title} summary={news.summary} imageUrl={news.imageUrl} date={news.date} />
        ))}
      </SimpleGrid>
      <Box textAlign="center" my={10}>
        <Link color="teal.500" href="#">
          View all news
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
