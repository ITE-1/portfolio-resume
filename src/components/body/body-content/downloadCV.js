const DownloadCv = () => {
    const fileName = 'CV.pdf';
    const filePath = 'https://raw.githubusercontent.com/ITE-1/portfolio-resume/main/downloads/CV.pdf';

    return (
        <a href={filePath} download={fileName}>DownLoadCV</a>
    )

}


export default DownloadCv;