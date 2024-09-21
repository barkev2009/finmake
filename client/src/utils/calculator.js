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
                case 'wholesale':
                    result = 19900;
                    break;
                default:
                    break;
            }
            break;
        case 'dohod-rashod':
            result = 2900;
            if (['select', '50'].includes(params.num_documents) || ['select', '10'].includes(params.num_services)) {
                switch (params.activity_type) {
                    case 'it':
                    case 'digital':
                    case 'services':
                        result = 7900;
                        break;
                    case 'production':
                    case 'construction':
                        result = 24900;
                        break;
                    case 'marketplace':
                    case 'wholesale':
                        result = 19900;
                        break;
                    default:
                        break;
                }
            }
            if (params.num_documents === '100' || params.num_services === '25') {
                switch (params.activity_type) {
                    case 'it':
                    case 'digital':
                    case 'services':
                        result = 19900;
                        break;
                    case 'production':
                    case 'construction':
                        result = 34900;
                        break;
                    case 'marketplace':
                    case 'wholesale':
                        result = 29900;
                        break;
                    default:
                        break;
                }
            }
            if (['150', '200'].includes(params.num_documents) || ['50', '75', '100'].includes(params.num_services)) {
                switch (params.activity_type) {
                    case 'it':
                    case 'digital':
                    case 'services':
                        result = 34900;
                        break;
                    case 'production':
                    case 'construction':
                        result = 54900;
                        break;
                    case 'marketplace':
                    case 'wholesale':
                        result = 44900;
                        break;
                    default:
                        break;
                }
            }
            result += 5000 * params.marketplaceCount;
            result += 4000 * params.employeeCount;
            break;
        case 'default':
            result = 4900;
            if (['select', '50'].includes(params.num_documents) || ['select', '10'].includes(params.num_services)) {
                switch (params.activity_type) {
                    case 'it':
                    case 'digital':
                    case 'services':
                        result = 9900;
                        break;
                    case 'production':
                    case 'construction':
                        result = 44900;
                        break;
                    case 'marketplace':
                    case 'wholesale':
                        result = 34900;
                        break;
                    default:
                        break;
                }
            }
            if (params.num_documents === '100' || params.num_services === '25') {
                switch (params.activity_type) {
                    case 'it':
                    case 'digital':
                    case 'services':
                        result = 39900;
                        break;
                    case 'production':
                    case 'construction':
                        result = 54900;
                        break;
                    case 'marketplace':
                    case 'wholesale':
                        result = 49900;
                        break;
                    default:
                        break;
                }
            }
            if (['150', '200'].includes(params.num_documents) || ['50', '75', '100'].includes(params.num_services)) {
                switch (params.activity_type) {
                    case 'it':
                    case 'digital':
                    case 'services':
                        result = 59900;
                        break;
                    case 'production':
                    case 'construction':
                        result = 69900;
                        break;
                    case 'marketplace':
                    case 'wholesale':
                        result = 59900;
                        break;
                    default:
                        break;
                }
                if (params.num_documents === '200') {
                    result += 15000;
                }
                if (params.num_services === '75') {
                    result += 15000;
                }
                if (params.num_services === '100') {
                    result += 15000 * 2;
                }
            }
            result += 5000 * params.marketplaceCount;
            result += 4000 * params.employeeCount;
            break;
        default:
            break;
    }
    return result;
}