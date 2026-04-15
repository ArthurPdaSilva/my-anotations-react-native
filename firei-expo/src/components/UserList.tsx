import { FlatList } from "react-native";
import { type User, UserItem } from "./UserItem";

type UserListProps = {
	users: User[];
	handleEdit: (user: User) => void;
};

export function UserList({ users, handleEdit }: UserListProps) {
	return (
		<FlatList
			style={{ marginTop: 20 }}
			data={users}
			renderItem={({ item }) => (
				<UserItem user={item} handleEdit={handleEdit} />
			)}
			keyExtractor={(item) => item.Id}
		/>
	);
}
