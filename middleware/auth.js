// middleware/auth.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.cookies.token; // Extraire le token du cookie

    if (!token) {
        return res.status(401).json({ message: 'Non autorisé, il faut se connecté' });
    }

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Ajouter l'utilisateur à la requête
        req.user = decoded; // `decoded` contient les infos de l'utilisateur, comme l'ID

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Non autorisé, il faut se connecté' });
    }
};

module.exports = { protect };