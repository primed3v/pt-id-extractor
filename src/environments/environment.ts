export const environment = {
    regex_nif : "\\d{9}",
    regex_cc : "[\\d]{8}[-, ]?[0-9]{1}[-, ]?([A-z]{2}\\d)",
    regex_cc_letterorzero_mistake : "[\\d]{8}[-, ]?[A-z]{1}[-, ]?([A-z]{2}\\d)",
    regex_cc_first_eigthnumbers : "[\\d]{8}[-, ]?",
    regex_cc_last_3digits : "([A-z]{2}\\d)",
    regex_bi: "[0-9]{7,8}[ ]?[0-9]",
    regex_niss: "[0-9]{11}",
    regex_height: "[0-9][,][0-9]{2}",
    regex_passaportPt : "[A-Za-z][A-Za-z0-9]{6}[^A-Za-z0-9]",
    regex_passaportPt_2 : "\\d[A-Za-z0-9]{6}[^A-Za-z0-9]",
    regex_dates : "[0-9]{2}([-/ . ])[0-9]{2}[-/ . ][0-9]{4}"
}