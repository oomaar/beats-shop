import styled from "styled-components";
import { Header } from "../components";
import { HeadTag } from "../global";
import siteData from "../data/siteData.json";

export default function Home() {
  return (
    <Application>
      <HeadTag title="Beats Shop" />

      <Header data={siteData.headerData} />
    </Application>
  );
};

const Application = styled.div``;