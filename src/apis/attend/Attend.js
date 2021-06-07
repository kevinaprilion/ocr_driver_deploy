import Handler from "../../components/handler/Handler";
import axiosInstance from "../../config/axiosInstance";

export class AttendRequest {

    static checkIn = async (values, handleOpenModal) => {
        console.log(values)
        try {
            axiosInstance()
                .post("driver/absensi/absen_masuk/get_data_from_input", {
                    date: values.dateCheckIn,
                    time_in: values.timeCheckIn,
                    additional_info: values.noted,
                    vehicle_mileage_before: values.mileage,
                })
                .then(({ data }) => {
                    console.log(data)
                    handleOpenModal();
                })
                .catch((err) => Handler("error", "Invalid Password!"));
        } catch (error) {
            console.log(error);
        }

    };

    static checkOut = async (values, handleOpenModal) => {
        console.log(values)
        try {
            axiosInstance()
                .post("driver/absensi/absen_pulang/get_data_from_input", {
                    date: values.dateCheckOut,
                    time_out: values.timeCheckOut,
                    additional_info: values.noted,
                    vehicle_mileage_after: values.mileage,
                })
                .then(({ data }) => {
                    console.log(data)
                    handleOpenModal();
                })
                .catch((err) => Handler("error", "Invalid Password!"));
        } catch (error) {
            console.log(error);
        }
    };

    static permit = async (values, handleOpenModal) => {
        console.log(values)
        try {
            axiosInstance()
                .post("driver/absensi/izin_libur/get_data_from_input", {
                    date: values.datePermit,
                    status: values.status,
                    additional_info: values.additional_info,
                })
                .then(({ data }) => {
                    console.log(data)
                    handleOpenModal();
                })
                .catch((err) => Handler("error", "Invalid Password!"));
        } catch (error) {
            console.log(error);
        }
    };

    static UpdateAttend = async (values, handleOpenModal) => {
        console.log(values)
        try {
            axiosInstance()
                .post("driver/absensi/revisi_absen/get_data_from_input", {
                    date: values.date,
                    time_in: values.time_in,
                    time_out: values.time_out,
                    additional_info: values.additional_info,
                    vehicle_mileage_before: values.vehicle_mileage_before,
                    vehicle_mileage_after: values.vehicle_mileage_after,
                })
                .then(({ data }) => {
                    console.log(data)
                    handleOpenModal();
                })
                .catch((err) => Handler("error", "Invalid Password!"));
        } catch (error) {
            console.log(error);
        }

    };

    static updatePermit = async (alignment, values, handleOpenModal) => {
        console.log(values)
        console.log(alignment)
        console.log(typeof alignment)
        try {
            axiosInstance()
                .post("driver/absensi/revisi_izinlibur/get_data_from_input", {
                    date: values.datePermit,
                    status: alignment,
                    additional_info: values.additional_info,
                })
                .then(({ data }) => {
                    console.log(data)
                    handleOpenModal();
                })
                .catch((err) => Handler("error", "Invalid Password!"));
        } catch (error) {
            console.log(error);
        }
    };
};