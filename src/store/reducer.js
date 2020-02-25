const initialState = {
    test: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TEST_SUCCESS':
        return {
          ...state,
          test: !state.test
        };
      default: {
        return state;
      }
    }
    }

export default reducer