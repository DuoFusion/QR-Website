import { InvalidateQueryFilters, QueryKey, useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { HTTP_STATUS, ROUTES } from "../../constants";
import { CombinedErrorResponse } from "../../types";
import { message } from "antd";
import { ErrorMessage } from "../../utils/errorMessage";
// import { errorMessage, toaster } from '../../utils/custom-functions'

function useApiDelete<TInput, TResponse>(mutationKey: QueryKey, callback: (input: TInput) => Promise<TResponse>, options?: UseMutationOptions<TResponse, CombinedErrorResponse, TInput>) {
  const q = useQueryClient();
  const navigate = useNavigate();

  return useMutation<TResponse, CombinedErrorResponse, TInput>({
    mutationKey,
    mutationFn: callback,
    ...options,
    onSuccess: (data, variables, context) => {
      for (let i = 1; i < mutationKey.length; i++) {
        q.invalidateQueries({ queryKey: [mutationKey[i]] } as InvalidateQueryFilters);
      }
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: CombinedErrorResponse) => {
      switch (error.status) {
        case HTTP_STATUS.UNAUTHORIZED:
          navigate(ROUTES.HOME + `?returnUrl=${window.location.pathname}`, {
            replace: true,
          });
          break;
        default:
          message.error(ErrorMessage(error));
          break;
      }
    },
  });
}

export default useApiDelete;
