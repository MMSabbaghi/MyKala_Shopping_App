import useQuery from "../hooks/useQuery";

const useRedirectUrl = () => {
  return useQuery().get("redirect") || "";
};

export default useRedirectUrl;
