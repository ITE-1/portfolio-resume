

const ResumbeBodySkillsItem = ({skillName,id}) => {


    return (
        <li className="resume__body__skills__item" key={id}>
           <span className="resume__body__skills__item__name">{skillName}.</span> 
        </li>
    )
}

export default ResumbeBodySkillsItem;