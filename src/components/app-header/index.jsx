import { memo, useRef, useState } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import HeaderCenter from "./c-cpns/header-center";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import useScrollPosition from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";

const AppHeader = memo(() => {
  // 定义搜索框的状态
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { scrollY } = useScrollPosition();
  const prevYRef = useRef(0);

  // 收起搜索框的状态
  if (!isSearch) prevYRef.current = scrollY;
  if (isSearch && Math.abs(scrollY - prevYRef.current) > 30) setIsSearch(false);

  // header 透明度逻辑
  const isAlpha = headerConfig.topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: headerConfig.isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={() => setIsSearch(true)}
            ></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaWrapper isSearch={isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
