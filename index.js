const app = require("./app")
const connectDB = require("./db")
const PORT = process.env.PORT || 8000
connectDB()
const server = app.listen(PORT, () => {
  console.log("server is running at port: " + PORT)
})
// UnCaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`shutting down server due to UnCaught Exception`)
  server.close()
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`)
  console.log(err.stack)
  console.log(`shutting down server due to Unhandled Promise Rejection`)
  server.close()
})
