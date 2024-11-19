const profileModel = require('../models/profile');

const uploadProfileImage = async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!req.file) {
            return res.json({ message: 'No file uploaded' });
        }
        const profileImgPath = `/uploads/${req.file.filename}`;

        const updatedProfile = await profileModel.findOneAndUpdate(
            { userId },
            { profileImg: profileImgPath },
            { new: true }
        );

        if (!updatedProfile) {
            return res.json({ message: 'User not found' });
        }

        res.json(updatedProfile);
    } catch (error) {
        console.error('Error uploading profile image:', error);
    }
};

module.exports = { uploadProfileImage };
