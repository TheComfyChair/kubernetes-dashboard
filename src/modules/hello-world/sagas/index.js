//@flow

export function* rootSaga(): Generator<any, any, any> {
  yield console.info('hello-world saga initialised!');
}