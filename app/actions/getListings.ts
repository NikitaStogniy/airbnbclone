import prisma from '@/app/libs/prismadb'

export interface IListingParams {
    userId?: string;
    guestCount?: number,
    bathroom?: number,
    roomCount?: number,
    locationValue?: string,
    category?: string,
    startDate?: string,
    endDate?: string,
}


export default async function getListings(params: IListingParams) {
    try{
        const {userId, roomCount, bathroom, guestCount, category, locationValue, startDate, endDate, } =params;

        let query: any = {};

        if(userId){
            query.userId = userId;
        }

        if(category){
            query.category = category;
        }

        if(roomCount){
            query.roomCount = {
                gte: +roomCount
            }
        }

        if(guestCount){
            query.guestCount = {
                gte: +guestCount
            }
        }

        if(bathroom){
            query.bathroom = {
                gte: +bathroom
            }
        }

        if(locationValue){
            query.locationValue = locationValue;
        }

        if(startDate&&endDate){
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: {gte: startDate},
                                startDate: {lte: startDate},
                            },
                            {
                                startDate: {lte: endDate},
                                endDate: {gte: endDate},
                            }
                        ]
                    }
                }
            }
        }


        const listings = await prisma.listing.findMany({
            where: query,
            orderBy:{
                createdAt: 'desc'
            }
        })
        const safeListings = listings.map((listing:any)=>({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));
        return safeListings;
    } catch(error:any) {
        throw new Error(error)
    }
}