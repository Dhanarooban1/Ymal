import prisma from "../config/database.js";

// Create new user info
export const createUserInfo = async (req, res) => {
    console.log("Creating user info with data:", req.body);
    try {
        const { name, email, role, yamlFamiliarity, useCases } = req.body;

        const userInfo = await prisma.userInfo.create({
            data: {
                name,
                email,
                role,
                yamlFamiliarity,
                useCases
            }
        });

        res.status(201).json(userInfo);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error creating user info' });
    }
};

// Get all users info
export const getAllUserInfo = async (req, res) => {
    try {
        const users = await prisma.userInfo.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user info' });
    }
};


export const checkUserInfoExists = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: 'Email query param required' });
    }

    const user = await prisma.userInfo.findUnique({
      where: { email }
    });

    if (user) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking user info', error);
    res.status(500).json({ error: 'Server error' });
  }
};