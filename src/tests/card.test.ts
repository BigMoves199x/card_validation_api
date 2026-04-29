import request from "supertest";
import app from "../app";

describe("POST /api/validate-card", () => {
  
  it("should return true for a valid card number", async () => {
    const response = await request(app)
      .post("/api/validate-card")
      .send({ cardNumber: "4111111111111811" });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.isValid).toBe(true);
  });

  it("should return false for an invalid card number", async () => {
    const response = await request(app)
      .post("/api/validate-card")
      .send({ cardNumber: "1234567890123456" });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.isValid).toBe(false);
  });

  it("should return 400 when card number is missing", async () => {
    const response = await request(app)
      .post("/api/validate-card")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});