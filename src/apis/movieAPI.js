import axios from "axios";
import axiosClient from "./axiosClient";
import axiosAdmin from "./axiosAdmin";

export const getmovieAPI = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {
    params: {
      maNhom: "GP04",
    },
  });
  return data;
};
export const getBannerapi = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachBanner");
  return data;
};
export const getMovieDetail = async (movieID) => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayThongTinPhim", {
    params: {
      MaPhim: movieID,
    },
  });
  return data;
};

export const apiSearchFilm = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {
    params: {
      maNhom: "GP04",
    },
  });
  return data;
};

export const apiCreateMovie = async (movie) => {
  const formData = new FormData();
  for (let key in movie) {
    formData.append(key, movie[key]);
  }
  formData.append("maNhom", "GP04");

  await axiosClient.post("/QuanLyPhim/ThemPhimUploadHinh", formData);
};

export const apiUpdateMovie = async (movie) => {
  const formData = new FormData();
  for (let key in movie) {
    formData.append(key, movie[key]);
  }
  formData.append("maNhom", "GP04");

  await axiosAdmin.post("/QuanLyPhim/CapNhatPhimUpload", formData);
};

export const apiDeleteFilm = async (values) => {
  const { data } = await axiosAdmin.delete("/QuanLyPhim/XoaPhim", {
    params: { MaPhim: values },
  });
  return data;
};
export const layThongTinPhimAPI = async (maPhim) => {
  const { data } = await axiosClient.get(
    `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    {
      params: {
        maPhim: maPhim,
      },
    }
  );
  return data;
};
export const layHeThongRapAPI = async () => {
  const { data } = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap");
  return data;
};
export const layCumRapTheoHeThongAPI = async () => {
  const { data } = await axiosClient.get(
    `"/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04"`
  );
  return data;
};
export const layThongTinCumRapTheoHeThongAPI = async (maHeThongRap) => {
  const { data } = await axiosClient.get(
    `"/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}"`,
    {
      params: {
        maHeThongRap,
      },
    }
  );
  return data;
};
