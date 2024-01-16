const DownloadCv = () => {
    const fileName = 'CV.pdf';
    const filePath = 'https://raw.githubusercontent.com/ITE-1/portfolio-resume/main/downloads/CV.pdf';

    return (
        <div className="body__content__row__window">
             <h1 className='body__content__row__block__title' style={{color: 'white'}} id='about'>About</h1>
                <a href={filePath} download={fileName}>DownLoadCV</a>
        </div>
    
    )

}


export default DownloadCv;