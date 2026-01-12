const { PUBLIC_IP_TRACKER_API_KEY } = import.meta.env;

export const getIp = async (ip: string) => {
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${PUBLIC_IP_TRACKER_API_KEY}`;

  if (ip) {
    url += `&ipAddress=${ip}`;
  }
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
