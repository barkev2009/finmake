export const calculate = (params) => {
    let result = 0
    switch (params.tax_system) {
        case 'dohod':
            result = 2500;
            break;
        case 'dohod-rashod':
            result = 2900;
            break;
        case 'default':
            result = 4900;
            break;
        default:
            result = 0;
            break;
    }
    return result;
}