import { memo, useRef, useState } from "react";
import ItemWrapper from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "../indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const sliderRef = useRef(null);
  const [selectIndex, setSelectIndex] = useState(0);
  function controlClickHandle(isRight = true, e) {
    isRight ? sliderRef.current.next() : sliderRef?.current.prev();
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = itemData?.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    // 阻止冒泡，防止触发父级的点击事件
    e.stopPropagation();
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const swiperElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => (
          <div key={item} className="cover">
            <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => (
            <div className="dot-item" key={item}>
              <span
                className={classNames("dot", {
                  active: selectIndex === index,
                })}
              ></span>
            </div>
          ))}
        </Indicator>
      </div>
    </div>
  );

  function itemClickHandle() {
    if (itemClick) {
      itemClick(itemData);
    }
  }
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={() => itemClickHandle()}
    >
      <div className="inner">
        {itemData && (
          <>
            {itemData?.picture_urls ? swiperElement : pictureElement}
            <div className="desc">
              {itemData.verify_info.messages.join("·")}
            </div>
            <div className="name">{itemData.name}</div>
            <div className="price">￥{itemData.price}/晚</div>

            <div className="bottom">
              <Rating
                value={itemData.star_rating ?? 5}
                precision={0.1}
                readOnly
                sx={{ fontSize: "12px", color: "#00848a" }}
              />
              <span className="count">{itemData?.reviews_count}</span>
              {itemData.bottom_info && (
                <span className="extra">·{itemData.bottom_info.content}</span>
              )}
            </div>
          </>
        )}
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
