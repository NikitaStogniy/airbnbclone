import prisma from '@/app/libs/prismadb'

interface IParams {
    listingId?: string;
    userId?: string;
    authtorId?: string
}

export default async function getReservations(params:IParams) {
    try{
    const {listingId, userId, authtorId} = params

    const query: any = {};

    if(listingId){
        query.listingId = listingId;
    }
    if(userId){
        query.userId = userId;
    }
    if(authtorId){
        query.listing  = {userId: authtorId};
    }
    const reservations = await prisma.reservation.findMany({
        where: query,
        include:{
            listing: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    const safeReservation = reservations.map((reservation:any)=>({
        ...reservation,
        createdAt: reservation.createdAt.toISOString(),
        startDate:  reservation.startDate.toISOString(),
        endDate:  reservation.endDate.toISOString(),
        listing: {
            ...reservation.listing,
            createdAt:  reservation.listing.createdAt.toISOString(),
        }
    }));
    return safeReservation;
} catch(error: any){
    throw new Error(error)
}
    
}