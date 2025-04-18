import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const handleLogout = () => {
	signOut(auth);
};
