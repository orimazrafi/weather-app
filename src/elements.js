import styled from "styled-components";
import Select from "react-select";

export const AppHeadline = styled.div`
  margin: 1rem 0 0.5rem 0;
  color: ${({ theme }) => theme?.headlineColor};
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
  background: ${({ theme }) => theme?.basicWhite};
`;

export const StateText = styled.div`
  display: flex;
  font-size: 3.125rem;
  margin-bottom: 2.5rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 18.75rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme?.basicWhite};
  box-shadow: 0.625rem 0.625rem 0.3125rem 0 rgba(15, 15, 15, 0.404);
  & > h2.city--name {
    font-size: 2rem;
  }
`;

export const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    height: 6.25rem;
    width: 6.25rem;
  }
  & > p {
    margin-top: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
`;
export const CityTemp = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin-top: 0.625rem;
  color: ${({ theme }) => theme?.darkBlueColor};
  text-align: center;
  & > sup {
    font-size: 1.5rem;
  }
`;
export const CityName = styled.h2`
  & > sup {
    padding: 0.2rem 0.6rem;
    margin-left: 0.2rem;
    border-radius: 2rem;
    color: ${({ theme }) => theme?.blackColor};
    background: ${({ theme }) => theme?.orangeColor};
  }
`;

export const LoaderWrapper = styled.div`
  height: 60vh;
  display: flex;
  & > div {
    margin: auto;
  }
`;
