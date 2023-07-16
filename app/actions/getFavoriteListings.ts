import prisma from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
    try{
        const currentUser = await getCurrentUser();
        if(!currentUser){
            return [];
        }

        const favorites = await prisma.listing.findMany({
            where: {
                id:{
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        })
//Fuck type error
        const safeListings = favorites.map((favorite:any)=>({
            ...favorite,
            createdAt: favorite.createdAt.toISOString(),
        }));
        return safeListings;
    } catch(error:any) {
        throw new Error(error)
    }
}