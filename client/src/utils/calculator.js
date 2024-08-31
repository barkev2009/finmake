export const calculate = (params) => {
    let result = 0
    switch (params.tax_system) {
        case 'dohod':
            result = 2500;
            switch (params.activity_type) {
                case 'it':
                case 'digital':
                case 'services':
                    result = 4900;
                    break;
                case 'production':
                case 'construction':
                case 'marketplace':
                case 'other':
                    result = 19900;
                    break;
                default:
                    break;
            }
            break;
        case 'dohod-rashod':
            result = 2900;
            break;
        case 'default':
            result = 4900;
            break;
        default:
            break;
    }
    return result;
}