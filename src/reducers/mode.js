import { CHANGE_MODE } from 'src/actions/actions';

export const initialState = {
  siteMode: 'Development',
};

// reducer = traducteur d'une intention/action vers une modification du state
const mode = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        siteMode: action.value,
      };
    default:
      return state;
  }
};

export default mode;