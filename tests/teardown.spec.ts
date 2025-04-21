import fs from "fs";
import * as Constant from "../utilities/constants";
import { test } from "../pages-objects/page-fixtures";

test("Tear down", async () => {
  await test.step("Delete user token data", async () => {
    const filePathCollector = [Constant.AuthFile.STANDARD_USER];
    for (const file of filePathCollector) {
      try {
        await fs.promises.unlink(file);
      } catch (error) {
        console.error(`Error deleting file: ${error}`);
      }
    }
  });
});
