export const apiSuccess = (data, message) => ({
  data,
  status: 200,
  totalRow: data.length,
  message: message ? message : "OK",
});
