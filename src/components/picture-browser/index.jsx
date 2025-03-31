import { memo, useEffect, useRef, useState } from "react";
import { BrowserWrapeer } from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import Indicator from "../indicator";
import classNames from "classnames";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";

const PictureBrowser = memo(({ pictureUrls, closeClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  const nodeRef = useRef(null);
  useEffect(() => {
    // 当 PictureBrowser 展示的时候，滚动条消失
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function closeBtnClickHandle() {
    closeClick && closeClick();
  }

  function controlBtnClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) {
      newIndex = pictureUrls.length - 1;
    } else if (newIndex > pictureUrls.length - 1) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  function bottomClickHandle(index) {
    setCurrentIndex(index);
    setIsNext(index < currentIndex ? false : true);
  }

  return (
    <BrowserWrapeer isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div
            className="btn left"
            onClick={() => controlBtnClickHandle(false)}
          >
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={() => controlBtnClickHandle()}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="pictures">
          <SwitchTransition mode="out-in">
            <CSSTransition
              nodeRef={nodeRef}
              classNames="pic"
              timeout={150}
              key={pictureUrls[currentIndex]}
            >
              <img ref={nodeRef} src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={() => bottomClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapeer>
  );
});

export default PictureBrowser;
