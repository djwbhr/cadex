import React from "react";
import "./index.css";
import styled from "styled-components";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
const Container = styled.div`
  background-color: #f8f7f3;
  display: flex;
  flex-direction: row;
  padding-inline: 50px;
  justify-items: center;
`;
const VideoWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Label = styled.p`
  max-width: 400px;
  font-size: 16px;
  line-height: 22px;
`;
const Title = styled.h2`
  font-size: 48px;
  letter-spacing: -0.02em;
  max-width: 350px;
`;
export const VideoCard = () => {
  return (
    <Container>
      <div>
        <Title>Most important title on the page</Title>
        <Label>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </Label>
      </div>
      <VideoWrapper>
        <LiteYouTubeEmbed
          id="dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up"
          poster="maxresdefault"
        />
      </VideoWrapper>
    </Container>
  );
};
