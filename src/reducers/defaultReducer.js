// This is a dummy reducer. Remove once an actual reducer is implemented.
export default (state = 0, { type }) => {
  switch (type) {
    case 'RESET_REDUCER_COUNT':
      return 0;
    default:
      return state + 1;
  }
}