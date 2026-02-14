import Case from "../models/Case.js";

export const getCases = async (req, res) => {
  res.json(await Case.find().populate("customer_id"));
};

export const createCase = async (req, res) => {
  res.status(201).json(await Case.create(req.body));
};

export const updateCase = async (req, res) => {
  res.json(await Case.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const deleteCase = async (req, res) => {
  await Case.findByIdAndDelete(req.params.id);
  res.json({ message: "Case deleted" });
};
