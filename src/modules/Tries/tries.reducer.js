import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_TRIES_SUCCESS: (s, a) => ({ ...s, tries: a.payload }),
  CLEAR_TRIES: () => ({ ...initialState }),
  ADD_TRY: (s, a) => ({ ...s, tries: [...s.tries, a.payload] })
};

const initialState = {
  tries: []
};

export default reducer(initialState, actionHandlers);
