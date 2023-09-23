import { Uuid } from "../uuid.vo";
import { validate as uuidValidate } from "uuid";

describe("UuidValueObject", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");

  test("should throw an error if the uuid is invalid", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrowError("Invalid UUID: invalid-uuid");
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("should accept a valid uuid", () => {
    const uuid = new Uuid("c4a760a8-dbcf-5254-a0d9-6a4474bd1b62");
    expect(uuid).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});
