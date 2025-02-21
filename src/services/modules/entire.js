import diyRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return diyRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
