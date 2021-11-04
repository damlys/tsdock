import "jest";
import fetch, { Response } from "node-fetch";
import { httpApiTestsEntrypoint } from "./helpers";

describe("GET /hello", (): void => {
  test("should respond with Hello! message", async (): Promise<void> => {
    const response: Response = await fetch(`${httpApiTestsEntrypoint}/hello`, {
      method: "GET",
    });
    const payload: any = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("application/json");
    expect(payload.message).toBe("Hello!");
  });
});
