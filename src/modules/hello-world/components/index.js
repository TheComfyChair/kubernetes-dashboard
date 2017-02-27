import React from 'react';
import { connect } from 'react-redux';
import { selectUserName } from '../selectors';


type Props = {
  userName: string,
}

export const HelloWorld = (props: Props) =>
  <div>
    <p>Hello world! My name is { props.userName }</p>
  </div>;


const mapStateToProps = state => ({
  userName: selectUserName(state)
});


export const HelloWorldContainer = connect(
  mapStateToProps
)(HelloWorld);