//@flow
export const namespacesSocket = () => new Promise((resolve) => {
  const socket = new WebSocket('/api/namespaces');
  socket.onopen = event => resolve(socket);
});