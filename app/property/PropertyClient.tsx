"use client";

import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Modals/Heading";
import { SafeListing, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { error } from "console";
import ListingCard from "../components/Listings/ListingCard";

interface PropertyClientProps {
	listings: SafeListing[];
	currentUser: SafeUser | null;
}

const PropertyClient: React.FC<PropertyClientProps> = ({
	listings,
	currentUser,
}) => {
	const router = useRouter();
	const [deleteId, setDeleteId] = useState("");

	const onCancel = useCallback(
		(id: string) => {
			setDeleteId(id);
			axios
				.delete(`/api/listings/${id}`)
				.then(() => {
					toast.success("Listing deleted");
					router.refresh();
				})
				.catch((error) => {
					toast.error("Something went wrong");
				})
				.finally(() => {
					setDeleteId("");
				});
		},
		[router]
	);

	return (
		<Container>
			<Heading title="Properties" subtitle="Your of your properties" />
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
				{listings.map((listing) => (
					<ListingCard
						key={listing.id}
						data={listing}
						actionId={listing.id}
						onAction={onCancel}
						disabled={deleteId == listing.id}
						actionLabel="Cancel reservation"
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	);
};

export default PropertyClient;
