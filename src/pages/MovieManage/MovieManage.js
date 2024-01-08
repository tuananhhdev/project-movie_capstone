import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieThunk } from "../../redux/MovieSlice";

const MovieManage = () => {
  // const [listMovie, setListMovie] = useState([]);
  const dispacth = useDispatch();
  const { arrMovie } = useSelector((state) => state.MovieSlice);
  useEffect(() => {
    // listAPI
    //   .get_movie()
    //   .then((res) => setListMovie(res.data.content))
    //   .catch((err) => console.log(err));
    // tao thunk
    dispacth(getAllMovieThunk());
  }, []);
  // console.log(listMovie);
  const columns = [
    {
      // tên cột
      title: "Mã phim",
      // data index giúp bắt được thuộc tính
      dataIndex: "maPhim",
      key: "maPhim",
      // render: (text, record, index) => {
      //   console.log(record);
      // },
      // render:(text)=>
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => <img src={text} alt="" className="w-28" />,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      render: (text) => <p className="w-96 line-clamp-1">{text}</p>,
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <div className="space-x-3">
          <button
            className="px-2 py-4 rounded-md bg-red-300"
            // onClick={() =>
            //   listAPI
            //     .delete_movie(record.maPhim)
            //     .then(() =>
            //       listAPI.get_movie().then((res) => {
            //         setListMovie(res.data.content);
            //       })
            //     )
            //     .catch((err) => console.log(err))
            // }
          >
            Delete
          </button>
          <button className="px-2 py-4 rounded-md bg-yellow-300">Edit</button>
        </div>
      ),
    },
  ];

  // const data = listMovie;

  return (
    <>
      <h2 className="font-bold text-2xl text-center mb-5">Quản lý phim</h2>
      <Table
        columns={columns}
        dataSource={arrMovie}
        pagination={{ pageSize: 3 }}
      />
    </>
  );
};

export default MovieManage;
