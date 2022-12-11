import { useEffect } from 'react';

export const socketMiddleware = (wsUrl: string, wsActions: any) => {
  return (store: { dispatch: any; getState: any }) => {
    let socket: WebSocket | null = null;

    return (next: (arg0: any) => void) =>
      (action: { type: any; payload: any }) => {
        const { dispatch, getState } = store;
        const { type, payload } = action;
        const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

        if (type === wsInit) {
          socket = new WebSocket(`${payload}`);
        }
        if (socket) {
          socket.onopen = () => {
            dispatch({ type: onOpen });
          };

          socket.onerror = (event: any) => {
            dispatch({ type: onError, payload: event });
          };

          socket.onmessage = (event: { data: any }) => {
            const { data } = event;

            dispatch({ type: onMessage, payload: JSON.parse(data) });
          };

          socket.onclose = (event: any) => {
            dispatch({ type: onClose, payload: event });
          };
        }

        next(action);
      };
  };
};
