import React from "react";
import "../Style/BlogStories.scss";

import { Card } from "react-bootstrap";
export default function BlogStories() {
  const ListStory = [
    { id: 1, Title: "Amateur" },
    { id: 1, Title: "Beginner" },
    { id: 1, Title: "Professional" },
  ];
  return (
    <div className="StoriesWrapper  row">
      <div className="StoryLeft col-6">
        <p className="ImgTopText  ">
          How our client made <br /> 10x revenue
        </p>
        <div className="ImgWrapper mt-5 ">
          <Card className="StoriesImgCard border-0 ">
            <Card.Body>
              <Card.Title className="mb-4 CardStoryTitle">
                "I learned so much, even as a professional".
              </Card.Title>

              <Card.Text className="CardStoryText mb-4">
                "Ut vehicula lacus a lacus tempor, nec viverra justo
                condimentum. Integer eu urna dapibus, scelerisque nisl non,
                semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
              </Card.Text>
              <Card.Subtitle className="mb-2 CardStorySubtitle">
                Juan Huang
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <button className="BlogSoriesBtn"> more stories </button>
        </div>
      </div>
      <div className="StoryRight col-6">
        <h2 className="StoriesTitle mt-5">Other successful stories</h2>
        {ListStory.map((data, ind) => (
            <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
               
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div key={ind}>
            <hr />
            <Card className=" border-0 ">
              <Card.Body>
                <Card.Title className=" StoryTitle">{data.Title}</Card.Title>

                <Card.Text className="StoryText ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </Card.Text>

                <Card.Subtitle className="StoryLink text-moted">
                  More Information
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
