import Customer from "../models/Customer.js";

export const getCustomers = async (req, res) => {
  res.json(await Customer.find());
};

export const addCustomer = async (req, res) => {
  res.status(201).json(await Customer.create(req.body));
};

export const updateCustomer = async (req, res) => {
  res.json(await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
};
