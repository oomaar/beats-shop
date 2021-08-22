import styled from "styled-components";
import { Header } from "../components";
import { HeadTag } from "../global";

export default function Home() {
  return (
    <Application>
      <HeadTag title="Beats Shop" />

      <Header />
    </Application>
  );
};

const Application = styled.div``;