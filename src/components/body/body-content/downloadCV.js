const DownloadCv = () => {
    const fileName = 'CV.pdf';
    const filePath = 'https://raw.githubusercontent.com/ITE-1/portfolio-resume/main/downloads/CV.pdf';

    return (
        <div className="body__content__row__window">
                <a href={filePath} download={fileName}>DownLoadCV</a>
        </div>
    
    )

}


export default DownloadCv;