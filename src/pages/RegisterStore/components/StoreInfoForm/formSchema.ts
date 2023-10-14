import * as z from "zod";

export const storeInfoSchema = z.object({
    name: z.string().min(6, 'O nome da loja deve ter ao menos 6 digitos'),
    category: z.string().min(6, 'A categoria da loja deve ter ao menos 6 digitos'),
})
