import api from './api';

export const fetchRevenueData = async () => {
  const client = await api();
  const { data } = await client.get('/stats/revenue');
  return data;
};
export const fetchPotentialRevenueData = async () => {
  const client = await api();
  const { data } = await client.get('/stats/potential_revenue');
  return data;
};
export const fetchCloseRatiosData = async () => {
  const client = await api();
  const { data } = await client.get('/stats/close_ratios');
  return data;
};
