import { Container, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { useStarsStore } from "../../store/classStore";
export default function Page() {
  const currentStar = useStarsStore((state) => state.currentStar);
  const starInfo = useStarsStore((state) => state.starInfo);
  return (
    <Container maxW={800} centerContent={false}>
      <VStack>
        <Heading>{currentStar}</Heading>
        <Image
          boxSize="100px"
          objectFit="cover"
          src={starInfo[currentStar].image}
          alt={currentStar}
        />
        <Text>{starInfo[currentStar].description}</Text>
      </VStack>
    </Container>
  );
}
