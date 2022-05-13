import axios from 'axios';
import * as quanLyLoaiVeActionTypes from './../Constants/quanLyLoaiVeActionTypes';

export const getAllTicketTypes = () => {
  const api = '/api/ticketTypes';
  return async (dispatch) => {
    try {
      const { data } = await axios.get(api);
      dispatch({
        type: quanLyLoaiVeActionTypes.SET_TICKET_TYPES,
        payload: {
          ticketTypes: data
        }
      });
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};
