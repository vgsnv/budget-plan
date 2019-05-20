import * as React from 'react';
import styled from 'styled-components';

export interface HelloProps {
  compiler: string;
  framework: string;
}

interface ButtonProps {
  readonly primary: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>

        {/* <h2>Hello my freinds</h2> */}

        <Button primary>I'm purple.</Button>
        <br />
        <TomatoButton primary={false}>I'm red.</TomatoButton>
      </>
    );
  }
}
