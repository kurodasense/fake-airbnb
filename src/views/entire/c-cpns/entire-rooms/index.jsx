import { memo, useCallback } from "react";
import RoomsWrapper from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (item) => {
      if (item) {
        dispatch(changeDetailInfoAction(item));
        navigate("/detail");
      }
    },
    [navigate, dispatch]
  );
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}多处住处</h2>
      <div className="list">
        {roomList?.map((item) => {
          return (
            <RoomItem
              key={item._id}
              itemData={item}
              itemWidth="20%"
              itemClick={handleClick}
            />
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
