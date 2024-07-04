import { ExpressAuth } from "@auth/express";
import google from "@auth/express/providers/google";
import { Router } from "express";

const router = Router();

router.use(
  "/auth/*",
  ExpressAuth({
    providers: [google],
    pages: {
      signIn: "/signin",
    },
  })
);

export default router;
