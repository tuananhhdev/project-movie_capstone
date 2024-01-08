import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HangGhe from "./HangGhe";
import BookInfo from "./BookInfo";
import { listAPI } from "../../services/API";
import { useParams } from "react-router-dom";
import "./../../assets/style/BookTicket.css";
import { getDetailRoomTicket } from "../../redux/ticketSlice";
const BookTicket = () => {
  const { roomTicketDetail } = useSelector((state) => state.ticketSlice);
  const dispatch = useDispatch();
  const { MaLichChieu } = useParams();
  const [ticket, setTicket] = useState([]);
  console.log(MaLichChieu);

  useEffect(() => {
    listAPI
      .book_ticket_film(MaLichChieu)
      .then((result) => {
        setTicket(result.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(dispatch(getDetailRoomTicket()));

  return (
    <div className="bg-black">
      <div className="container mx-auto py-[10rem] px-10">
        <h1 className="text-center font-bold text-white text-[40px] uppercase">
          Thông Tin Chi Tiết
        </h1>
        <div className="grid grid-cols-12 my-5">
          <div className="mb:col-span-12 sm:col-span-12 lg:col-span-7 p-5">
            <div className="mb:w-[40rem] relative mb-10 w-full text-black text-2xl screen h-[10rem] rounded flex justify-center items-center">
              Màn Hình Chiếu
            </div>
            <div className="mb:w-[40rem] mt-5 flex w-full justify-around ">
              <h1 className="text-white flex flex-col items-center font-bold">
                <button className="ghe "></button> Thường
              </h1>
              <h1 className="text-white flex flex-col items-center font-bold">
                <button className="ghe gheDaDat"></button>Đã đặt
              </h1>
              <h1 className="text-white flex flex-col items-center font-bold">
                <button className="ghe gheVip"></button> Vip
              </h1>
            </div>
          </div>
          <div className="mb:col-span-12  sm:col-span-12 lg:col-span-5 lg:p-5">
            {/* <BookInfo thongTinPhim={thongTinPhim} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
