import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../BaseUrls/useAxiosPublic";

const useGetTestimonial = () => {

       const axiosPublic = useAxiosPublic();

       const { data: testimonials = [], isPending: testimonialsPending } = useQuery({
              queryKey: ['testimonials'],
              queryFn: async () => {
                     const res = await axiosPublic.get('/testimonials');
                     return res.data;
              }
       })

       return { testimonials, testimonialsPending }
};

export default useGetTestimonial;