import './sidebar.scss';


const LeftSideBar = () => {

    const sideBarData = [
        {name: 'Telegram', icon: "https://img.icons8.com/fluency-systems-filled/48/telegram-app.png" , href: 'telegragm'},
        {name: 'GitHub', icon: 'https://img.icons8.com/fluency-systems-filled/48/github.png', href: 'https://github.com/ITE-1'},
        {name: 'Facebook', icon: 'https://img.icons8.com/fluency-systems-filled/48/facebook-new.png', href: 'facebook'},
        {name: 'Gmail', icon: 'https://img.icons8.com/ios-filled/50/gmail.png', href: 'gmail'}
    ]


    return (
        <div className="sidebar">
            <div className="sidebar__row">
                {sideBarData.map((item) => {
                    return <a className="sidebar__row__link" href={item.href}><img className='sidebar__row__link__icon' width="30px" height='30px'src={item.icon} alt='!'/></a>
                })}
            </div>
        </div>
    )
}


export default LeftSideBar;