import styled from "styled-components";
import { Header, Feature, Sponsor, Specs, Case, Discount, Products } from "../components";
import { HeadTag, Main } from "../global";
import siteData from "../data/siteData.json";

export default function Home() {
  return (
    <Application>
      <HeadTag title="Beats Shop" />

      <Header data={siteData.headerData} />
      <Main>
        <Feature data={siteData.featureData} />
        <Sponsor />
        <Specs data={siteData.specsData} />
        <Case data={siteData.caseData} />
        <Discount />
        <Products data={siteData.productsData} />
      </Main>
    </Application>
  );
};

const Application = styled.div``;