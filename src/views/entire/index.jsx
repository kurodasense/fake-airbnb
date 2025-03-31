import { memo, useEffect } from "react";
import EntireWrapper from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import { useDispatch } from "react-redux";
import { fetchEntireDataAction } from "@/store/modules/entire";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo(function Entire() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireDataAction());
    dispatch(
      changeHeaderConfigAction({
        topAlpha: false,
        isFixed: true,
      })
    );
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
