import { memo, useState } from "react";
import FilterWrapper from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (selectItems.includes(item)) {
      newItems.splice(newItems.indexOf(item), 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              key={item}
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
