import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
	const { user, isAdmin, loading } = useAuth();

	if (loading) return <div>Loading...</div>;

	if (!user || !isAdmin) {
		return <Navigate to='/' />; // or redirect to a "not authorized" page
	}

	return children;
};

export default AdminRoute;
