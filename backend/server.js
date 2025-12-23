import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready!");
// });

const PORT = process.env.PORT || 3000;

//get list of 5 cars

app.get("/api/cars", (req, res) => {
  const cars = [
    { id: 1, make: "Toyota", model: "Camry", year: 2022 },
    { id: 2, make: "Honda", model: "Accord", year: 2023 },
    { id: 3, make: "Ford", model: "Mustang", year: 2021 },
    { id: 4, make: "Chevrolet", model: "Malibu", year: 2024 },
    { id: 5, make: "Nissan", model: "Altima", year: 2023 },
  ];
  res.send(cars);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
