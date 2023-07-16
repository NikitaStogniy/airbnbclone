import EmptyState from "../components/EmptyState/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import PropertyClient from "./PropertyClient";
import getListings from "../actions/getListings";

const TripsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title="Unauth" subtitle="Please Login" />
			</ClientOnly>
		);
	}
	const listings = await getListings({
		userId: currentUser.id,
	});
	if (listings.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title="No trips found"
					subtitle="Looks like you havent reserved any trips"
				/>
			</ClientOnly>
		);
	}
	return (
		<ClientOnly>
			<PropertyClient listings={listings} currentUser={currentUser} />
		</ClientOnly>
	);
};

export default TripsPage;
