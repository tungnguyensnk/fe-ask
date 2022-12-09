import { useLottie } from "lottie-react";
import SearchingAnimation from "../../json/searching.json";

function SearchAnimation() {
  const options = {
    animationData: SearchingAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div>{View}</div>;
}

export default SearchAnimation;
