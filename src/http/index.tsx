import axios from "axios";

const config = {
    headers: {Authorization: `OAuth ${process.env.REACT_APP_JWT}`}
};

export async function yandexDiskInfo() {
    return await axios
        .get("https://cloud-api.yandex.net/v1/disk/", config)
        .then((res) => {
            return res.data;
        })
        .catch(() => {
            console.log("error");
        });
}

export async function yandexDiskAdd(name: string) {
    return await axios
        .get("https://cloud-api.yandex.net/v1/disk/resources/upload?path=" + name + "&overwrite=true", config)
        .then((res) => {
            return res.data;
        })
        .catch(() => {
            console.log("error");
        });
}

export async function yandexDiskDownloads(url: string, data: any) {
    return await axios
        .put(url, data)
        .then((res) => {
            return res.data;
        }).catch(() => {
            console.log("error");
        });
}