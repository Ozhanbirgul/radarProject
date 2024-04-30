import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant";



export const getFlight = createAsyncThunk(
    "flight/getFlight", 
    async() => {
        // 1) Api isteği at
       const res = await axios.request(options);
       console.log(res.data.aircraft);

       // 2) Gelen veriyi formatla
       const refinedData = res.data.aircraft.map((i) => ({
        id: i[0],
        code:i[1],
        lat:i[2],
        lng:i[3],
       }));


       // 3) Formatlanan veriyi payload olarak belirle
       return refinedData;
    }
);
