import { memo } from "react";
import RoomsWrapper from "./style";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, totalCount } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  );
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}多处住处</h2>
      <div className="list">
        {roomList?.map((item) => {
          return <RoomItem key={item.id} itemData={item} itemWidth="20%" />;
        })}
      </div>
    </RoomsWrapper>
  );
});

export default EntireRooms;
