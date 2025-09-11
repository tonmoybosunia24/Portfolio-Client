import { useContext } from "react";
import { GlobalContext } from "../GlobalProviders/GlobalProviders";

const AdminRoutes = ({ children }) => {

       const { user, loading } = useContext(GlobalContext);

       if (loading) {
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>;
       }
       else {
              return children;
       }
};

export default AdminRoutes;