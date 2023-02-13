import  useSWR from "swr"

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
      const error = new Error('An error occurred while fetching the data.')
      error.info = await response.json()
      error.status = response.status
      throw error
    }
  
  const json = await response.json();
  return json;
};

export function useGithubUsers() {
  const {data,error}=useSWR("https://api.github.com/users", fetchData)


return {
    users:data,
    error
}
}


