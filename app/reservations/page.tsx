import EmptyState from "../components/EmptyState/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title="Unauth" subtitle="Please Login" />
			</ClientOnly>
		);
	}

	const reservations = await getReservations({
		authtorId: currentUser.id,
	});

	if (reservations.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title="No trips found"
					subtitle="Looks like you have no reservations on your property"
				/>
			</ClientOnly>
		);
	}
	return (
		<ClientOnly>
			<ReservationsClient
				reservations={reservations}
				currentUser={currentUser}
			/>
		</ClientOnly>
	);
};

export default ReservationsPage;
