import styled from "styled-components";
import { HeadTag } from "../global";

export default function Home() {
  return (
    <Application>
      <HeadTag title="Beats Shop" />

      <h1>My page</h1>
    </Application>
  );
};

const Application = styled.div``;