import { memo, useEffect } from "react";
import DetailWrapper from "./style";
import DetailPictures from "./c-cpns/detail-pictures";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changeHeaderConfigAction({
        topAlpha: false,
        isFixed: false,
      })
    );
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPictures />
    </DetailWrapper>
  );
});

export default Detail;
