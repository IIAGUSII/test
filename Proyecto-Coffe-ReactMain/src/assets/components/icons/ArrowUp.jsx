import { UserContext } from "../../../../UserContext";
import { useContext } from "react";

function ArrowUp() {
  const { isSortUp, setIsSortUp,isSortBottom, setIsSortBottom } = useContext(UserContext);
  function toggleSortUp() {
    setIsSortUp(true);
    setIsSortBottom(false);
  }

  return (
    <svg onClick={toggleSortUp}
      className="arrow-up"
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width="512"
      height="512"
    >
      <path d="M24,8c0,.553-.447,1-1,1H10c-.552,0-1-.447-1-1s.448-1,1-1h13c.553,0,1,.447,1,1Zm-4,4H10c-.552,0-1,.447-1,1s.448,1,1,1h10c.553,0,1-.447,1-1s-.447-1-1-1Zm-3,5h-7c-.552,0-1,.447-1,1s.448,1,1,1h7c.553,0,1-.447,1-1s-.447-1-1-1Zm-3,5h-4c-.552,0-1,.447-1,1s.448,1,1,1h4c.552,0,1-.447,1-1s-.448-1-1-1ZM9.121,3.293L6.413,.584c-.779-.777-2.047-.778-2.828,0L.878,3.293c-.391,.391-.391,1.023,0,1.414s1.024,.391,1.414,0l1.708-1.708V23c0,.553,.448,1,1,1s1-.447,1-1V2.999l1.707,1.708c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414Z" />
    </svg>
  );
}

export default ArrowUp;
