import './sidebar.scss';


const LeftSideBar = () => {

    const sideBarData = [
        {name: 'T', icon: 'telegram', href: 'telegragm'},
        {name: 'S', icon: 'skype', href: 'skype'},
        {name: 'F', icon: 'facebook', href: 'facebook'},
        {name: 'G', icon: 'gmail', href: 'gmail'}
    ]


    return (
        <div className="sidebar">
            <div className="sidebar__row">
                {sideBarData.map((item) => {
                    return <a className="sidebar__row__link" href={item.href}>{item.name}</a>
                })}
            </div>
        </div>
    )
}


export default LeftSideBar;