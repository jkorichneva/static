import { Link } from "@chakra-ui/react";
import { useStarsStore } from "../../store/classStore";

export default function Menu() {
  const changeStar = useStarsStore((state) => state.changeStar);
  const starList = useStarsStore((state) => state.starList);
  return (
    <>
      {starList.map((item) => (
        <Link key={item} onClick={() => changeStar(item)}>
          {item}
        </Link>
      ))}
    </>
  );
}
