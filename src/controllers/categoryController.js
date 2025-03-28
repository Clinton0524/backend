const Category = require('../models/categoryModel');

// Fetch all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find(); // Retrieve all categories
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

// Create a new category
const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCategory = new Category({ name, description });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};

module.exports = { getCategories, createCategory };
