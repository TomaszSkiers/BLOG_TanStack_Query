import { axiosClient } from "../api/axiosClient";
import { Post } from "../types/postTypes";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const fetchPosts = async (): Promise<Post[]> => {
    const response = await axiosClient.get<Post[]>('/posts')
    return response.data
}

export const  useGetPosts = (): UseQueryResult<Post[], Error> => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: 2,
        retryDelay: 2000,
        refetchOnWindowFocus: false,
    })
}