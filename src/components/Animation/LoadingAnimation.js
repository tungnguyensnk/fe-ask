import { useLottie } from "lottie-react";
import LoadAnimation from "../../json/loading.json";

function LoadingAnimation() {
  const options = {
    animationData: LoadAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div>{View}</div>;
}

export default LoadingAnimation;
