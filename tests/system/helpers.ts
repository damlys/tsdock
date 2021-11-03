if (typeof process.env.HTTP_API_TESTS_ENTRYPOINT !== "string" || process.env.HTTP_API_TESTS_ENTRYPOINT === "") {
  throw new Error("HTTP API tests entrypoint is not defined.");
}
export const httpApiTestsEntrypoint: string = process.env.HTTP_API_TESTS_ENTRYPOINT;
