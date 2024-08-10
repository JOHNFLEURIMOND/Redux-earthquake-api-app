import React from "react";
import styled from "styled-components";
import { colors } from "../layout/theme";

const Modal = ({ title, detail, magnitude, alert, tsunami, onClose }) => (
  <ModalOverlay>
    <ModalContent>
      <CloseButton onClick={onClose} aria-label="Close modal">
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
      </ModalBody>
      <Button onClick={onClose}>Close</Button>
    </ModalContent>
  </ModalOverlay>
);

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

  ${media.tablet`
    padding: 2rem;
  `}
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

    ${media.tablet`
      font-size: 2rem;
    `}
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.4rem;
    color: ${colors.darkBrown};

    ${media.tablet`
      font-size: 1.6rem;
    `}
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

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${colors.button.primary.backgroundColor};
  color: ${colors.button.primary.color};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.dutchieBlue};
  }
`;

export default Modal;
