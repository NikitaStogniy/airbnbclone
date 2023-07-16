export const dynamic = "force-dynamic";

import Container from "@/app/components/Container";
import ListingCard from "./components/Listings/ListingCard";
import EmptyState from "./components/EmptyState/EmptyState";
import getListings, { IListingParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
	searchParams: IListingParams;
}

interface HomeProps {
	searchParams: IListingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
	const listings = await getListings(searchParams);
	const currentUser = await getCurrentUser();

	if (listings.length === 0) {
		return (
			<ClientOnly>
				<EmptyState showReset />
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<Container>
				<div
					className="
			  pt-24
			  grid 
			  grid-cols-1 
			  sm:grid-cols-2 
			  md:grid-cols-3 
			  lg:grid-cols-4
			  xl:grid-cols-5
			  2xl:grid-cols-6
			  gap-8
			"
				>
					{listings.map((listing: any) => (
						<ListingCard
							currentUser={currentUser}
							key={listing.id}
							data={listing}
							disabled={false}
						/>
					))}
				</div>
			</Container>
		</ClientOnly>
	);
};

export default Home;
