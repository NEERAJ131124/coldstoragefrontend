import { useQuery } from '@tanstack/react-query';

export const useGetRequestQuery = (queryKey, queryFn, options = {}) => {
    return useQuery({
        queryKey,
        queryFn,
        onSuccess: (data) => {
            options.onSuccess?.(data);
        },
        onError: (error) => {
            options.onError?.(error);
        },
        ...options, 
    });
};
