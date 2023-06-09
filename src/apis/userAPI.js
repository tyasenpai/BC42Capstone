import axiosClient from "./axiosClient";
import axiosAdmin from "./axiosAdmin";

export const apiSignin = async (values) => {
  const { data } = await axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  return data;
};

export const apiSignup = async (values) => {
  const payload = { ...values, maNhom: "GP04" };

  const { data } = await axiosClient.post("/QuanLyNguoiDung/DangKy", payload);
  return data;
};

export const apiListUser = async () => {
  const { data } = await axiosClient.get(
    "/QuanLyNguoiDung/LayDanhSachNguoiDung",
    { params: { MaNhom: "GP04" } }
  );
  return data;
};

export const apiAddUser = async (values) => {
  const payload = { ...values, maNhom: "GP04" };
  const { data } = await axiosAdmin.post(
    "/QuanLyNguoiDung/ThemNguoiDung",
    payload
  );
  return data;
};

export const apiUpdateUser = async (values) => {
  const payload = { ...values, maNhom: "GP04" };
  const { data } = await axiosAdmin.post(
    "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    payload
  );
  return data;
};

export const apiDeleteUser = async (values) => {
  const { data } = await axiosAdmin.delete("/QuanLyNguoiDung/XoaNguoiDung", {
    params: { TaiKhoan: values },
  });
  return data;
};

export const apiSearchUser = async (values) => {
  const { data } = await axiosClient.get("/QuanLyNguoiDung/TimKiemNguoiDung", {
    params: { tuKhoa: values, MaNhom: "GP04" },
  });
  return data;
};
