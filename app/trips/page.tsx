import EmptyState from "../components/EmptyState/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title="Unauth" subtitle="Please Login" />
			</ClientOnly>
		);
	}
	const reservation = await getReservations({
		userId: currentUser.id,
	});
	if (reservation.length === 0) {
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
			<TripsClient reservations={reservation} currentUser={currentUser} />
		</ClientOnly>
	);
};

export default TripsPage;
