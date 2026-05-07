import {z} from 'zod';

export const editProfileSchema = z.object({
    displayName: z.string().min(2, 'Display name must be at least 2 characters').max(50, 'Display name must be less than 50 characters'),
    bio: z.string().max(500, 'Bio must be less than 500 characters').optional()
});

export type EditProfileSchema = z.infer<typeof editProfileSchema>
