const axios = require('axios');

require('dotenv').config();

const JSON_PLACEHOLDER_URL = process.env.JSON_PLACEHOLDER_URL;

exports.getUsers = async (req, res) => {
  try {
    const response = await axios.get(process.env.URL);
    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.URL}/${req.params.id}`);
    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const response = await axios.post(process.env.URL, req.body);
    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const response = await axios.put(`${process.env.URL}/${req.params.id}`, req.body);
    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const response = await axios.delete(`${process.env.URL}/${req.params.id}`);
    res.json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
