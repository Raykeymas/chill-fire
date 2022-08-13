import React from "react"


const receiveImage = (event: React.ChangeEvent<HTMLInputElement>): File | undefined => {
    const files = event.target.files;
    if (!files || files.length == 0) {
        // TODO エラーハンドリング
        // TODO 画像以外の時のエラーハンドリング
        return;
    }
    const file = files[0];
    return file;
}

export default receiveImage;