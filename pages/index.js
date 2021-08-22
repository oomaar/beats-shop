import styled from "styled-components";
import { Header, Feature, Sponsor, Specs } from "../components";
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
        <Specs />
      </Main>
    </Application>
  );
};

const Application = styled.div``;