import { Heading, Text } from "@chakra-ui/react";
import { useStarsStore } from "../../store/classStore";
export default function Page() {
  const currentStar = useStarsStore((state) => state.currentStar);
  const starInfo = useStarsStore((state) => state.starInfo);
  return (
    <>
      <Heading>{currentStar}</Heading>
      <Text>{starInfo[currentStar]}</Text>
    </>
  );
}
