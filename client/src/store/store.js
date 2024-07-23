import {create} from 'zustand';
import axios from "axios";

export const useGlobalWeather = create((set) => ({
  location: '',
  result: '',
  setLocation: (location) => set({location}),
  setResult: (result) => set({result}),
}));

export const useFinedust = create((set) => ({
  reverse: '',
  air: '',
  setReverse: (reverse) => set({reverse}),
  setAir: (air) => set({air}),

  //역지오(위도경도->주소)
  fetchReverse: async (lat, lon) => {
    try {
      const reverseGeoUrl = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ko`);
      set({reverse: reverseGeoUrl.data});
    } catch (err) {
      alert(err);
    }
  },
  //미세먼지
  fetchAir: async (lat, lon) => {
    try {
      const finedustUrl = await axios.get(
        `https://weather-finedust-server.vercel.app/pollution?lat=${lat}&lon=${lon}`
      );
      set({air: finedustUrl.data});
    } catch (err) {
      alert(err);
    }
  }
}));