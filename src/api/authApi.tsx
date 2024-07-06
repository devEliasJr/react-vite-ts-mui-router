import apiClient from "./axios/axios-config";


export const signIn = async (credentials: ILoginCredentialsPayload): Promise<ILoginCredentialsResponse> => {
  try {
    const response = await apiClient.post(`/auth/login/`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

