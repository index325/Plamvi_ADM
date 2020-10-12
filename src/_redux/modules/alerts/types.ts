export enum ActionTypes {
  alertRequest = "ALERT_REQUEST",
  alertSuccess = "ALERT_SUCCESS",
  alertFailure = "ALERT_FAILURE",
  alertReset = "ALERT_RESET",
}

export interface IAlertState {
  message: string;
  isDialog: boolean;
  messageType: "default" | "error" | "success" | "warning" | "info" | undefined;
}
