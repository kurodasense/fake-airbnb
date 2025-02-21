import { memo, useCallback, useState } from "react";
import SectionV2Wrapper from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabsNames = infoData?.dest_address?.map((item) => item.name);

  // useEffect(() => {
  //   setName(initialName);
  // }, [infoData]);

  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionTabs tabNames={tabsNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData?.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

export default HomeSectionV2;
