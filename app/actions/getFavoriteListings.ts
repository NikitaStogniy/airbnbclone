import prisma from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUser';
import { SafeListing } from '../types';
import { Listing } from '@prisma/client';


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

        const safeListings = favorites.map((favorite:Listing)=>({
            ...favorite,
            createdAt: favorite.createdAt.toISOString(),
        }));
        return safeListings;
    } catch(error:any) {
        throw new Error(error)
    }
}