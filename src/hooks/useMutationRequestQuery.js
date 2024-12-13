import { useMutation } from '@tanstack/react-query';

export const useMutationRequestQuery = (mutationKey, mutationFn, options = {}) => {
    return useMutation({
        mutationKey,
        mutationFn,
        onSuccess: (data) => {
            options.onSuccess?.(data);
        },
        onError: (error) => {
            options.onError?.(error);
        },
        ...options,
    });
};
