import { app } from "./app";

app.listen(process.env.PORT, () => {
  console.log("\x1b[36m%s\x1b[0m", "😎 [server]: is running! (☞ﾟヮﾟ)☞");
});
