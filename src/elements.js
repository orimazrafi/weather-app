import styled from "styled-components";
import Select from "react-select";

export const AppHeadline = styled.div`
  margin: 1rem 0 0.5rem 0;
  color: #343434;
  font-weight: normal;
  font-family: "Ultra", sans-serif;
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  margin: 2.5rem 0 1.25rem 0;
  & > label.state--label,
  & > label.city--label {
    margin: 0.625rem;
    & > div.input--headline {
      margin: 0 0 0.625rem 0.625rem;
      font-size: 1.5rem;
    }
  }
`;
export const SelectWrapper = styled(Select)`
  outline: none;
  border-radius: 20px;
  border: none;
  margin-bottom: 5%;
  background: rgba(250, 250, 250, 0.85);
`;
