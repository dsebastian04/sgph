import bcrypt from 'bcryptjs';

const users = [
    {email: 'kevin@m.com', passwordHash: '$2a$10$8HvdLmgXSOfIwWchZwz1iu45IhkwVK9gW.vsqcF2BmFp979kyGcyy'},// Contraseña: password
    {email: 'ryan@m.com', passwordHash: '$2a$10$8HvdLmgXSOfIwWchZwz1iu45IhkwVK9gW.vsqcF2BmFp979kyGcyy'}// Contraseña: password
];

export const login = async (email, password) => {
    const user = users.find(user => user.email === email);
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    // Simulando una llamada a una API o backend
    return {email: user.email, token: "user.token"};
};