// AsyncContext, getStore

export type AsyncContext = unknown;
export const localStorage = () => () => undefined;
export const getStore = () => {
  return process.env.XPR_TEST_FAIL
    ? undefined
    : {
      request: { id: 'req' },
      response: { id: 'res' }
    };
};
