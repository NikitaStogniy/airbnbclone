"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { SafeReservation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "../components/Modals/Heading";
import Container from "../components/Container";
import ListingCard from "../components/Listings/ListingCard";

interface ReservationsClientProps {
	reservations: SafeReservation[];
	currentUser: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
	reservations,
	currentUser,
}) => {
	const router = useRouter();
	const [deleteId, setDeleteId] = useState("");
	const onCancel = useCallback(
		(id: string) => {
			setDeleteId(id);

			axios
				.delete(`/api/reservations/${id}`)
				.then(() => {
					toast.success("Reservation Deleted");
					router.refresh();
				})
				.catch(() => {
					toast.error("Somethin went wrong");
				})
				.finally(() => {
					setDeleteId("");
				});
		},
		[router]
	);

	return (
		<Container>
			<Heading title="Reservations" subtitle="Bookings on your properties" />
			<div
				className="mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8"
			>
				{reservations.map((reservation) => (
					<ListingCard
						key={reservation.id}
						data={reservation.listing}
						reservation={reservation}
						actionId={reservation.id}
						onAction={onCancel}
						disabled={deleteId == reservation.id}
						actionLabel="Cancel guest reservation"
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	);
};

export default ReservationsClient;
