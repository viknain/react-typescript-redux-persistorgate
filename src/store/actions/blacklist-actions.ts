import { ActionType } from "../types/action-types"

export const updateUnsavedCount = (counter: number): ActionType => ({
  type: "UPDATE_BLACKLIST_COUNTER",
  payload: counter,
});

