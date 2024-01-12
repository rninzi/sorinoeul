export const downloadFile = (fileUrl: string, fileName: string) => {
  fetch(fileUrl, { method: 'GET' })
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      setTimeout((_: any) => {
        window.URL.revokeObjectURL(url);
      }, 1000);
      a.remove();
    })
    .catch((err) => {
      console.error('Error', err);
    });
};
