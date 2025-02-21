import { memo, useEffect, useRef, useState } from "react";
import ViewWrapper from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo(({ children }) => {
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef(0);
  // 组件渲染完毕，判断是否加载右边按钮
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    totalDistanceRef.current = scrollWidth - clientWidth;
    setShowRightBtn(totalDistanceRef.current > 0);
  }, [children]);

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    // 是否继续显示Btn
    setShowRightBtn(totalDistanceRef.current > newOffsetLeft);
    setShowLeftBtn(newOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeftBtn && (
        <div className="control left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
