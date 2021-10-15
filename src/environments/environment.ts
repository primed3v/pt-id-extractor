export const environment = {
    regex_nif : "\\d{9}",
    regex_cc : "^[\\d]{8}[-, ]?\\d[-, ]?([A-Z]{2}\\d)?$",
    regex_bi: "^[0-9]{7,8}[ ]?[0-9]$",
    regex_niss: "[0-9]{11}",
    regex_passaportPt : "[A-Za-z][A-Za-z0-9]{6}[^A-Za-z0-9]",
    regex_passaportPt_2 : "\\d[A-Za-z0-9]{6}[^A-Za-z0-9]",
    regex_dates : "[0-9]{2}([-/ . ])[0-9]{2}[-/ . ][0-9]{4}"
}