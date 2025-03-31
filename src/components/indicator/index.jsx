import { memo, useEffect, useRef } from "react";
import IndicatorWrapper from "./style";

const Indicator = memo(({ selectIndex = 0, children }) => {
  const iContentRef = useRef(null);
  useEffect(() => {
    const selectItemEl = iContentRef.current.children[selectIndex];
    const itemOffsetLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    const contentWidth = iContentRef.current.clientWidth;
    const contentScroll = iContentRef.current.scrollWidth;

    let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5;
    if (distance < 0) distance = 0;
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;

    iContentRef.current.style.transform = `translateX(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={iContentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
