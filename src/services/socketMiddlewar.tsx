import { getCookie } from '../utils/getCookie';
import { wsUrlFeedProfile } from './store';

export const socketMiddleware = (wsActions: any) => {
  return (store: { dispatch: any; getState: any }) => {
    let socket: WebSocket | null = null;

    return (next: (arg0: any) => void) =>
      (action: { type: string; payload: any }) => {
        const { dispatch, getState } = store;
        const { type, payload } = action;
        const {
          wsInit,
          onOpen,
          onClose,
          onError,
          onMessage,
          wsSendMessage,
          wsDisconnect,
        } = wsActions;

        if (type === wsInit) {
          socket = new WebSocket(`${payload}`);
        }

        if (socket) {
          if (type === wsDisconnect) {
            if (socket.readyState === 1) {
              socket.close();
            }
          }
          socket.onopen = () => {
            dispatch({ type: onOpen });
          };

          socket.onerror = (event: Event) => {
            dispatch({ type: onError, payload: event });
          };

          socket.onmessage = (event: { data: string }) => {
            const { data } = event;

            dispatch({ type: onMessage, payload: JSON.parse(data) });
          };

          socket.onclose = (event: CloseEvent) => {
            dispatch({ type: onClose });
          };
          if (type === wsSendMessage) {
            const message = { ...payload };
            const socketed = new WebSocket(wsUrlFeedProfile);
            socketed.send(JSON.stringify(message));
          }
        }

        next(action);
      };
  };
};
