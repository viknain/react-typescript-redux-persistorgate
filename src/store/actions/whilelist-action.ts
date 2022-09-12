import { ActionType } from "../types/action-types"

export const updateSavedCount = (counter: number): ActionType => ({
  type: "UPDATE_WHITELIST_COUNTER",
  payload: counter,
});

