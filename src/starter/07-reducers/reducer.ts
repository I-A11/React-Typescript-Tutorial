export type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: "pending",
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};

type CounterAction = UpdateCountAction | SetStatusAction;

type SetStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      throw new Error(
        `Unexpected action type: ${
          (action as any).type
        }. Please double check the counter reducer.`
      );
  }
};
