import styled from './styled';

export const Root = styled.div`
    background-color: #EAF3E7;
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: #051101;
    font-family: 'Roboto, Arial, Helvetica, sans-serif';
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #051101;
    height: 10vh;
    width: 100vw;
    color: #EAF3E7;
    font-size: 1.5rem;
    font-family: 'Roboto, Arial, Helvetica, sans-serif';
`;

export const Container = styled.div`
    height: 100vh;
    width: 60vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Roboto, Arial, Helvetica, sans-serif';
`;

export const ContainerPartition = styled.div`
    height: 30vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    border: 1px solid #051101;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto, Arial, Helvetica, sans-serif';
    background-color: white;
    margin-left: 2rem;
    margin-right: 2rem;
    
    &:hover {
        background-color: #EAF3E7;
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
    font-family: 'Roboto, Arial, Helvetica, sans-serif';
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
    background-color: #051101;
    color: #EAF3E7;
    font-size: calc(10px + 2vmin);
    font-family: 'Roboto, Arial, Helvetica, sans-serif';
    border: 1px solid #051101;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 10vw;
    height: 5vh;
    &:hover {
        background-color: #EAF3E7;
        color: #051101;
    }
`;