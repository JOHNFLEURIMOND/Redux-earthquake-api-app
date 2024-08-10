import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../layout/theme"; // Adjust path if necessary
import Button from "../Button/Button"; // Adjust the path as needed

const EarthquakeCard = ({
  title,
  detail,
  magnitude,
  alert,
  tsunami,
  dyfiContents,
  groundFailureData,
  isExpanded,
  onClick,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (e) => {
    e.stopPropagation(); // Prevent triggering the card flip
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <CardContainer onClick={onClick} aria-expanded={isExpanded} role="button">
        <CardInner $isExpanded={isExpanded}>
          <CardFront>
            <CardContent>
              <h3>{title}</h3>
              <p>Magnitude: {magnitude}</p>
              <p>Alert: {alert}</p>
              <p>Tsunami: {tsunami ? "Yes" : "No"}</p>
              <Button onClick={handleModalOpen}>Details</Button>
            </CardContent>
          </CardFront>
          <CardBack>
            <ExpandedContent>
              <p>
                Details:{" "}
                <a href={detail} target="_blank" rel="noopener noreferrer">
                  More info
                </a>
              </p>
            </ExpandedContent>
          </CardBack>
        </CardInner>
      </CardContainer>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleModalClose} aria-label="Close modal">
              ❌
            </CloseButton>
            <ModalBody>
              <h2>{title}</h2>
              <p>Magnitude: {magnitude}</p>
              <p>Alert: {alert}</p>
              <p>Tsunami: {tsunami ? "Yes" : "No"}</p>
              <p>
                Details:{" "}
                <a href={detail} target="_blank" rel="noopener noreferrer">
                  More info
                </a>
              </p>

              {/* Dyfi Content URLs */}
              <h3>Dyfi Content</h3>
              <ul>
                {dyfiContents &&
                  Object.entries(dyfiContents).map(([key, value]) => (
                    <li key={key}>
                      <a
                        href={value.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {key}
                      </a>
                    </li>
                  ))}
              </ul>
            </ModalBody>
            <Button onClick={handleModalClose}>Close</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

// Styled components
const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
  border: 1px solid ${colors.graySmoke};
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${({ $isExpanded }) =>
    $isExpanded ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.white};
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${colors.white};
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 1rem 0;
    font-weight: 400;
    font-size: 1.8rem;
    color: ${colors.deepBlue};
    text-align: center;
  }

  p {
    margin: 0.5rem 0;
    text-align: center;
    font-size: 1.4rem;
    color: ${colors.darkBrown};
  }
`;

const ExpandedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.darkBrown};

  p {
    margin: 0.5rem 0;
    font-size: 1.4rem;
  }

  a {
    color: ${colors.blue};
    text-decoration: underline;
  }
`;

// Styled components for the Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 80vw;
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const ModalBody = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin: 1rem 0;
    font-size: 1.8rem;
    color: ${colors.deepBlue};
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.4rem;
    color: ${colors.darkBrown};
  }

  a {
    color: ${colors.blue};
    text-decoration: underline;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5rem;
  background-color: transparent;
  color: ${colors.black};
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default EarthquakeCard;
