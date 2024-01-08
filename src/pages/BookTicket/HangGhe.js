import React from "react";
import { useDispatch } from "react-redux";

const HangGhe = (props) => {
  const dispatch = useDispatch();
//   const { arrTicket, arrBookTicked } = useSelector(
//     (state) => state.ticketSlice
//   );
  //   console.log(props);
  //   console.log(arrTicket);
  return (
    <>
      {/* {arrTicket[props.index].danhSachGhe.map((ghe, index) => {
        let cssGheDaDat = "";
        let disable = false;
        if (ghe.daDat) {
          cssGheDaDat = "gheDuocChon";
          disable = true;
        }
        let indexGhe = arrBookTicked.findIndex(
          (item) => item.soGhe === ghe.soGhe
        );
        if (indexGhe != -1) {
          cssGheDaDat = "gheDangChon";
        }

        switch (ghe.soGhe) {
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "10":
          case "11":
          case "12":
            cssGheDaDat = "rowNumber";
            disable = true;
            break;
        }
        return (
          <button
            key={index}
            disabled={disable}
            className={`ghe ${cssGheDaDat} bg-white text-black`}
            onClick={() => {
              let gheDat = {
                soGhe: ghe.soGhe,
                gia: ghe.gia,
              };
              const actions = datGhe(gheDat);
              dispatch(actions);
            }}
          >
            {ghe.soGhe}
          </button>
        );
      })} */}
    </>
  );
};

export default HangGhe;
