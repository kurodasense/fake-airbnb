import { memo, useRef, useState } from "react";
import { CenterWrapper } from "./styles";
import IconSearch from "@/assets/svg/icon_search";
import SearchTabs from "./c-cpns/search-tabs";
import SearchTitles from "@/assets/data/search_titles";
import SearchSections from "./c-cpns/search-sections";
import { CSSTransition } from "react-transition-group";
const HeaderCenter = memo(({ isSearch, searchBarClick }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);
  const detailRef = useRef(null);
  const barRef = useRef(null);

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterWrapper>
      <CSSTransition
        nodeRef={barRef}
        key="bar"
        in={!isSearch}
        timeout={400}
        classNames={"bar"}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={detailRef}
        key="detail"
        in={isSearch}
        timeout={400}
        classNames={"detail"}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
