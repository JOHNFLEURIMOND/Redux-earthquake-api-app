import styled from "styled-components";
import { colors } from "../layout/theme.jsx";

// Define the Button component with improved accessibility and responsiveness
export const Button = styled.button.attrs({
  "aria-label": "Button", // Default ARIA label, can be overridden if needed
})`
  font-size: 1rem; /* Adjust font size to be responsive */
  border-radius: 0.25rem; /* Adjust border radius for modern look */
  border: 1px solid ${colors.black}; /* Border style */
  padding: 0.5rem 1rem; /* Adjust padding for better touch target */
  color: ${colors.white}; /* Text color */
  background-color: ${colors.deepBlue}; /* Background color */
  border-color: ${colors.deepBlue}; /* Border color */
  cursor: pointer;
  display: inline-flex; /* Use inline-flex for better alignment */
  align-items: center; /* Center text vertically */
  justify-content: center; /* Center text horizontally */
  letter-spacing: 0.05em; /* Slightly increased letter spacing */
  line-height: 1.5; /* Improved line height for readability */
  transition:
    background-color 0.3s,
    border-color 0.3s,
    color 0.3s;
  text-decoration: none; /* Remove underline */
  text-align: center; /* Ensure text alignment is center */

  /* Accessibility enhancements */
  &:focus {
    outline: 3px solid ${colors.black}; /* Visible focus indicator */
    outline-offset: 2px; /* Offset the focus outline */
  }

  /* Hover, active, and focus states */
  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.black}; /* Background color on hover/focus */
    border-color: ${colors.black}; /* Border color on hover/focus */
    color: ${colors.deepBlue}; /* Text color on hover/focus */
    text-decoration: none; /* Ensure no underline */
  }

  /* Responsive design for various screen sizes */
  @media (max-width: 30em) {
    font-size: 0.875rem; /* Smaller font size on mobile */
    padding: 0.5rem; /* Adjust padding on mobile */
  }

  @media (min-width: 30em) and (max-width: 48em) {
    font-size: 0.9375rem; /* Medium font size for tablets */
    padding: 0.625rem 1.25rem; /* Adjust padding for tablets */
  }

  @media (min-width: 48em) {
    font-size: 1rem; /* Standard font size for larger screens */
    padding: 0.75rem 1.5rem; /* Standard padding for larger screens */
  }
`;
