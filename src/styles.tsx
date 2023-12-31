import styled from "./styled";

export const Root = styled.div`
  background-color: #eaf3e7;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const FormRoot = styled.div`
  background-color: #eaf3e7;
  height: 185vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const FormContainer = styled.div`
  background-color: #e2f0dd;
  border: 1px solid #051101;
  border-radius: 5px;
  box-shadow: 0 0 20px 2px #2f2f2f;
  height: ;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 1vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;



export const FormSection = styled.div`
  background-color: #eaf3e7;
  height: 185vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;



export const CalendarContainer = styled.div`
  background-color: #eaf3e7;
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const ButtonContainer = styled.div`
  background-color: #eaf3e7;
  height: 10vh;
  width: 100vw;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #051101;
  height: 10vh;
  width: 100vw;
  color: #eaf3e7;
  font-size: 1.3rem;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const Container = styled.div`
  height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const ContainerRow = styled.div`
  height: 10vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const ColumnContainer = styled.div`
  height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const ContainerPartition = styled.div`
  height: 30vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  border: 1px solid #051101;
  align-items: center;
  justify-content: center;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
  background-color: white;
  margin-left: 2rem;
  margin-right: 2rem;

  &:hover {
    background-color: #eaf3e7;
    color: green;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #051101;
`;

export const LinkDiv = styled(Link)`
  color: white;
  font-size: calc(40px + 2vmin);
  font-family: "Roboto, Arial, Helvetica, sans-serif";
  text-decoration: none;
  &:hover,
  &:focus {
    color: green;
  }

  &:active {
    color: red;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: gray;
  color: #051101;
  font-size: 12px;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
  border: 1px solid #051101;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 10vw;
  height: 5vh;
  &:hover {
    background-color: #eaf3e7;
    color: #051101;
  }
`;

export const Table = styled.table`
  font-family: "Roboto, Arial, Helvetica, sans-serif";
  font-size: calc(2px + 1vmin);
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #051101;
    padding: 8px;
    text-align: center;
  }
`;

export const TableContainer = styled.div`
  background-color: #eaf3e7;
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const ModalRoot = styled.div`
  z-index: 100;
  height: 60vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(8px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
  transition: all 0.3s ease; /* Add transition effect for all properties with a duration of 0.3 seconds and ease timing function */
`;

export const ModalHeader = styled.div`
  background-color: green;
  border: 1px solid #051101;
  height: 10vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: #eaf3e7;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`; 

export const ModalContent = styled.div`
  background-color: #eaf3e7;
  padding: 15px;
  border: 1px solid #051101;
  height: auto;
  width: Calc(60vw - 30px);
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-size: calc(5px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const ModalFooter = styled.div`
  background-color: green;
  border: 1px solid #051101;
  height: 10vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: #eaf3e7;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const DangerModalRoot = styled.div`
  z-index: 100;
  height: 60vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(8px + 2vmin);
  color: #ffffff; /* Change text color to white */
  font-family: "Roboto, Arial, Helvetica, sans-serif";
  transition: all 0.9s ease;
  // background-color: #ff0000; /* Change background color to red */
`;

export const DangerModalHeader = styled.div`
  background-color: #cc0000; /* Change header background color to a darker red */
  border: 1px solid #ff0000; /* Change border color to red */
  height: 10vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: #ffffff;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const DangerModalContent = styled.div`
  background-color: #ffcccc; /* Change content background color to a lighter red */
  padding: 15px;
  border: 1px solid #ff0000;
  height: auto;
  width: calc(60vw - 30px);
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-size: calc(5px + 2vmin);
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;

export const DangerModalFooter = styled.div`
  background-color: #cc0000; /* Change footer background color to a darker red */
  border: 1px solid #ff0000;
  height: 10vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(5px + 2vmin);
  color: #ffffff;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
`;
