export class URLValidator {
    url: string;
    constructor(url: string) {
        this.url = url;
    }

    validateScheme() {
        const schemeRegex = /^(https?|ftp):\/\//;
        return schemeRegex.test(this.url);
    }

    validateDomain() {
        const domainRegex = /^[^\s/$.?#].[^\s]*$/;
        return domainRegex.test(this.url);
    }

    validatePath() {
        const pathRegex = /\/[^#\s]*$/;
        return pathRegex.test(this.url);
    }

    validateQuery() {
        const queryRegex = /\?.*$/;
        return queryRegex.test(this.url);
    }

    validateFragment() {
        const fragmentRegex = /#.*$/;
        return fragmentRegex.test(this.url);
    }

    validateURL() {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        return urlRegex.test(this.url);
    }
}

// Ejemplo de uso:
const urlToValidate = "https://www.example.com/path?query=value#fragment";
