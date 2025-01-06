import { registerTranslation } from "react-native-paper-dates";

export const configureDatePicker = () => {
    registerTranslation('vi', {
        selectSingle: 'Chọn ngày',
        selectMultiple: 'Chọn nhiều ngày',
        selectRange: 'Chọn khoảng',
        save: 'Lưu',
        notAccordingToDateFormat: (inputFormat) => `Không đúng định dạng ngày: ${inputFormat}`,
        mustBeHigherThan: (date) => `Phải lớn hơn ${date}`,
        mustBeLowerThan: (date) => `Phải nhỏ hơn ${date}`,
        mustBeBetween: (startDate, endDate) => `Phải nằm giữa ${startDate} và ${endDate}`,
        dateIsDisabled: 'Ngày không được phép chọn',
        previous: 'Trước',
        next: 'Sau',
        typeInDate: 'Nhập ngày',
        pickDateFromCalendar: 'Chọn ngày từ lịch',
        close: 'Đóng',
        hour: 'Giờ',
        minute: 'Phút',
    });
};
