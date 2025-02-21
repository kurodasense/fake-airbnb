import { memo, useState } from "react";
import TabsWrapper from "./style";
import classNames from "classnames";
import ScrollView from "../scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(index, name) {
    setCurrentIndex(index);
    tabClick(index, name);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={(item, index)}
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

export default SectionTabs;
