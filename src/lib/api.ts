
import supabase from './supabase';

// User related functions
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

// NGO related functions
export const getNGOs = async () => {
  const { data, error } = await supabase
    .from('ngos')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const getNGOById = async (ngoId: string) => {
  const { data, error } = await supabase
    .from('ngos')
    .select('*')
    .eq('ngo_id', ngoId)
    .single();
  
  if (error) throw error;
  return data;
};

// Event related functions
export const getEvents = async () => {
  const { data, error } = await supabase
    .from('events')
    .select('*, ngos(*)');
  
  if (error) throw error;
  return data;
};

export const getEventById = async (eventId: string) => {
  const { data, error } = await supabase
    .from('events')
    .select('*, ngos(*)')
    .eq('event_id', eventId)
    .single();
  
  if (error) throw error;
  return data;
};

export const getEventsByNGO = async (ngoId: string) => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('ngo_id', ngoId);
  
  if (error) throw error;
  return data;
};

// Volunteer related functions
export const registerAsVolunteer = async (userId: string, eventId: string) => {
  const { data, error } = await supabase
    .from('volunteers')
    .insert([
      { user_id: userId, event_id: eventId }
    ]);
  
  if (error) throw error;
  return data;
};

export const getVolunteersByEvent = async (eventId: string) => {
  const { data, error } = await supabase
    .from('volunteers')
    .select('*, users(*)')
    .eq('event_id', eventId);
  
  if (error) throw error;
  return data;
};

export const getEventsByVolunteer = async (userId: string) => {
  const { data, error } = await supabase
    .from('volunteers')
    .select('*, events(*)')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
};

// Donation related functions
export const makeDonation = async (donationData: {
  user_id: string;
  ngo_id: string;
  event_id?: string;
  amount: number;
  donation_type: 'Monetary' | 'In-Kind';
  payment_method?: 'UPI' | 'Card' | 'Bank';
  in_kind_items?: string;
}) => {
  const { data, error } = await supabase
    .from('donations')
    .insert([donationData]);
  
  if (error) throw error;
  return data;
};

export const getDonationsByUser = async (userId: string) => {
  const { data, error } = await supabase
    .from('donations')
    .select('*, ngos(*), events(*)')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
};

export const getDonationsByNGO = async (ngoId: string) => {
  const { data, error } = await supabase
    .from('donations')
    .select('*, users(*)')
    .eq('ngo_id', ngoId);
  
  if (error) throw error;
  return data;
};

// Certificate related functions
export const getCertificatesByUser = async (userId: string) => {
  const { data, error } = await supabase
    .from('certificates')
    .select('*, ngos(*), events(*)')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
};

// Gamification related functions
export const getUserGamification = async (userId: string) => {
  const { data, error } = await supabase
    .from('gamification')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

// Notification related functions
export const getUserNotifications = async (userId: string) => {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const markNotificationAsRead = async (notifId: string) => {
  const { data, error } = await supabase
    .from('notifications')
    .update({ status: 'Read' })
    .eq('notif_id', notifId);
  
  if (error) throw error;
  return data;
};

// Reviews related functions
export const getNGOReviews = async (ngoId: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*, users(*)')
    .eq('ngo_id', ngoId);
  
  if (error) throw error;
  return data;
};

export const submitReview = async (reviewData: {
  user_id: string;
  ngo_id: string;
  rating: number;
  comment?: string;
}) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert([reviewData]);
  
  if (error) throw error;
  return data;
};
