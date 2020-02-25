import React from 'react'
import { connect } from 'react-redux'

// Component for testing Redux (Delete when ready)
const Test = (props) => {
    return (
      <div>
        <h1>Testing</h1>
        <button
          onClick={() => {
            props.onTestSuccess();
          }}
        >Button</button>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTestSuccess: () => dispatch ({ type: 'TEST_SUCCESS'})
    }
}

export default connect(null, mapDispatchToProps) (Test)