import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import productRoutes from "./routes/product.routes.js";
import bannerRoutes from "./routes/banner.routes.js"
import offerRoutes from "./routes/offer.routes.js";
import testimonialRoutes from "./routes/testimonial.routes.js";
import inquiryRoutes from "./routes/inquiry.routes.js";

const app = express();

app.use(helmet());

app.use(compression());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
    timestamp: new Date(),
  });
});

//other middleware..

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/banners", bannerRoutes);
app.use("/api/v1/offers", offerRoutes);
app.use("/api/v1/testimonials", testimonialRoutes);
app.use("/api/v1/inquiries", inquiryRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
