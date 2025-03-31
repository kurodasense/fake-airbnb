import { memo, useState } from "react";
import { PicturesWrapper } from "./style";
import PictureBrowser from "@/components/picture-browser";
import { shallowEqual, useSelector } from "react-redux";

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  const [showBrowser, setShowBrowser] = useState(false);

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="top">
          <div className="left">
            <div className="item" onClick={() => setShowBrowser(true)}>
              <img src={detailInfo.picture_urls?.[0]} alt="" />
              <div className="cover"></div>
            </div>
          </div>
          <div className="right">
            {detailInfo.picture_urls?.slice(1, 5).map((item) => {
              return (
                <div
                  className="item"
                  key={item}
                  onClick={() => setShowBrowser(true)}
                >
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="show-btn" onClick={() => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={() => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
