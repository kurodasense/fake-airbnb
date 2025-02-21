import { memo, useEffect } from "react";
import EntireWrapper from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import { useDispatch } from "react-redux";
import { getEntireListAction } from "@/store/modules/entire";
import EntireRooms from "./c-cpns/entire-rooms";

const Entire = memo(function Entire() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntireListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <div className="rooms"></div>
      <div className="pagination"></div>
    </EntireWrapper>
  );
});

export default Entire;
