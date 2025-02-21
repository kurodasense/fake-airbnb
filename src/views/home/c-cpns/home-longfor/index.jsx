import { memo } from "react";
import LongforWrapper from "./style";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";
import ScrollView from "@/components/scroll-view";

const HomeLongfor = memo(({ infoData }) => {
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongForItem key={item.city} itemData={item} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

export default HomeLongfor;
