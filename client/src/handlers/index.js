import ExcelJS from 'exceljs';

export const exportHandler = (data) => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Отчет");

    sheet.getRow(1).border = {
        bottom: { style: "thick", color: { argb: "000000" } }
    };

    sheet.getRow(1).font = {
        bold: true
    };

    sheet.columns = [
        {
            header: "Дата создания",
            key: "createdAt",
            width: 10,
        },
        {
            header: "Дата обновления",
            key: "updatedAt",
            width: 10,
        },
        {
            header: "Имя",
            key: "name",
            width: 20,
        },
        {
            header: "Номер телефона",
            key: "phone_number",
            width: 20,
        },
        {
            header: "Код в базе данных",
            key: "code",
            width: 20,
        }
    ];

    data.map(
        async ({ name, phone_number, code, createdAt, updatedAt }, index) => {
            sheet.addRow({
                phone_number,
                name,
                code,
                createdAt: new Date(createdAt).toLocaleString(),
                updatedAt: new Date(updatedAt).toLocaleString(),
            });
        }
    )
    workbook.xlsx.writeBuffer().then(function (data) {
        const blob = new Blob([data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `report-${new Date().toISOString()}.xlsx`;
        anchor.click();
        window.URL.revokeObjectURL(url);
    });
}