import { Dispatch, useEffect } from 'react';
import { AppDispatch } from './store';

export const socketMiddleware = (wsActions: any) => {
  console.log(wsActions);
  return (store: { dispatch: any; getState: any }) => {
    let socket: WebSocket | null = null;

    return (next: (arg0: any) => void) =>
      (action: { type: string; payload: any }) => {
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

          socket.onerror = (event: Event) => {
            dispatch({ type: onError, payload: event });
          };

          socket.onmessage = (event: { data: string }) => {
            const { data } = event;

            dispatch({ type: onMessage, payload: JSON.parse(data) });
          };

          socket.onclose = (event: Event) => {
            dispatch({ type: onClose, payload: event });
          };
        }

        next(action);
      };
  };
};
