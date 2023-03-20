import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like() {
  const [favorite, setFavorite] = useState(false);
  return (
    <div>
      {favorite ? (
        <AiFillHeart color="red" size="50px" />
      ) : (
        <AiOutlineHeart size="50px" />
      )}
    </div>
  );
}

export default Like;
