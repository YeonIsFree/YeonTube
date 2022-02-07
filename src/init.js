import app from "./server";

const PORT = 4444;

const handelListeng = () => {
  console.log(`🚀 Server listenting on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handelListeng);
