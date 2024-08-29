import ErrorComponent from "@/component/Loader/ErrorComponent";
import Loader from "@/component/Loader/Loader";
import { useGetMyBookingsQuery } from "@/redux/feature/booking/bookingApi";
import { useCurrentToken } from "@/redux/feature/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";

const MyBookings = () => {
    const token = useAppSelector(useCurrentToken);
    let user
    if (token) {
        user = verifyToken(token);
      }
    const {data, isLoading, isError} = useGetMyBookingsQuery(user?.email as string)
    console.log(data)

    if (isLoading) {
        return <Loader />;
      }
    
      if (isError || !data) {
        return <ErrorComponent/>
      }

    return (
        <div>
            
        </div>
    );
};

export default MyBookings;