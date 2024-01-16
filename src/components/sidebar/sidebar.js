import './sidebar.scss';


const LeftSideBar = () => {

    const sideBarData = [
        {name: 'telegram', icon: 'telegram', href: 'telegragm'},
        {name: 'skype', icon: 'skype', href: 'skype'},
        {name: 'facebook', icon: 'facebook', href: 'facebook'},
        {name: 'gmail', icon: 'gmail', href: 'gmail'}
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