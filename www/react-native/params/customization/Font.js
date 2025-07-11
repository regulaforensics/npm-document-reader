export class Font {
    name
    size
    style

    constructor(name, options) {
        this.name = name;
        this.size = options?.size;
        this.style = options?.style;
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null;

        const result = new Font(jsonObject["name"]);
        result.size = jsonObject["size"];
        result.style = jsonObject["style"];

        return result;
    }
}

export const FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3
};
