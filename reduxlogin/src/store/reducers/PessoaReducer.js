const INITIAL_STATE = {
  pessoas: [],
  pessoa: {},
  loading: true,
  isUpdate: false,
};

const pessoaReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_PESSOA") {
    return {
      ...state,
      pessoas: action.pessoas,
      isUpdate: false,
      loading: false,
    };
  }
  if (action.type === "SET_PESSOA_BY_ID") {
    return {
      ...state,
      pessoa: action.pessoa,
      loading: false,
      isUpdate: true,
    };
  }
  return state;
};

export default pessoaReducer;
