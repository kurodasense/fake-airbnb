// @ts-nocheck
import { memo, useEffect, useState, useRef } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  const profileRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // 判断点击的目标是否在 .profile 或 .panel 内部，如果不是则隐藏面板
      if (
        !profileRef?.current?.contains(event.target) &&
        !panelRef?.current?.contains(event.target)
      ) {
        setShowPanel(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const profileClickHandle = () => {
    setShowPanel(!showPanel);
  };

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn svg">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" ref={profileRef} onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel" ref={panelRef}>
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
